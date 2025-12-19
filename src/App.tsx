import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import WorkbookPDF from './components/WorkbookPDF';
import StudyGuidePDF from './components/StudyGuidePDF';
import UniversityAnswerSheetPDF from './components/UniversityAnswerSheetPDF';
import { Sentence, StudyGuideData, UniversityAnswerSheetData } from './data/types';
import { analyzeSentences, analyzeStudyGuide, analyzeAnswerSheet, PDFType } from './services/claudeApi';
import './App.css';

// localStorage 키
const STORAGE_KEY_WORKBOOK = 'jeje_workbook_history';
const STORAGE_KEY_STUDYGUIDE = 'jeje_studyguide_history';
const STORAGE_KEY_ANSWERSHEET = 'jeje_answersheet_history';
const MAX_HISTORY = 5;

interface WorkbookHistory {
  id: string;
  date: string;
  sentences: Sentence[];
}

interface StudyGuideHistory {
  id: string;
  date: string;
  university: string;
  data: StudyGuideData;
}

interface AnswerSheetHistory {
  id: string;
  date: string;
  university: string;
  year: string;
  data: UniversityAnswerSheetData;
}

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
  {
    id: 'answersheet',
    label: '대학별 해설지',
    description: '문제별 상세 해설 · 정답표 · 어휘 정리',
    placeholder: `엑셀에서 복사한 TSV 데이터를 붙여넣으세요.

[어휘 목록] (탭으로 구분)
문제 번호	단어	뜻
1	avert	막다, 피하다
1	inundate	침수시키다

[문제 데이터] (탭으로 구분)
Question_ID	Source_Year	유형 구분	상세 유형 구분	Question_No	Question_Text	Passage	Option_A	Option_B	Option_C	Option_D	Option_E	답
2017_SJU_01	2017			1	주어진 문장의 빈칸에...	The citizens packed...	avert	inundate	emit	trigger		1`,
  },
];

