// Full replacement of SimulatorGBA.jsx
import React, { useState } from 'react';
import './SimulatorGBA.css';
import { FounderSprite, VCSprite, ArcaSprite, UncleSamSprite } from './Sprites';
import { PreSeedBg, SerieABg, ExitBg } from './Backgrounds';
import { playSFX } from '../utils/sfx';

const GAME_STAGES = [
  {
    id: 'pre_seed',
    title: 'Ronda Pre-Semilla',
    text: 'Un VC de Silicon Valley te ofrece US$ 500,000 bajo un SAFE (Nota Convertible). ¿Dónde constituyes la empresa madre?',
    options: [
      {
        label: 'A) S.A. en Argentina',
        jurisdiction: 'AR',
        resultText: 'ARCA trata el SAFE como "pasivo". Te cobran 35% de Ganancias sobre intereses presuntos que nunca existieron. ¡Tu pista (runway) se acorta!',
        cashChange: -100000,
        taxesPaid: 100000,
      },
      {
        label: 'B) C-Corp en Delaware',
        jurisdiction: 'DE',
        resultText: '¡Brillante! Delaware no cobra impuestos por notas convertibles. Es el estándar global. Mantienes todo el capital.',
        cashChange: 500000,
        taxesPaid: 0,
      },
      {
        label: 'C) Holding en Caimán',
        jurisdiction: 'KY',
        resultText: 'Caimán es 100% tax neutral. 0% de impuestos corporativos. Todo el capital fluye limpio para crecimiento.',
        cashChange: 500000,
        taxesPaid: 0,
      }
    ]
  },
  {
    id: 'serie_a',
    title: 'Serie A: Conversión',
    text: 'Levantas una Serie A (US$ 2M). El SAFE se convierte en Equity. ¿Qué haces con el capital?',
    options: [
      {
        label: 'A) Reinvertir en I+D',
        results: {
          'AR': {
            resultText: 'ARCA trata la conversión como "Cancelación de Pasivo" (Bienes Personales). Pagas 35% igual por la recategorización. 💸',
            cashChange: -175000,
            taxesPaid: 175000,
          },
          'DE': {
            resultText: '¡Deducción Section 174! Amortizas gastos de I+D y la conversión en sí no genera impacto fiscal neto inicial. 🛡️',
            cashChange: 2000000,
            taxesPaid: 0,
          },
          'KY': {
            resultText: 'Eventos de equity son fiscalmente neutros por diseño offshore. Nada que deducir, nada que pagar. 🌊',
            cashChange: 2000000,
            taxesPaid: 0,
          }
        }
      },
      {
        label: 'B) Distribuir Dividendos',
        results: {
          'AR': {
            resultText: 'Pésima idea en AR. Además de la conversión y IIBB, ARCA retiene 7% adicional de dividendos cruzados.',
            cashChange: -300000,
            taxesPaid: 300000,
          },
          'DE': {
            resultText: 'Pagas impuesto corporativo + retención de dividendos (15-20%) en EE.UU. No es óptimo, pero sobrevivís.',
            cashChange: 1600000,
            taxesPaid: 400000,
          },
          'KY': {
            resultText: '0% Withholding Tax sobre dividendos en Caimán. Distribuís con total fluidez a la holding.',
            cashChange: 2000000,
            taxesPaid: 0,
          }
        }
      }
    ]
  },
  {
    id: 'exit',
    title: 'El Exit',
    text: 'Un coloso tech quiere adquirir tu startup. ¡Llegó el evento de liquidez (Valuación US$ 50M)!',
    options: [
       {
        label: 'A) Vender TODO (M&A) hoy',
        results: {
          'AR': {
            resultText: 'Combo letal: Corporate tax 35% + Dividendos 7% + Capital Gains 15%. Dejás el 44% de tu obra de vida. Muerte súbita.',
            cashChange: 40000000,
            taxesPaid: 22000000,
          },
          'DE': {
            resultText: 'Bajo Section 1202 (QSBS), exento hasta US$ 10M o 10x la base. 0% de impuestos federales por venta de acciones! 🎉',
            cashChange: 50000000,
            taxesPaid: 0,
          },
          'KY': {
            resultText: '0% Capital Gains tax en Caimán. La venta internacional de acciones de la holding se concreta íntegra al 100%. 💎',
            cashChange: 50000000,
            taxesPaid: 0,
          }
        }
      },
      {
        label: 'B) Esperar para hacer IPO',
        results: {
          'AR': {
            resultText: 'AR cobra hasta 2.25% anual de Bienes Personales sobre acciones que NO vendiste ni dan liquidez. Te desangran lentamente. 🩸',
            cashChange: 48000000,
            taxesPaid: 2000000,
          },
          'DE': {
            resultText: 'Holding puro: No pagas impuestos corporativos federales extra sobre acciones no vendidas (apreciación no realizada).',
            cashChange: 50000000,
            taxesPaid: 0,
          },
          'KY': {
            resultText: 'Caimán te da flexibilidad absoluta para salir a cotizar en LSE o NYSE libre de impuestos pre-venta local.',
            cashChange: 50000000,
            taxesPaid: 0,
          }
        }
      }
    ]
  }
];

