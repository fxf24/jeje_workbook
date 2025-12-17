import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import WorkbookPDF from './components/WorkbookPDF';
import { sentences, DAY_NUMBER } from './data/sentences';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>제제편입 구문 독해 워크북</h1>
        <p>DAY {DAY_NUMBER} - {sentences.length}문장</p>
        <PDFDownloadLink
          document={<WorkbookPDF sentences={sentences} />}
          fileName={`jeje_day${DAY_NUMBER}_workbook.pdf`}
          className="download-btn"
        >
          {({ loading }) => (
            <span>{loading ? 'PDF 생성 중...' : 'PDF 다운로드'}</span>
          )}
        </PDFDownloadLink>
      </header>
    </div>
  );
}

export default App;