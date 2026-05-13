import { useMemo } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

interface Spark {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
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

export function CastleFairytaleCard({ data }: Props) {
  const sparks = useMemo<Spark[]>(() => {
    const r = prng(33);
    return Array.from({ length: 35 }).map(() => ({
      left: r() * 100,
      top: r() * 100,
      size: 1 + r() * 3,
      delay: r() * 4,
      duration: 2.5 + r() * 3,
    }));
  }, []);

  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #1e1b4b 0%, #312e81 25%, #5b21b6 55%, #9333ea 78%, #c084fc 100%)",
      }}
    >
      {sparks.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: "#fde68a",
            boxShadow: `0 0 ${s.size * 4}px rgba(253,224,138,0.95)`,
            animation: `castle-spark ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 100 50"
        style={{ top: "10%", right: "10%", width: "70px", height: "35px" }}
        aria-hidden="true"
      >
        <path
          d="M 10 30 Q 20 10 30 30 Q 40 5 50 30 Q 60 10 70 30 Q 80 5 90 30"
          stroke="#fef3c7"
          strokeWidth="1"
          fill="none"
          opacity="0.7"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 400 250"
        preserveAspectRatio="xMidYEnd slice"
        style={{ height: "45%" }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="castle-stone" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#312e81" />
            <stop offset="100%" stopColor="#0b0a26" />
          </linearGradient>
          <linearGradient id="castle-window" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <rect x="60" y="160" width="40" height="90" fill="url(#castle-stone)" />
        <polygon points="60,160 80,90 100,160" fill="url(#castle-stone)" />
        <polygon points="76,90 80,80 84,90" fill="#0b0a26" />
        <line x1="80" y1="80" x2="86" y2="85" stroke="#dc2626" strokeWidth="1.5" />
        <rect x="120" y="180" width="160" height="70" fill="url(#castle-stone)" />
        <rect x="120" y="170" width="20" height="10" fill="url(#castle-stone)" />
        <rect x="160" y="170" width="20" height="10" fill="url(#castle-stone)" />
        <rect x="200" y="170" width="20" height="10" fill="url(#castle-stone)" />
        <rect x="240" y="170" width="20" height="10" fill="url(#castle-stone)" />
        <rect x="180" y="120" width="40" height="60" fill="url(#castle-stone)" />
        <polygon points="180,120 200,80 220,120" fill="url(#castle-stone)" />
        <polygon points="196,80 200,70 204,80" fill="#0b0a26" />
        <line x1="200" y1="70" x2="208" y2="76" stroke="#dc2626" strokeWidth="1.5" />
        <rect x="300" y="160" width="40" height="90" fill="url(#castle-stone)" />
        <polygon points="300,160 320,90 340,160" fill="url(#castle-stone)" />
        <polygon points="316,90 320,80 324,90" fill="#0b0a26" />
        <line x1="320" y1="80" x2="326" y2="85" stroke="#dc2626" strokeWidth="1.5" />

        <g fill="url(#castle-window)" style={{ animation: "castle-window-flicker 4s ease-in-out infinite" }}>
          <rect x="74" y="120" width="6" height="10" rx="3" />
          <rect x="80" y="105" width="6" height="10" rx="3" />
          <rect x="86" y="120" width="6" height="10" rx="3" />
          <rect x="194" y="135" width="6" height="10" rx="3" />
          <rect x="200" y="120" width="6" height="10" rx="3" />
          <rect x="206" y="135" width="6" height="10" rx="3" />
          <rect x="314" y="120" width="6" height="10" rx="3" />
          <rect x="320" y="105" width="6" height="10" rx="3" />
          <rect x="326" y="120" width="6" height="10" rx="3" />
        </g>
        <rect x="190" y="210" width="20" height="40" rx="10 10 0 0" fill="#1f1530" />
      </svg>

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "10%" }}>
        <p
          className="font-mono text-[10px] tracking-[0.45em] uppercase"
          style={{ color: "#fde68a" }}
        >
          Érase una vez
        </p>
        <div
          className="my-3 h-px w-12"
          style={{ background: "linear-gradient(90deg, transparent, #fde68a, transparent)" }}
        />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            background:
              "linear-gradient(180deg, #ffffff 0%, #fde68a 60%, #fbbf24 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 16px rgba(253,224,138,0.5))",
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
          {data.time && (
            <p className="font-mono text-xs tracking-widest text-amber-200">{data.time}</p>
          )}
          <p className="font-display italic text-sm max-w-[80%] mx-auto text-amber-100">{data.location}</p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest text-amber-200/80">
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes castle-spark {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes castle-window-flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
      `}</style>
    </div>
  );
}
