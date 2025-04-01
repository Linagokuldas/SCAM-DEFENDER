import React, { useState } from 'react';
import Button from './Button';
import './dashboard.css';

export default function FileScanner() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleScan = () => {
    // Mock scan result
    setResult({
      safe: Math.random() > 0.3,
      details: ['No viruses detected', 'Valid file signature']
    });
  };

  return (
    <div className="scanner">
      <h2>File Scanner</h2>
      <div className="file-upload">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <Button 
          onClick={handleScan} 
          disabled={!file}
        >
          Scan File
        </Button>
      </div>
      {file && <p>Selected: {file.name}</p>}
      {result && (
        <div className={`result ${result.safe ? 'safe' : 'unsafe'}`}>
          {result.safe ? '✅ File is Safe' : '⚠️ Malicious Content Detected'}
        </div>
      )}
    </div>
  );
}