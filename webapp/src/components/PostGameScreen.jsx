import React, { useEffect, useState } from 'react';
import './PostGameScreen.css';
import { playSFX } from '../utils/sfx';

const PostGameScreen = ({ gameStats, onToDashboard, onReplay }) => {
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    // Small delay before showing stats, like a real console
    const timer = setTimeout(() => {
      setShowStats(true);
      playSFX('powerup');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const totalValue = gameStats.finalCash + gameStats.taxesPaid;
  const retainedPercent = totalValue > 0 ? (gameStats.finalCash / totalValue) * 100 : 0;

  // Grade calculation
  let grade = 'F';
  let gradeColor = '#ef4444';
  let comment = '¡BANCARROTA FISCAL!';
  
  if (retainedPercent >= 95) {
    grade = 'S';
    gradeColor = '#8bac0f';
    comment = '¡ESTRATEGIA ÓPTIMA!';
  } else if (retainedPercent >= 80) {
    grade = 'A';
    gradeColor = '#3b82f6';
    comment = '¡GRAN GESTIÓN!';
  } else if (retainedPercent >= 60) {
    grade = 'C';
    gradeColor = '#eab308';
    comment = 'SUPERVIVENCIA DIFÍCIL';
  } else if (retainedPercent >= 40) {
    grade = 'D';
    gradeColor = '#f97316';
    comment = 'DAÑO CRÍTICO';
  }

  return (
    <div className="postgame-container">
      <div className="scanlines"></div>
      <div className="pg-screen">
        <h1 className="pg-title glitch" data-text="MISSION COMPLETE">MISSION COMPLETE</h1>
        
        {showStats && (
          <div className="pg-stats-card fade-in">
            <div className="pg-stat-row">
              <span>Jurisdicción Base:</span>
              <span className="pg-hl">{gameStats.jurisdiction}</span>
            </div>
            <div className="pg-stat-row">
              <span>Caja Final (Neto):</span>
              <span className="pg-success">US$ {gameStats.finalCash.toLocaleString()}</span>
            </div>
            <div className="pg-stat-row">
              <span>Fricción Fiscal:</span>
              <span className="pg-danger">- US$ {gameStats.taxesPaid.toLocaleString()}</span>
            </div>
            
            <div className="pg-grade-section">
              <span className="pg-grade-label">EFICIENCIA FISCAL</span>
              <div className="pg-grade-circle" style={{ borderColor: gradeColor, color: gradeColor }}>
                {grade}
              </div>
              <span className="pg-comment" style={{ color: gradeColor }}>{comment}</span>
            </div>

            <div className="pg-actions">
              <button className="pg-btn pg-btn-primary" onClick={onToDashboard}>
                ► Ver Dashboard Analítico
              </button>
              <button className="pg-btn pg-btn-secondary" onClick={onReplay}>
                ⟲ Jugar de Nuevo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostGameScreen;
