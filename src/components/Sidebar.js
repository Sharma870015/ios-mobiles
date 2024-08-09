import React from 'react';
import './Sidebar.css'; // Import the CSS file

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-toggle" onClick={onClose}>
        &times;
      </button>
      <div className="sidebar-content">
        <div className="sidebar-item">
          <a href="/">Home</a>
        </div>
        <div className="sidebar-item">
          <a href="/settings">Settings</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
