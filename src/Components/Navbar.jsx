import React from 'react';
import './Dashboard.css';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="scanner-nav">
      <button 
        className={activeTab === 'url' ? 'active' : ''}
        onClick={() => setActiveTab('url')}
      >
        URL Scanner
      </button>
      <button
        className={activeTab === 'file' ? 'active' : ''}
        onClick={() => setActiveTab('file')}
      >
        File Scanner
      </button>
      <button
        className={activeTab === 'phone' ? 'active' : ''}
        onClick={() => setActiveTab('phone')}
      >
        Phone Check
      </button>
    </nav>
  );
}