import { Sentence, StudyGuideData, UniversityAnswerSheetData, AnswerSheetProblem } from '../data/types';

const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';

export type PDFType = 'workbook' | 'studyguide' | 'answersheet';

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

// 대학별해설지용 프롬프트
const ANSWERSHEET_PROMPT = `당신은 "대학별 편입영어 해설지" 데이터 생성 전문가입니다.
주어진 시험 문제와 정답 데이터를 기반으로 상세한 해설지 JSON을 생성해주세요.

## 입력 데이터 형식
사용자는 TSV(탭으로 구분된) 형식으로 두 가지 데이터를 제공합니다:

### 1. 어휘 목록 (상단)
문제 번호	단어	뜻
1	avert	막다, 피하다
1	inundate	침수시키다, 쇄도하다
...

### 2. 문제 데이터 (하단)
Question_ID	Source_Year	유형 구분	상세 유형 구분	Question_No	Question_Text	Passage	Option_A	Option_B	Option_C	Option_D	Option_E	답
2017_SJU_01	2017			1	주어진 문장의 빈칸에...	The citizens packed...	avert	inundate	emit	trigger		1

## 출력 형식 (반드시 순수 JSON만 출력)

{
  "university": "[대학명 - Question_ID에서 추출, 예: SJU → 세종대]",
  "year": "[연도 - Source_Year에서 추출]",
  "subtitle": "FINAL - Pick",
  "totalQuestions": [총 문제 수],
  "vocabList": [
    { "questionNum": 1, "word": "avert", "meaning": "막다, 피하다" },
    { "questionNum": 1, "word": "inundate", "meaning": "침수시키다, 쇄도하다" }
  ],
  "problems": [
    {
      "num": 1,
      "questionId": "2017_SJU_01",
      "questionType": "어휘 - 빈칸 완성",
      "questionText": "주어진 문장의 빈칸에 들어갈 가장 알맞은 단어를 고르시오.",
      "passage": "The citizens packed the sandbags along the river bank to __________ the flooding of their streets.",
      "options": [
        { "label": "A", "text": "avert", "isCorrect": true },
        { "label": "B", "text": "inundate", "isCorrect": false },
        { "label": "C", "text": "emit", "isCorrect": false },
        { "label": "D", "text": "trigger", "isCorrect": false }
      ],
      "answer": 1,
      "explanation": "avert는 '막다, 피하다'라는 뜻으로, 홍수를 막기 위해 모래주머니를 쌓았다는 문맥에 적합해요.",
      "wrongAnswerAnalysis": [
        "B) inundate: '침수시키다'로 오히려 반대 의미예요.",
        "C) emit: '방출하다'로 문맥과 맞지 않아요.",
        "D) trigger: '촉발하다'로 홍수를 유발한다는 반대 의미예요."
      ],
      "keyPoint": "avert = prevent, avoid (재난/위험을 막다)",
      "relatedVocab": ["avert: 막다", "inundate: 침수시키다", "emit: 방출하다", "trigger: 촉발하다"]
    }
  ]
}

## 대학명 매핑
- SJU → 세종대
- KU → 건국대
- HU → 한양대
- CAU → 중앙대
- KHU → 경희대
- SKK → 성균관대
- 기타는 Question_ID에서 추출

## 문제 유형 판별
- Question_Text에 "빈칸" + 어휘 선택지 → "어휘 - 빈칸 완성"
- Question_Text에 "동의어" 또는 유사 관계 → "어휘 - 동의어"
- Question_Text에 "유사한 관계" → "어휘 - 유추"
- Question_Text에 "밑줄 친 부분 중 틀린" → "문법 - 오류 찾기"
- Question_Text에 "빈칸에 들어갈 가장 알맞은 표현" → "문법 - 빈칸 완성"
- Passage가 긴 지문 + 내용 이해 → "독해"
- Passage에 빈칸 + 논리적 추론 → "빈칸 추론"

## 해설 작성 원칙

### 어휘 문제
- 정답 단어의 의미와 문맥 적합성 설명
- 오답 선택지가 왜 틀린지 간단히 설명
- 관련 동의어/반의어 정리

### 문법 문제
- 문법 오류 포인트 명확히 설명
- 올바른 표현과 틀린 표현 비교
- 해당 문법 규칙 정리

### 독해 문제
- 정답 근거가 되는 지문 내용 설명
- 핵심 문장 해석 제공
- 오답이 틀린 이유 설명

### 빈칸 추론 문제
- 문맥의 논리적 흐름 분석
- 빈칸 전후 단서 설명
- 논리 유형 (대조, 인과, 예시 등) 파악

## 작성 스타일
- ~해요체 사용
- 간결하고 명확한 설명
- 실전에서 바로 적용 가능한 팁 위주`;

