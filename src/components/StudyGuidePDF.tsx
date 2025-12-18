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
  StudyGuideData,
  StudyGuidePart,
  VocabItem,
  GrammarPoint,
  LogicType,
  ThemeItem,
  QuestionType,
  SampleQuestion,
} from '../data/types';

// Pretendard 폰트 등록 (Regular, Bold, Italic 지원)
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
      src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/static/Pretendard-Regular.otf',
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
  ],
});

// 디자인 토큰
const C = {
  black: '#1a1a1a',
  grayDark: '#666666',
  grayLight: '#999999',
  bgDark: '#f0f0f0',
  bgLight: '#f5f5f5',
  bgLighter: '#f9f9f9',
  white: '#ffffff',
  border: '#1a1a1a',
  borderLight: '#dddddd',
  accent: '#2563eb',
};

const styles = StyleSheet.create({
  // 공통 페이지
  page: {
    padding: '12mm 15mm 15mm 15mm',
    fontFamily: 'Pretendard',
    fontSize: 9,
    lineHeight: 1.45,
    color: C.black,
  },
  pageNumber: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 7.5,
    color: C.grayDark,
  },

  // 표지
  coverPage: {
    padding: '12mm 15mm 15mm 15mm',
    fontFamily: 'Pretendard',
    paddingTop: 60,
    alignItems: 'center',
  },
  coverTitleBox: {
    borderWidth: 3,
    borderColor: C.black,
    paddingVertical: 25,
    paddingHorizontal: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  coverTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: C.black,
  },
  coverSubtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: C.black,
    textAlign: 'center',
    marginTop: 10,
  },
  coverInfo: {
    fontSize: 10,
    color: C.grayDark,
    textAlign: 'center',
    marginTop: 30,
    lineHeight: 1.8,
  },

  // 시험 구성 테이블
  examInfoBox: {
    marginTop: 40,
    width: '80%',
  },
  examInfoTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  // 목차
  tocTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: C.black,
  },
  tocPart: {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    paddingLeft: 5,
    borderLeftWidth: 3,
    borderLeftColor: C.black,
  },
  tocItem: {
    fontSize: 9,
    marginLeft: 20,
    marginBottom: 4,
    color: C.grayDark,
  },

  // Part 제목
  partTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: C.black,
  },
  partSubtitle: {
    fontSize: 10,
    color: C.grayDark,
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: C.black,
  },

  // 섹션 제목
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1.5,
    borderBottomColor: C.black,
    minPresenceAhead: 80,
  },

  // 소제목
  subTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 6,
    minPresenceAhead: 60,
  },

  // 강조 박스
  boxHighlight: {
    backgroundColor: C.bgLight,
    borderLeftWidth: 4,
    borderLeftColor: C.black,
    padding: 10,
    paddingLeft: 14,
    marginVertical: 10,
    minPresenceAhead: 50,
  },
  boxHighlightTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  boxHighlightText: {
    fontSize: 8.5,
    lineHeight: 1.6,
  },

  // 트렌드 박스
  trendBox: {
    backgroundColor: C.bgLighter,
    borderWidth: 1,
    borderColor: C.borderLight,
    padding: 12,
    marginVertical: 10,
    minPresenceAhead: 50,
  },
  trendText: {
    fontSize: 9,
    lineHeight: 1.6,
  },

  // 문제 박스
  boxQuestion: {
    borderWidth: 2,
    borderColor: C.black,
    padding: 12,
    marginVertical: 10,
    minPresenceAhead: 100,
  },
  qHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: C.black,
    color: C.white,
    fontSize: 7.5,
    fontWeight: 'bold',
    paddingTop: 4,
    paddingBottom: 2,
    paddingHorizontal: 8,
    marginRight: 8,
    textAlign: 'center',
    justifyContent: 'center',
  },
  qHeaderText: {
    fontSize: 9,
    fontWeight: 'bold',
    flex: 1,
  },
  qPassage: {
    backgroundColor: C.bgLighter,
    padding: 10,
    marginVertical: 8,
    fontSize: 8.5,
    lineHeight: 1.6,
  },
  qOptions: {
    marginTop: 8,
  },
  qOption: {
    fontSize: 8.5,
    marginBottom: 4,
    paddingLeft: 10,
  },

  // 해설 박스
  boxSolution: {
    backgroundColor: C.bgLight,
    borderWidth: 1,
    borderColor: C.border,
    padding: 12,
    marginVertical: 8,
    minPresenceAhead: 50,
  },
  solutionRow: {
    flexDirection: 'row',
    marginBottom: 6,
    minPresenceAhead: 30,
  },
  solutionLabel: {
    backgroundColor: C.black,
    color: C.white,
    fontSize: 7,
    fontWeight: 'bold',
    paddingTop: 4,
    paddingBottom: 2,
    paddingHorizontal: 6,
    marginRight: 8,
    textAlign: 'center',
    justifyContent: 'center',
  },
  solutionText: {
    fontSize: 8.5,
    flex: 1,
    lineHeight: 1.5,
  },

  // 전략 박스
  strategyBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: C.grayDark,
    padding: 10,
    marginVertical: 10,
    backgroundColor: C.bgLighter,
    minPresenceAhead: 50,
  },
  strategyTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  strategyText: {
    fontSize: 8.5,
    lineHeight: 1.5,
  },

  // 함정 패턴 박스
  trapBox: {
    backgroundColor: '#fff5f5',
    borderLeftWidth: 3,
    borderLeftColor: '#dc2626',
    padding: 10,
    marginVertical: 8,
    minPresenceAhead: 50,
  },
  trapTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 6,
  },
  trapItem: {
    fontSize: 8.5,
    marginBottom: 3,
    paddingLeft: 8,
  },

  // 테이블
  table: {
    marginVertical: 8,
    minPresenceAhead: 40,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: C.black,
  },
  tableHeaderCell: {
    color: C.white,
    fontSize: 8,
    fontWeight: 'bold',
    paddingTop: 7,
    paddingBottom: 5,
    paddingHorizontal: 6,
    borderWidth: 0.5,
    borderColor: C.border,
    textAlign: 'center',
    justifyContent: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    minPresenceAhead: 20,
  },
  tableRowEven: {
    flexDirection: 'row',
    backgroundColor: C.bgLight,
    minPresenceAhead: 20,
  },
  tableCell: {
    fontSize: 8,
    padding: 5,
    borderWidth: 0.5,
    borderColor: C.border,
    justifyContent: 'center',
  },
  tableCellCenter: {
    fontSize: 8,
    padding: 5,
    borderWidth: 0.5,
    borderColor: C.border,
    textAlign: 'center',
    justifyContent: 'center',
  },
  tableCellBold: {
    fontSize: 8,
    fontWeight: 'bold',
    padding: 5,
    borderWidth: 0.5,
    borderColor: C.border,
    justifyContent: 'center',
  },

  // 시간 배분 박스
  timeBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: C.bgLight,
    padding: 12,
    marginVertical: 10,
    minPresenceAhead: 50,
  },
  timeItem: {
    alignItems: 'center',
    flex: 1,
  },
  timeLabel: {
    fontSize: 8,
    color: C.grayDark,
    marginBottom: 4,
  },
  timeValue: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  // D-Day 전략
  dDayBox: {
    marginVertical: 8,
    minPresenceAhead: 60,
  },
  dDayTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    backgroundColor: C.black,
    color: C.white,
    padding: 6,
    paddingLeft: 10,
    marginBottom: 6,
  },
  dDayItem: {
    fontSize: 8.5,
    marginBottom: 4,
    paddingLeft: 15,
  },

  // 텍스트 스타일
  textBold: {
    fontWeight: 'bold',
  },
  textSmall: {
    fontSize: 8,
  },
  bulletItem: {
    fontSize: 8.5,
    marginLeft: 10,
    marginBottom: 3,
  },
  keyTakeaway: {
    backgroundColor: C.bgLight,
    borderWidth: 2,
    borderColor: C.black,
    padding: 15,
    marginVertical: 10,
    minPresenceAhead: 100,
  },
  keyTakeawayTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  keyTakeawayItem: {
    fontSize: 9,
    marginBottom: 6,
    paddingLeft: 10,
    lineHeight: 1.5,
    minPresenceAhead: 20,
  },
});

