import type { CSSProperties } from 'react';

const connections = [
  {
    label: 'Early Support',
    position: 'connected-hub__node--early',
    path: 'M115 264 C208 264 190 360 320 360',
    delay: '0s',
    tone: 'lilac',
  },
  {
    label: 'Access',
    position: 'connected-hub__node--access',
    path: 'M230 134 C230 254 270 272 320 360',
    delay: '1.45s',
    tone: 'blue',
  },
  {
    label: 'OG Status',
    position: 'connected-hub__node--og',
    path: 'M410 134 C410 254 370 272 320 360',
    delay: '2.9s',
    tone: 'lilac',
  },
  {
    label: 'Resale',
    position: 'connected-hub__node--resale',
    path: 'M525 264 C432 264 450 360 320 360',
    delay: '4.35s',
    tone: 'aqua',
  },
] as const;

export function ConnectedHub() {
  return (
    <div
      className="connected-hub"
      role="img"
      aria-label="Aura connects access, early support, OG status, and resale."
    >
      <div className="connected-hub__dots" aria-hidden="true" />
      <svg
        className="connected-hub__paths"
        viewBox="0 0 640 480"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <path className="connected-hub__arc connected-hub__arc--one" d="M68 410 A252 252 0 0 1 572 410" />
        <path className="connected-hub__arc connected-hub__arc--two" d="M120 410 A200 200 0 0 1 520 410" />
        <path className="connected-hub__arc connected-hub__arc--three" d="M172 410 A148 148 0 0 1 468 410" />
        {connections.map((connection) => (
          <g key={connection.label}>
            <path
              className="connected-hub__connection"
              d={connection.path}
              pathLength="100"
            />
            <path
              className="connected-hub__signal"
              d={connection.path}
              pathLength="100"
              style={{ '--signal-delay': connection.delay } as CSSProperties}
            />
          </g>
        ))}
      </svg>

      {connections.map((connection) => (
        <span
          className={`connected-hub__node ${connection.position} connected-hub__node--${connection.tone}`}
          key={connection.label}
          aria-hidden="true"
        >
          {connection.label}
        </span>
      ))}

      <span className="connected-hub__center" aria-hidden="true">
        <span>Aura</span>
      </span>
    </div>
  );
}
