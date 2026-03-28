import React from 'react';

// V5 GBA Masterpiece (64x64 Internal Grid, 3-tones, deep details)
const BaseSprite = ({ children, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 64 64" 
    className={`pixel-sprite ${className}`}
    shapeRendering="crispEdges"
  >
    <defs>
      <filter id="pixel-outline" x="-10%" y="-10%" width="120%" height="120%">
        <feMorphology in="SourceAlpha" operator="dilate" radius="1.2" result="DILATED" />
        <feFlood floodColor="#000" floodOpacity="1" result="BLACK" />
        <feComposite in="BLACK" in2="DILATED" operator="in" result="OUTLINE" />
        <feMerge>
          <feMergeNode in="OUTLINE" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#pixel-outline)">
      {children}
    </g>
  </svg>
);

export const FounderSprite = ({ className }) => (
  <BaseSprite className={className}>
    {/* Hair (Brown tones) */}
    <path fill="#291e16" d="M18 10h24v12h-24z" /> {/* Shadow */}
    <path fill="#3f2c20" d="M18 10h24v6h-24z M16 12h2v10h-2z" /> {/* Base */}
    <path fill="#5c4232" d="M20 10h6v4h-6z M30 10h4v4h-4z" /> {/* Highlight */}
    
    {/* Head & Face (Skin tones) */}
    <path fill="#f87171" d="M22 14h16v14h-16z" /> {/* Shadow */}
    <path fill="#fca5a5" d="M22 14h16v10h-16z M20 18h2v6h-2z M38 18h2v6h-2z" /> {/* Base */}
    <path fill="#fecaca" d="M24 14h8v4h-8z M22 18h2v4h-2z" /> {/* Highlight */}
    
    {/* Eyes */}
    <rect x="24" y="20" width="3" height="3" fill="#000" />
    <rect x="33" y="20" width="3" height="3" fill="#000" />
    <rect x="26" y="20" width="1" height="1" fill="#fff" /> {/* Eye glint */}
    <rect x="35" y="20" width="1" height="1" fill="#fff" />

    {/* Backpack (Red tones) */}
    <path fill="#b91c1c" d="M14 26h6v20h-6z" />
    <path fill="#ef4444" d="M12 26h4v16h-4z" />

    {/* T-Shirt (Blue tones) */}
    <path fill="#1d4ed8" d="M22 28h16v18h-16z" /> {/* Shadow */}
    <path fill="#3b82f6" d="M22 28h16v14h-16z" /> {/* Base */}
    <path fill="#60a5fa" d="M24 28h8v6h-8z M22 30h2v4h-2z" /> {/* Highlight */}

    {/* Arms holding laptop */}
    <path fill="#3b82f6" d="M16 28h6v10h-6z M38 28h6v10h-6z" /> {/* Sleeves */}
    <path fill="#fca5a5" d="M16 38h6v4h-6z M38 38h6v4h-6z" /> {/* Hands */}

    {/* Laptop (Protector Shield) */}
    <g transform="translate(0, 0)">
      <path fill="#000" d="M26 34h30v14h-30z M22 46h38v6h-38z" /> {/* Outline */}
      <path fill="#64748b" d="M28 36h26v10h-26z" /> {/* Back of laptop */}
      <path fill="#94a3b8" d="M28 36h26v4h-26z" /> {/* Laptop highlight */}
      <circle cx="41" cy="41" r="3" fill="#cbd5e1" /> {/* Logo */}
      
      <path fill="#475569" d="M24 48h34v2h-34z" /> {/* Base */}
      <path fill="#cbd5e1" d="M24 48h34v1h-34z" /> {/* Base edge */}
    </g>

    {/* Jeans (Dark blue tones) */}
    <path fill="#1e3a8a" d="M22 46h6v12h-6z M32 46h6v12h-6z" />
    <path fill="#2563eb" d="M24 46h4v12h-4z M34 46h4v12h-4z" />
    <path fill="#93c5fd" d="M24 46h2v6h-2z M34 46h2v6h-2z" />

    {/* Sneakers */}
    <path fill="#111827" d="M20 58h8v6h-8z M32 58h8v6h-8z" />
    <path fill="#fff" d="M20 62h8v2h-8z M32 62h8v2h-8z" />
  </BaseSprite>
);

export const VCSprite = ({ className }) => (
  <BaseSprite className={className}>
    {/* Hair (Blonde) */}
    <path fill="#d97706" d="M20 10h20v10h-20z" />
    <path fill="#fde047" d="M20 10h20v6h-20z M18 12h2v4h-2z" />
    <path fill="#fef08a" d="M22 10h8v4h-8z" />

    {/* Face */}
    <path fill="#f87171" d="M22 16h16v12h-16z" />
    <path fill="#fca5a5" d="M22 16h16v8h-16z" />
    <path fill="#fecaca" d="M24 16h8v4h-8z" />

    {/* Aviator Sunglasses (Big reflective) */}
    <path fill="#000" d="M22 18h16v4h-16z" />
    <path fill="#1f2937" d="M22 18h6v4h-6z M32 18h6v4h-6z" />
    <path fill="#9ca3af" d="M22 18h2v2h-2z M32 18h2v2h-2z" /> {/* Glint */}
    
    {/* White Shirt base */}
    <path fill="#d1d5db" d="M20 28h20v22h-20z" />
    <path fill="#f9fafb" d="M20 28h20v16h-20z" />

    {/* Patagonia Vest (Deep Green) */}
    <path fill="#14532d" d="M24 28h12v18h-12z" />
    <path fill="#15803d" d="M24 28h12v14h-12z" />
    <path fill="#22c55e" d="M24 28h4v6h-4z M22 30h2v4h-2z" />
    
    {/* Arms crossed */}
    <path fill="#000" d="M18 36h24v6h-24z" />
    <path fill="#e5e7eb" d="M18 36h24v4h-24z" /> {/* Sleeves crossed */}
    <path fill="#d1d5db" d="M18 38h24v2h-24z" />

    {/* Pants */}
    <path fill="#78350f" d="M22 50h6v10h-6z M32 50h6v10h-6z" />
    <path fill="#b45309" d="M24 50h4v10h-4z M34 50h4v10h-4z" />
    
    {/* Loafers */}
    <path fill="#000" d="M20 60h8v4h-8z M32 60h8v4h-8z" />
    <path fill="#451a03" d="M22 62h6v2h-6z M34 62h6v2h-6z" />
  </BaseSprite>
);

export const ArcaSprite = ({ className }) => (
  <BaseSprite className={className}>
    {/* Hair & Head */}
    <path fill="#111827" d="M20 10h20v6h-20z M18 12h2v4h-2z M40 12h2v4h-2z" />
    <path fill="#f87171" d="M22 16h16v12h-16z" />
    <path fill="#fca5a5" d="M22 16h16v8h-16z" />

    {/* Evil Eyes & Mustache */}
    <rect x="24" y="18" width="4" height="2" fill="#000" />
    <rect x="32" y="18" width="4" height="2" fill="#000" />
    <path fill="#000" d="M24 16h4v2h-4z M32 16h4v2h-4z" /> {/* Angry eyebrows */}
    <path fill="#111827" d="M24 22h12v4h-12z" /> {/* Giant mustache */}

    {/* Suit Jacket */}
    <path fill="#1f2937" d="M20 28h20v22h-20z" />
    <path fill="#374151" d="M20 28h20v16h-20z" />
    <path fill="#4b5563" d="M22 28h6v8h-6z" />
    
    {/* Tie & Collar */}
    <path fill="#fff" d="M26 28h8v4h-8z" />
    <path fill="#000" d="M28 30h4v12h-4z" />
    
    {/* Arms holding huge stamp */}
    <path fill="#1f2937" d="M14 28h6v18h-6z M40 28h6v6h-6z" />
    <path fill="#374151" d="M14 28h6v14h-6z M40 28h6v4h-6z" />
    
    {/* The IMPUESTOS STAMP / Briefcase */}
    <g transform="translate(-4, 4)">
      <path fill="#000" d="M8 32h20v20h-20z" />
      <path fill="#111827" d="M10 34h16v16h-16z" />
      <path fill="#dc2626" d="M12 40h12v4h-12z" /> {/* Red Label */}
      <path fill="#111" d="M14 41h8v2h-8z" /> {/* Label text */}
      <path fill="#444" d="M16 30h4v2h-4z" /> {/* Handle */}
    </g>

    {/* Trousers & Shoes */}
    <path fill="#111827" d="M22 50h6v10h-6z M32 50h6v10h-6z" />
    <path fill="#1f2937" d="M24 50h4v10h-4z M34 50h4v10h-4z" />
    <path fill="#000" d="M20 60h8v4h-8z M32 60h8v4h-8z" />
  </BaseSprite>
);

export const UncleSamSprite = ({ className }) => (
  <BaseSprite className={className}>
    {/* Giant Top Hat */}
    <path fill="#b91c1c" d="M22 4h16v16h-16z" />
    <path fill="#ef4444" d="M22 4h16v12h-16z" />
    <path fill="#ffffff" d="M26 4h4v12h-4z M34 4h2v12h-2z" /> {/* White stripes */}
    <path fill="#1d4ed8" d="M20 16h20v4h-20z" /> {/* Blue rim */}
    <path fill="#1e3a8a" d="M20 18h20v2h-20z" /> 
    
    {/* Head */}
    <path fill="#f87171" d="M22 22h16v10h-16z" />
    <path fill="#fca5a5" d="M22 22h16v6h-16z" />
    {/* White Beard wrapping around */}
    <path fill="#d1d5db" d="M20 26h20v10h-20z" />
    <path fill="#ffffff" d="M20 24h6v8h-6z M34 24h6v8h-6z M24 28h12v6h-12z" />
    
    {/* Eyes */}
    <rect x="24" y="24" width="2" height="2" fill="#000" />
    <rect x="34" y="24" width="2" height="2" fill="#000" />

    {/* Blue Tailcoat */}
    <path fill="#1e3a8a" d="M20 36h20v16h-20z" />
    <path fill="#1d4ed8" d="M20 36h20v12h-20z" />
    <path fill="#60a5fa" d="M22 36h6v8h-6z" />
    
    <path fill="#ffffff" d="M26 36h8v4h-8z" /> {/* Shirt */}
    <path fill="#ef4444" d="M28 38h4v6h-4z" /> {/* Red Tie */}

    {/* Arms */}
    <path fill="#1d4ed8" d="M14 36h6v14h-6z M40 36h6v14h-6z" />
    <path fill="#ffffff" d="M14 50h6v4h-6z M40 50h6v4h-6z" /> {/* White gloves */}

    {/* Striped Trousers */}
    <path fill="#d1d5db" d="M22 52h6v8h-6z M32 52h6v8h-6z" />
    <path fill="#ffffff" d="M22 52h6v6h-6z M32 52h6v6h-6z" />
    <path fill="#ef4444" d="M24 52h2v6h-2z M34 52h2v6h-2z" /> {/* Red stripes */}

    {/* Shoes */}
    <path fill="#000" d="M20 60h8v4h-8z M32 60h8v4h-8z" />
  </BaseSprite>
);
