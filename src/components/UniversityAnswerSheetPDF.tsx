import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import {
  UniversityAnswerSheetData,
  AnswerSheetProblem,
  AnswerSheetVocab,
} from '../data/types';

// Pretendard 폰트 등록
Font.register({
  family: 'Pretendard',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/static/Pretendard-Regular.otf',
      fontWeight: 'normal',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/static/Pretendard-Bold.otf',
      fontWeight: 'bold',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/static/Pretendard-Light.otf',
      fontWeight: 'light',
    },
  ],
});

// 디자인 토큰 (보라색 포인트 - 건국대 2025 스타일)
const C = {
  black: '#1a1a1a',
  white: '#ffffff',
  purple: '#9b7bb8', // 연보라색 (건국대 2025 스타일)
  purpleLight: '#f5f0fa',
  purpleDark: '#7c5a9e',
  grayDark: '#4b5563',
  grayMedium: '#6b7280',
  grayLight: '#9ca3af',
  bgLight: '#fafafa',
  border: '#e5e7eb',
  tableBorder: '#d1d5db',
};

const styles = StyleSheet.create({
  // 페이지 기본
  page: {
    padding: '15mm 18mm 20mm 18mm',
    fontFamily: 'Pretendard',
    fontSize: 9,
    lineHeight: 1.5,
    color: C.black,
    backgroundColor: C.white,
  },

  // 공통 푸터
  footer: {
    position: 'absolute',
    bottom: 12,
    left: 18,
    right: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLeft: {
    fontSize: 8,
    color: C.grayMedium,
  },
  footerCenter: {
    fontSize: 8,
    color: C.grayMedium,
  },
  footerRight: {
    fontSize: 8,
    color: C.purple,
    fontStyle: 'italic',
  },

  // ===== Voca Preview 페이지 =====
  vocaPreviewHeader: {
    alignItems: 'center',
    marginBottom: 15,
  },
  vocaPreviewTitle: {
    fontSize: 28,
    color: C.purple,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  vocaPreviewSubtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: C.black,
    marginBottom: 8,
  },
  quizletBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: C.purple,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  quizletText: {
    color: C.white,
    fontSize: 9,
    fontWeight: 'bold',
  },

  // Voca 테이블 (2열 레이아웃)
  vocaContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  vocaColumn: {
    flex: 1,
  },
  vocaTable: {
    borderWidth: 1,
    borderColor: C.tableBorder,
  },
  vocaRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: C.tableBorder,
    minHeight: 18,
  },
  vocaRowEven: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: C.tableBorder,
    backgroundColor: C.bgLight,
    minHeight: 18,
  },
  vocaCellNum: {
    width: '10%',
    paddingVertical: 3,
    paddingHorizontal: 4,
    fontSize: 7,
    color: C.purple,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRightWidth: 0.5,
    borderRightColor: C.tableBorder,
  },
  vocaCellWord: {
    width: '45%',
    paddingVertical: 3,
    paddingHorizontal: 6,
    fontSize: 7.5,
    fontWeight: 'bold',
    borderRightWidth: 0.5,
    borderRightColor: C.tableBorder,
  },
  vocaCellMeaning: {
    width: '45%',
    paddingVertical: 3,
    paddingHorizontal: 6,
    fontSize: 7.5,
    color: C.grayDark,
  },

  // ===== Quick Ver 페이지 =====
  quickVerPage: {
    padding: '15mm 18mm 20mm 18mm',
    fontFamily: 'Pretendard',
    fontSize: 9,
    lineHeight: 1.5,
    color: C.black,
  },
  quickVerContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  quickVerLeft: {
    width: '35%',
    paddingRight: 15,
  },
  quickVerRight: {
    width: '65%',
  },
  quickVerUniversity: {
    fontSize: 14,
    color: C.purple,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  quickVerYear: {
    fontSize: 48,
    fontWeight: 'bold',
    color: C.black,
    letterSpacing: -2,
  },
  quickVerTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: C.grayDark,
    textAlign: 'right',
    marginBottom: 8,
    letterSpacing: 2,
  },
  answerGrid: {
    borderWidth: 1,
    borderColor: C.tableBorder,
  },
  answerGridRow: {
    flexDirection: 'row',
  },
  answerGridCell: {
    width: '10%',
    paddingVertical: 5,
    paddingHorizontal: 2,
    textAlign: 'center',
    fontSize: 8,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: C.tableBorder,
  },
  answerGridCellNum: {
    width: '10%',
    paddingVertical: 5,
    paddingHorizontal: 2,
    textAlign: 'center',
    fontSize: 8,
    fontWeight: 'bold',
    color: C.purple,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: C.tableBorder,
  },
  answerGridCellAnswer: {
    width: '10%',
    paddingVertical: 4,
    paddingHorizontal: 2,
    textAlign: 'center',
    fontSize: 9,
    fontWeight: 'bold',
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: C.tableBorder,
  },
  circledAnswer: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: C.purple,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
  },
  circledAnswerText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: C.purple,
  },

  // ===== 문제 해설 페이지 =====
  problemContainer: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  problemLayout: {
    flexDirection: 'row',
  },
  problemLeft: {
    width: '38%',
    paddingRight: 12,
  },
  problemRight: {
    width: '62%',
    paddingLeft: 12,
    borderLeftWidth: 1,
    borderLeftColor: C.border,
  },

  // 문제 번호
  problemNumBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  problemNum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: C.purple,
    marginRight: 8,
  },

  // 한국어 번역
  translationText: {
    fontSize: 8.5,
    lineHeight: 1.6,
    color: C.black,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },

  // 선택지
  optionsContainer: {
    marginTop: 8,
  },
  optionRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  optionNum: {
    fontSize: 8,
    color: C.grayMedium,
    width: 15,
  },
  optionText: {
    fontSize: 8,
    color: C.grayDark,
    flex: 1,
  },
  optionCorrect: {
    fontSize: 8,
    color: C.purple,
    fontWeight: 'bold',
    flex: 1,
    textDecoration: 'underline',
  },

  // 동의어 해설 섹션
  synonymSection: {
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  sectionNumber: {
    backgroundColor: C.purple,
    color: C.white,
    fontSize: 8,
    fontWeight: 'bold',
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginRight: 6,
  },
  sectionTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: C.black,
  },
  sectionTitleWord: {
    fontSize: 9,
    color: C.grayMedium,
    marginLeft: 4,
  },
  explanationIcon: {
    color: C.purple,
    fontSize: 10,
    marginRight: 4,
  },
  explanationText: {
    fontSize: 8,
    lineHeight: 1.6,
    color: C.grayDark,
    paddingLeft: 4,
  },

  // 동의어 추가 섹션
  synonymAddSection: {
    marginTop: 10,
  },
  synonymTable: {
    marginTop: 6,
  },
  synonymRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  synonymWord: {
    width: '45%',
    fontSize: 8,
    color: C.black,
  },
  synonymMeaning: {
    width: '55%',
    fontSize: 8,
    color: C.grayDark,
  },

  // Step 해설 (빈칸 추론 문제용)
  stepSection: {
    marginBottom: 10,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  stepNumber: {
    backgroundColor: C.purple,
    color: C.white,
    fontSize: 7,
    fontWeight: 'bold',
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginRight: 6,
  },
  stepTitle: {
    fontSize: 8,
    fontWeight: 'bold',
    color: C.black,
  },
  stepContent: {
    fontSize: 8,
    lineHeight: 1.6,
    color: C.grayDark,
    paddingLeft: 4,
  },
  stepCorrectAnswer: {
    fontSize: 8,
    fontWeight: 'bold',
    color: C.purple,
    marginTop: 4,
  },
});