// 표지 페이지
const CoverPage: React.FC<{ data: StudyGuideData }> = ({ data }) => (
  <Page size="A4" style={styles.coverPage}>
    <View style={styles.coverTitleBox}>
      <Text style={styles.coverTitle}>{data.university}</Text>
      <Text style={styles.coverSubtitle}>편입영어 끝끝팩</Text>
    </View>
    <Text style={styles.coverInfo}>
      총 {data.examInfo.totalQuestions} · {data.examInfo.timeLimit}{'\n'}
      난이도: {data.examInfo.difficulty}
    </Text>

    <View style={styles.examInfoBox}>
      <Text style={styles.examInfoTitle}>시험 구성</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderCell, { flex: 1.5 }]}>영역</Text>
          <Text style={[styles.tableHeaderCell, { flex: 1 }]}>문항 수</Text>
          <Text style={[styles.tableHeaderCell, { flex: 1 }]}>비율</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={[styles.tableCellBold, { flex: 1.5 }]}>어휘</Text>
          <Text style={[styles.tableCellCenter, { flex: 1 }]}>{data.examComposition.vocabulary.count}</Text>
          <Text style={[styles.tableCellCenter, { flex: 1 }]}>{data.examComposition.vocabulary.percentage}</Text>
        </View>
        <View style={styles.tableRowEven}>
          <Text style={[styles.tableCellBold, { flex: 1.5 }]}>문법</Text>
          <Text style={[styles.tableCellCenter, { flex: 1 }]}>{data.examComposition.grammar.count}</Text>
          <Text style={[styles.tableCellCenter, { flex: 1 }]}>{data.examComposition.grammar.percentage}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={[styles.tableCellBold, { flex: 1.5 }]}>빈칸 추론</Text>
          <Text style={[styles.tableCellCenter, { flex: 1 }]}>{data.examComposition.blankInference.count}</Text>
          <Text style={[styles.tableCellCenter, { flex: 1 }]}>{data.examComposition.blankInference.percentage}</Text>
        </View>
        <View style={styles.tableRowEven}>
          <Text style={[styles.tableCellBold, { flex: 1.5 }]}>독해</Text>
          <Text style={[styles.tableCellCenter, { flex: 1 }]}>{data.examComposition.reading.count}</Text>
          <Text style={[styles.tableCellCenter, { flex: 1 }]}>{data.examComposition.reading.percentage}</Text>
        </View>
      </View>
    </View>
  </Page>
);