const PROMPTS: Record<PDFType, string> = {
  workbook: WORKBOOK_PROMPT,
  studyguide: STUDYGUIDE_PROMPT,
  answersheet: ANSWERSHEET_PROMPT,
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

// TSV 데이터 파싱 헬퍼 함수
function parseAnswerSheetTSV(examData: string): {
  vocabSection: string;
  questionLines: string[];
  questionHeader: string;
} {
  const lines = examData.split('\n').map(l => l.trim()).filter(l => l.length > 0);

  // 어휘 섹션과 문제 섹션 분리
  // 문제 헤더 찾기 (Question_ID로 시작하는 줄)
  const questionHeaderIndex = lines.findIndex(l => l.startsWith('Question_ID'));

  if (questionHeaderIndex === -1) {
    // 헤더를 못 찾으면 전체를 문제 데이터로 처리
    return {
      vocabSection: '',
      questionLines: lines,
      questionHeader: '',
    };
  }

  const vocabSection = lines.slice(0, questionHeaderIndex).join('\n');
  const questionHeader = lines[questionHeaderIndex];
  const questionLines = lines.slice(questionHeaderIndex + 1);

  return { vocabSection, questionLines, questionHeader };
}

// 분할된 문제에 대한 해설 생성
async function analyzeAnswerSheetBatch(
  vocabSection: string,
  questionHeader: string,
  questionBatch: string[],
  batchNum: number,
  totalBatches: number,
  apiKey: string,
  onProgress?: (status: string) => void
): Promise<{ problems: AnswerSheetProblem[]; metadata?: { university: string; year: string } }> {
  const systemPrompt = `당신은 "대학별 편입영어 해설지" 데이터 생성 전문가입니다.
주어진 시험 문제와 정답 데이터를 기반으로 상세한 해설을 생성해주세요.

## 대학명 매핑
- SJU → 세종대
- KU → 건국대
- HU → 한양대
- CAU → 중앙대
- KHU → 경희대
- SKK → 성균관대

## 문제 유형 판별
- Question_Text에 "빈칸" + 어휘 선택지 → "어휘 - 빈칸 완성"
- Question_Text에 "동의어" → "어휘 - 동의어"
- Question_Text에 "유사한 관계" → "어휘 - 유추"
- Question_Text에 "밑줄 친 부분 중 틀린" → "문법 - 오류 찾기"
- Passage가 긴 지문 + 내용 이해 → "독해"

## 출력 형식 (반드시 순수 JSON만 출력)
${batchNum === 1 ? `{
  "university": "[대학명]",
  "year": "[연도]",
  "problems": [...]
}` : `{
  "problems": [...]
}`}

각 problem 형식:
{
  "num": [문제번호 - Question_No 값],
  "questionId": "[Question_ID]",
  "questionType": "[유형]",
  "questionText": "[Question_Text 그대로 복사]",
  "passage": "[Passage 열 값 그대로 복사 - 빈칸이 있는 문장 포함. 없으면 빈 문자열]",
  "options": [
    { "label": "A", "text": "[Option_A]", "isCorrect": true/false },
    { "label": "B", "text": "[Option_B]", "isCorrect": true/false },
    ...
  ],
  "answer": [정답번호 1-5 - 답 열 값],
  "explanation": "[해설 - ~해요체]",
  "wrongAnswerAnalysis": ["[오답분석1]", "[오답분석2]", "[오답분석3]"],
  "keyPoint": "[핵심 포인트 - 정답 단어의 핵심 의미나 문법 포인트]",
  "relatedVocab": ["단어1: 뜻1", "단어2: 뜻2"],
  "logicFlow": "[빈칸 전후의 논리적 단서 설명]"
}

## 중요 규칙
- passage 필드에는 TSV의 Passage 열 값을 반드시 그대로 복사하세요.
- questionText 필드에는 TSV의 Question_Text 열 값을 반드시 그대로 복사하세요.
- keyPoint는 정답의 핵심을 요약한 한 줄 설명이에요.
- logicFlow는 빈칸 문제에서 정답을 찾는 논리적 흐름을 설명하세요.`;

  if (onProgress) {
    onProgress(`배치 ${batchNum}/${totalBatches} 분석 중...`);
  }

  const batchData = `${vocabSection}\n\n${questionHeader}\n${questionBatch.join('\n')}`;

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
          content: `다음 문제들(${questionBatch.length}개)에 대한 해설을 생성해주세요:\n\n${batchData}`,
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

  let text = textContent.text;
  text = text.replace(/```json\s*/gi, '').replace(/```\s*/g, '');

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('JSON을 찾을 수 없습니다.');
  }

  const parsed = JSON.parse(jsonMatch[0]);
  return {
    problems: parsed.problems || [],
    metadata: batchNum === 1 ? { university: parsed.university, year: parsed.year } : undefined,
  };
}