// 원형 정답 표시 컴포넌트
const CircledAnswer: React.FC<{ answer: string }> = ({ answer }) => (
  <View style={styles.circledAnswer}>
    <Text style={styles.circledAnswerText}>{answer}</Text>
  </View>
);

// Voca Preview 페이지 컴포넌트
const VocaPreviewPage: React.FC<{
  data: UniversityAnswerSheetData;
  vocabs: AnswerSheetVocab[];
  pageNum: number;
}> = ({ data, vocabs, pageNum }) => {
  // 2열로 나누기
  const midPoint = Math.ceil(vocabs.length / 2);
  const leftColumn = vocabs.slice(0, midPoint);
  const rightColumn = vocabs.slice(midPoint);

  return (
    <Page size="A4" style={styles.page}>
      {/* 헤더 */}
      <View style={styles.vocaPreviewHeader}>
        <Text style={styles.vocaPreviewTitle}>Voca Preview</Text>
        <Text style={styles.vocaPreviewSubtitle}>
          {data.university.replace('대학교', '대')} {data.year}
        </Text>
        <View style={styles.quizletBadge}>
          <Text style={styles.quizletText}>Quizlet!</Text>
        </View>
      </View>

      {/* 2열 테이블 */}
      <View style={styles.vocaContainer}>
        {/* 왼쪽 열 */}
        <View style={styles.vocaColumn}>
          <View style={styles.vocaTable}>
            {leftColumn.map((vocab, i) => (
              <View key={`left-${i}`} style={i % 2 === 0 ? styles.vocaRow : styles.vocaRowEven}>
                <Text style={styles.vocaCellNum}>{vocab.questionNum}</Text>
                <Text style={styles.vocaCellWord}>{vocab.word}</Text>
                <Text style={styles.vocaCellMeaning}>{vocab.meaning}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 오른쪽 열 */}
        <View style={styles.vocaColumn}>
          <View style={styles.vocaTable}>
            {rightColumn.map((vocab, i) => (
              <View key={`right-${i}`} style={i % 2 === 0 ? styles.vocaRow : styles.vocaRowEven}>
                <Text style={styles.vocaCellNum}>{vocab.questionNum}</Text>
                <Text style={styles.vocaCellWord}>{vocab.word}</Text>
                <Text style={styles.vocaCellMeaning}>{vocab.meaning}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* 푸터 */}
      <View style={styles.footer} fixed>
        <Text style={styles.footerLeft}>제제편입</Text>
        <Text style={styles.footerCenter}>{pageNum}</Text>
        <Text style={styles.footerRight}>FINAL - Pick</Text>
      </View>
    </Page>
  );
};

// Quick Ver 정답표 페이지
const QuickVerPage: React.FC<{
  data: UniversityAnswerSheetData;
  pageNum: number;
}> = ({ data, pageNum }) => {
  // 10문제씩 행으로 나누기 (5행 x 2세트 = 50문제, 또는 4행 x 10열 = 40문제)
  const rows: AnswerSheetProblem[][] = [];
  for (let i = 0; i < data.problems.length; i += 10) {
    rows.push(data.problems.slice(i, i + 10));
  }

  return (
    <Page size="A4" style={styles.quickVerPage}>
      {/* 상단 레이아웃: 왼쪽 대학/년도 + 오른쪽 정답표 */}
      <View style={styles.quickVerContainer}>
        {/* 왼쪽: 대학명 + 년도 */}
        <View style={styles.quickVerLeft}>
          <Text style={styles.quickVerUniversity}>
            {data.university.replace('대학교', '대')}
          </Text>
          <Text style={styles.quickVerYear}>{data.year}</Text>
        </View>

        {/* 오른쪽: Quick Ver 정답표 */}
        <View style={styles.quickVerRight}>
          <Text style={styles.quickVerTitle}>Q U I C K   V E R .</Text>
          <View style={styles.answerGrid}>
            {rows.map((row, rowIdx) => (
              <React.Fragment key={rowIdx}>
                {/* 문제 번호 행 */}
                <View style={styles.answerGridRow}>
                  {row.map((p) => (
                    <Text key={`num-${p.num}`} style={styles.answerGridCellNum}>
                      {String(p.num).padStart(2, '0')}
                    </Text>
                  ))}
                  {Array(10 - row.length).fill(null).map((_, i) => (
                    <Text key={`empty-num-${i}`} style={styles.answerGridCellNum}> </Text>
                  ))}
                </View>
                {/* 정답 행 */}
                <View style={styles.answerGridRow}>
                  {row.map((p) => (
                    <View key={`ans-${p.num}`} style={styles.answerGridCellAnswer}>
                      <CircledAnswer answer={String(p.answer)} />
                    </View>
                  ))}
                  {Array(10 - row.length).fill(null).map((_, i) => (
                    <View key={`empty-ans-${i}`} style={styles.answerGridCellAnswer}>
                      <Text> </Text>
                    </View>
                  ))}
                </View>
              </React.Fragment>
            ))}
          </View>
        </View>
      </View>

      {/* 푸터 */}
      <View style={styles.footer} fixed>
        <Text style={styles.footerLeft}>제제편입</Text>
        <Text style={styles.footerCenter}>{pageNum}</Text>
        <Text style={styles.footerRight}>FINAL - Pick</Text>
      </View>
    </Page>
  );
};

// 동의어 문제 해설 컴포넌트
const SynonymProblemExplanation: React.FC<{
  problem: AnswerSheetProblem;
}> = ({ problem }) => {
  const correctOption = problem.options.find(o => o.isCorrect);
  // 표시할 텍스트 우선순위: passage > translation > questionText
  const displayText = problem.passage || problem.translation || problem.questionText || '';

  return (
    <View style={styles.problemLayout}>
      {/* 왼쪽: 지문/번역 + 선택지 */}
      <View style={styles.problemLeft}>
        <View style={styles.problemNumBox}>
          <Text style={styles.problemNum}>{String(problem.num).padStart(2, '0')}</Text>
        </View>

        {/* 지문 또는 번역 */}
        <Text style={styles.translationText}>
          {displayText}
        </Text>

        {/* 선택지 */}
        <View style={styles.optionsContainer}>
          {problem.options.map((opt, idx) => (
            <View key={idx} style={styles.optionRow}>
              <Text style={styles.optionNum}>
                {['①', '②', '③', '④', '⑤'][idx]}
              </Text>
              <Text style={opt.isCorrect ? styles.optionCorrect : styles.optionText}>
                {opt.text}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* 오른쪽: 동의어 해설 + 동의어 추가 */}
      <View style={styles.problemRight}>
        {/* 1. 동의어 해설 */}
        <View style={styles.synonymSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionNumber}>1</Text>
            <Text style={styles.sectionTitle}>동의어 해설</Text>
            <Text style={styles.sectionTitleWord}>
              - {correctOption?.text || problem.answer}
            </Text>
          </View>
          <Text style={styles.explanationText}>
            ✏️ {problem.explanation || '해설 없음'}
          </Text>
        </View>

        {/* 2. 동의어 추가 */}
        {problem.relatedVocab && problem.relatedVocab.length > 0 && (
          <View style={styles.synonymAddSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>2</Text>
              <Text style={styles.sectionTitle}>동의어 추가</Text>
            </View>
            <View style={styles.synonymTable}>
              {problem.relatedVocab.map((vocab, idx) => {
                const parts = vocab.split(' ');
                const word = parts[0];
                const meaning = parts.slice(1).join(' ');
                return (
                  <View key={idx} style={styles.synonymRow}>
                    <Text style={styles.synonymWord}>{word}</Text>
                    <Text style={styles.synonymMeaning}>{meaning}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

// 빈칸 추론 문제 해설 컴포넌트 (Step 1/2/3 형식)
const BlankProblemExplanation: React.FC<{
  problem: AnswerSheetProblem;
}> = ({ problem }) => {
  const correctOption = problem.options.find(o => o.isCorrect);
  // 표시할 텍스트 우선순위: passage > translation > questionText
  const displayText = problem.passage || problem.translation || problem.questionText || '';

  return (
    <View style={styles.problemLayout}>
      {/* 왼쪽: 지문/번역 + 선택지 */}
      <View style={styles.problemLeft}>
        <View style={styles.problemNumBox}>
          <Text style={styles.problemNum}>{String(problem.num).padStart(2, '0')}</Text>
        </View>

        {/* 지문 또는 번역 */}
        <Text style={styles.translationText}>
          {displayText}
        </Text>

        {/* 선택지 */}
        <View style={styles.optionsContainer}>
          {problem.options.map((opt, idx) => (
            <View key={idx} style={styles.optionRow}>
              <Text style={styles.optionNum}>
                {['①', '②', '③', '④', '⑤'][idx]}
              </Text>
              <Text style={opt.isCorrect ? styles.optionCorrect : styles.optionText}>
                {opt.text}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* 오른쪽: Step 1/2/3 해설 */}
      <View style={styles.problemRight}>
        {/* Step 1: 빈칸 타게팅 */}
        <View style={styles.stepSection}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1</Text>
            <Text style={styles.stepTitle}>Step 1) 빈칸 타게팅</Text>
          </View>
          <Text style={styles.stepContent}>
            {problem.logicFlow || problem.keyPoint || '빈칸이 포함된 문장의 구조와 문맥을 분석합니다.'}
          </Text>
        </View>

        {/* Step 2: 근거 확인 */}
        <View style={styles.stepSection}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2</Text>
            <Text style={styles.stepTitle}>Step 2) 근거 확인</Text>
          </View>
          <Text style={styles.stepContent}>
            {problem.explanation || '지문에서 정답의 근거가 되는 핵심 표현을 찾습니다.'}
          </Text>
        </View>

        {/* Step 3: 보기 판단 */}
        <View style={styles.stepSection}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3</Text>
            <Text style={styles.stepTitle}>Step 3) 보기 판단</Text>
          </View>
          {problem.wrongAnswerAnalysis && problem.wrongAnswerAnalysis.length > 0 ? (
            problem.wrongAnswerAnalysis.map((analysis, idx) => (
              <Text key={idx} style={styles.stepContent}>{analysis}</Text>
            ))
          ) : (
            <Text style={styles.stepContent}>
              각 선택지를 분석하여 정답을 도출합니다.
            </Text>
          )}
          <Text style={styles.stepCorrectAnswer}>
            정답은 {problem.answer}번 {correctOption?.text || ''}입니다.
          </Text>
        </View>
      </View>
    </View>
  );
};

// 문제 해설 래퍼 컴포넌트
const ProblemExplanation: React.FC<{ problem: AnswerSheetProblem }> = ({ problem }) => {
  // 문제 유형에 따라 다른 레이아웃 사용
  const isSynonymType = problem.questionType === '동의어' ||
                        problem.questionType === '어휘' ||
                        problem.questionType?.includes('동의어');

  return (
    <View style={styles.problemContainer} wrap={false}>
      {isSynonymType ? (
        <SynonymProblemExplanation problem={problem} />
      ) : (
        <BlankProblemExplanation problem={problem} />
      )}
    </View>
  );
};

// 해설 페이지 컴포넌트
const ExplanationPages: React.FC<{
  data: UniversityAnswerSheetData;
  startPageNum: number;
}> = ({ data, startPageNum }) => {
  return (
    <Page size="A4" style={styles.page}>
      {data.problems.map((problem) => (
        <ProblemExplanation key={problem.num} problem={problem} />
      ))}

      <View style={styles.footer} fixed>
        <Text style={styles.footerLeft}>제제편입</Text>
        <Text style={styles.footerCenter} render={({ pageNumber }) =>
          `${startPageNum + pageNumber - 1}`
        } />
        <Text style={styles.footerRight}>FINAL - Pick</Text>
      </View>
    </Page>
  );
};

// 메인 컴포넌트
interface UniversityAnswerSheetPDFProps {
  data: UniversityAnswerSheetData;
}

const UniversityAnswerSheetPDF: React.FC<UniversityAnswerSheetPDFProps> = ({ data }) => {
  // 어휘를 페이지당 약 50개씩 나누기
  const vocabsPerPage = 50;
  const vocabPages: AnswerSheetVocab[][] = [];
  for (let i = 0; i < data.vocabList.length; i += vocabsPerPage) {
    vocabPages.push(data.vocabList.slice(i, i + vocabsPerPage));
  }

  // 페이지 번호 계산
  const vocaPageCount = vocabPages.length;
  const quickVerPageNum = vocaPageCount + 1;
  const explanationStartPageNum = quickVerPageNum + 1;

  return (
    <Document>
      {/* Voca Preview 페이지들 */}
      {vocabPages.map((vocabs, idx) => (
        <VocaPreviewPage
          key={`vocab-${idx}`}
          data={data}
          vocabs={vocabs}
          pageNum={idx + 1}
        />
      ))}

      {/* Quick Ver 정답표 페이지 */}
      <QuickVerPage data={data} pageNum={quickVerPageNum} />

      {/* 문제 해설 페이지들 */}
      <ExplanationPages data={data} startPageNum={explanationStartPageNum} />
    </Document>
  );
};

export default UniversityAnswerSheetPDF;
