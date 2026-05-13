import { useMemo } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
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

export function CoralReefCard({ data }: Props) {
  const bubbles = useMemo(() => {
    const r = prng(101);
    return Array.from({ length: 12 }).map(() => ({
      left: r() * 100,
      size: 3 + r() * 6,
      delay: r() * 8,
      duration: 7 + r() * 5,
    }));
  }, []);

  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #67e8f9 0%, #22d3ee 35%, #0891b2 70%, #155e75 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        viewBox="0 0 300 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="coral-ray" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="60 0 80 0 110 240 90 240" fill="url(#coral-ray)" />
        <polygon points="180 0 200 0 220 240 200 240" fill="url(#coral-ray)" />
        <polygon points="250 0 268 0 280 240 260 240" fill="url(#coral-ray)" />
      </svg>

      <svg
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYEnd slice"
        style={{ height: "55%" }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="coral-rock" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#5b2c3a" />
            <stop offset="100%" stopColor="#2c1218" />
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="300" rx="280" ry="60" fill="url(#coral-rock)" />

        <g style={{ animation: "coral-sway-a 5s ease-in-out infinite", transformOrigin: "80px 260px" }}>
          <path d="M 80 260 Q 75 220 80 180 Q 70 140 80 100 Q 90 70 80 50" stroke="#ec4899" strokeWidth="8" fill="none" strokeLinecap="round" />
          <circle cx="80" cy="50" r="14" fill="#f9a8d4" />
          <circle cx="85" cy="100" r="10" fill="#f9a8d4" />
          <circle cx="75" cy="140" r="9" fill="#f9a8d4" />
        </g>

        <g style={{ animation: "coral-sway-b 6s ease-in-out infinite", transformOrigin: "320px 260px" }}>
          <path d="M 320 260 Q 322 220 314 180 Q 322 130 310 80" stroke="#a16207" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 314 200 L 290 180 M 314 200 L 338 180 M 322 150 L 300 130 M 322 150 L 344 130 M 314 110 L 296 90 M 314 110 L 332 90" stroke="#a16207" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        <g>
          <path d="M 160 260 L 175 240 L 195 250 L 195 270 L 175 280 Z" fill="#dc2626" stroke="#7f1d1d" strokeWidth="1" />
          <circle cx="180" cy="255" r="2" fill="#fef3c7" />
        </g>
        <g>
          <path d="M 230 260 L 245 245 L 260 252 L 258 268 L 244 274 Z" fill="#ea580c" stroke="#7c2d12" strokeWidth="1" />
        </g>

        {Array.from({ length: 30 }).map((_, i) => {
          const x = (i * 37) % 400;
          const y = 260 + (i % 4) * 4;
          return <ellipse key={i} cx={x} cy={y} rx="6" ry="2" fill="#fef3c7" opacity="0.6" />;
        })}

        <g style={{ animation: "coral-fish 8s ease-in-out infinite" }}>
          <path d="M 100 80 L 120 70 L 130 80 L 120 90 Z" fill="#fbbf24" />
          <polygon points="100,80 90,72 90,88" fill="#fbbf24" />
          <circle cx="124" cy="77" r="1.5" fill="#3a1a04" />
        </g>
        <g style={{ animation: "coral-fish-b 10s ease-in-out infinite" }}>
          <path d="M 220 120 L 240 110 L 250 120 L 240 130 Z" fill="#f87171" />
          <polygon points="220,120 210,112 210,128" fill="#f87171" />
          <circle cx="244" cy="117" r="1.5" fill="#3a1a04" />
        </g>
      </svg>

      {bubbles.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none border border-white/40"
          style={{
            left: `${b.left}%`,
            bottom: "-10%",
            width: `${b.size}px`,
            height: `${b.size}px`,
            background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.2))",
            animation: `coral-bubble ${b.duration}s linear ${b.delay}s infinite`,
          }}
        />
      ))}

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "10%" }}>
        <p className="font-mono text-[10px] tracking-[0.5em] uppercase" style={{ color: "#fef3c7" }}>
          Color del arrecife
        </p>
        <div className="my-3 h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #fef3c7, transparent)" }} />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            color: "#fefce8",
            textShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-base mt-1" style={{ color: "#fde68a" }}>{data.subtitle}</p>
        )}
        <div className="mt-4 space-y-1">
          <p className="font-display italic" style={{ color: "#fefce8" }}>{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest" style={{ color: "#fde68a" }}>{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto" style={{ color: "#fefce8" }}>{data.location}</p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest" style={{ color: "#fde68a" }}>
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes coral-bubble { 0% { transform: translateY(0); opacity: 0; } 15% { opacity: 1; } 100% { transform: translateY(-800px); opacity: 0; } }
        @keyframes coral-sway-a { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
        @keyframes coral-sway-b { 0%, 100% { transform: rotate(3deg); } 50% { transform: rotate(-3deg); } }
        @keyframes coral-fish { 0% { transform: translateX(0); } 50% { transform: translateX(150px); } 100% { transform: translateX(0); } }
        @keyframes coral-fish-b { 0% { transform: translateX(0); } 50% { transform: translateX(-180px); } 100% { transform: translateX(0); } }
      `}</style>
    </div>
  );
}
