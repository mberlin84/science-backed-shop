import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function ArtDecoCard({ data }: Props) {
  return (
    <div
      className="group relative w-full max-w-md mx-auto aspect-[3/4] rounded-sm overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(135deg, #06241c 0%, #0a3a2a 50%, #06241c 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(212,175,55,0.08) 12px, rgba(212,175,55,0.08) 13px)",
        }}
      />

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 300 400"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="deco-gold" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#92651a" />
          </linearGradient>
          <linearGradient id="deco-gold-soft" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#fde68a" stopOpacity="0" />
            <stop offset="50%" stopColor="#fde68a" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g stroke="url(#deco-gold)" strokeWidth="1.5" fill="none">
          <rect x="14" y="14" width="272" height="372" />
          <rect x="22" y="22" width="256" height="356" />
          <line x1="14" y1="14" x2="32" y2="32" />
          <line x1="286" y1="14" x2="268" y2="32" />
          <line x1="14" y1="386" x2="32" y2="368" />
          <line x1="286" y1="386" x2="268" y2="368" />
        </g>

        <g fill="url(#deco-gold)">
          {Array.from({ length: 11 }).map((_, i) => {
            const angle = -90 + i * 18;
            const r1 = 26;
            const r2 = 70;
            const x1 = 150 + r1 * Math.cos((angle * Math.PI) / 180);
            const y1 = 60 + r1 * Math.sin((angle * Math.PI) / 180);
            const x2 = 150 + r2 * Math.cos((angle * Math.PI) / 180);
            const y2 = 60 + r2 * Math.sin((angle * Math.PI) / 180);
            return (
              <polygon
                key={`top-${i}`}
                points={`${x1 - 3},${y1} ${x1 + 3},${y1} ${x2},${y2}`}
                opacity="0.85"
              />
            );
          })}
          <circle cx="150" cy="60" r="6" fill="url(#deco-gold)" />
          <circle cx="150" cy="60" r="14" fill="none" stroke="url(#deco-gold)" strokeWidth="1" />
        </g>

        <g fill="url(#deco-gold)">
          {Array.from({ length: 11 }).map((_, i) => {
            const angle = 90 + i * 18;
            const r1 = 26;
            const r2 = 70;
            const x1 = 150 + r1 * Math.cos((angle * Math.PI) / 180);
            const y1 = 340 + r1 * Math.sin((angle * Math.PI) / 180);
            const x2 = 150 + r2 * Math.cos((angle * Math.PI) / 180);
            const y2 = 340 + r2 * Math.sin((angle * Math.PI) / 180);
            return (
              <polygon
                key={`bot-${i}`}
                points={`${x1 - 3},${y1} ${x1 + 3},${y1} ${x2},${y2}`}
                opacity="0.85"
              />
            );
          })}
          <circle cx="150" cy="340" r="6" />
          <circle cx="150" cy="340" r="14" fill="none" stroke="url(#deco-gold)" strokeWidth="1" />
        </g>

        <g stroke="url(#deco-gold)" strokeWidth="0.8" fill="none" opacity="0.7">
          <path d="M 40 180 L 60 200 L 40 220 M 60 200 L 90 200" />
          <path d="M 260 180 L 240 200 L 260 220 M 240 200 L 210 200" />
        </g>
      </svg>

      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background:
            "linear-gradient(115deg, transparent 35%, rgba(253,224,138,0.18) 50%, transparent 65%)",
          animation: "deco-shimmer 3s ease-in-out infinite",
        }}
      />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-14 z-10">
        <p
          className="font-mono text-[10px] tracking-[0.5em] uppercase"
          style={{ color: "#d4af37" }}
        >
          The roaring twenties
        </p>
        <div
          className="w-12 h-px my-4"
          style={{
            background:
              "linear-gradient(90deg, transparent, #d4af37, transparent)",
          }}
        />
        <h2
          className="font-display text-4xl leading-tight tracking-wider"
          style={{
            background: "linear-gradient(180deg, #fde68a 0%, #d4af37 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 18px rgba(212,175,55,0.4))",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p
            className="font-display italic text-lg mt-1"
            style={{ color: "#fde68a" }}
          >
            {data.subtitle}
          </p>
        )}
        <div className="mt-7 space-y-1.5">
          <p
            className="font-mono text-xs tracking-[0.3em] uppercase"
            style={{ color: "#fde68a" }}
          >
            {data.date}
          </p>
          {data.time && (
            <p className="font-mono text-xs tracking-widest" style={{ color: "#d4af37" }}>
              {data.time}
            </p>
          )}
          <p
            className="font-display italic text-sm max-w-[80%] mx-auto"
            style={{ color: "#fef3c7" }}
          >
            {data.location}
          </p>
        </div>
        {data.dressCode && (
          <p
            className="mt-4 text-[10px] font-mono uppercase tracking-[0.4em]"
            style={{ color: "#d4af37" }}
          >
            {data.dressCode}
          </p>
        )}
        {data.rsvp && (
          <p
            className="absolute bottom-6 text-[10px] font-mono uppercase tracking-widest"
            style={{ color: "#d4af37" }}
          >
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes deco-shimmer {
          0%, 100% { background-position: -200% 0; }
          50% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
