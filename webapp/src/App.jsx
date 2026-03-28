import React, { useState, useEffect } from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import SimulatorGBA from './components/SimulatorGBA';
import DashboardOdisea from './components/DashboardOdisea';
import PostGameScreen from './components/PostGameScreen';

function App() {
  const [gameState, setGameState] = useState('MENU');
  const [isFading, setIsFading] = useState(false);
  const [bgMusic, setBgMusic] = useState(null);
  
  const [gameStats, setGameStats] = useState({
    jurisdiction: null,
    finalCash: 0,
    taxesPaid: 0
  });

  useEffect(() => {
    const audio = new Audio('/The_Final_Save.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBgMusic(audio);
    
    const playAttempt = () => {
      audio.play().catch(() => {
        console.warn("Autoplay blocked. Se activará con clics o teclas.");
      });
    };
    
    playAttempt();

    const enableAudio = () => {
      audio.play().catch(() => console.log("Audio block cleared"));
      window.removeEventListener('click', enableAudio);
      window.removeEventListener('keydown', enableAudio);
    };

    window.addEventListener('click', enableAudio);
    window.addEventListener('keydown', enableAudio);

    return () => {
      audio.pause();
      window.removeEventListener('click', enableAudio);
      window.removeEventListener('keydown', enableAudio);
    };
  }, []);

  const transitionTo = (newState) => {
    setIsFading(true);
    setTimeout(() => {
      setGameState(newState);
      setTimeout(() => setIsFading(false), 50); // slight delay to allow render before fading in
    }, 500);
  };

  const startGame = () => {
    transitionTo('GAME');
    if (bgMusic) {
      bgMusic.play().catch(e => console.error("Audio block:", e));
    }
  };

  return (
    <div className={`app-container ${isFading ? 'fade-to-black' : 'fade-in'}`}>
      {gameState === 'MENU' && (
        <MainMenu onStart={startGame} />
      )}
      
      {gameState === 'GAME' && (
        <SimulatorGBA 
          onFinish={(stats) => {
            setGameStats(stats);
            transitionTo('POSTGAME');
          }} 
        />
      )}

      {gameState === 'POSTGAME' && (
        <PostGameScreen 
          gameStats={gameStats}
          onToDashboard={() => transitionTo('DASHBOARD')}
          onReplay={() => transitionTo('GAME')}
        />
      )}

      {gameState === 'DASHBOARD' && (
        <DashboardOdisea 
          gameStats={gameStats}
          onRestart={() => transitionTo('MENU')}
        />
      )}
    </div>
  );
}

export default App;
