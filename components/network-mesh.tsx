"use client"

export function NetworkMesh() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-label="Network Mesh Illustration"
    >
      {/* Grid background */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d5164" strokeWidth="0.5" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#grid)" />

      {/* Connecting lines */}
      <line x1="100" y1="80" x2="200" y2="120" stroke="#0d5164" strokeWidth="2" opacity="0.5" />
      <line x1="200" y1="120" x2="300" y2="100" stroke="#0d5164" strokeWidth="2" opacity="0.5" />
      <line x1="100" y1="80" x2="150" y2="200" stroke="#0d5164" strokeWidth="2" opacity="0.5" />
      <line x1="150" y1="200" x2="250" y2="220" stroke="#0d5164" strokeWidth="2" opacity="0.5" />
      <line x1="250" y1="220" x2="300" y2="100" stroke="#0d5164" strokeWidth="2" opacity="0.5" />
      <line x1="200" y1="120" x2="200" y2="200" stroke="#0d5164" strokeWidth="2" opacity="0.5" />
      <line x1="150" y1="200" x2="200" y2="280" stroke="#0d5164" strokeWidth="2" opacity="0.5" />
      <line x1="200" y1="280" x2="280" y2="300" stroke="#0d5164" strokeWidth="2" opacity="0.5" />
      <line x1="250" y1="220" x2="280" y2="300" stroke="#0d5164" strokeWidth="2" opacity="0.5" />
      <line x1="120" y1="300" x2="150" y2="200" stroke="#0d5164" strokeWidth="2" opacity="0.5" />
      <line x1="120" y1="300" x2="200" y2="280" stroke="#0d5164" strokeWidth="2" opacity="0.5" />

      {/* Glow definitions */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Network nodes */}
      <circle cx="100" cy="80" r="8" fill="#0d5164" filter="url(#glow)" />
      <circle cx="300" cy="100" r="8" fill="#0d5164" filter="url(#glow)" />
      <circle cx="200" cy="120" r="10" fill="#467e33" filter="url(#glow)" />
      <circle cx="150" cy="200" r="12" fill="#0d5164" filter="url(#glow)" />
      <circle cx="250" cy="220" r="8" fill="#467e33" filter="url(#glow)" />
      <circle cx="200" cy="280" r="10" fill="#0d5164" filter="url(#glow)" />
      <circle cx="120" cy="300" r="8" fill="#467e33" filter="url(#glow)" />
      <circle cx="280" cy="300" r="8" fill="#0d5164" filter="url(#glow)" />

      {/* Node highlights */}
      <circle cx="100" cy="80" r="12" fill="none" stroke="#0d5164" strokeWidth="1.5" opacity="0.4" />
      <circle cx="200" cy="120" r="16" fill="none" stroke="#467e33" strokeWidth="1.5" opacity="0.4" />
      <circle cx="150" cy="200" r="18" fill="none" stroke="#0d5164" strokeWidth="1.5" opacity="0.4" />
    </svg>
  )
}
