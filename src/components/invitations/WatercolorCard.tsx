import { useState } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function WatercolorCard({ data }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-sm overflow-hidden cursor-pointer shadow-2xl bg-[#fdfaf6]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 533"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="wc-paper" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
            <feColorMatrix
              values="0 0 0 0 0.95
                      0 0 0 0 0.92
                      0 0 0 0 0.88
                      0 0 0 0.06 0"
            />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
          <filter id="wc-blur">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <filter id="wc-rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" />
            <feDisplacementMap in="SourceGraphic" scale="22" />
          </filter>
          <radialGradient id="wc-rose" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#fbcfe8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#fce7f3" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="wc-peach" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fdba74" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#fed7aa" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#fff7ed" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="wc-lavender" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#ddd6fe" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ede9fe" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="wc-sage" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#d1fae5" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ecfdf5" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g filter="url(#wc-rough)" style={{
          transition: "transform 1.2s ease-out, opacity 1.2s ease-out",
          transform: hover ? "scale(1.05)" : "scale(1)",
          transformOrigin: "center",
          opacity: hover ? 1 : 0.92,
        }}>
          <ellipse cx="80" cy="110" rx="120" ry="100" fill="url(#wc-rose)" />
          <ellipse cx="340" cy="80" rx="100" ry="90" fill="url(#wc-peach)" />
          <ellipse cx="60" cy="450" rx="130" ry="110" fill="url(#wc-lavender)" />
          <ellipse cx="340" cy="470" rx="120" ry="100" fill="url(#wc-sage)" />
          <ellipse cx="200" cy="280" rx="90" ry="70" fill="url(#wc-rose)" opacity="0.55" />
        </g>

        <g fill="#be185d" opacity="0.55" filter="url(#wc-blur)">
          <circle cx="60" cy="230" r="3" />
          <circle cx="75" cy="240" r="2" />
          <circle cx="48" cy="252" r="2.5" />
          <circle cx="340" cy="320" r="3" />
          <circle cx="358" cy="335" r="2" />
          <circle cx="200" cy="500" r="2.5" />
          <circle cx="215" cy="510" r="1.5" />
          <circle cx="185" cy="515" r="2" />
        </g>

        <rect width="400" height="533" fill="#fdfaf6" filter="url(#wc-paper)" opacity="0.4" />
      </svg>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-12 z-10">
        <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#9d174d]/80">
          Pintado con amor
        </p>
        <div
          className="my-4 h-px w-16"
          style={{
            background:
              "linear-gradient(90deg, transparent, #be185d 50%, transparent)",
          }}
        />
        <h2
          className="font-display text-4xl leading-tight"
          style={{ color: "#7f1d3a" }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-lg mt-1" style={{ color: "#9d2049" }}>
            {data.subtitle}
          </p>
        )}
        <div className="mt-7 space-y-1.5">
          <p className="font-display italic text-[#7f1d3a]">{data.date}</p>
          {data.time && (
            <p className="font-mono text-xs tracking-widest text-[#9d2049]">
              {data.time}
            </p>
          )}
          <p className="font-display italic text-[#7f1d3a] text-sm max-w-[80%] mx-auto">
            {data.location}
          </p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-6 text-[10px] font-mono uppercase tracking-widest text-[#9d2049]/80">
            RSVP · {data.rsvp}
          </p>
        )}
      </div>
    </div>
  );
}
