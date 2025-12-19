import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import { Sentence } from '../data/types';

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
  ],
});

const NAVY = '#1e3a5f';
const LIGHT_NAVY = '#e8f0f7';
const DARK_GRAY = '#333333';
const MEDIUM_GRAY = '#666666';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Pretendard',
    fontSize: 10,
  },
  coverPage: {
    padding: 40,
    fontFamily: 'Pretendard',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: NAVY,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: MEDIUM_GRAY,
    textAlign: 'center',
    marginBottom: 30,
  },
  tagline: {
    fontSize: 14,
    fontWeight: 'bold',
    color: NAVY,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: NAVY,
    backgroundColor: LIGHT_NAVY,
    padding: 8,
    textAlign: 'center',
    marginBottom: 15,
  },
  sentenceNum: {
    fontSize: 11,
    fontWeight: 'bold',
    color: NAVY,
    marginTop: 15,
    marginBottom: 8,
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    color: NAVY,
    marginTop: 8,
    marginBottom: 4,
  },
  english: {
    fontSize: 10,
    color: DARK_GRAY,
    marginBottom: 8,
    lineHeight: 1.5,
  },
  vocab: {
    fontSize: 9,
    color: MEDIUM_GRAY,
    marginLeft: 10,
    marginBottom: 2,
  },
  blank: {
    fontSize: 9,
    color: DARK_GRAY,
    marginLeft: 5,
    marginBottom: 3,
  },
  quiz: {
    fontSize: 9,
    color: DARK_GRAY,
    marginLeft: 5,
    marginBottom: 3,
  },
  korean: {
    fontSize: 9,
    color: DARK_GRAY,
    marginLeft: 5,
    marginBottom: 8,
    lineHeight: 1.5,
  },
  explanation: {
    fontSize: 9,
    color: DARK_GRAY,
    marginLeft: 5,
    marginBottom: 6,
    lineHeight: 1.4,
  },
  tip: {
    fontSize: 9,
    color: NAVY,
    backgroundColor: LIGHT_NAVY,
    padding: 8,
    marginLeft: 5,
    marginBottom: 10,
    lineHeight: 1.4,
  },
  answer: {
    fontSize: 9,
    fontWeight: 'bold',
    color: NAVY,
    marginLeft: 5,
    marginBottom: 4,
  },
  translationBox: {
    backgroundColor: '#f5f5f5',
    height: 50,
    marginBottom: 8,
  },
  pageNumber: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 9,
    color: MEDIUM_GRAY,
  },
});

interface ProblemSectionProps {
  sentence: Sentence;
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ sentence }) => (
  <View wrap={false}>
    <Text style={styles.sentenceNum}>문장 {sentence.num}</Text>

    <Text style={styles.label}>[어휘]</Text>
    {sentence.vocab.map((v, i) => (
      <Text key={i} style={styles.vocab}>• {v}</Text>
    ))}

    <Text style={styles.label}>[문장]</Text>
    <Text style={styles.english}>{sentence.sentence}</Text>

    <Text style={styles.label}>[해석]</Text>
    <View style={styles.translationBox} />

    <Text style={styles.label}>[논리적 요약]</Text>
    {sentence.logic_blanks.map((blank, i) => (
      <Text key={i} style={styles.blank}>{blank}</Text>
    ))}

    <Text style={styles.label}>[O/X 퀴즈]</Text>
    {sentence.quiz.map((q, i) => (
      <Text key={i} style={styles.quiz}>{q}</Text>
    ))}
  </View>
);

interface AnswerSectionProps {
  sentence: Sentence;
}

const AnswerSection: React.FC<AnswerSectionProps> = ({ sentence }) => (
  <View wrap={false}>
    <Text style={styles.sentenceNum}>문장 {sentence.num} 해설</Text>

    <Text style={styles.label}>[해석]</Text>
    <Text style={styles.korean}>{sentence.translation}</Text>

    <Text style={styles.label}>[논리적 요약 정답]</Text>
    {sentence.logic_answer.map((ans, i) => (
      <Text key={i} style={styles.explanation}>• {ans}</Text>
    ))}

    <Text style={styles.explanation}>{sentence.explanation}</Text>

    <Text style={styles.label}>[O/X 정답]</Text>
    <Text style={styles.answer}>{sentence.quiz_answers}</Text>

    <Text style={styles.label}>[O/X 해설]</Text>
    {sentence.quiz_explanations.map((exp, i) => (
      <Text key={i} style={styles.explanation}>{exp}</Text>
    ))}

    <Text style={styles.tip}>{sentence.tip}</Text>
  </View>
);

interface WorkbookPDFProps {
  sentences: Sentence[];
}

const WorkbookPDF: React.FC<WorkbookPDFProps> = ({ sentences }) => (
  <Document>
    {/* Cover Page */}
    <Page size="A4" style={styles.coverPage}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.title}>제제편입</Text>
        <Text style={styles.subtitle}>구문 독해 워크북</Text>
        <Text style={styles.tagline}>문장의 논리를 파악하라!</Text>
      </View>
    </Page>

    {/* Problem Section */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>문제</Text>
      {sentences.map((sentence) => (
        <ProblemSection key={sentence.num} sentence={sentence} />
      ))}
      <Text style={styles.pageNumber} render={({ pageNumber }) => pageNumber} fixed />
    </Page>

    {/* Answer Section */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>해설</Text>
      {sentences.map((sentence) => (
        <AnswerSection key={sentence.num} sentence={sentence} />
      ))}
      <Text style={styles.pageNumber} render={({ pageNumber }) => pageNumber} fixed />
    </Page>
  </Document>
);

export default WorkbookPDF;