// 목차 페이지
const TocPage: React.FC<{ data: StudyGuideData }> = ({ data }) => (
  <Page size="A4" style={styles.page}>
    <Text style={styles.tocTitle}>목차 Contents</Text>

    {data.parts.map((part) => (
      <View key={part.partNum}>
        <Text style={styles.tocPart}>PART {part.partNum}. {part.title}</Text>
        <Text style={styles.tocItem}>• {part.subtitle}</Text>
        <Text style={styles.tocItem}>• 출제 경향 분석</Text>
        <Text style={styles.tocItem}>• 기출 예제 및 해설</Text>
        <Text style={styles.tocItem}>• 공략 전략</Text>
      </View>
    ))}

    <Text style={styles.tocPart}>PART 5. 최종 전략</Text>
    <Text style={styles.tocItem}>• 시간 배분 전략</Text>
    <Text style={styles.tocItem}>• D-Day 학습 계획</Text>
    <Text style={styles.tocItem}>• 핵심 요약</Text>

    <Text
      style={styles.pageNumber}
      render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      fixed
    />
  </Page>
);

// 어휘 테이블 컴포넌트
const VocabTable: React.FC<{ vocabList: VocabItem[] }> = ({ vocabList }) => (
  <View style={styles.table}>
    <View style={styles.tableHeader}>
      <Text style={[styles.tableHeaderCell, { flex: 1.2 }]}>단어</Text>
      <Text style={[styles.tableHeaderCell, { flex: 1 }]}>뜻</Text>
      <Text style={[styles.tableHeaderCell, { flex: 1.5 }]}>어원</Text>
      <Text style={[styles.tableHeaderCell, { flex: 1.2 }]}>동의어</Text>
      <Text style={[styles.tableHeaderCell, { flex: 0.6 }]}>빈도</Text>
    </View>
    {vocabList.map((vocab, i) => (
      <View key={i} style={i % 2 === 0 ? styles.tableRow : styles.tableRowEven}>
        <Text style={[styles.tableCellBold, { flex: 1.2 }]}>{vocab.word}</Text>
        <Text style={[styles.tableCell, { flex: 1 }]}>{vocab.meaning}</Text>
        <Text style={[styles.tableCell, { flex: 1.5 }]}>{vocab.etymology}</Text>
        <Text style={[styles.tableCell, { flex: 1.2 }]}>{vocab.synonyms}</Text>
        <Text style={[styles.tableCellCenter, { flex: 0.6 }]}>{vocab.frequency}</Text>
      </View>
    ))}
  </View>
);

