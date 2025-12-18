import { Sentence, StudyGuideData } from '../data/types';

const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';

export type PDFType = 'workbook' | 'studyguide';

interface ClaudeResponse {
  content: Array<{
    type: string;
    text: string;
  }>;
}

// 기본 워크북용 프롬프트 (구문 독해 워크북)
const WORKBOOK_PROMPT = `당신은 "제제편입 구문 독해 워크북" 데이터 생성 전문가입니다.
주어진 영어 문장을 분석하여 JSON 형식으로 변환해주세요.

## 출력 형식 (반드시 순수 JSON만 출력)

{
  "num": 1,
  "sentence": "[원문 영어 문장]",
  "vocab": [
    "단어1: 뜻1",
    "단어2: 뜻2"
  ],
  "logic_blanks": [
    "중심 소재: __________________",
    "논리 관계: __________________ → __________________"
  ],
  "quiz": [
    "1. [퀴즈 문장] ( O / X )",
    "2. [퀴즈 문장] ( O / X )",
    "3. [퀴즈 문장] ( O / X )",
    "4. [퀴즈 문장] ( O / X )",
    "5. [퀴즈 문장] ( O / X )"
  ],
  "translation": "[슬래시 끊어읽기]\\n\\n→ [자연스러운 전체 해석]",
  "logic_answer": [
    "중심 소재: [정답]",
    "논리 관계: [정답]"
  ],
  "explanation": "[해설 내용 - ~해요체]",
  "quiz_answers": "1. O  2. X  3. O  4. X  5. O",
  "quiz_explanations": [
    "1. O - [해설]",
    "2. X - [해설]",
    "3. O - [해설]",
    "4. X - [해설]",
    "5. O - [해설]"
  ],
  "tip": "[Tip] [팁 내용]\\n\\n[추가 설명]"
}

## [어휘] 작성 원칙
- 어려운 단어만 선별 (3~6개)
- 너무 쉬운 단어는 절대 제외 (important, make, good, very 등)
- 형식: "단어: 뜻"
- 숙어/구문도 포함 (예: "lie in: ~에 있다")
- 문맥에 맞는 뜻으로 제시

## [논리적 요약 - 빈칸] 유형별 템플릿

1. 대조 (not A but B): "논리 관계: __________ ✕ → __________ ○"
2. 인과 (because A, B): "논리 관계: __________ → __________"
3. 비유/정의 (A is B): "논리 관계: __________ = __________"
4. 비유 동등 (A:B = C:D): "논리 관계: __________:__________ = __________:__________"
5. 주장 + 근거: "논리 관계: __________ (증거: __________, __________)"
6. 변화/전환: "논리 관계: __________ → (변화) → __________"

## [O/X 퀴즈] 출제 원칙
- 5문제 출제, O가 2~3개, X가 2~3개
- 핵심을 잘 파악했으면 쉽게 풀리는 수준

O가 되는 문항: 핵심 주장 반영, 논리 관계 정확, 저자 태도 올바름
X가 되는 문항: 논리 반대, not A but B에서 A를 핵심으로, 인과 뒤바꿈

## [해석] 작성 원칙
- 슬래시(/)로 끊어읽기 + 자연스러운 전체 해석
- 형식: "[슬래시로 끊은 직역]\\n\\n→ [자연스러운 의역]"

## [해설] 작성 원칙
- ~해요체 사용
- 문장의 핵심 구조와 논리를 먼저 설명
- 구조: "이 문장은 [논리 유형] 구조예요. [핵심 표현]이/가 핵심이에요. [구체적 설명]"

## [Tip] 작성 원칙
- "[Tip]"으로 시작, ~해요체 사용
- 시험에서 바로 써먹을 수 있는 전략 제시
- 해당 문장 유형이 시험에서 어떻게 출제되는지 언급

### 논리 유형별 Tip 템플릿 (반드시 해당 유형에 맞게 작성)

**인과 관계:**
"[Tip] Because A, B 구조에서는 인과 관계를 파악하세요!\\n\\nA = 원인\\nB = 결과\\n\\n시험에서는 원인과 결과를 뒤바꾸거나, 결과를 반대로 바꾼 선지가 오답으로 자주 나와요."

**대조 구조:**
"[Tip] Unlike A, B 구조는 대조를 나타내요!\\n\\nA = 비교 대상\\nB = 저자의 초점\\n\\n시험에서 A와 B의 특성을 뒤바꾸는 선지가 오답으로 나와요."

**비유 구조:**
"[Tip] 'Just as A, B' 구조는 비유(analogy)를 나타내요!\\n\\nA = 비유 대상 (old info)\\nB = 실제 주제 (new info)\\n\\n시험에서 비유 대상(A)을 main으로 착각하면 절대 안 돼요! B가 핵심이에요."

**not A but B:**
"[Tip] not A but B 구조에서는 항상 B가 정답이에요!\\n\\nA = 표면적/일반적 생각/오해\\nB = 저자의 진짜 주장/본질\\n\\n시험에서 A를 정답으로 고르면 안 돼요!"

**변화 표현:**
"[Tip] 'no longer'는 변화를 나타내는 핵심 표현이에요!\\n\\n의미: 과거에는 A였지만 이제는 아니다\\n\\n시험에서 'no longer'를 무시하고 과거 상태가 여전히 유지된다고 하는 선지가 오답으로 나와요."`;

