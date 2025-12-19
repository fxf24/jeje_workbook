# 제제편입 구문 독해 워크북

편입 영어 학습을 위한 AI 기반 PDF 워크북 생성기입니다.

## 기능

### 1. 구문 분석 워크북
- 영어 문장 입력 → Claude AI 분석 → PDF 생성
- 어휘, 해석, 논리적 요약, O/X 퀴즈 자동 생성
- 슬래시 끊어읽기 및 해설 제공

### 2. 끝끝팩 학습 가이드
- 대학별 편입 시험 경향 분석 데이터 입력
- 어휘/문법/빈칸추론/독해 파트별 공략 전략
- D-Day 학습 계획 및 시간 배분 전략
- 기출 예제 및 함정 패턴 분석

### 공통 기능
- PDF 다운로드 지원
- 한글 폰트 지원 (Pretendard)
- localStorage 기반 히스토리 저장 (최근 5개)

## 실행 방법

```bash
npm install
npm start
```

### 환경 변수 설정

`.env` 파일 생성 후 Claude API 키 설정:

```
REACT_APP_CLAUDE_API_KEY=your_api_key_here
```

http://localhost:3000 에서 문장 입력 후 AI 분석 → PDF 다운로드

## 프로젝트 구조

```
src/
├── components/
│   ├── WorkbookPDF.tsx      # 구문 분석 워크북 PDF 컴포넌트
│   └── StudyGuidePDF.tsx    # 끝끝팩 학습 가이드 PDF 컴포넌트
├── data/
│   └── types.ts             # 타입 정의
├── services/
│   └── claudeApi.ts         # Claude API 연동
└── App.tsx                  # 메인 앱 컴포넌트
```

## 사용 기술

- React + TypeScript
- @react-pdf/renderer (PDF 생성)
- Claude API (AI 분석)
