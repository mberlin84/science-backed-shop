import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

function WaxSeal({ color, mono, x, y, rot }: { color: string; mono: string; x: string; y: string; rot: number }) {
  return (
    <div
      className="absolute w-14 h-14 rounded-full flex items-center justify-center"
      style={{
        left: x,
        top: y,
        transform: `translate(-50%, -50%) rotate(${rot}deg)`,
        background: `radial-gradient(circle at 35% 30%, ${color} 0%, ${color}aa 40%, #1a0509 100%)`,
        boxShadow:
          "inset -2px -3px 7px rgba(0,0,0,0.5), inset 2px 3px 5px rgba(255,255,255,0.18), 0 4px 10px rgba(0,0,0,0.4)",
      }}
    >
      <span
        className="font-display italic text-xl"
        style={{ color: "#fce7c8", textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
      >
        {mono}
      </span>
    </div>
  );
}

export function WaxRibbonTrioCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-sm overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(135deg, #fff8e1 0%, #f5e6c8 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-25 pointer-events-none mix-blend-multiply"
        aria-hidden="true"
      >
        <filter id="ribbon-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0.5  0 0 0 0 0.4  0 0 0 0 0.25  0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#ribbon-paper)" />
      </svg>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 300 400"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ribbon-grad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#7c2d12" />
            <stop offset="50%" stopColor="#9a3412" />
            <stop offset="100%" stopColor="#7c2d12" />
          </linearGradient>
        </defs>
        <path
          d="M 30 -10 Q 50 80 80 160 Q 130 240 110 320 Q 90 380 100 410"
          stroke="url(#ribbon-grad)"
          strokeWidth="14"
          fill="none"
          opacity="0.75"
          strokeLinecap="round"
        />
        <path
          d="M 30 -10 Q 50 80 80 160 Q 130 240 110 320 Q 90 380 100 410"
          stroke="#fef3c7"
          strokeWidth="0.7"
          fill="none"
          opacity="0.5"
          strokeDasharray="3 4"
        />
        <path
          d="M 280 -10 Q 250 90 220 180 Q 180 270 220 350 Q 240 400 230 410"
          stroke="url(#ribbon-grad)"
          strokeWidth="12"
          fill="none"
          opacity="0.75"
          strokeLinecap="round"
        />
        <path
          d="M 280 -10 Q 250 90 220 180 Q 180 270 220 350 Q 240 400 230 410"
          stroke="#fef3c7"
          strokeWidth="0.7"
          fill="none"
          opacity="0.5"
          strokeDasharray="3 4"
        />
      </svg>

      <WaxSeal color="#c93a4f" mono="A" x="32%" y="22%" rot={-12} />
      <WaxSeal color="#7c2d12" mono="&" x="50%" y="55%" rot={6} />
      <WaxSeal color="#3d5a3a" mono="M" x="68%" y="78%" rot={15} />

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "9%" }}>
        <p className="font-mono text-[10px] tracking-[0.45em] uppercase" style={{ color: "#7c2d12" }}>
          Sellado con tres promesas
        </p>
        <div className="my-3 h-px w-12" style={{ background: "#7c2d12", opacity: 0.5 }} />
        <h2 className="font-display text-3xl leading-tight" style={{ color: "#3a1a04" }}>
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-sm mt-1" style={{ color: "#7c2d12" }}>{data.subtitle}</p>
        )}
        <div className="absolute bottom-6 left-0 right-0 space-y-1 px-4">
          <p className="font-display italic text-[#3a1a04]">{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest" style={{ color: "#7c2d12" }}>{data.time}</p>}
          <p className="font-display italic text-sm" style={{ color: "#3a1a04" }}>{data.location}</p>
          {data.rsvp && (
            <p className="text-[10px] font-mono uppercase tracking-widest mt-2" style={{ color: "#7c2d12" }}>
              RSVP · {data.rsvp}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
