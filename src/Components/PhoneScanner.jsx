import React, { useState } from 'react';
import Button from './Button';
import './dashboard.css';

export default function PhoneScanner() {
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState(null);

  const handleScan = () => {
    // Mock scan result
    setResult({
      scam: Math.random() > 0.7,
      reports: Math.floor(Math.random() * 50)
    });
  };

  return (
    <div className="scanner">
      <h2>Phone Number Check</h2>
      <div className="scanner-input">
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
        />
        <Button onClick={handleScan}>Check</Button>
      </div>
      {result && (
        <div className={`result ${result.scam ? 'unsafe' : 'safe'}`}>
          {result.scam 
            ? `⚠️ ${result.reports} scam reports` 
            : '✅ No scam reports found'}
        </div>
      )}
    </div>
  );
}