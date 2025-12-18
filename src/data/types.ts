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
