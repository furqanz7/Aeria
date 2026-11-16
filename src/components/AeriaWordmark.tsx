/** Reference-led brand lettering, independent of the editorial display font. */
export default function AeriaWordmark({ className = "" }: { className?: string }) {
  return (
    <svg className={`aeria-wordmark ${className}`} viewBox="0 0 600 140" role="img" aria-label="Aeria" focusable="false">
      <g fill="currentColor">
        <path d="M1 132 46 7h4l49 125h-6L47 15 4 132Zm16-45h62l.7 1.8H16.3Z" />
        <path d="M155 7h61l8 9-1.1.8c-4.4-5.5-7.3-7.8-15.9-7.8h-46.5v58.5H201v2h-40.5V130h47.7c8.5 0 12.2-3 16.3-9.1l1.2.7-4.8 10.4H155Z" />
        <path fillRule="evenodd" d="M276 7h31c31.5 0 47.5 11.8 47.5 31.7 0 19.8-15.1 31.4-40 33.5 10.7 2.1 15.3 9.7 20 20.9l8.8 19.1c5.4 11.9 12.6 18.9 25.8 20.1v1.3c-17.6 0-26.5-7.3-33.2-21.6l-9.2-19.6c-6.9-15.3-10.9-19.6-25.1-19.6h-20.1V132H276Zm5.5 2v61.8h22.8c29 0 44-11.7 44-31.9S334.7 9 305.7 9Z" />
        <path d="M429 7h20v1.1c-6.4 0-7.2 1.2-7.2 6.7v109.3c0 5.5.8 6.8 7.2 6.8v1.1h-20v-1.1c6.4 0 7.2-1.3 7.2-6.8V14.8c0-5.5-.8-6.7-7.2-6.7Z" />
        <path d="m501 132 45-125h4l49 125h-6L547 15l-43 117Zm16-45h62l.7 1.8h-63.4Z" />
      </g>
    </svg>
  );
}