const RANDOM_EVENTS = [
  {
    text: "🔥 ¡Resolución sorpresa de la IGJ en Argentina! Modifican reglas de las S.A.S. retroactivamente y frenan aportes irrevocables.",
    jurisdictions: ['AR'],
    cashChange: -15000,
    taxesPaid: 15000,
  },
  {
    text: "🔥 Cepo Cambiario: AWS cobra tu nube en dólares y la tarjeta suma 30% PAIS + 30% Ganancias extra. Sobrecosto letal.",
    jurisdictions: ['AR'],
    cashChange: -12000,
    taxesPaid: 12000,
  },
  {
    text: "🔥 Angel local ofrece un préstamo puente (Bridge): ARCA exige pago del 35% de impuesto sobre intereses presuntos de mercado.",
    jurisdictions: ['AR'],
    cashChange: -20000,
    taxesPaid: 20000,
  },
  {
    text: "🌟 Delaware Tax Credit: Recibís un subsidio/grant estatal por desarrollar propiedad intelectual en el estado libre de impuestos.",
    jurisdictions: ['DE'],
    cashChange: 25000,
    taxesPaid: 0,
  },
  {
    text: "🌟 Registered Agent en KY: El Agente Residente de Caimán te aprueba el compliance CIMA KYC rápidamente, despejando la operación.",
    jurisdictions: ['KY'],
    cashChange: 0,
    taxesPaid: 0,
  }
];

