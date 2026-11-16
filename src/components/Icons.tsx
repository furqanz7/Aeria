import { useId, type CSSProperties } from "react";

export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function Butterfly({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const id = useId().replace(/:/g, "");
  const upper = `${id}-pearl-blue`;
  const lower = `${id}-pearl-lilac`;
  return (
    <svg
      className={`butterfly-mark ${className}`}
      style={style}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={upper}
          x1="12"
          y1="8"
          x2="39"
          y2="42"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#e8f1fb" />
          <stop offset=".42" stopColor="#648ec0" />
          <stop offset="1" stopColor="#1e457d" />
        </linearGradient>
        <linearGradient
          id={lower}
          x1="16"
          y1="36"
          x2="42"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9bbadb" />
          <stop offset=".5" stopColor="#426fa4" />
          <stop offset="1" stopColor="#244d84" />
        </linearGradient>
      </defs>
      <g
        className="mark-wing mark-wing-left"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M31.5 33C26.2 19.1 15.3 7.4 7.8 8.1 2.8 8.6 5.8 20.9 12.3 26.4 18 31.1 25.6 32.6 31.5 33Z"
          fill={`url(#${upper})`}
          stroke="#345e91"
          strokeWidth=".65"
        />
        <path
          d="M31.5 33C20.2 28.5 9.3 34.4 12.9 42.8 14 45.5 17.5 45.4 18.8 48.2 21.5 53.8 28.2 47.7 31.5 33Z"
          fill={`url(#${lower})`}
          stroke="#3b6596"
          strokeWidth=".65"
        />
        <path
          d="M30.3 32.1 10 12.2m20.1 19.5L10 22m19.9 11.6L18.2 40m12.3-6.4L21.5 46"
          stroke="#153e70"
          strokeWidth=".6"
          opacity=".45"
        />
        <path
          d="M8.6 10.5c5 .6 12.6 8 18.6 17.4M15 35.8c4-2.5 8.8-2.2 13.1-1"
          stroke="#fff"
          strokeWidth="1.2"
          opacity=".8"
        />
      </g>
      <g
        className="mark-wing mark-wing-right"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M32.5 33C36 18.1 46.7 5.9 54.6 6.3 60.1 6.6 58.6 18.4 52 25 46.4 30.6 38.6 32.7 32.5 33Z"
          fill={`url(#${upper})`}
          stroke="#345e91"
          strokeWidth=".65"
        />
        <path
          d="M32.5 33C43.5 27.9 55.1 33.3 51.7 42.2 50.5 45.3 47.4 45 46 47.8 43.4 53.4 36.1 47.5 32.5 33Z"
          fill={`url(#${lower})`}
          stroke="#3b6596"
          strokeWidth=".65"
        />
        <path
          d="m33.7 31.9 19.9-21m-20 21.2L53 20.7M34 33.6 46.3 39m-12.7-5.4L43 45.3"
          stroke="#153e70"
          strokeWidth=".6"
          opacity=".45"
        />
        <path
          d="M54 8.9c-4.7.5-11.5 8.1-17.9 19.1m12.8 7.1c-3.4-2.1-7.7-1.8-12.5-.4"
          stroke="#fff"
          strokeWidth="1.2"
          opacity=".8"
        />
      </g>
      <path
        d="M32 27.9c-.9 4.1-.8 8.5.2 12.6.9-4.2 1-8.4-.2-12.6Z"
        fill="#173d6d"
      />
      <circle cx="32" cy="26.8" r="1.1" fill="#173d6d" />
      <path
        d="M31.6 26c-1-3.7-2.9-6.1-5.6-7.9m6.4 7.9c1.1-3.7 3-6.3 5.6-8.2"
        stroke="#254f7f"
        strokeWidth=".65"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function SaudiRiyal() {
  return (
    <span className="saudi-riyal-symbol" role="img" aria-label="Saudi riyal" />
  );
}

export function Symbol({
  name,
  className = "",
}: {
  name:
    | "nearby"
    | "shield"
    | "check"
    | "contact"
    | "search"
    | "face"
    | "globe"
    | "layers"
    | "card"
    | "bank"
    | "coin";
  className?: string;
}) {
  const paths = {
    nearby: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M7 7a7 7 0 0 0 0 10m10-10a7 7 0 0 1 0 10M4 4a11.3 11.3 0 0 0 0 16M20 4a11.3 11.3 0 0 1 0 16" />
      </>
    ),
    shield: (
      <>
        <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
        <path d="m8.5 12 2.5 2.5 4.5-5" />
      </>
    ),
    check: <path d="m5 12 4.5 4.5L19 7" />,
    contact: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
      </>
    ),
    search: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m15 15 5 5" />
      </>
    ),
    face: (
      <>
        <path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3M8 9v2m8-2v2m-4-1v4m-4 2c2 2 6 2 8 0" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18M5 6.5h14M5 17.5h14" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5" />
      </>
    ),
    card: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <path d="M2 10h20M6 15h4" />
      </>
    ),
    bank: (
      <>
        <path d="m2 8 10-5 10 5H2Zm0 13h20M5 9v9m7-9v9m7-9v9" />
      </>
    ),
    coin: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15 8h-4a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4H9m3-10v12" />
      </>
    ),
  };
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
