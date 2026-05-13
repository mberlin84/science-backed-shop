import { useMemo } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

interface Lantern {
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
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

function Lantern({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 40 60" width={size} height={size * 1.5} aria-hidden="true">
      <defs>
        <radialGradient id={`lantern-glow-${size}`} cx="50%" cy="55%" r="60%">
          <stop offset="0%" stopColor="#fffbeb" />
          <stop offset="40%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </radialGradient>
      </defs>
      <path
        d="M 8 22 Q 6 30 8 42 Q 12 50 20 52 Q 28 50 32 42 Q 34 30 32 22 Q 20 18 8 22 Z"
        fill={`url(#lantern-glow-${size})`}
        opacity="0.95"
      />
      <rect x="6" y="20" width="28" height="3" fill="#7a4a1e" />
      <rect x="6" y="42" width="28" height="3" fill="#7a4a1e" />
      <line x1="20" y1="0" x2="20" y2="20" stroke="#7a4a1e" strokeWidth="0.7" />
      <line x1="14" y1="22" x2="14" y2="44" stroke="#92400e" strokeWidth="0.5" opacity="0.5" />
      <line x1="26" y1="22" x2="26" y2="44" stroke="#92400e" strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}

export function FloatingLanternsCard({ data }: Props) {
  const lanterns = useMemo<Lantern[]>(() => {
    const r = prng(77);
    return Array.from({ length: 12 }).map(() => ({
      left: r() * 100,
      size: 14 + r() * 20,
      delay: r() * 12,
      duration: 14 + r() * 8,
      drift: (r() - 0.5) * 40,
    }));
  }, []);

  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #1a1a2e 0%, #16213e 35%, #2d1b3d 70%, #5a2a4e 100%)",
      }}
    >
      {Array.from({ length: 40 }).map((_, i) => {
        const seed = (i * 7919 + 121) % 9973;
        const left = ((seed * 11) % 100);
        const top = ((seed * 5) % 100);
        const size = 0.5 + ((seed * 3) % 8) / 5;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: 0.45,
              boxShadow: `0 0 ${size * 2}px rgba(255,255,255,0.6)`,
              animation: `lantern-star ${2 + (seed % 30) / 10}s ease-in-out ${(seed % 40) / 10}s infinite`,
            }}
          />
        );
      })}

      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYEnd slice"
        style={{ height: "32%" }}
        aria-hidden="true"
      >
        <ellipse cx="200" cy="200" rx="320" ry="48" fill="#0c1424" />
        <ellipse cx="200" cy="200" rx="260" ry="36" fill="#0a1020" />
        <g opacity="0.4">
          <ellipse cx="200" cy="180" rx="180" ry="6" fill="#fde68a" style={{ animation: "lantern-water 6s ease-in-out infinite" }} />
          <ellipse cx="150" cy="190" rx="60" ry="3" fill="#fde68a" />
          <ellipse cx="260" cy="186" rx="45" ry="2.5" fill="#fde68a" />
        </g>
      </svg>

      {lanterns.map((l, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${l.left}%`,
            bottom: "-15%",
            transform: "translateX(-50%)",
            animation: `lantern-rise ${l.duration}s linear ${l.delay}s infinite`,
            ["--lantern-drift" as never]: `${l.drift}px`,
            filter: `drop-shadow(0 0 ${l.size}px rgba(253,224,138,0.85))`,
          }}
        >
          <Lantern size={l.size} />
        </div>
      ))}

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "8%" }}>
        <p
          className="font-mono text-[10px] tracking-[0.45em] uppercase"
          style={{ color: "#fde68a" }}
        >
          Mil deseos al cielo
        </p>
        <div className="my-3 h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #fde68a, transparent)" }} />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #fde68a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 18px rgba(253,224,138,0.4))",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-lg mt-1" style={{ color: "#fde68a" }}>
            {data.subtitle}
          </p>
        )}
        <div className="mt-5 space-y-1.5">
          <p className="font-display italic text-amber-50">{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest text-amber-200">{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto text-amber-100">{data.location}</p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest text-amber-200/80">
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes lantern-rise {
          0% { transform: translate(-50%, 0) scale(0.5); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(calc(-50% + var(--lantern-drift, 0px)), -750px) scale(1); opacity: 0; }
        }
        @keyframes lantern-star {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.85; }
        }
        @keyframes lantern-water {
          0%, 100% { opacity: 0.3; transform: scaleX(1); }
          50% { opacity: 0.55; transform: scaleX(1.08); }
        }
      `}</style>
    </div>
  );
}