const SimulatorGBA = ({ onFinish }) => {
  const [stageIndex, setStageIndex] = useState(0);
  const [jurisdiction, setJurisdiction] = useState(null);
  const [cash, setCash] = useState(0);
  const [totalTaxes, setTotalTaxes] = useState(0);
  const [dialogue, setDialogue] = useState(GAME_STAGES[0].text);
  const [showingResult, setShowingResult] = useState(false);
  
  // Random event state
  const [activeRandomEvent, setActiveRandomEvent] = useState(null);

  // Derive stage
  const stage = GAME_STAGES[stageIndex];
  
  // HP Bar Logic: Assuming max potential across 3 stages is ~ 52M
  // We\'ll base runway purely on absolute taxes taken vs total flow
  const idealTotal = cash + totalTaxes; 
  const currentHP = idealTotal > 0 ? (cash / idealTotal) * 100 : 100;

  const handleChoice = (option) => {
    let result = '';
    let j = jurisdiction;
    let newCash = cash;
    let newTaxes = totalTaxes;

    if (activeRandomEvent) {
      // It was an active random event, just move to the real stage text
      setActiveRandomEvent(null);
      setDialogue(GAME_STAGES[stageIndex].text);
      setShowingResult(false);
      return;
    }

    if (stageIndex === 0) {
      j = option.jurisdiction;
      setJurisdiction(j);
      result = option.resultText;
      newCash += option.cashChange;
      newTaxes += option.taxesPaid;
      if (option.taxesPaid > 0) playSFX('damage'); else playSFX('powerup');
    } else {
      const choiceResult = option.results[jurisdiction];
      result = choiceResult.resultText;
      if (choiceResult.cashChange) newCash += choiceResult.cashChange;
      newTaxes += choiceResult.taxesPaid;
      if (choiceResult.taxesPaid > 0) playSFX('damage'); else playSFX('select');
    }

    setCash(newCash);
    setTotalTaxes(newTaxes);
    setDialogue(result);
    setShowingResult(true);
  };

  const nextStage = () => {
    // Check random event chance (35%) between stages
    if (!activeRandomEvent && showingResult && stageIndex < GAME_STAGES.length - 1 && Math.random() < 0.35) {
      const possibleEvents = RANDOM_EVENTS.filter(e => e.jurisdictions.includes(jurisdiction));
      if (possibleEvents.length > 0) {
        const ev = possibleEvents[Math.floor(Math.random() * possibleEvents.length)];
        setActiveRandomEvent(ev);
        setCash(prev => prev + ev.cashChange);
        setTotalTaxes(prev => prev + ev.taxesPaid);
        setDialogue(ev.text);
        if (ev.taxesPaid > 0) playSFX('damage'); else playSFX('powerup');
        // keep showingResult true so we have a continue button, 
        // but it will clear the event in handleChoice
        return; 
      }
    }

    if (stageIndex === GAME_STAGES.length - 1) {
      playSFX('powerup');
      onFinish({ jurisdiction, finalCash: cash, taxesPaid: totalTaxes });
    } else {
      playSFX('select');
      setStageIndex(stageIndex + 1);
      setDialogue(GAME_STAGES[stageIndex + 1].text);
      setShowingResult(false);
    }
  };

  return (
    <div className="simulator-container">
      <div className="gba-console">
        <div className="gba-screen-area">
          <div className="scanlines"></div>
          <div className="gba-display">
            {/* Top Bar Stats */}
            <div className="gba-header">
              <span className="truncate-text">{activeRandomEvent ? '⚡ EVENTO FORTUITO' : stage.title}</span>
              <div className="hp-bar-container">
                <span className="hp-label">HP</span>
                <div className="hp-bar">
                  <div className="hp-fill" style={{ width: `${Math.max(0, currentHP)}%`, backgroundColor: currentHP > 50 ? '#8bac0f' : '#ef4444' }}></div>
                </div>
              </div>
              <span className="cash-display">US$ {cash.toLocaleString()}</span>
            </div>
            
            {/* Scene visuals */}
            <div className={`gba-scene stage-${stage.id}`}>
              {/* Dynamic Background */}
              {stage.id === 'pre_seed' && <PreSeedBg />}
              {stage.id === 'serie_a' && <SerieABg />}
              {stage.id === 'exit' && <ExitBg />}
              
              <div className="characters-layer">
                <FounderSprite className={jurisdiction === 'AR' && showingResult ? 'shock' : 'idle'} />

                {/* NPC Character */}
                {!showingResult || activeRandomEvent ? (
                   <>
                     {stage.id === 'pre_seed' && <VCSprite className="idle" />}
                     {stage.id === 'serie_a' && <ArcaSprite className="idle" />}
                     {stage.id === 'exit' && <UncleSamSprite className="idle" />}
                   </>
                ) : (
                  <>
                    {jurisdiction === 'AR' && <ArcaSprite className="attack" />}
                    {(jurisdiction === 'DE' || jurisdiction === 'KY') && <UncleSamSprite className="happy" />}
                  </>
                )}
              </div>
            </div>

            {/* Dialogue Box */}
            <div className="gba-dialogue-box">
              <p>{dialogue}</p>
              
              {!showingResult ? (
                <div className="gba-options">
                  {stageIndex === 0 ? (
                    stage.options.map((opt, i) => (
                      <button key={i} onClick={() => handleChoice(opt)}>
                        {opt.label}
                      </button>
                    ))
                  ) : (
                    stage.options.map((opt, i) => (
                      <button key={i} onClick={() => handleChoice(opt)}>
                        {opt.label}
                      </button>
                    ))
                  )}
                </div>
              ) : (
                <div className="gba-options end-options-layout">
                  {activeRandomEvent ? (
                     <button className="continue-btn" onClick={() => handleChoice({})}>
                       ► Continuar Aventura
                     </button>
                  ) : stageIndex === GAME_STAGES.length - 1 ? (
                    <>
                      <button className="continue-btn action-dash" onClick={nextStage}>
                        🌟 Ver Score Final
                      </button>
                    </>
                  ) : (
                    <button className="continue-btn" onClick={nextStage}>
                      ► Siguiente Fase
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulatorGBA;
