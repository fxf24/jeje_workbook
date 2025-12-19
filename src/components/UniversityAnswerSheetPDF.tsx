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

// 텍스트 정제 함수 (특수문자 제거)
const cleanText = (text: string | undefined): string => {
  if (!text) return '';
  // 이모지 및 특수 유니코드 문자 제거
  return text
    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '') // 서로게이트 페어 (이모지) 제거
    .replace(/[\u2600-\u26FF]/g, '')   // 기타 기호 제거
    .replace(/[\u2700-\u27BF]/g, '')   // Dingbats 제거
    .replace(/[\uFE00-\uFE0F]/g, '')   // Variation Selectors 제거
    .trim();
};

const styles = StyleSheet.create({
  // 페이지 기본
  page: {
    padding: '15mm 18mm 20mm 18mm',
    fontFamily: 'Pretendard',
    fontSize: 9,
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

  // ===== Voca Preview 페이지 (건국대 2025 스타일) =====
  vocaPreviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  vocaPreviewLeft: {
    flex: 1,
  },
  vocaPreviewTitle: {
    fontSize: 32,
    color: C.purple,
    fontStyle: 'italic',
    marginBottom: 3,
  },
  vocaPreviewUniversity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: C.black,
  },
  vocaPreviewRight: {
    alignItems: 'flex-end',
  },
  quizletBadge: {
    backgroundColor: C.purple,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 3,
    marginBottom: 5,
  },
  quizletText: {
    color: C.white,
    fontSize: 9,
    fontWeight: 'bold',
  },
  qrPlaceholder: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: C.tableBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrText: {
    fontSize: 6,
    color: C.grayLight,
  },

  // Voca 테이블 (2열 레이아웃 - 건국대 스타일)
  vocaContainer: {
    flexDirection: 'row',
  },
  vocaColumn: {
    flex: 1,
    marginRight: 8,
  },
  vocaColumnRight: {
    flex: 1,
    marginLeft: 8,
  },
  vocaTable: {
    borderTopWidth: 1,
    borderTopColor: C.tableBorder,
  },
  vocaRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: C.tableBorder,
    minHeight: 17,
    alignItems: 'center',
  },
  vocaRowEven: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: C.tableBorder,
    minHeight: 17,
    alignItems: 'center',
  },
  vocaCellNum: {
    width: 22,
    paddingVertical: 2,
    paddingHorizontal: 3,
    fontSize: 7,
    color: C.purple,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  vocaCellWord: {
    flex: 1,
    paddingVertical: 2,
    paddingHorizontal: 4,
    fontSize: 8,
    fontWeight: 'bold',
  },
  vocaCellMeaning: {
    flex: 1,
    paddingVertical: 2,
    paddingHorizontal: 4,
    fontSize: 8,
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
    flex: 35,
    paddingRight: 15,
  },
  quickVerRight: {
    flex: 65,
  },
  quickVerUniversityBox: {
    backgroundColor: C.purpleLight,
    borderWidth: 1,
    borderColor: C.purple,
    borderRadius: 3,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  quickVerUniversity: {
    fontSize: 12,
    color: C.purple,
    fontWeight: 'bold',
  },
  quickVerYear: {
    fontSize: 56,
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
  // 5열 그리드용 스타일 (Quick Ver 건국대 스타일)
  answerGridCellNum5: {
    flex: 1,
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
  answerGridCellAnswer5: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 2,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: C.tableBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circledAnswer: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: C.purple,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 200,
    paddingRight: 12,
  },
  problemRight: {
    flex: 1,
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
    lineHeight: 1.5,
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
    lineHeight: 1.5,
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
    width: 80,
    fontSize: 8,
    color: C.black,
  },
  synonymMeaning: {
    flex: 1,
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
    lineHeight: 1.5,
    color: C.grayDark,
    paddingLeft: 4,
  },
  stepCorrectAnswer: {
    fontSize: 8,
    fontWeight: 'bold',
    color: C.purple,
    marginTop: 4,
  },

  // 독해 문제 전용 스타일
  readingProblemContainer: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    paddingBottom: 10,
  },
  readingTopSection: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  readingLeftColumn: {
    width: '50%',
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: C.border,
  },
  readingRightColumn: {
    width: '50%',
    paddingLeft: 10,
  },
  summaryBox: {
    backgroundColor: C.bgLight,
    padding: 8,
    marginTop: 8,
    borderLeftWidth: 3,
    borderLeftColor: C.purple,
  },
  summaryLabel: {
    fontSize: 8,
    fontWeight: 'bold',
    color: C.purple,
    marginBottom: 4,
  },
  summaryText: {
    fontSize: 8,
    lineHeight: 1.4,
    color: C.grayDark,
  },
  readingBottomSection: {
    marginTop: 8,
  },
  readingOptionsContainer: {
    marginBottom: 10,
  },
  optionNumCorrect: {
    fontSize: 8,
    color: C.purple,
    fontWeight: 'bold',
    marginRight: 6,
  },
  readingAnswerSection: {
    marginBottom: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: C.border,
  },
  readingWrongAnswerSection: {
    marginTop: 8,
  },
  wrongAnswerItem: {
    fontSize: 8,
    lineHeight: 1.5,
    color: C.grayDark,
    marginBottom: 4,
    paddingLeft: 4,
  },

  // 내용 일치/불일치 문제 전용 스타일
  matchProblemContainer: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    paddingBottom: 10,
  },
  matchTopSection: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  matchLeftColumn: {
    width: '50%',
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: C.border,
  },
  matchRightColumn: {
    width: '50%',
    paddingLeft: 10,
  },
  optionAnalysisItem: {
    fontSize: 8,
    lineHeight: 1.5,
    color: C.grayDark,
    marginBottom: 6,
    paddingLeft: 4,
    paddingVertical: 2,
    borderLeftWidth: 2,
    borderLeftColor: C.border,
  },
  optionAnalysisCorrect: {
    fontSize: 8,
    lineHeight: 1.5,
    color: C.purple,
    fontWeight: 'bold',
    marginBottom: 6,
    paddingLeft: 4,
    paddingVertical: 2,
    borderLeftWidth: 2,
    borderLeftColor: C.purple,
  },
  contradictionBox: {
    backgroundColor: C.bgLight,
    padding: 8,
    marginTop: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#e74c3c',
  },
  contradictionLabel: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 4,
  },
  contradictionText: {
    fontSize: 8,
    lineHeight: 1.4,
    color: C.grayDark,
  },
  extremeBox: {
    backgroundColor: '#fff3cd',
    padding: 8,
    marginTop: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#f39c12',
  },
  extremeLabel: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#f39c12',
    marginBottom: 4,
  },
  extremeText: {
    fontSize: 8,
    lineHeight: 1.4,
    color: C.grayDark,
  },
});

