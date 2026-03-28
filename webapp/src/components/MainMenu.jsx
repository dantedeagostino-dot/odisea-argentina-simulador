import React from 'react';
import './MainMenu.css';

const MainMenu = ({ onStart }) => {
  return (
    <div className="menu-container">
      <div className="scanlines"></div>
      <div className="menu-gba-screen">
        <h1 className="menu-title">Odisea<br/>Argentina</h1>
        <p className="menu-subtitle">El Valle de la Muerte Fiscal</p>
        
        <div className="prompt-container">
          <button className="start-btn" onClick={onStart}>
            START GAME
          </button>
        </div>

        <div className="footer-credits">
          <p>© 2026 Laboratorio Colossus</p>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