// 대학별해설지 분석 함수 (분할 처리)
export async function analyzeAnswerSheet(
  examData: string,
  apiKey: string,
  onProgress?: (status: string) => void
): Promise<UniversityAnswerSheetData> {
  if (onProgress) {
    onProgress('데이터 파싱 중...');
  }

  // TSV 파싱
  const { vocabSection, questionLines, questionHeader } = parseAnswerSheetTSV(examData);

  // 어휘 목록 파싱
  const vocabList: { questionNum: number; word: string; meaning: string }[] = [];
  const vocabLines = vocabSection.split('\n').filter(l => l.trim());
  for (const line of vocabLines) {
    const parts = line.split('\t');
    if (parts.length >= 3 && !isNaN(parseInt(parts[0]))) {
      vocabList.push({
        questionNum: parseInt(parts[0]),
        word: parts[1].trim(),
        meaning: parts[2].trim(),
      });
    }
  }

  // 문제를 20개씩 분할
  const BATCH_SIZE = 20;
  const batches: string[][] = [];
  for (let i = 0; i < questionLines.length; i += BATCH_SIZE) {
    batches.push(questionLines.slice(i, i + BATCH_SIZE));
  }

  if (onProgress) {
    onProgress(`총 ${questionLines.length}문제, ${batches.length}개 배치로 분할`);
  }

  console.log('[AnswerSheet] 파싱 결과:', {
    vocabCount: vocabList.length,
    questionCount: questionLines.length,
    batchCount: batches.length,
    batchSizes: batches.map(b => b.length),
  });

  // 문제가 없으면 조기 반환
  if (questionLines.length === 0) {
    console.error('[AnswerSheet] 파싱된 문제가 없습니다!');
    throw new Error('TSV에서 문제를 파싱할 수 없습니다. Question_ID로 시작하는 헤더가 있는지 확인해주세요.');
  }

  // 배치별로 순차 처리
  let allProblems: AnswerSheetProblem[] = [];
  let university = '';
  let year = '';

  for (let i = 0; i < batches.length; i++) {
    console.log(`[AnswerSheet] 배치 ${i + 1}/${batches.length} 시작 (${batches[i].length}문제)`);

    try {
      const result = await analyzeAnswerSheetBatch(
        vocabSection,
        questionHeader,
        batches[i],
        i + 1,
        batches.length,
        apiKey,
        onProgress
      );

      console.log(`[AnswerSheet] 배치 ${i + 1} 결과: ${result.problems.length}개 문제 수신`);

      if (result.problems.length === 0) {
        console.warn(`[AnswerSheet] 배치 ${i + 1}에서 0개 문제 반환됨!`);
      }

      allProblems = allProblems.concat(result.problems);

      if (result.metadata) {
        university = result.metadata.university;
        year = result.metadata.year;
      }

      if (onProgress) {
        onProgress(`${i + 1}/${batches.length} 배치 완료 (현재 ${allProblems.length}문제)`);
      }

      // 배치 간 대기 (Rate limiting)
      if (i < batches.length - 1) {
        console.log(`[AnswerSheet] 다음 배치 전 1초 대기...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`[AnswerSheet] 배치 ${i + 1} 처리 오류:`, error);
      if (onProgress) {
        onProgress(`배치 ${i + 1} 오류 발생, 다음 배치 진행...`);
      }
      // 오류 발생해도 다음 배치 계속 처리
    }
  }

  console.log(`[AnswerSheet] 최종 결과: ${allProblems.length}개 문제 (입력: ${questionLines.length}개)`);

  if (onProgress) {
    onProgress(`완료! (${allProblems.length}문제 처리됨)`);
  }

  return {
    university,
    year,
    subtitle: 'FINAL - Pick',
    totalQuestions: questionLines.length,
    vocabList,
    problems: allProblems,
  };
}