// 원형 정답 표시 컴포넌트
const CircledAnswer: React.FC<{ answer: string }> = ({ answer }) => (
  <View style={styles.circledAnswer}>
    <Text style={styles.circledAnswerText}>{answer}</Text>
  </View>
);

// Voca Preview 페이지 컴포넌트
const ROWS_PER_COLUMN = 25; // 한 열당 25행 고정

const VocaPreviewPage: React.FC<{
  data: UniversityAnswerSheetData;
  vocabs: AnswerSheetVocab[];
  pageNum: number;
}> = ({ data, vocabs, pageNum }) => {
  // 고정 25행씩 2열 = 50개 슬롯
  const leftColumn: (AnswerSheetVocab | null)[] = [];
  const rightColumn: (AnswerSheetVocab | null)[] = [];

  // 데이터 채우기
  for (let i = 0; i < ROWS_PER_COLUMN; i++) {
    leftColumn.push(vocabs[i] || null);
    rightColumn.push(vocabs[i + ROWS_PER_COLUMN] || null);
  }

  // 대학 이름 포맷팅 (건국대학교 -> 건대)
  const formatUniversity = (name: string) => {
    return name.replace('대학교', '대').replace('대학', '대');
  };

  return (
    <Page size="A4" style={styles.page}>
      {/* 헤더 - 건국대 2025 스타일 */}
      <View style={styles.vocaPreviewHeader}>
        <View style={styles.vocaPreviewLeft}>
          <Text style={styles.vocaPreviewTitle}>Voca Preview</Text>
          <Text style={styles.vocaPreviewUniversity}>
            {formatUniversity(data.university)} {data.year}
          </Text>
        </View>
        <View style={styles.vocaPreviewRight}>
          <View style={styles.quizletBadge}>
            <Text style={styles.quizletText}>Quizlet!</Text>
          </View>
          <View style={styles.qrPlaceholder}>
            <Text style={styles.qrText}>QR</Text>
          </View>
        </View>
      </View>

      {/* 2열 테이블 - 건국대 스타일 */}
      <View style={styles.vocaContainer}>
        {/* 왼쪽 열 */}
        <View style={styles.vocaColumn}>
          <View style={styles.vocaTable}>
            {leftColumn.map((vocab, i) => (
              <View key={`left-${i}`} style={styles.vocaRow}>
                <Text style={styles.vocaCellNum}>{vocab?.questionNum || ' '}</Text>
                <Text style={styles.vocaCellWord}>{vocab?.word || ' '}</Text>
                <Text style={styles.vocaCellMeaning}>{vocab?.meaning || ' '}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 오른쪽 열 */}
        <View style={styles.vocaColumnRight}>
          <View style={styles.vocaTable}>
            {rightColumn.map((vocab, i) => (
              <View key={`right-${i}`} style={styles.vocaRow}>
                <Text style={styles.vocaCellNum}>{vocab?.questionNum || ' '}</Text>
                <Text style={styles.vocaCellWord}>{vocab?.word || ' '}</Text>
                <Text style={styles.vocaCellMeaning}>{vocab?.meaning || ' '}</Text>
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

// Quick Ver 정답표 헤더 컴포넌트 (페이지 상단에 배치)
const QuickVerHeader: React.FC<{
  data: UniversityAnswerSheetData;
}> = ({ data }) => {
  // 5문제씩 행으로 나누기 (건국대 스타일: 5열 x 8행 = 40문제)
  const COLS = 5;
  const rows: AnswerSheetProblem[][] = [];
  for (let i = 0; i < data.problems.length; i += COLS) {
    rows.push(data.problems.slice(i, i + COLS));
  }

  // 대학 이름 포맷팅
  const formatUniversity = (name: string) => {
    return name.replace('대학교', '대').replace('대학', '대');
  };

  return (
    <View style={styles.quickVerContainer}>
      {/* 왼쪽: 대학명 (박스) + 년도 */}
      <View style={styles.quickVerLeft}>
        <View style={styles.quickVerUniversityBox}>
          <Text style={styles.quickVerUniversity}>
            {formatUniversity(data.university)}
          </Text>
        </View>
        <Text style={styles.quickVerYear}>{data.year}</Text>
      </View>

      {/* 오른쪽: Quick Ver 정답표 (5열 그리드) */}
      <View style={styles.quickVerRight}>
        <Text style={styles.quickVerTitle}>Q U I C K   V E R .</Text>
        <View style={styles.answerGrid}>
          {rows.map((row, rowIdx) => (
            <React.Fragment key={rowIdx}>
              {/* 문제 번호 행 */}
              <View style={styles.answerGridRow}>
                {row.map((p) => (
                  <Text key={`num-${p.num}`} style={styles.answerGridCellNum5}>
                    {String(p.num).padStart(2, '0')}
                  </Text>
                ))}
                {Array(COLS - row.length).fill(null).map((_, i) => (
                  <Text key={`empty-num-${i}`} style={styles.answerGridCellNum5}> </Text>
                ))}
              </View>
              {/* 정답 행 */}
              <View style={styles.answerGridRow}>
                {row.map((p) => (
                  <View key={`ans-${p.num}`} style={styles.answerGridCellAnswer5}>
                    <CircledAnswer answer={String(p.answer)} />
                  </View>
                ))}
                {Array(COLS - row.length).fill(null).map((_, i) => (
                  <View key={`empty-ans-${i}`} style={styles.answerGridCellAnswer5}>
                    <Text> </Text>
                  </View>
                ))}
              </View>
            </React.Fragment>
          ))}
        </View>
      </View>
    </View>
  );
};

// 동의어 문제 해설 컴포넌트
const SynonymProblemExplanation: React.FC<{
  problem: AnswerSheetProblem;
}> = ({ problem }) => {
  // 빈 선택지 필터링 (text가 있는 것만)
  const options = (problem.options || []).filter(opt => opt.text && opt.text.trim());
  const correctOption = options.find(o => o.isCorrect);
  // 표시할 텍스트 우선순위: passage > translation > questionText
  const displayText = problem.translation || problem.passage || problem.questionText || ' ';

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
          {options.map((opt, idx) => (
            <View key={idx} style={styles.optionRow}>
              <Text style={styles.optionNum}>
                {['①', '②', '③', '④', '⑤'][idx]}
              </Text>
              <Text style={opt.isCorrect ? styles.optionCorrect : styles.optionText}>
                {opt.text || ' '}
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
              - {correctOption?.text || String(problem.answer) || ' '}
            </Text>
          </View>
          <Text style={styles.explanationText}>
            {cleanText(problem.explanation) || '해설 없음'}
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
                const parts = (vocab || '').split(' ');
                const word = parts[0] || ' ';
                const meaning = parts.slice(1).join(' ') || ' ';
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
  // 빈 선택지 필터링 (text가 있는 것만)
  const options = (problem.options || []).filter(opt => opt.text && opt.text.trim());
  const correctOption = options.find(o => o.isCorrect);
  // 표시할 텍스트 우선순위: passage > translation > questionText
  const displayText = problem.translation || problem.passage || problem.questionText || ' ';

  return (
    <View style={styles.problemLayout}>
      {/* 왼쪽: 지문/번역 + 선택지 */}
      <View style={styles.problemLeft}>
        <View style={styles.problemNumBox}>
          <Text style={styles.problemNum}>{String(problem.num || 0).padStart(2, '0')}</Text>
        </View>

        {/* 지문 또는 번역 */}
        <Text style={styles.translationText}>
          {displayText}
        </Text>

        {/* 선택지 */}
        <View style={styles.optionsContainer}>
          {options.map((opt, idx) => (
            <View key={idx} style={styles.optionRow}>
              <Text style={styles.optionNum}>
                {['①', '②', '③', '④', '⑤'][idx]}
              </Text>
              <Text style={opt.isCorrect ? styles.optionCorrect : styles.optionText}>
                {opt.text || ' '}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* 오른쪽: Step 1/2/3 해설 */}
      <View style={styles.problemRight}>
        {/* keyPoint가 있으면 상단에 표시 */}
        {problem.keyPoint && (
          <Text style={styles.stepCorrectAnswer}>{cleanText(problem.keyPoint)}</Text>
        )}

        {/* Step 1: 빈칸 타게팅 */}
        <View style={styles.stepSection}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1</Text>
            <Text style={styles.stepTitle}>Step 1) 빈칸 타게팅</Text>
          </View>
          <Text style={styles.stepContent}>
            {cleanText(problem.step1) || cleanText(problem.logicFlow) || '빈칸이 포함된 문장의 구조와 문맥을 분석합니다.'}
          </Text>
        </View>

        {/* Step 2: 근거 확인 */}
        <View style={styles.stepSection}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2</Text>
            <Text style={styles.stepTitle}>Step 2) 근거 확인</Text>
          </View>
          <Text style={styles.stepContent}>
            {cleanText(problem.step2) || cleanText(problem.explanation) || '지문에서 정답의 근거가 되는 핵심 표현을 찾습니다.'}
          </Text>
        </View>

        {/* Step 3: 보기 판단 */}
        <View style={styles.stepSection}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3</Text>
            <Text style={styles.stepTitle}>Step 3) 보기 판단</Text>
          </View>
          <Text style={styles.stepContent}>
            {cleanText(problem.step3) || (problem.wrongAnswerAnalysis && problem.wrongAnswerAnalysis.length > 0
              ? problem.wrongAnswerAnalysis.map(a => cleanText(a)).join('\n')
              : '각 선택지를 분석하여 정답을 도출합니다.')}
          </Text>
          {!problem.step3 && (
            <Text style={styles.stepCorrectAnswer}>
              정답은 {problem.answer}번 {correctOption?.text || ''}입니다.
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

// 독해 문제 - 주제/요지/제목 컴포넌트
const ReadingTopicExplanation: React.FC<{
  problem: AnswerSheetProblem;
}> = ({ problem }) => {
  const options = (problem.options || []).filter(opt => opt.text && opt.text.trim());
  const displayText = problem.translation || problem.passage || problem.questionText || ' ';
  const correctOption = options.find(o => o.isCorrect);

  return (
    <View style={styles.readingProblemContainer} wrap={false}>
      {/* 상단: 지문 번역 (왼쪽) + 지문 분석 (오른쪽) */}
      <View style={styles.readingTopSection}>
        <View style={styles.readingLeftColumn}>
          <View style={styles.problemNumBox}>
            <Text style={styles.problemNum}>{String(problem.num || 0).padStart(2, '0')}</Text>
          </View>
          <Text style={styles.translationText}>{cleanText(displayText)}</Text>
        </View>

        <View style={styles.readingRightColumn}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionNumber}>▸</Text>
            <Text style={styles.sectionTitle}>지문 분석</Text>
          </View>
          <Text style={styles.explanationText}>
            {cleanText(problem.explanation) || '지문의 핵심 내용을 분석합니다.'}
          </Text>
          {problem.passageSummary && (
            <View style={styles.summaryBox}>
              <Text style={styles.summaryLabel}>▸ 한줄 요약</Text>
              <Text style={styles.summaryText}>{cleanText(problem.passageSummary)}</Text>
            </View>
          )}
        </View>
      </View>

      {/* 하단: 선택지 (왼쪽) + 정답/오답 해설 (오른쪽) */}
      <View style={styles.readingBottomSection}>
        <View style={styles.readingTopSection}>
          <View style={styles.readingLeftColumn}>
            {options.length > 0 && (
              <View style={styles.readingOptionsContainer}>
                {options.map((opt, idx) => (
                  <View key={idx} style={styles.optionRow}>
                    <Text style={opt.isCorrect ? styles.optionNumCorrect : styles.optionNum}>
                      {opt.isCorrect ? '◎' : '○'} {['①', '②', '③', '④', '⑤'][idx]}
                    </Text>
                    <Text style={opt.isCorrect ? styles.optionCorrect : styles.optionText}>
                      {opt.text || ' '}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>

          <View style={styles.readingRightColumn}>
            {problem.keyPoint && (
              <Text style={styles.stepCorrectAnswer}>{cleanText(problem.keyPoint)}</Text>
            )}
            <View style={styles.stepSection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionNumber}>1</Text>
                <Text style={styles.sectionTitle}>정답 해설</Text>
              </View>
              <Text style={styles.explanationText}>
                {cleanText(problem.logicFlow) || `정답은 ${problem.answer}번 ${correctOption?.text || ''}입니다.`}
              </Text>
            </View>
            {problem.wrongAnswerAnalysis && problem.wrongAnswerAnalysis.length > 0 && (
              <View style={styles.stepSection}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionNumber}>2</Text>
                  <Text style={styles.sectionTitle}>오답 소거</Text>
                </View>
                {problem.wrongAnswerAnalysis.map((analysis, idx) => (
                  <Text key={idx} style={styles.wrongAnswerItem}>{cleanText(analysis)}</Text>
                ))}
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

// 독해 문제 - 내용 일치/불일치 컴포넌트
const ReadingMatchExplanation: React.FC<{
  problem: AnswerSheetProblem;
}> = ({ problem }) => {
  const options = (problem.options || []).filter(opt => opt.text && opt.text.trim());
  const displayText = problem.translation || problem.passage || problem.questionText || ' ';

  return (
    <View style={styles.matchProblemContainer} wrap={false}>
      {/* 상단: 지문 번역 (왼쪽) + 한줄 요약 (오른쪽) */}
      <View style={styles.matchTopSection}>
        <View style={styles.matchLeftColumn}>
          <View style={styles.problemNumBox}>
            <Text style={styles.problemNum}>{String(problem.num || 0).padStart(2, '0')}</Text>
          </View>
          <Text style={styles.translationText}>{cleanText(displayText)}</Text>
          {problem.passageSummary && (
            <View style={styles.summaryBox}>
              <Text style={styles.summaryLabel}>▸ 한줄 요약</Text>
              <Text style={styles.summaryText}>{cleanText(problem.passageSummary)}</Text>
            </View>
          )}
        </View>

        <View style={styles.matchRightColumn}>
          {problem.keyPoint && (
            <Text style={styles.stepCorrectAnswer}>{cleanText(problem.keyPoint)}</Text>
          )}

          {/* 보기 분석 */}
          <View style={styles.stepSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>1</Text>
              <Text style={styles.sectionTitle}>보기 분석</Text>
            </View>
            {problem.optionAnalysis && problem.optionAnalysis.length > 0 ? (
              problem.optionAnalysis.map((analysis, idx) => {
                const isCorrect = options[idx]?.isCorrect;
                return (
                  <Text
                    key={idx}
                    style={isCorrect ? styles.optionAnalysisCorrect : styles.optionAnalysisItem}
                  >
                    {cleanText(analysis)}
                  </Text>
                );
              })
            ) : (
              options.map((opt, idx) => (
                <View key={idx} style={styles.optionRow}>
                  <Text style={opt.isCorrect ? styles.optionNumCorrect : styles.optionNum}>
                    {opt.isCorrect ? '◎' : '○'} {['①', '②', '③', '④', '⑤'][idx]}
                  </Text>
                  <Text style={opt.isCorrect ? styles.optionCorrect : styles.optionText}>
                    {opt.text || ' '}
                  </Text>
                </View>
              ))
            )}
          </View>

          {/* 모순 관계 분석 */}
          {problem.contradictionAnalysis && (
            <View style={styles.contradictionBox}>
              <Text style={styles.contradictionLabel}>▸ 모순 관계 분석</Text>
              <Text style={styles.contradictionText}>{cleanText(problem.contradictionAnalysis)}</Text>
            </View>
          )}

          {/* 극단적 표현 분석 */}
          {problem.extremeExpressions && (
            <View style={styles.extremeBox}>
              <Text style={styles.extremeLabel}>▸ 극단적 표현 주의</Text>
              <Text style={styles.extremeText}>{cleanText(problem.extremeExpressions)}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

// 독해 문제 - 빈칸 추론 긴 지문 컴포넌트
const ReadingBlankExplanation: React.FC<{
  problem: AnswerSheetProblem;
}> = ({ problem }) => {
  const options = (problem.options || []).filter(opt => opt.text && opt.text.trim());
  const displayText = problem.translation || problem.passage || problem.questionText || ' ';
  const correctOption = options.find(o => o.isCorrect);

  return (
    <View style={styles.readingProblemContainer} wrap={false}>
      {/* 상단: 지문 번역 (왼쪽) + 한줄 요약 (오른쪽) */}
      <View style={styles.readingTopSection}>
        <View style={styles.readingLeftColumn}>
          <View style={styles.problemNumBox}>
            <Text style={styles.problemNum}>{String(problem.num || 0).padStart(2, '0')}</Text>
          </View>
          <Text style={styles.translationText}>{cleanText(displayText)}</Text>
        </View>

        <View style={styles.readingRightColumn}>
          {problem.passageSummary && (
            <View style={styles.summaryBox}>
              <Text style={styles.summaryLabel}>▸ 한줄 요약</Text>
              <Text style={styles.summaryText}>{cleanText(problem.passageSummary)}</Text>
            </View>
          )}
          {problem.keyPoint && (
            <Text style={styles.stepCorrectAnswer}>{cleanText(problem.keyPoint)}</Text>
          )}
        </View>
      </View>

      {/* 하단: 선택지 (왼쪽) + Step 해설 (오른쪽) */}
      <View style={styles.readingBottomSection}>
        <View style={styles.readingTopSection}>
          <View style={styles.readingLeftColumn}>
            {options.length > 0 && (
              <View style={styles.readingOptionsContainer}>
                {options.map((opt, idx) => (
                  <View key={idx} style={styles.optionRow}>
                    <Text style={opt.isCorrect ? styles.optionNumCorrect : styles.optionNum}>
                      {opt.isCorrect ? '◎' : '○'} {['①', '②', '③', '④', '⑤'][idx]}
                    </Text>
                    <Text style={opt.isCorrect ? styles.optionCorrect : styles.optionText}>
                      {opt.text || ' '}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>

          <View style={styles.readingRightColumn}>
            {/* Step 1: 빈칸 타게팅 */}
            <View style={styles.stepSection}>
              <View style={styles.stepHeader}>
                <Text style={styles.stepNumber}>1</Text>
                <Text style={styles.stepTitle}>Step 1) 빈칸 타게팅</Text>
              </View>
              <Text style={styles.stepContent}>
                {cleanText(problem.step1) || '빈칸이 포함된 문장의 구조를 분석합니다.'}
              </Text>
            </View>

            {/* Step 2: 근거 확인 */}
            <View style={styles.stepSection}>
              <View style={styles.stepHeader}>
                <Text style={styles.stepNumber}>2</Text>
                <Text style={styles.stepTitle}>Step 2) 근거 확인</Text>
              </View>
              <Text style={styles.stepContent}>
                {cleanText(problem.step2) || '빈칸을 채울 핵심 단서를 찾습니다.'}
              </Text>
            </View>

            {/* Step 3: 보기 판단 */}
            <View style={styles.stepSection}>
              <View style={styles.stepHeader}>
                <Text style={styles.stepNumber}>3</Text>
                <Text style={styles.stepTitle}>Step 3) 보기 판단</Text>
              </View>
              <Text style={styles.stepContent}>
                {cleanText(problem.step3) || '각 선택지를 분석하여 정답을 도출합니다.'}
              </Text>
              <Text style={styles.stepCorrectAnswer}>
                정답은 {problem.answer}번 {correctOption?.text || ''}입니다.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// 독해 문제 - 일반 컴포넌트 (기본 레이아웃)
const ReadingGeneralExplanation: React.FC<{
  problem: AnswerSheetProblem;
}> = ({ problem }) => {
  const options = (problem.options || []).filter(opt => opt.text && opt.text.trim());
  const displayText = problem.translation || problem.passage || problem.questionText || ' ';
  const correctOption = options.find(o => o.isCorrect);

  return (
    <View style={styles.readingProblemContainer} wrap={false}>
      <View style={styles.readingTopSection}>
        <View style={styles.readingLeftColumn}>
          <View style={styles.problemNumBox}>
            <Text style={styles.problemNum}>{String(problem.num || 0).padStart(2, '0')}</Text>
          </View>
          <Text style={styles.translationText}>{cleanText(displayText)}</Text>
        </View>

        <View style={styles.readingRightColumn}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionNumber}>▸</Text>
            <Text style={styles.sectionTitle}>지문 요지</Text>
          </View>
          <Text style={styles.explanationText}>
            {cleanText(problem.explanation) || '지문의 핵심 내용을 분석합니다.'}
          </Text>
          {problem.passageSummary && (
            <View style={styles.summaryBox}>
              <Text style={styles.summaryLabel}>▸ 한줄 요약</Text>
              <Text style={styles.summaryText}>{cleanText(problem.passageSummary)}</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.readingBottomSection}>
        <View style={styles.readingTopSection}>
          <View style={styles.readingLeftColumn}>
            {options.length > 0 && (
              <View style={styles.readingOptionsContainer}>
                {options.map((opt, idx) => (
                  <View key={idx} style={styles.optionRow}>
                    <Text style={opt.isCorrect ? styles.optionNumCorrect : styles.optionNum}>
                      {opt.isCorrect ? '◎' : '○'} {['①', '②', '③', '④', '⑤'][idx]}
                    </Text>
                    <Text style={opt.isCorrect ? styles.optionCorrect : styles.optionText}>
                      {opt.text || ' '}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>

          <View style={styles.readingRightColumn}>
            {problem.keyPoint && (
              <Text style={styles.stepCorrectAnswer}>{cleanText(problem.keyPoint)}</Text>
            )}
            <View style={styles.stepSection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionNumber}>1</Text>
                <Text style={styles.sectionTitle}>정답 해설</Text>
              </View>
              <Text style={styles.explanationText}>
                {cleanText(problem.logicFlow) || `정답은 ${problem.answer}번 ${correctOption?.text || ''}입니다.`}
              </Text>
            </View>
            {problem.wrongAnswerAnalysis && problem.wrongAnswerAnalysis.length > 0 && (
              <View style={styles.stepSection}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionNumber}>2</Text>
                  <Text style={styles.sectionTitle}>오답 소거</Text>
                </View>
                {problem.wrongAnswerAnalysis.map((analysis, idx) => (
                  <Text key={idx} style={styles.wrongAnswerItem}>{cleanText(analysis)}</Text>
                ))}
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

// 독해 문제 분기 컴포넌트
const ReadingProblemExplanation: React.FC<{
  problem: AnswerSheetProblem;
}> = ({ problem }) => {
  // readingSubType에 따라 다른 컴포넌트 렌더링
  const subType = problem.readingSubType || 'general';
  const questionType = problem.questionType?.toLowerCase() || '';

  // readingSubType이 없으면 questionType으로 추론
  if (subType === 'topic' || questionType.includes('주제') || questionType.includes('요지') || questionType.includes('제목')) {
    return <ReadingTopicExplanation problem={problem} />;
  }
  if (subType === 'match' || questionType.includes('일치') || questionType.includes('불일치')) {
    return <ReadingMatchExplanation problem={problem} />;
  }
  if (subType === 'blank' || (questionType.includes('빈칸') && problem.step1)) {
    return <ReadingBlankExplanation problem={problem} />;
  }
  return <ReadingGeneralExplanation problem={problem} />;
};

// 문제 해설 래퍼 컴포넌트
const ProblemExplanation: React.FC<{ problem: AnswerSheetProblem }> = ({ problem }) => {
  // 문제 유형에 따라 다른 레이아웃 사용
  const questionType = problem.questionType?.toLowerCase() || '';

  const isSynonymType = questionType.includes('동의어') ||
                        questionType.includes('어휘') ||
                        questionType.includes('vocab');

  const isReadingType = questionType.includes('독해') ||
                        questionType.includes('주제') ||
                        questionType.includes('요지') ||
                        questionType.includes('제목') ||
                        questionType.includes('내용') ||
                        questionType.includes('reading');

  return (
    <View style={styles.problemContainer}>
      {isSynonymType ? (
        <SynonymProblemExplanation problem={problem} />
      ) : isReadingType ? (
        <ReadingProblemExplanation problem={problem} />
      ) : (
        <BlankProblemExplanation problem={problem} />
      )}
    </View>
  );
};

// 해설 페이지 컴포넌트 (정답표 + 해설을 같은 페이지에서 시작)
const ExplanationPages: React.FC<{
  data: UniversityAnswerSheetData;
  startPageNum: number;
}> = ({ data, startPageNum }) => {
  return (
    <Page size="A4" style={styles.page}>
      {/* 정답표 헤더 (첫 페이지 상단) */}
      <QuickVerHeader data={data} />

      {/* 문제 해설들 - wrap 속성으로 자동 페이지 분할 */}
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
  const explanationStartPageNum = vocaPageCount + 1;

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

      {/* 정답표 + 문제 해설 페이지들 (같은 페이지에서 시작) */}
      {data.problems && data.problems.length > 0 && (
        <ExplanationPages data={data} startPageNum={explanationStartPageNum} />
      )}
    </Document>
  );
};

export default UniversityAnswerSheetPDF;
