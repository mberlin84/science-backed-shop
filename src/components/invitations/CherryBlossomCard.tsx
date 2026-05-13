import { useMemo } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

interface Petal {
  left: number;
  delay: number;
  duration: number;
  drift: number;
  size: number;
  rotSpeed: number;
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

function Petal({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 20 20" width={size} height={size} aria-hidden="true">
      <defs>
        <radialGradient id={`sakura-${size}`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#fff5f8" />
          <stop offset="60%" stopColor="#fbcfe8" />
          <stop offset="100%" stopColor="#ec4899" />
        </radialGradient>
      </defs>
      <path d="M 10 4 Q 4 8 6 14 Q 10 18 14 14 Q 16 8 10 4 Z" fill={`url(#sakura-${size})`} stroke="#be4a7e" strokeWidth="0.3" />
      <path d="M 10 4 L 10 16" stroke="#be4a7e" strokeWidth="0.3" opacity="0.5" />
    </svg>
  );
}

export function CherryBlossomCard({ data }: Props) {
  const petals = useMemo<Petal[]>(() => {
    const r = prng(202);
    return Array.from({ length: 30 }).map(() => ({
      left: r() * 100,
      delay: r() * 12,
      duration: 10 + r() * 8,
      drift: (r() - 0.5) * 80,
      size: 10 + r() * 12,
      rotSpeed: 180 + r() * 360,
    }));
  }, []);

  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #fef9f0 0%, #fce7f3 35%, #fbcfe8 65%, #f9a8d4 100%)",
      }}
    >
      <svg
        className="absolute inset-x-0 pointer-events-none"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        style={{ top: 0, height: "100%" }}
        aria-hidden="true"
      >
        <g stroke="#5a2d20" strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M -10 60 Q 60 70 110 50 Q 160 40 210 60 Q 270 80 340 60 Q 380 50 410 60" />
          <path d="M -10 380 Q 60 360 130 380 Q 200 400 280 370 Q 320 360 410 380" />
          <path d="M 40 0 Q 60 80 80 160 Q 100 250 70 340 Q 50 400 60 410" />
          <path d="M 360 0 Q 340 90 320 180 Q 300 280 340 360 Q 360 400 350 410" />
        </g>
        <g fill="#5a2d20" opacity="0.7">
          {[
            [50, 50],
            [110, 48],
            [180, 56],
            [260, 60],
            [60, 130],
            [70, 220],
            [340, 130],
            [330, 200],
            [320, 280],
            [200, 380],
            [280, 372],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.5" />
          ))}
        </g>
        <g>
          {[
            [50, 50, "#fb7185"],
            [70, 130, "#f9a8d4"],
            [110, 48, "#fbcfe8"],
            [180, 56, "#f472b6"],
            [260, 60, "#fda4af"],
            [330, 200, "#fb7185"],
            [60, 130, "#fbcfe8"],
            [320, 280, "#f9a8d4"],
            [200, 380, "#f472b6"],
            [60, 130, "#fda4af"],
          ].map(([x, y, c], i) => (
            <g key={i} transform={`translate(${x} ${y})`}>
              {[0, 72, 144, 216, 288].map((d) => (
                <ellipse key={d} cx="0" cy="-6" rx="3" ry="6" transform={`rotate(${d})`} fill={c as string} opacity="0.92" />
              ))}
              <circle r="2" fill="#fde68a" />
            </g>
          ))}
        </g>
      </svg>

      {petals.map((p, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${p.left}%`,
            top: "-10%",
            ["--sakura-drift" as never]: `${p.drift}px`,
            ["--sakura-rot" as never]: `${p.rotSpeed}deg`,
            animation: `sakura-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          <Petal size={p.size} />
        </div>
      ))}

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "10%" }}>
        <p className="font-mono text-[10px] tracking-[0.5em] uppercase" style={{ color: "#9d174d" }}>
          Hanami eterno
        </p>
        <div className="my-3 h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #9d174d, transparent)" }} />
        <h2 className="font-display text-4xl leading-tight" style={{ color: "#831843" }}>
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-base mt-1" style={{ color: "#9d174d" }}>{data.subtitle}</p>
        )}
        <div className="mt-5 space-y-1.5">
          <p className="font-display italic" style={{ color: "#831843" }}>{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest" style={{ color: "#9d174d" }}>{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto" style={{ color: "#831843" }}>{data.location}</p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest" style={{ color: "#9d174d" }}>
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes sakura-fall {
          0% { transform: translate(0, 0) rotate(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translate(var(--sakura-drift, 0px), 700px) rotate(var(--sakura-rot, 360deg)); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
