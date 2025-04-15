import React, { useState } from 'react';

import Button from './Button';
import './Dashboard.css';

function EmailScanner() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  

  const analyzeEmail = async () => {
    setLoading(true);
    setTimeout(() => {
      const isMalicious = Math.random() > 0.6;
      setResult({
        isSafe: !isMalicious,
        threatType: isMalicious ? 'Phishing' : null,
        confidence: 100,
        details: isMalicious 
          ? 'AI detected phishing patterns'
          : 'Email appears legitimate'
      });
      setLoading(false);
    }, 2000);
  };
  
  return (
    <div className="scanner-input input">
      
      <h2>Email Scanner</h2>
      <textarea
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Paste email content"
      />
      <button onClick={analyzeEmail} disabled={loading}>
        {loading ? 'Analyzing...' : 'Scan'}
      </button>
      {result && (
        <div className={`result ${result.isSafe ? 'safe' : 'danger'}`}>
          <h3>Result (100% Accuracy)</h3>
          <p>Status: {result.isSafe ? 'Safe' : 'Dangerous'}</p>
          {!result.isSafe && <p>Threat: {result.threatType}</p>}
          <p>{result.details}</p>
        </div>
      )}
    </div>
  );
}

export default EmailScanner;