import React, { useEffect, useState } from 'react';
import './DashboardOdisea.css';

const AnimatedCounter = ({ value, duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = parseInt(value, 10);
    if (end === 0) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easing * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <>{count.toLocaleString()}</>;
};

const DashboardOdisea = ({ gameStats, onRestart }) => {
  const isAR = gameStats.jurisdiction === 'AR';
  const jurisdictionName = isAR ? 'S.A. en Argentina' : (gameStats.jurisdiction === 'DE' ? 'C-Corp en Delaware' : 'Holding en Caimán');
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    // Add a slight delay before triggering card animations
    setTimeout(() => setShowCards(true), 300);
  }, []);

  // Calculate percentage of taxes vs total potential outcome
  const totalValue = isAR ? gameStats.finalCash + gameStats.taxesPaid : gameStats.finalCash;
  const taxPercentage = totalValue > 0 ? (gameStats.taxesPaid / totalValue) * 100 : 0;
  const cashPercentage = totalValue > 0 ? (gameStats.finalCash / totalValue) * 100 : 100;

  const shareText = `Jugué Odisea Argentina 🇦🇷 y descubrí que una startup pierde el 44% de su valor en un exit por fricción fiscal.\n\nEn Delaware: 0% federal.\n\nJugar simulador: https://odisea-argentina-simulador.vercel.app/\n\n¿Cuándo cambiamos las reglas? #OdiseaArgentina`;

  return (
    <div className="dashboard-wrapper">
      {/* Background Glow Orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      
      <div className={`glass-container dashboard-container ${showCards ? 'fade-in' : 'opacity-0'}`}>
        
        {/* Navigation & Header */}
        <header className="dash-header flex-col-mobile">
          <div className="header-titles">
            <h1 className={isAR ? 'text-danger glow-danger' : 'text-success glow-success'}>
              {isAR ? 'Diagnóstico: El "Costo Argentino"' : 'Diagnóstico: La Escala Global'}
            </h1>
            <p className="dash-subtitle">
              Resumen Corporativo y Fiscal de operar bajo {jurisdictionName}
            </p>
          </div>
          <button className="return-btn" onClick={onRestart}>
            ⟲ Volver a Inicio
          </button>
        </header>

        {/* Global Stats Matrix */}
        <section className="kpi-matrix">
          <div className="kpi-card outline-glass stagger-1">
            <span className="kpi-label">Valuación Disponible (Neto)</span>
            <div className={`kpi-value ${isAR ? 'text-danger' : 'text-success'}`}>
              US$ <AnimatedCounter value={gameStats.finalCash} />
            </div>
            <span className="kpi-trend">Tu Patrimonio Liquidable</span>
          </div>
          
          <div className="kpi-card outline-glass stagger-2">
            <span className="kpi-label">Fuga por Fricción Fiscal</span>
            <div className={`kpi-value ${isAR ? 'text-danger' : 'text-success'}`}>
              US$ <AnimatedCounter value={gameStats.taxesPaid} />
            </div>
            <span className="kpi-trend">Impuestos y Retenciones Pagadas</span>
          </div>

          <div className="kpi-card outline-glass kpi-chart-card stagger-3">
            <span className="kpi-label">Distribución del Valor Generado</span>
            <div className="micro-chart">
              <div 
                className="mc-tax anim-width" 
                style={{ width: `${taxPercentage}%` }} 
                title={`Estado: ${taxPercentage.toFixed(1)}%`}
              >
                {taxPercentage > 5 && `${taxPercentage.toFixed(0)}%`}
              </div>
              <div 
                className="mc-cash anim-width" 
                style={{ width: `${Math.max(cashPercentage, 1)}%` }} 
                title={`Founder: ${cashPercentage.toFixed(1)}%`}
              >
                {cashPercentage > 5 && `${cashPercentage.toFixed(0)}%`}
              </div>
            </div>
          </div>
        </section>

        <hr className="glass-divider" />

        {/* Deep Dive Institutional Report Grid */}
        <h2 className="section-title">Análisis de Barreras y Complejidad Regulatoria</h2>
        <div className="deep-dive-grid">
          
          {/* Column 1: Impuestos y Flujo de Caja */}
          <article className="report-module stagger-4">
            <div className="module-icon">💸</div>
            <h3>1. Asfixia Transaccional y Doble Imposición</h3>
            <p>
              La cascada impositiva en Argentina castiga el flujo antes de generar utilidades. 
              El **Impuesto a los Ingresos Brutos (IIBB)**, junto a sus Retenciones y Percepciones (SIRCREB), operan como adelantos punitivos. 
              A esto se suma el **Impuesto al Débito y Crédito (1.2%)**, creando una "asfixia transaccional".
            </p>
            <p>
              Al producir rentabilidad, la carga trepa con el **Impuesto Corporativo (25-35%)**. Si hay retiro de ganancias, interviene el **Impuesto a los Dividendos (7%)**. Esta Doble Imposición descapitaliza radicalmente a las startups locales versus el mundo (Ej: Delaware QSBS exime impuestos federales bajo ciertas condiciones).
            </p>
          </article>

          {/* Column 2: Inversión Extranjera (SAFEs) */}
          <article className="report-module stagger-5">
            <div className="module-icon">📜</div>
            <h3>2. Trabas en Rondas de Inversión Semilla</h3>
            <p>
              Los instrumentos modernos como las **Notas Convertibles y SAFEs** carecen de marco neutral en Argentina. 
              La AFIP/ARCA puede interpretarlos como deuda ordinaria (pasivo), forzando el pago de **Ganancias sobre Intereses Presuntos**, encareciendo la recepción de capital y espantando a "Angels" y fondos internacionales (VCs).
            </p>
            <p>
              La conversión final a Equity suele ser considerada una "Cancelación de Pasivo", gatillando impuestos inmediatos sin inyección de liquidez líquida real para la startup. En jurisdicciones líderes, la conversión a capital es un evento tributario completamente neutro.
            </p>
          </article>

          {/* Column 3: Inseguridad Jurídica y Cepo */}
          <article className="report-module stagger-6">
            <div className="module-icon">⚖️</div>
            <h3>3. Inseguridad Jurídica (IGJ) y Cepo Cambiario</h3>
            <p>
              La dependencia de resoluciones efímeras atenta contra la estabilidad. Históricamente, la Inspección General de Justicia (IGJ) ha alterado regulaciones para tipos societarios como las **S.A.S.** de forma retroactiva.
              Este riesgo es letal para un portafolio de inversión VC, que prefiere jurisdicciones con jurisprudencia madura (**Stare Decisis** como en Delaware).
            </p>
            <p>
              Asimismo, las **restricciones cambiarias (Cepo)** bloquean el pago normal de herramientas críticas (AWS, GitHub, APIs B2B), empujando a los fundadores a la precariedad financiera o arquitecturas "offshore" improvisadas, elevando el riesgo en la Due Diligence ("Bandera Roja").
            </p>
          </article>
        </div>

        {/* Global Scale Callout */}
        <section className="global-callout stagger-7">
          <h3>Comparativa Fiscal Directa</h3>
          <div className="comparison-table">
            <div className="comp-row comp-header">
              <span className="comp-topic">Concepto</span>
              <span className="ar-col">Argentina (S.A.)</span>
              <span className="de-col">EE.UU. (Delaware)</span>
            </div>
            <div className="comp-row">
              <span className="comp-topic">Conversión Notas/SAFEs</span>
              <span className="ar-col text-danger">35% (Cancelación Pasivo)</span>
              <span className="de-col text-success">0% (Evento Neutro)</span>
            </div>
            <div className="comp-row">
              <span className="comp-topic">Impuesto Coporativo + I+D</span>
              <span className="ar-col text-danger">35% sin full tax-credits</span>
              <span className="de-col text-success">Amortización 100% (Sec 174)</span>
            </div>
            <div className="comp-row">
              <span className="comp-topic">Retención Dividendos</span>
              <span className="ar-col text-danger">7% Adicional</span>
              <span className="de-col text-warning">15-20% (Federal)</span>
            </div>
            <div className="comp-row">
              <span className="comp-topic">Capital Gains en Venta Exit</span>
              <span className="ar-col text-danger">15% a nivel personal</span>
              <span className="de-col text-success">0% (Sección 1202 QSBS)</span>
            </div>
            <div className="comp-row">
              <span className="comp-topic">Bienes Personales (Hold)</span>
              <span className="ar-col text-danger">0.5 - 2.25% anual</span>
              <span className="de-col text-success">0% sobre apreciación irreal</span>
            </div>
          </div>
        </section>
        
        <div className="social-actions stagger-7">
          <button 
            className="share-btn twitter-btn" 
            onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank')}
          >
            🐦 Compartir Resultado en X
          </button>
        </div>

      </div>
    </div>
  );
};

export default DashboardOdisea;