// 끝끝팩 학습 가이드용 프롬프트 (대학별 편입 시험 경향 분석)
const STUDYGUIDE_PROMPT = `당신은 "끝끝팩 편입영어 학습 가이드" 데이터 생성 전문가입니다.
주어진 대학별 편입 시험 경향 분석 데이터를 기반으로 종합적인 학습 가이드 JSON을 생성해주세요.

## 입력 데이터 형식
사용자는 다음과 같은 형식의 대학별 시험 분석 데이터를 제공합니다:
- 대학명 및 기본 정보
- 연도별 출제 문항 수 (어휘, 문법, 빈칸추론, 독해 등)
- 어휘 출제 경향 및 핵심 어휘 목록
- 지문 주제 및 소재 변화
- 유형별 문제 패턴 분석
- 함정 패턴 분석

## 출력 형식 (반드시 순수 JSON만 출력)

{
  "university": "[대학명]",
  "examInfo": {
    "totalQuestions": "[총 문항 수]",
    "timeLimit": "[시험 시간]",
    "difficulty": "[난이도 평가]"
  },
  "examComposition": {
    "vocabulary": { "count": "[문항수]", "percentage": "[비율]" },
    "grammar": { "count": "[문항수]", "percentage": "[비율]" },
    "blankInference": { "count": "[문항수]", "percentage": "[비율]" },
    "reading": { "count": "[문항수]", "percentage": "[비율]" }
  },
  "parts": [
    {
      "partNum": 1,
      "title": "어휘 (Vocabulary)",
      "subtitle": "출제 경향 및 핵심 전략",
      "trend": "[어휘 출제 경향 요약 - 3~5문장]",
      "keyVocab": [
        { "word": "[단어]", "meaning": "[뜻]", "etymology": "[어원분석]", "synonyms": "[동의어들]", "frequency": "[출제빈도 ★~★★★]" }
      ],
      "sampleQuestion": {
        "question": "[기출 예제 문제]",
        "options": ["(A) ...", "(B) ...", "(C) ...", "(D) ..."],
        "answer": "[정답]",
        "explanation": "[해설]"
      },
      "strategy": "[어휘 파트 공략 전략 - 3~5개 포인트]",
      "trapPatterns": ["[자주 나오는 함정 패턴 1]", "[함정 패턴 2]"]
    },
    {
      "partNum": 2,
      "title": "문법 (Grammar)",
      "subtitle": "핵심 문법 포인트",
      "trend": "[문법 출제 경향 요약]",
      "keyPoints": [
        { "topic": "[문법 주제]", "description": "[설명]", "example": "[예문]" }
      ],
      "sampleQuestion": {
        "question": "[기출 예제]",
        "options": ["(A) ...", "(B) ...", "(C) ...", "(D) ..."],
        "answer": "[정답]",
        "explanation": "[해설]"
      },
      "strategy": "[문법 파트 공략 전략]",
      "trapPatterns": ["[함정 패턴들]"]
    },
    {
      "partNum": 3,
      "title": "빈칸 추론 (Blank Inference)",
      "subtitle": "3대 킬러 논리",
      "trend": "[빈칸 추론 출제 경향]",
      "logicTypes": [
        { "type": "[논리 유형]", "signal": "[신호 표현들]", "approach": "[접근법]" }
      ],
      "sampleQuestion": {
        "passage": "[지문]",
        "question": "[문제]",
        "options": ["(A) ...", "(B) ...", "(C) ...", "(D) ..."],
        "answer": "[정답]",
        "explanation": "[해설]"
      },
      "strategy": "[빈칸 추론 공략 전략]",
      "trapPatterns": ["[함정 패턴들]"]
    },
    {
      "partNum": 4,
      "title": "독해 (Reading Comprehension)",
      "subtitle": "4대 테마 및 배경지식",
      "trend": "[독해 출제 경향]",
      "themes": [
        { "theme": "[테마명]", "frequency": "[출제빈도]", "keyTopics": ["[관련 주제들]"] }
      ],
      "questionTypes": [
        { "type": "[문제 유형]", "frequency": "[빈도]", "approach": "[접근법]" }
      ],
      "sampleQuestion": {
        "passage": "[지문 발췌]",
        "question": "[문제]",
        "options": ["(A) ...", "(B) ...", "(C) ...", "(D) ..."],
        "answer": "[정답]",
        "explanation": "[해설]"
      },
      "strategy": "[독해 파트 공략 전략]"
    }
  ],
  "timeAllocation": {
    "vocabulary": "[권장 시간]",
    "grammar": "[권장 시간]",
    "blankInference": "[권장 시간]",
    "reading": "[권장 시간]"
  },
  "finalStrategy": {
    "d30": ["[D-30 학습 전략 포인트들]"],
    "d7": ["[D-7 학습 전략 포인트들]"],
    "dDay": ["[시험 당일 전략 포인트들]"]
  },
  "commonMistakes": ["[수험생들이 자주 하는 실수 1]", "[실수 2]", "[실수 3]"],
  "keyTakeaways": ["[핵심 요약 포인트 1]", "[포인트 2]", "[포인트 3]"]
}

## 작성 원칙

### 전체 구성
- 입력된 데이터를 기반으로 실제 출제 경향을 정확히 반영
- 연도별 변화 추이를 분석하여 최신 경향 강조
- 실전에서 바로 적용 가능한 전략 중심

### 어휘 파트
- 입력된 핵심 어휘 목록을 어원 분석과 함께 정리
- 출제 빈도 높은 동의어/반의어 쌍 강조
- 기출 예제는 실제 출제 스타일 반영

### 문법 파트
- 해당 대학에서 자주 출제되는 문법 포인트 중심
- 함정이 되는 문법 사항 특별 표시
- 간결하고 명확한 설명

### 빈칸 추론 파트
- 3대 킬러 논리 (대조, 인과, 비유) 중심
- 신호 표현(signal words) 정리
- 오답 패턴 분석

### 독해 파트
- 자주 출제되는 테마별 배경지식
- 문제 유형별 접근법
- 시간 관리 전략

### 최종 전략
- D-30, D-7, D-Day 시기별 학습 전략
- 실수 방지 체크리스트
- 핵심 요약 (시험 직전 복습용)`;

