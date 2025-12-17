# 제제편입 구문 독해 워크북

편입 영어 구문 독해 학습을 위한 PDF 워크북 생성기입니다.

## 기능

- 영어 문장과 어휘, 해석, 논리적 요약, O/X 퀴즈 제공
- PDF 다운로드 지원
- 한글 폰트 지원 (스포카 한 산스)

## 실행 방법

```bash
npm install
npm start
```
sentence.ts 값만 변경해서 사용

http://localhost:3000 에서 확인 후 PDF 다운로드

## 구조

- `src/data/sentences.ts` - 문장 데이터
- `src/data/types.ts` - 타입 정의
- `src/components/WorkbookPDF.tsx` - PDF 컴포넌트

## 문장 데이터 형식

```typescript
interface Sentence {
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
```
