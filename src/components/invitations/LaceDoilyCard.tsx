import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function LaceDoilyCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-sm overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(135deg, #f5e6e8 0%, #e8c8c5 60%, #c89999 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 300 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id="lace-floral" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <g stroke="#fef2f2" strokeWidth="0.8" fill="none" opacity="0.85">
              <circle cx="20" cy="20" r="6" />
              <circle cx="20" cy="20" r="2" fill="#fef2f2" />
              <path d="M 20 14 L 20 6 M 20 26 L 20 34 M 14 20 L 6 20 M 26 20 L 34 20" />
              <circle cx="20" cy="8" r="1.5" fill="#fef2f2" />
              <circle cx="20" cy="32" r="1.5" fill="#fef2f2" />
              <circle cx="8" cy="20" r="1.5" fill="#fef2f2" />
              <circle cx="32" cy="20" r="1.5" fill="#fef2f2" />
              <path d="M 15 15 L 8 8 M 25 15 L 32 8 M 15 25 L 8 32 M 25 25 L 32 32" />
            </g>
          </pattern>
          <radialGradient id="lace-vignette" cx="50%" cy="50%" r="50%">
            <stop offset="40%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="lace-mask">
            <rect width="300" height="400" fill="url(#lace-vignette)" />
          </mask>
        </defs>

        <g mask="url(#lace-mask)">
          <rect width="300" height="400" fill="url(#lace-floral)" />
        </g>

        <g stroke="#fef2f2" strokeWidth="1" fill="none" opacity="0.95">
          <rect x="22" y="22" width="256" height="356" rx="3" />
          {Array.from({ length: 20 }).map((_, i) => {
            const t = i / 20;
            return (
              <g key={`top-${i}`}>
                <circle cx={22 + t * 256} cy="22" r="2.5" fill="#fef2f2" />
                <circle cx={22 + t * 256} cy="378" r="2.5" fill="#fef2f2" />
              </g>
            );
          })}
          {Array.from({ length: 28 }).map((_, i) => {
            const t = i / 28;
            return (
              <g key={`side-${i}`}>
                <circle cx="22" cy={22 + t * 356} r="2" fill="#fef2f2" />
                <circle cx="278" cy={22 + t * 356} r="2" fill="#fef2f2" />
              </g>
            );
          })}
        </g>

        {[
          [40, 40],
          [260, 40],
          [40, 360],
          [260, 360],
        ].map(([cx, cy], i) => (
          <g key={i} stroke="#fef2f2" strokeWidth="1.2" fill="none" opacity="0.95">
            <circle cx={cx} cy={cy} r="16" />
            <circle cx={cx} cy={cy} r="10" />
            <circle cx={cx} cy={cy} r="4" fill="#fef2f2" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => {
              const rad = (d * Math.PI) / 180;
              return (
                <line
                  key={d}
                  x1={cx + Math.cos(rad) * 4}
                  y1={cy + Math.sin(rad) * 4}
                  x2={cx + Math.cos(rad) * 16}
                  y2={cy + Math.sin(rad) * 16}
                />
              );
            })}
          </g>
        ))}
      </svg>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-14 z-10">
        <p className="font-mono text-[10px] tracking-[0.45em] uppercase" style={{ color: "#7d2e3e" }}>
          Encaje y promesas
        </p>
        <div className="my-3 h-px w-12" style={{ background: "#7d2e3e", opacity: 0.5 }} />
        <h2 className="font-display text-4xl leading-tight" style={{ color: "#5f1f2e" }}>
          {data.title}
        </h2>
        {data.subtitle && <p className="font-display italic text-lg mt-1" style={{ color: "#7d2e3e" }}>{data.subtitle}</p>}
        <div className="mt-6 space-y-1.5">
          <p className="font-display italic" style={{ color: "#5f1f2e" }}>{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest" style={{ color: "#7d2e3e" }}>{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto" style={{ color: "#5f1f2e" }}>{data.location}</p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-6 text-[10px] font-mono uppercase tracking-widest" style={{ color: "#7d2e3e" }}>
            RSVP · {data.rsvp}
          </p>
        )}
      </div>
    </div>
  );
}