function App() {
  const [selectedPDF, setSelectedPDF] = useState<PDFType>('workbook');
  const [inputText, setInputText] = useState('');
  const apiKey = process.env.REACT_APP_CLAUDE_API_KEY || '';
  const [analyzedSentences, setAnalyzedSentences] = useState<Sentence[]>([]);
  const [studyGuideData, setStudyGuideData] = useState<StudyGuideData | null>(null);
  const [answerSheetData, setAnswerSheetData] = useState<UniversityAnswerSheetData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [progressStatus, setProgressStatus] = useState('');
  const [error, setError] = useState('');

  // 히스토리 state
  const [workbookHistory, setWorkbookHistory] = useState<WorkbookHistory[]>([]);
  const [studyGuideHistory, setStudyGuideHistory] = useState<StudyGuideHistory[]>([]);
  const [answerSheetHistory, setAnswerSheetHistory] = useState<AnswerSheetHistory[]>([]);

  // localStorage에서 히스토리 로드
  useEffect(() => {
    const savedWorkbook = localStorage.getItem(STORAGE_KEY_WORKBOOK);
    const savedStudyGuide = localStorage.getItem(STORAGE_KEY_STUDYGUIDE);
    const savedAnswerSheet = localStorage.getItem(STORAGE_KEY_ANSWERSHEET);
    if (savedWorkbook) setWorkbookHistory(JSON.parse(savedWorkbook));
    if (savedStudyGuide) setStudyGuideHistory(JSON.parse(savedStudyGuide));
    if (savedAnswerSheet) setAnswerSheetHistory(JSON.parse(savedAnswerSheet));
  }, []);

  // 히스토리 저장 함수
  const saveToHistory = (type: PDFType, data: Sentence[] | StudyGuideData | UniversityAnswerSheetData) => {
    const id = Date.now().toString();
    const date = new Date().toLocaleString('ko-KR');

    try {
      if (type === 'workbook') {
        const newHistory: WorkbookHistory = { id, date, sentences: data as Sentence[] };
        const updated = [newHistory, ...workbookHistory].slice(0, MAX_HISTORY);
        setWorkbookHistory(updated);
        localStorage.setItem(STORAGE_KEY_WORKBOOK, JSON.stringify(updated));
      } else if (type === 'studyguide') {
        const guideData = data as StudyGuideData;
        const newHistory: StudyGuideHistory = { id, date, university: guideData.university, data: guideData };
        const updated = [newHistory, ...studyGuideHistory].slice(0, MAX_HISTORY);
        setStudyGuideHistory(updated);
        localStorage.setItem(STORAGE_KEY_STUDYGUIDE, JSON.stringify(updated));
      } else if (type === 'answersheet') {
        const sheetData = data as UniversityAnswerSheetData;
        const newHistory: AnswerSheetHistory = { id, date, university: sheetData.university, year: sheetData.year, data: sheetData };
        // 해설지는 데이터가 커서 최대 2개만 저장
        const updated = [newHistory, ...answerSheetHistory].slice(0, 2);
        setAnswerSheetHistory(updated);
        localStorage.setItem(STORAGE_KEY_ANSWERSHEET, JSON.stringify(updated));
      }
    } catch (err) {
      console.warn('히스토리 저장 실패 (용량 초과 가능):', err);
      // 저장 실패 시 기존 히스토리 삭제 후 재시도
      if (type === 'answersheet') {
        try {
          const sheetData = data as UniversityAnswerSheetData;
          const newHistory: AnswerSheetHistory = { id, date, university: sheetData.university, year: sheetData.year, data: sheetData };
          setAnswerSheetHistory([newHistory]);
          localStorage.setItem(STORAGE_KEY_ANSWERSHEET, JSON.stringify([newHistory]));
        } catch {
          console.warn('해설지 히스토리 저장 불가 - 용량 초과');
        }
      }
    }
  };

  // 히스토리에서 불러오기
  const loadFromHistory = (type: PDFType, id: string) => {
    if (type === 'workbook') {
      const item = workbookHistory.find(h => h.id === id);
      if (item) setAnalyzedSentences(item.sentences);
    } else if (type === 'studyguide') {
      const item = studyGuideHistory.find(h => h.id === id);
      if (item) setStudyGuideData(item.data);
    } else if (type === 'answersheet') {
      const item = answerSheetHistory.find(h => h.id === id);
      if (item) setAnswerSheetData(item.data);
    }
  };

  const currentOption = pdfOptions.find((o) => o.id === selectedPDF)!;

  const handleTabChange = (pdfType: PDFType) => {
    setSelectedPDF(pdfType);
    setAnalyzedSentences([]);
    setStudyGuideData(null);
    setAnswerSheetData(null);
    setError('');
  };

  const handleAnalyze = async () => {
    if (!inputText.trim()) {
      const errorMessages: Record<PDFType, string> = {
        workbook: '문장을 입력해주세요.',
        studyguide: '시험 분석 데이터를 입력해주세요.',
        answersheet: '시험 데이터를 입력해주세요.',
      };
      setError(errorMessages[selectedPDF]);
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
    setAnswerSheetData(null);

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
        saveToHistory('workbook', results);
      } else if (selectedPDF === 'studyguide') {
        const result = await analyzeStudyGuide(
          inputText,
          apiKey,
          (status) => {
            setProgressStatus(status);
          }
        );
        setStudyGuideData(result);
        saveToHistory('studyguide', result);
      } else if (selectedPDF === 'answersheet') {
        const result = await analyzeAnswerSheet(
          inputText,
          apiKey,
          (status) => {
            setProgressStatus(status);
          }
        );
        setAnswerSheetData(result);
        saveToHistory('answersheet', result);
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
    if (selectedPDF === 'answersheet' && answerSheetData) {
      return <UniversityAnswerSheetPDF data={answerSheetData} />;
    }
    return <WorkbookPDF sentences={analyzedSentences} />;
  };

  const hasResults =
    (selectedPDF === 'workbook' && analyzedSentences.length > 0) ||
    (selectedPDF === 'studyguide' && studyGuideData !== null) ||
    (selectedPDF === 'answersheet' && answerSheetData !== null);

  const getResultText = () => {
    if (selectedPDF === 'workbook') {
      return `${analyzedSentences.length}개 문장 분석 완료`;
    }
    if (selectedPDF === 'studyguide') {
      return `${studyGuideData?.university || ''} 학습 가이드 생성 완료`;
    }
    return `${answerSheetData?.university || ''} ${answerSheetData?.year || ''} 해설지 생성 완료`;
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

          {/* 히스토리 섹션 */}
          {((selectedPDF === 'workbook' && workbookHistory.length > 0) ||
            (selectedPDF === 'studyguide' && studyGuideHistory.length > 0) ||
            (selectedPDF === 'answersheet' && answerSheetHistory.length > 0)) && (
            <div className="history-section">
              <h3>최근 기록 (최대 5개)</h3>
              <div className="history-list">
                {selectedPDF === 'workbook' &&
                  workbookHistory.map((item) => (
                    <button
                      key={item.id}
                      className="history-item"
                      onClick={() => loadFromHistory('workbook', item.id)}
                    >
                      <span className="history-date">{item.date}</span>
                      <span className="history-info">{item.sentences.length}개 문장</span>
                    </button>
                  ))}
                {selectedPDF === 'studyguide' &&
                  studyGuideHistory.map((item) => (
                    <button
                      key={item.id}
                      className="history-item"
                      onClick={() => loadFromHistory('studyguide', item.id)}
                    >
                      <span className="history-date">{item.date}</span>
                      <span className="history-info">{item.university}</span>
                    </button>
                  ))}
                {selectedPDF === 'answersheet' &&
                  answerSheetHistory.map((item) => (
                    <button
                      key={item.id}
                      className="history-item"
                      onClick={() => loadFromHistory('answersheet', item.id)}
                    >
                      <span className="history-date">{item.date}</span>
                      <span className="history-info">{item.university} {item.year}</span>
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
