export function AlterMundiLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AlterMundi Logo"
    >
      {/* Network mesh sphere */}
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1.5" fill="none" />

      {/* Nodes */}
      <circle cx="50" cy="10" r="3" fill="currentColor" />
      <circle cx="50" cy="90" r="3" fill="currentColor" />
      <circle cx="10" cy="50" r="3" fill="currentColor" />
      <circle cx="90" cy="50" r="3" fill="currentColor" />
      <circle cx="25" cy="25" r="2.5" fill="currentColor" />
      <circle cx="75" cy="25" r="2.5" fill="currentColor" />
      <circle cx="25" cy="75" r="2.5" fill="currentColor" />
      <circle cx="75" cy="75" r="2.5" fill="currentColor" />

      {/* Connecting lines */}
      <line x1="50" y1="10" x2="25" y2="25" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="10" x2="75" y2="25" stroke="currentColor" strokeWidth="1" />
      <line x1="10" y1="50" x2="25" y2="25" stroke="currentColor" strokeWidth="1" />
      <line x1="10" y1="50" x2="25" y2="75" stroke="currentColor" strokeWidth="1" />
      <line x1="90" y1="50" x2="75" y2="25" stroke="currentColor" strokeWidth="1" />
      <line x1="90" y1="50" x2="75" y2="75" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="90" x2="25" y2="75" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="90" x2="75" y2="75" stroke="currentColor" strokeWidth="1" />

      {/* Center node */}
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  )
}
