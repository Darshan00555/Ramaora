'use client';

/**
 * Ramaora brand logo — vector recreation (trishul + रामारा wordmark + upward swoosh).
 * Uses `currentColor`, so set the colour via a wrapping `text-*` / `color` class.
 * To use the exact original artwork instead, drop it at /public/ramaora-logo.png
 * and swap this component for <img src="/ramaora-logo.png" .../>.
 */
export function RamaoraLogo({ className = '', title = 'Ramaora' }) {
  return (
    <svg
      viewBox="0 0 470 150"
      role="img"
      aria-label={title}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* upward swoosh sweeping under the word and rising to the right */}
      <path
        d="M74 92 C150 140 306 142 374 96 C400 79 412 62 419 43"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* arrowhead */}
      <path
        d="M405 51 L420 39 L427 56"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* trishul above the centre of the word */}
      <g stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M236 60 L236 19" />
        <path d="M228 27 L236 13 L244 27" />
        <path d="M215 42 C212 33 218 26 224 23" />
        <path d="M257 42 C260 33 254 26 248 23" />
        <path d="M216 47 Q236 40 256 47" />
      </g>
      {/* wordmark */}
      <text
        x="236"
        y="113"
        textAnchor="middle"
        fontFamily="'Tiro Devanagari Hindi', 'Noto Sans Devanagari', 'Kohinoor Devanagari', 'Nirmala UI', sans-serif"
        fontSize="74"
        fontWeight="700"
        fill="currentColor"
      >
        रामारा
      </text>
    </svg>
  );
}

/** Square icon-only mark (trishul + swoosh) for favicons / compact spots. */
export function RamaoraMark({ className = '', title = 'Ramaora' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 52 L50 14" />
        <path d="M42 22 L50 8 L58 22" />
        <path d="M29 36 C26 27 32 20 38 17" />
        <path d="M71 36 C74 27 68 20 62 17" />
        <path d="M30 41 Q50 34 70 41" />
      </g>
      <path
        d="M18 66 C40 90 66 90 82 68"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M74 74 L84 64 L90 76"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