// 문법 포인트 컴포넌트
const GrammarPoints: React.FC<{ points: GrammarPoint[] }> = ({ points }) => (
  <View>
    {points.map((point, i) => (
      <View key={i} style={styles.boxHighlight} wrap={false}>
        <Text style={styles.boxHighlightTitle}>■ {point.topic}</Text>
        <Text style={styles.boxHighlightText}>{point.description}</Text>
        <Text style={[styles.boxHighlightText, { marginTop: 4, fontStyle: 'italic' }]}>
          예: {point.example}
        </Text>
      </View>
    ))}
  </View>
);

// 논리 유형 컴포넌트
const LogicTypes: React.FC<{ types: LogicType[] }> = ({ types }) => (
  <View style={styles.table}>
    <View style={styles.tableHeader}>
      <Text style={[styles.tableHeaderCell, { flex: 1 }]}>논리 유형</Text>
      <Text style={[styles.tableHeaderCell, { flex: 1.5 }]}>신호 표현</Text>
      <Text style={[styles.tableHeaderCell, { flex: 2 }]}>접근법</Text>
    </View>
    {types.map((type, i) => (
      <View key={i} style={i % 2 === 0 ? styles.tableRow : styles.tableRowEven}>
        <Text style={[styles.tableCellBold, { flex: 1 }]}>{type.type}</Text>
        <Text style={[styles.tableCell, { flex: 1.5 }]}>{type.signal}</Text>
        <Text style={[styles.tableCell, { flex: 2 }]}>{type.approach}</Text>
      </View>
    ))}
  </View>
);

// 테마 컴포넌트
const ThemeList: React.FC<{ themes: ThemeItem[] }> = ({ themes }) => (
  <View>
    {themes.map((theme, i) => (
      <View key={i} style={styles.boxHighlight} wrap={false}>
        <Text style={styles.boxHighlightTitle}>
          ■ {theme.theme} ({theme.frequency})
        </Text>
        <Text style={styles.boxHighlightText}>
          관련 주제: {theme.keyTopics.join(', ')}
        </Text>
      </View>
    ))}
  </View>
);

