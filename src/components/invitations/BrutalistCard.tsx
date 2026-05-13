import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function BrutalistCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-none overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background: "#e8e3d8",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-50 pointer-events-none mix-blend-multiply"
        aria-hidden="true"
      >
        <filter id="brut-concrete">
          <feTurbulence type="fractalNoise" baseFrequency="0.92" numOctaves="3" />
          <feColorMatrix values="0 0 0 0 0.55  0 0 0 0 0.5  0 0 0 0 0.42  0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#brut-concrete)" />
      </svg>

      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-[2px] pointer-events-none opacity-25">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-stone-700/30" />
        ))}
      </div>

      <div
        className="absolute"
        style={{
          top: "8%",
          left: "8%",
          right: "8%",
          height: "4px",
          background: "#1c1917",
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "8%",
          left: "8%",
          right: "8%",
          height: "4px",
          background: "#1c1917",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "8%",
          bottom: "8%",
          left: "8%",
          width: "4px",
          background: "#1c1917",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "8%",
          bottom: "8%",
          right: "8%",
          width: "4px",
          background: "#1c1917",
        }}
      />

      <div
        className="absolute"
        style={{
          top: "8%",
          left: "8%",
          width: "20%",
          height: "8%",
          background: "#dc2626",
          mixBlendMode: "multiply",
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "8%",
          right: "8%",
          width: "12%",
          height: "12%",
          background: "#1c1917",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          left: "8%",
          right: "8%",
          top: "50%",
          height: "2px",
          background: "#1c1917",
          opacity: 0.8,
        }}
      />

      <div
        className="absolute font-mono uppercase tracking-[0.4em]"
        style={{
          top: "12%",
          left: "12%",
          fontSize: "9px",
          color: "#1c1917",
        }}
      >
        Documento /
      </div>
      <div
        className="absolute font-mono uppercase tracking-[0.4em]"
        style={{
          top: "12%",
          right: "12%",
          fontSize: "9px",
          color: "#1c1917",
        }}
      >
        № 001
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-16 z-10">
        <p
          className="font-mono text-[10px] tracking-[0.5em] uppercase mb-4"
          style={{ color: "#dc2626" }}
        >
          Brutalmente honesto
        </p>
        <h2
          className="font-mono text-5xl leading-[0.9] tracking-tighter uppercase"
          style={{ color: "#1c1917", fontWeight: 700, fontFamily: "system-ui, sans-serif" }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p
            className="font-mono text-[11px] tracking-[0.4em] uppercase mt-3"
            style={{ color: "#1c1917" }}
          >
            {data.subtitle}
          </p>
        )}
        <div className="mt-8 space-y-2">
          <p
            className="font-mono text-[10px] tracking-[0.4em] uppercase"
            style={{ color: "#1c1917" }}
          >
            FECHA / {data.date}
          </p>
          {data.time && (
            <p
              className="font-mono text-[10px] tracking-[0.4em] uppercase"
              style={{ color: "#1c1917" }}
            >
              HORA / {data.time}
            </p>
          )}
          <p
            className="font-mono text-[10px] tracking-[0.4em] uppercase"
            style={{ color: "#1c1917" }}
          >
            LUGAR / {data.location}
          </p>
        </div>
        {data.rsvp && (
          <p
            className="absolute bottom-[14%] text-[10px] font-mono uppercase tracking-[0.4em]"
            style={{ color: "#dc2626" }}
          >
            RSVP · {data.rsvp}
          </p>
        )}
      </div>
    </div>
  );
}
