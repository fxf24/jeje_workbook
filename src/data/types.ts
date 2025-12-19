// 구문 분석 워크북용 타입
export interface Sentence {
  num: number;
  sentence: string;
  vocab: string[];
  logic_blanks: string[];
  quiz: string[];
  translation: string;
  logic_answer: string[];
  explanation: string;
  quiz_answers: string;
  quiz_explanations: string[];
  tip: string;
}

// 끝끝팩 학습 가이드용 타입
export interface StudyGuideData {
  university: string;
  examInfo: {
    totalQuestions: string;
    timeLimit: string;
    difficulty: string;
  };
  examComposition: {
    vocabulary: { count: string; percentage: string };
    grammar: { count: string; percentage: string };
    blankInference: { count: string; percentage: string };
    reading: { count: string; percentage: string };
  };
  parts: StudyGuidePart[];
  timeAllocation: {
    vocabulary: string;
    grammar: string;
    blankInference: string;
    reading: string;
  };
  finalStrategy: {
    d30: string[];
    d7: string[];
    dDay: string[];
  };
  commonMistakes: string[];
  keyTakeaways: string[];
}

export interface StudyGuidePart {
  partNum: number;
  title: string;
  subtitle: string;
  trend: string;
  keyVocab?: VocabItem[];
  keyPoints?: GrammarPoint[];
  logicTypes?: LogicType[];
  themes?: ThemeItem[];
  questionTypes?: QuestionType[];
  sampleQuestion: SampleQuestion;
  strategy: string;
  trapPatterns?: string[];
}

export interface VocabItem {
  word: string;
  meaning: string;
  etymology: string;
  synonyms: string;
  frequency: string;
}

export interface GrammarPoint {
  topic: string;
  description: string;
  example: string;
}

export interface LogicType {
  type: string;
  signal: string;
  approach: string;
}

export interface ThemeItem {
  theme: string;
  frequency: string;
  keyTopics: string[];
}

export interface QuestionType {
  type: string;
  frequency: string;
  approach: string;
}

export interface SampleQuestion {
  passage?: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

// 대학별해설지 타입
export interface UniversityAnswerSheetData {
  university: string;
  year: string;
  subtitle: string; // ex: "FINAL - Pick"
  totalQuestions: number;
  vocabList: AnswerSheetVocab[]; // 문제별 어휘 목록
  problems: AnswerSheetProblem[];
}

// 문제에 나온 어휘 (문제 번호별)
export interface AnswerSheetVocab {
  questionNum: number;
  word: string;
  meaning: string;
}

// 문제별 해설
export interface AnswerSheetProblem {
  num: number;
  questionId: string; // ex: "2017_SJU_01"
  questionType: string; // 문제 유형 설명 (어휘, 문법, 독해 등)
  questionText: string; // 문제 지시문
  passage?: string; // 지문 (있는 경우)
  options: AnswerSheetOption[];
  answer: number; // 정답 번호 (1~5)

  // AI가 생성하는 해설 필드
  explanation: string; // 정답 해설
  wrongAnswerAnalysis?: string[]; // 오답 분석
  keyPoint?: string; // 핵심 포인트
  relatedVocab?: string[]; // 관련 어휘 (동의어 문제: "단어 뜻" 형식)
  grammarPoint?: string; // 문법 포인트 (문법 문제)
  logicFlow?: string; // 논리 흐름 (빈칸/독해)
  translation?: string; // 핵심 문장 해석

  // 빈칸 추론 문제용 Step 해설
  step1?: string; // Step 1) 빈칸 타게팅
  step2?: string; // Step 2) 근거 확인
  step3?: string; // Step 3) 보기 판단

  // 독해 문제용
  passageSummary?: string; // 지문 요지/한줄 요약
  readingSubType?: 'topic' | 'match' | 'blank' | 'general'; // 독해 세부 유형

  // 내용 일치/불일치 문제용
  optionAnalysis?: string[]; // 각 선택지별 분석
  contradictionAnalysis?: string; // 모순 관계 분석
  extremeExpressions?: string; // 극단적 표현 분석
}

export interface AnswerSheetOption {
  label: string; // A, B, C, D, E 또는 1, 2, 3, 4
  text: string;
  isCorrect: boolean;
}