// 문제 유형 컴포넌트
const QuestionTypes: React.FC<{ types: QuestionType[] }> = ({ types }) => (
  <View style={styles.table}>
    <View style={styles.tableHeader}>
      <Text style={[styles.tableHeaderCell, { flex: 1 }]}>문제 유형</Text>
      <Text style={[styles.tableHeaderCell, { flex: 0.8 }]}>출제 빈도</Text>
      <Text style={[styles.tableHeaderCell, { flex: 2 }]}>접근법</Text>
    </View>
    {types.map((type, i) => (
      <View key={i} style={i % 2 === 0 ? styles.tableRow : styles.tableRowEven}>
        <Text style={[styles.tableCellBold, { flex: 1 }]}>{type.type}</Text>
        <Text style={[styles.tableCellCenter, { flex: 0.8 }]}>{type.frequency}</Text>
        <Text style={[styles.tableCell, { flex: 2 }]}>{type.approach}</Text>
      </View>
    ))}
  </View>
);

// 샘플 문제 컴포넌트
const SampleQuestionBox: React.FC<{ question: SampleQuestion }> = ({ question }) => (
  <View style={styles.boxQuestion} wrap={false}>
    <View style={styles.qHeader}>
      <Text style={styles.tag}>기출 예제</Text>
    </View>

    {question.passage && (
      <View style={styles.qPassage}>
        <Text>{question.passage}</Text>
      </View>
    )}

    <Text style={{ fontSize: 9, marginBottom: 8 }}>{question.question}</Text>

    <View style={styles.qOptions}>
      {question.options.map((opt, i) => (
        <Text key={i} style={styles.qOption}>{opt}</Text>
      ))}
    </View>

    <View style={[styles.boxSolution, { marginTop: 10 }]} wrap={false}>
      <View style={styles.solutionRow}>
        <Text style={styles.solutionLabel}>정답</Text>
        <Text style={styles.solutionText}>{question.answer}</Text>
      </View>
      <View style={styles.solutionRow}>
        <Text style={styles.solutionLabel}>해설</Text>
        <Text style={styles.solutionText}>{question.explanation}</Text>
      </View>
    </View>
  </View>
);

// 파트 페이지 컴포넌트
const PartPage: React.FC<{ part: StudyGuidePart }> = ({ part }) => (
  <Page size="A4" style={styles.page}>
    <Text style={styles.partTitle}>PART {part.partNum}. {part.title}</Text>
    <Text style={styles.partSubtitle}>{part.subtitle}</Text>

    {/* 출제 경향 */}
    <Text style={styles.sectionTitle}>출제 경향</Text>
    <View style={styles.trendBox} wrap={false}>
      <Text style={styles.trendText}>{part.trend}</Text>
    </View>

    {/* 파트별 컨텐츠 */}
    {part.keyVocab && part.keyVocab.length > 0 && (
      <>
        <Text style={styles.subTitle}>핵심 어휘</Text>
        <VocabTable vocabList={part.keyVocab} />
      </>
    )}

    {part.keyPoints && part.keyPoints.length > 0 && (
      <>
        <Text style={styles.subTitle}>핵심 문법 포인트</Text>
        <GrammarPoints points={part.keyPoints} />
      </>
    )}

    {part.logicTypes && part.logicTypes.length > 0 && (
      <>
        <Text style={styles.subTitle}>3대 킬러 논리</Text>
        <LogicTypes types={part.logicTypes} />
      </>
    )}

    {part.themes && part.themes.length > 0 && (
      <>
        <Text style={styles.subTitle}>주요 테마</Text>
        <ThemeList themes={part.themes} />
      </>
    )}

    {part.questionTypes && part.questionTypes.length > 0 && (
      <>
        <Text style={styles.subTitle}>문제 유형별 접근법</Text>
        <QuestionTypes types={part.questionTypes} />
      </>
    )}

    {/* 기출 예제 */}
    <Text style={styles.sectionTitle}>기출 예제</Text>
    <SampleQuestionBox question={part.sampleQuestion} />

    {/* 공략 전략 */}
    <Text style={styles.sectionTitle}>공략 전략</Text>
    <View style={styles.strategyBox} wrap={false}>
      <Text style={styles.strategyTitle}>■ 핵심 전략</Text>
      <Text style={styles.strategyText}>{part.strategy}</Text>
    </View>

    {/* 함정 패턴 */}
    {part.trapPatterns && part.trapPatterns.length > 0 && (
      <View style={styles.trapBox} wrap={false}>
        <Text style={styles.trapTitle}>⚠ 주의! 자주 나오는 함정 패턴</Text>
        {part.trapPatterns.map((trap, i) => (
          <Text key={i} style={styles.trapItem}>• {trap}</Text>
        ))}
      </View>
    )}

    <Text
      style={styles.pageNumber}
      render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      fixed
    />
  </Page>
);