const PROMPTS: Record<PDFType, string> = {
  workbook: WORKBOOK_PROMPT,
  studyguide: STUDYGUIDE_PROMPT,
};

export async function analyzeSentence(
  sentence: string,
  apiKey: string,
  pdfType: PDFType,
  sentenceNum: number = 1
): Promise<Sentence> {
  const systemPrompt = PROMPTS[pdfType];

  const response = await fetch(CLAUDE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2500,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: `다음 영어 문장을 분석해주세요 (문장 번호: ${sentenceNum}):\n\n${sentence}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      `API 오류: ${response.status} - ${errorData.error?.message || response.statusText}`
    );
  }

  const data: ClaudeResponse = await response.json();
  const textContent = data.content.find((c) => c.type === 'text');

  if (!textContent) {
    throw new Error('API 응답에서 텍스트를 찾을 수 없습니다.');
  }

  try {
    // 마크다운 코드블록 제거 후 JSON 추출
    let text = textContent.text;
    text = text.replace(/```json\s*/gi, '').replace(/```\s*/g, '');

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('JSON을 찾을 수 없습니다.');
    }
    const parsed = JSON.parse(jsonMatch[0]);
    return {
      ...parsed,
      num: sentenceNum,
    };
  } catch {
    throw new Error('API 응답을 파싱할 수 없습니다: ' + textContent.text.substring(0, 200));
  }
}

export async function analyzeSentences(
  sentences: string[],
  apiKey: string,
  pdfType: PDFType,
  onProgress?: (current: number, total: number) => void
): Promise<Sentence[]> {
  const validSentences = sentences.map((s) => s.trim()).filter((s) => s.length > 0);
  const results: Sentence[] = new Array(validSentences.length);
  const BATCH_SIZE = 10; // 동시에 10개씩 처리
  let completed = 0;

  for (let i = 0; i < validSentences.length; i += BATCH_SIZE) {
    const batch = validSentences.slice(i, i + BATCH_SIZE);
    const batchPromises = batch.map((sentence, batchIndex) => {
      const sentenceNum = i + batchIndex + 1;
      return analyzeSentence(sentence, apiKey, pdfType, sentenceNum)
        .then((result) => {
          results[sentenceNum - 1] = result;
          completed++;
          if (onProgress) {
            onProgress(completed, validSentences.length);
          }
          return result;
        });
    });

    await Promise.all(batchPromises);

    // 배치 간 대기 (Rate limiting)
    if (i + BATCH_SIZE < validSentences.length) {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }

  return results;
}

// 끝끝팩 학습 가이드 분석 함수
export async function analyzeStudyGuide(
  examData: string,
  apiKey: string,
  onProgress?: (status: string) => void
): Promise<StudyGuideData> {
  const systemPrompt = STUDYGUIDE_PROMPT;

  if (onProgress) {
    onProgress('AI 분석 시작...');
  }

  const response = await fetch(CLAUDE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 16384,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: `다음 대학별 편입 시험 경향 분석 데이터를 기반으로 종합적인 학습 가이드를 생성해주세요:\n\n${examData}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      `API 오류: ${response.status} - ${errorData.error?.message || response.statusText}`
    );
  }

  if (onProgress) {
    onProgress('응답 처리 중...');
  }

  const data: ClaudeResponse = await response.json();
  const textContent = data.content.find((c) => c.type === 'text');

  if (!textContent) {
    throw new Error('API 응답에서 텍스트를 찾을 수 없습니다.');
  }

  try {
    // 마크다운 코드블록 제거 후 JSON 추출
    let text = textContent.text;
    text = text.replace(/```json\s*/gi, '').replace(/```\s*/g, '');

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('JSON을 찾을 수 없습니다.');
    }
    return JSON.parse(jsonMatch[0]) as StudyGuideData;
  } catch {
    throw new Error('API 응답을 파싱할 수 없습니다: ' + textContent.text.substring(0, 200));
  }
}
