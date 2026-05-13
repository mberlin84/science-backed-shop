import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

function EucalyptusBranch({
  className,
  style,
  flip = false,
}: {
  className?: string;
  style?: React.CSSProperties;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 320"
      className={className}
      style={{
        ...style,
        transform: `${flip ? "scaleX(-1)" : ""} ${style?.transform ?? ""}`,
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="boho-leaf" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#a8b89a" />
          <stop offset="100%" stopColor="#6b7d5a" />
        </linearGradient>
      </defs>
      <path
        d="M 100 10 Q 102 80 100 160 Q 98 240 100 310"
        stroke="#7a6a4a"
        strokeWidth="2"
        fill="none"
      />
      {[
        { y: 40, side: -1, size: 1 },
        { y: 60, side: 1, size: 1.05 },
        { y: 95, side: -1, size: 1.1 },
        { y: 115, side: 1, size: 1.15 },
        { y: 150, side: -1, size: 1.1 },
        { y: 175, side: 1, size: 1.05 },
        { y: 210, side: -1, size: 1 },
        { y: 235, side: 1, size: 0.95 },
        { y: 270, side: -1, size: 0.9 },
      ].map((leaf, i) => (
        <g key={i} transform={`translate(100 ${leaf.y}) scale(${leaf.side * leaf.size} ${leaf.size}) rotate(${leaf.side * 30})`}>
          <ellipse cx="22" cy="0" rx="22" ry="11" fill="url(#boho-leaf)" />
          <ellipse
            cx="22"
            cy="0"
            rx="22"
            ry="11"
            fill="none"
            stroke="#4a5640"
            strokeWidth="0.6"
            opacity="0.5"
          />
          <line x1="0" y1="0" x2="44" y2="0" stroke="#4a5640" strokeWidth="0.4" opacity="0.4" />
        </g>
      ))}
    </svg>
  );
}

export function BohoTerracotaCard({ data }: Props) {
  return (
    <div
      className="group relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(135deg, #f5ebd9 0%, #ead7b5 40%, #d9b88c 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(166,98,67,0.25) 0%, transparent 45%), radial-gradient(circle at 75% 80%, rgba(120,75,55,0.2) 0%, transparent 50%)",
        }}
      />

      <div
        className="absolute -top-12 -left-12 w-48 h-72 origin-top"
        style={{
          animation: "boho-sway-a 6s ease-in-out infinite",
        }}
      >
        <EucalyptusBranch
          className="w-full h-full"
          style={{
            filter: "drop-shadow(0 6px 12px rgba(74,86,64,0.25))",
            transform: "rotate(20deg)",
          }}
        />
      </div>

      <div
        className="absolute -bottom-14 -right-12 w-56 h-80 origin-bottom"
        style={{
          animation: "boho-sway-b 7s ease-in-out infinite",
        }}
      >
        <EucalyptusBranch
          flip
          className="w-full h-full"
          style={{
            filter: "drop-shadow(0 6px 12px rgba(74,86,64,0.25))",
            transform: "rotate(-20deg)",
          }}
        />
      </div>

      <svg
        className="absolute top-8 right-8 w-20 h-32"
        viewBox="0 0 80 130"
        style={{ animation: "boho-sway-pampas 5s ease-in-out infinite" }}
        aria-hidden="true"
      >
        <line x1="40" y1="40" x2="40" y2="130" stroke="#a08a5a" strokeWidth="1.2" />
        {Array.from({ length: 18 }).map((_, i) => {
          const t = i / 17;
          const y = 36 - t * 32;
          const len = 16 + t * 18;
          const rot = -75 + i * 9;
          return (
            <line
              key={i}
              x1="40"
              y1="40"
              x2={40 + len * Math.cos((rot * Math.PI) / 180)}
              y2={40 + len * Math.sin((rot * Math.PI) / 180)}
              stroke="#d4b67a"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.85"
            />
          );
        })}
      </svg>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-12 z-10">
        <p
          className="font-mono text-[10px] tracking-[0.4em] uppercase"
          style={{ color: "#8a4a2c" }}
        >
          Bajo el sol del desierto
        </p>
        <div
          className="w-12 h-px my-4"
          style={{ background: "#8a4a2c", opacity: 0.5 }}
        />
        <h2
          className="font-display text-4xl leading-tight"
          style={{ color: "#5c2e1a" }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p
            className="font-display italic text-lg mt-1"
            style={{ color: "#7a3a22" }}
          >
            {data.subtitle}
          </p>
        )}
        <div className="mt-7 space-y-1.5">
          <p className="font-display italic" style={{ color: "#5c2e1a" }}>
            {data.date}
          </p>
          {data.time && (
            <p className="font-mono text-xs tracking-widest" style={{ color: "#7a3a22" }}>
              {data.time}
            </p>
          )}
          <p
            className="font-display italic text-sm max-w-[80%] mx-auto"
            style={{ color: "#5c2e1a" }}
          >
            {data.location}
          </p>
        </div>
        {data.rsvp && (
          <p
            className="absolute bottom-6 text-[10px] font-mono uppercase tracking-widest"
            style={{ color: "#8a4a2c" }}
          >
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes boho-sway-a {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes boho-sway-b {
          0%, 100% { transform: rotate(1deg); }
          50% { transform: rotate(-3deg); }
        }
        @keyframes boho-sway-pampas {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(4deg); }
        }
      `}</style>
    </div>
  );
}
