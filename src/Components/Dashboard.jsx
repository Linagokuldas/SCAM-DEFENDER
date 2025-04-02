import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import UrlScanner from './UrlScanner';
import FileScanner from './FileScanner';
import PhoneScanner from './PhoneScanner';
import './Dashboard.css';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('url');

  return (
    <div className="dashboard">
      <Header />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'url' && <UrlScanner />}
      {activeTab === 'file' && <FileScanner />}
      {activeTab === 'phone' && <PhoneScanner />}
    </div>
  );
}