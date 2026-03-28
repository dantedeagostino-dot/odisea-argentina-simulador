import React from 'react';

// Common wrapper for backgrounds
const BgWrapper = ({ children, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 160 120" // Standard 4:3 160x120 internal resolution 
    preserveAspectRatio="xMidYMax slice"
    className={`pixel-bg ${className}`}
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
    shapeRendering="crispEdges"
  >
    {children}
  </svg>
);

export const PreSeedBg = () => (
  <BgWrapper className="bg-preseed">
    {/* Wall */}
    <rect x="0" y="0" width="160" height="90" fill="#3f2c20" />
    
    {/* Brick pattern (simplified) */}
    <path d="M0 20h160 M0 40h160 M0 60h160 M0 80h160 M40 0v20 M120 0v20 M20 20v20 M100 20v20 M40 40v20 M120 40v20 M20 60v20 M100 60v20" stroke="#25160e" strokeWidth="2" />
    
    {/* Window showing night sky / city */}
    <rect x="20" y="20" width="50" height="50" fill="#1e1b4b" stroke="#8b5a2b" strokeWidth="4" />
    <path d="M45 20v50 M20 45h50" stroke="#8b5a2b" strokeWidth="2" />
    {/* Stars / city lights */}
    <rect x="25" y="60" width="5" height="10" fill="#fde047" />
    <rect x="35" y="55" width="8" height="15" fill="#fde047" />
    <rect x="50" y="65" width="5" height="5" fill="#fde047" />

    {/* Poster / Whiteboard on the wall */}
    <rect x="90" y="25" width="40" height="25" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
    <path d="M95 35h15 M95 42h25 M115 32l5 -5" stroke="#ef4444" strokeWidth="2" />

    {/* Floor */}
    <rect x="0" y="90" width="160" height="30" fill="#292524" />
    
    {/* Desk / Table */}
    <rect x="100" y="70" width="60" height="20" fill="#78350f" />
    <rect x="110" y="90" width="10" height="30" fill="#451a03" />
    <rect x="140" y="90" width="10" height="30" fill="#451a03" />

    {/* Laptop on desk */}
    <rect x="115" y="65" width="15" height="10" fill="#e2e8f0" />
    <rect x="105" y="72" width="25" height="3" fill="#cbd5e1" />
  </BgWrapper>
);

export const SerieABg = () => (
  <BgWrapper className="bg-seriea">
    {/* Left side modern startup / right side dark bureaucracy */}
    <rect x="0" y="0" width="80" height="90" fill="#e0f2fe" />
    <rect x="80" y="0" width="80" height="90" fill="#374151" />
    
    {/* Modern wall details (left) */}
    <rect x="10" y="20" width="60" height="40" fill="#a5f3fc" stroke="#38bdf8" strokeWidth="2" /> {/* Tech Window */}
    <path d="M10 40h60 M40 20v40" stroke="#bae6fd" strokeWidth="2" />
    
    {/* Bureaucratic wall details (right) */}
    {/* Filing Cabinets (Archive) */}
    <rect x="90" y="30" width="20" height="60" fill="#6b7280" stroke="#1f2937" strokeWidth="2" />
    <rect x="92" y="35" width="16" height="15" fill="#4b5563" />
    <rect x="98" y="40" width="4" height="2" fill="#d1d5db" />
    <rect x="92" y="55" width="16" height="15" fill="#4b5563" />
    <rect x="98" y="60" width="4" height="2" fill="#d1d5db" />
    <rect x="92" y="75" width="16" height="15" fill="#4b5563" />
    <rect x="98" y="80" width="4" height="2" fill="#d1d5db" />
    
    <rect x="115" y="30" width="20" height="60" fill="#6b7280" stroke="#1f2937" strokeWidth="2" />
    <rect x="117" y="35" width="16" height="15" fill="#4b5563" />
    <rect x="123" y="40" width="4" height="2" fill="#d1d5db" />
    <rect x="117" y="55" width="16" height="15" fill="#4b5563" />
    <rect x="123" y="60" width="4" height="2" fill="#d1d5db" />
    <rect x="117" y="75" width="16" height="15" fill="#4b5563" />
    <rect x="123" y="80" width="4" height="2" fill="#d1d5db" />
    
    {/* Floor */}
    <rect x="0" y="90" width="80" height="30" fill="#0ea5e9" /> {/* Clean floor */}
    <rect x="80" y="90" width="80" height="30" fill="#111827" /> {/* Dark floor */}
    <path d="M80 0v120" stroke="#000" strokeWidth="4" /> {/* Division line */}
  </BgWrapper>
);

export const ExitBg = () => (
  <BgWrapper className="bg-exit">
    {/* Wall Street Floor / Bank */}
    <rect x="0" y="0" width="160" height="90" fill="#0f172a" />
    
    {/* Giant Screens / Stock Ticker */}
    <rect x="0" y="10" width="160" height="20" fill="#000" />
    <rect x="10" y="15" width="5" height="5" fill="#22c55e" />
    <rect x="25" y="12" width="5" height="8" fill="#22c55e" />
    <rect x="40" y="17" width="5" height="3" fill="#ef4444" />
    <rect x="55" y="10" width="5" height="10" fill="#22c55e" />
    <rect x="70" y="13" width="5" height="7" fill="#22c55e" />
    <rect x="85" y="10" width="5" height="10" fill="#22c55e" />
    <rect x="100" y="14" width="5" height="6" fill="#ef4444" />
    <rect x="115" y="10" width="5" height="10" fill="#22c55e" />
    <rect x="130" y="10" width="5" height="10" fill="#22c55e" />
    
    {/* Giant Bank Vault Door */}
    <circle cx="80" cy="65" r="25" fill="#cbd5e1" stroke="#475569" strokeWidth="4" />
    <circle cx="80" cy="65" r="15" fill="#94a3b8" />
    {/* Vault handles */}
    <rect x="78" y="45" width="4" height="40" fill="#1e293b" />
    <rect x="60" y="63" width="40" height="4" fill="#1e293b" />
    <circle cx="80" cy="65" r="5" fill="#334155" />

    {/* Gold bars stack on the side */}
    <path d="M20 80h15v10H20z M25 70h15v10H25z M10 80h10v10H10z" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
    
    {/* Floor */}
    <rect x="0" y="90" width="160" height="30" fill="#334155" />
    {/* Marble tiles */}
    <path d="M0 100h160 M0 110h160 M20 90v30 M60 90v30 M100 90v30 M140 90v30" stroke="#475569" strokeWidth="2" />
  </BgWrapper>
);
