import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import WorkbookPDF from './components/WorkbookPDF';
import StudyGuidePDF from './components/StudyGuidePDF';
import { Sentence, StudyGuideData } from './data/types';
import { analyzeSentences, analyzeStudyGuide, PDFType } from './services/claudeApi';
import './App.css';

interface PDFOption {
  id: PDFType;
  label: string;
  description: string;
  placeholder: string;
}

const pdfOptions: PDFOption[] = [
  {
    id: 'workbook',
    label: '구문 분석 워크북',
    description: '구문 분석 중심 · 간결한 문제/해설',
    placeholder: `분석할 영어 문장을 입력하세요.
여러 문장은 줄바꿈으로 구분합니다.

예시:
The unprecedented surge in global temperatures has prompted urgent calls for action.
Despite the apparent simplicity of the solution, implementing it remains challenging.`,
  },
  {
    id: 'studyguide',
    label: '끝끝팩 학습 가이드',
    description: '대학별 시험 분석 · 출제 전략 · 파트별 공략',
    placeholder: `대학별 편입 시험 경향 분석 데이터를 입력하세요.

예시 형식:
[대학명] 편입영어 시험 분석

1. 기본 정보
- 총 문항: 40문항
- 시험 시간: 60분

2. 유형별 출제 문항 수
| 연도 | 어휘 | 문법 | 빈칸추론 | 독해 |
| 2024 | 10 | 8 | 12 | 10 |
| 2023 | 10 | 8 | 10 | 12 |

3. 핵심 어휘 목록
- quintessential (전형적인)
- ephemeral (일시적인)
...

4. 출제 경향 분석
- 어휘: 고난도 동의어 문제 증가
- 문법: 관계사/분사구문 집중 출제
- 빈칸추론: 대조 논리 위주
- 독해: 과학/사회 지문 비중 증가`,
  },
];

function App() {
  const [selectedPDF, setSelectedPDF] = useState<PDFType>('workbook');
  const [inputText, setInputText] = useState('');
  const apiKey = process.env.REACT_APP_CLAUDE_API_KEY || '';
  const [analyzedSentences, setAnalyzedSentences] = useState<Sentence[]>([]);
  const [studyGuideData, setStudyGuideData] = useState<StudyGuideData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [progressStatus, setProgressStatus] = useState('');
  const [error, setError] = useState('');


  const currentOption = pdfOptions.find((o) => o.id === selectedPDF)!;

  const handleTabChange = (pdfType: PDFType) => {
    setSelectedPDF(pdfType);
    setAnalyzedSentences([]);
    setStudyGuideData(null);
    setError('');
  };

  const handleAnalyze = async () => {
    if (!inputText.trim()) {
      setError(selectedPDF === 'workbook' ? '문장을 입력해주세요.' : '시험 분석 데이터를 입력해주세요.');
      return;
    }
    if (!apiKey) {
      setError('API 키가 설정되지 않았습니다. .env 파일을 확인해주세요.');
      return;
    }

    setError('');
    setIsLoading(true);
    setAnalyzedSentences([]);
    setStudyGuideData(null);

    try {
      if (selectedPDF === 'workbook') {
        const sentenceList = inputText.split('\n');
        const results = await analyzeSentences(
          sentenceList,
          apiKey,
          selectedPDF,
          (current, total) => {
            setProgress({ current, total });
          }
        );
        setAnalyzedSentences(results);
      } else {
        const result = await analyzeStudyGuide(
          inputText,
          apiKey,
          (status) => {
            setProgressStatus(status);
          }
        );
        setStudyGuideData(result);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '분석 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
      setProgressStatus('');
    }
  };

  const renderPDF = () => {
    if (selectedPDF === 'studyguide' && studyGuideData) {
      return <StudyGuidePDF data={studyGuideData} />;
    }
    return <WorkbookPDF sentences={analyzedSentences} />;
  };

  const hasResults = selectedPDF === 'workbook'
    ? analyzedSentences.length > 0
    : studyGuideData !== null;

  const getResultText = () => {
    if (selectedPDF === 'workbook') {
      return `${analyzedSentences.length}개 문장 분석 완료`;
    }
    return `${studyGuideData?.university || ''} 학습 가이드 생성 완료`;
  };

  const getLoadingText = () => {
    if (selectedPDF === 'workbook') {
      return `분석 중... (${progress.current}/${progress.total})`;
    }
    return progressStatus || '분석 중...';
  };

  const getFileName = () => {
    const timestamp = new Date().toISOString().slice(0, 10);
    return `jeje_${selectedPDF}_${timestamp}.pdf`;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>제제편입 구문 독해 워크북</h1>
        <p className="header-desc">문장 입력 → AI 분석 → PDF 생성</p>
      </header>

      <main className="App-main">
        <div className="main-container">
          {/* PDF 타입 선택 탭 */}
          <div className="tab-container">
            {pdfOptions.map((option) => (
              <button
                key={option.id}
                className={`tab-btn ${selectedPDF === option.id ? 'active' : ''}`}
                onClick={() => handleTabChange(option.id)}
              >
                <span className="tab-label">{option.label}</span>
                <span className="tab-desc">{option.description}</span>
              </button>
            ))}
          </div>

          {/* 입력 섹션 */}
          <div className="input-section">
            <div className="input-group">
              <label>
                {selectedPDF === 'workbook'
                  ? '영어 문장 입력 (줄바꿈으로 구분)'
                  : '대학별 시험 분석 데이터 입력'}
              </label>
              <textarea
                placeholder={currentOption.placeholder}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="sentence-input"
                rows={10}
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button
              onClick={handleAnalyze}
              disabled={isLoading}
              className="analyze-btn"
            >
              {isLoading
                ? getLoadingText()
                : `AI 분석 시작 (${currentOption.label})`}
            </button>
          </div>

          {/* 결과 섹션 */}
          {hasResults && (
            <div className="result-section">
              <div className="result-header">
                <span className="result-badge">{currentOption.label}</span>
                <span className="result-count">
                  {getResultText()}
                </span>
              </div>
              <PDFDownloadLink
                document={renderPDF()}
                fileName={getFileName()}
                className="download-btn"
              >
                {({ loading }) => (
                  <span>
                    {loading ? 'PDF 생성 중...' : `${currentOption.label} PDF 다운로드`}
                  </span>
                )}
              </PDFDownloadLink>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