// 최종 전략 페이지
const FinalStrategyPage: React.FC<{ data: StudyGuideData }> = ({ data }) => (
  <Page size="A4" style={styles.page}>
    <Text style={styles.partTitle}>PART 5. 최종 전략</Text>
    <Text style={styles.partSubtitle}>시험 대비 완벽 가이드</Text>

    {/* 시간 배분 */}
    <Text style={styles.sectionTitle}>시간 배분 전략</Text>
    <View style={styles.timeBox} wrap={false}>
      <View style={styles.timeItem}>
        <Text style={styles.timeLabel}>어휘</Text>
        <Text style={styles.timeValue}>{data.timeAllocation.vocabulary}</Text>
      </View>
      <View style={styles.timeItem}>
        <Text style={styles.timeLabel}>문법</Text>
        <Text style={styles.timeValue}>{data.timeAllocation.grammar}</Text>
      </View>
      <View style={styles.timeItem}>
        <Text style={styles.timeLabel}>빈칸 추론</Text>
        <Text style={styles.timeValue}>{data.timeAllocation.blankInference}</Text>
      </View>
      <View style={styles.timeItem}>
        <Text style={styles.timeLabel}>독해</Text>
        <Text style={styles.timeValue}>{data.timeAllocation.reading}</Text>
      </View>
    </View>

    {/* D-Day 전략 */}
    <Text style={styles.sectionTitle}>D-Day 학습 계획</Text>

    <View style={styles.dDayBox} wrap={false}>
      <Text style={styles.dDayTitle}>D-30</Text>
      {data.finalStrategy.d30.map((item, i) => (
        <Text key={i} style={styles.dDayItem}>• {item}</Text>
      ))}
    </View>

    <View style={styles.dDayBox} wrap={false}>
      <Text style={styles.dDayTitle}>D-7</Text>
      {data.finalStrategy.d7.map((item, i) => (
        <Text key={i} style={styles.dDayItem}>• {item}</Text>
      ))}
    </View>

    <View style={styles.dDayBox} wrap={false}>
      <Text style={styles.dDayTitle}>D-Day</Text>
      {data.finalStrategy.dDay.map((item, i) => (
        <Text key={i} style={styles.dDayItem}>• {item}</Text>
      ))}
    </View>

    {/* 자주 하는 실수 */}
    <Text style={styles.sectionTitle}>자주 하는 실수</Text>
    <View style={styles.trapBox} wrap={false}>
      {data.commonMistakes.map((mistake, i) => (
        <Text key={i} style={styles.trapItem}>• {mistake}</Text>
      ))}
    </View>

    {/* 핵심 요약 */}
    <View style={styles.keyTakeaway} wrap={false}>
      <Text style={styles.keyTakeawayTitle}>핵심 요약 - 시험 직전 체크!</Text>
      {data.keyTakeaways.map((takeaway, i) => (
        <Text key={i} style={styles.keyTakeawayItem}>✓ {takeaway}</Text>
      ))}
    </View>

    <Text
      style={styles.pageNumber}
      render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      fixed
    />
  </Page>
);

// 메인 컴포넌트
interface StudyGuidePDFProps {
  data: StudyGuideData;
}

const StudyGuidePDF: React.FC<StudyGuidePDFProps> = ({ data }) => (
  <Document>
    <CoverPage data={data} />
    <TocPage data={data} />
    {data.parts.map((part) => (
      <PartPage key={part.partNum} part={part} />
    ))}
    <FinalStrategyPage data={data} />
  </Document>
);

export default StudyGuidePDF;
