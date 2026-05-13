import { useMemo } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

interface Flake {
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  opacity: number;
}

function prng(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function WinterSnowfallCard({ data }: Props) {
  const flakes = useMemo<Flake[]>(() => {
    const r = prng(58);
    return Array.from({ length: 50 }).map(() => ({
      left: r() * 100,
      size: 2 + r() * 5,
      delay: r() * 10,
      duration: 9 + r() * 8,
      drift: (r() - 0.5) * 60,
      opacity: 0.5 + r() * 0.5,
    }));
  }, []);

  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #4a6b8a 0%, #7da3c4 30%, #b8d4e8 65%, #e6f0f8 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
        aria-hidden="true"
      >
        <filter id="winter-frost">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" />
          <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#winter-frost)" />
      </svg>

      <svg
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYEnd slice"
        style={{ height: "40%" }}
        aria-hidden="true"
      >
        <path d="M -10 120 Q 50 90 110 110 Q 180 140 250 110 Q 320 80 410 110 L 410 210 L -10 210 Z" fill="#fefefe" />
        <path d="M -10 160 Q 60 140 130 155 Q 200 175 280 155 Q 350 135 410 155 L 410 210 L -10 210 Z" fill="#d9e8f1" />
        <ellipse cx="80" cy="155" rx="8" ry="3" fill="#a7c3d3" opacity="0.5" />
        <ellipse cx="200" cy="165" rx="10" ry="3" fill="#a7c3d3" opacity="0.5" />
        <ellipse cx="320" cy="160" rx="9" ry="3" fill="#a7c3d3" opacity="0.5" />
        <g stroke="#1f3447" strokeWidth="1.5" fill="none" opacity="0.6">
          <path d="M 100 130 L 100 80 M 80 95 L 100 80 L 120 95 M 100 80 Q 92 60 96 50" />
          <path d="M 280 110 L 280 50 M 260 70 L 280 50 L 300 70 M 280 50 Q 286 30 282 20" />
        </g>
      </svg>

      {flakes.map((f, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${f.left}%`,
            top: "-10%",
            width: `${f.size}px`,
            height: `${f.size}px`,
            opacity: f.opacity,
            animation: `winter-fall ${f.duration}s linear ${f.delay}s infinite`,
            ["--snow-drift" as never]: `${f.drift}px`,
          }}
        >
          <svg viewBox="0 0 10 10" className="w-full h-full" aria-hidden="true">
            <g stroke="#ffffff" strokeWidth="0.5" strokeLinecap="round">
              <line x1="5" y1="1" x2="5" y2="9" />
              <line x1="1" y1="5" x2="9" y2="5" />
              <line x1="2.5" y1="2.5" x2="7.5" y2="7.5" />
              <line x1="7.5" y1="2.5" x2="2.5" y2="7.5" />
            </g>
            <circle cx="5" cy="5" r="0.8" fill="#fff" />
          </svg>
        </div>
      ))}

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "12%" }}>
        <p className="font-mono text-[10px] tracking-[0.5em] uppercase" style={{ color: "#1f3447" }}>
          Promesa de invierno
        </p>
        <div className="my-3 h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #1f3447, transparent)" }} />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            color: "#0f1f2e",
            textShadow: "0 1px 2px rgba(255,255,255,0.5)",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-base mt-1" style={{ color: "#1f3447" }}>{data.subtitle}</p>
        )}
        <div className="mt-5 space-y-1.5">
          <p className="font-display italic" style={{ color: "#0f1f2e" }}>{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest" style={{ color: "#1f3447" }}>{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto" style={{ color: "#0f1f2e" }}>{data.location}</p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest" style={{ color: "#1f3447" }}>
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes winter-fall {
          0% { transform: translate(0, 0) rotate(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translate(var(--snow-drift, 0px), 800px) rotate(360deg); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
