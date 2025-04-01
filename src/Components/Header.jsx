import React from 'react';
import './dashboard.css';

export default function Header() {
  return (
    <header className="dashboard-header">
      <div className="header-content">
        <h1>ScamDefender</h1>
        <div className="user-profile">
          <span>Welcome, User</span>
          <div className="avatar">U</div>
        </div>
      </div>
    </header>
  );
}