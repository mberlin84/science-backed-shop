import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function InkedCalligraphyCard({ data }: Props) {
  return (
    <div
      className="group relative w-full max-w-md mx-auto aspect-[3/4] rounded-sm overflow-hidden cursor-pointer shadow-xl"
      style={{
        background:
          "linear-gradient(180deg, #fdfbf5 0%, #f5efde 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-25 pointer-events-none mix-blend-multiply"
        aria-hidden="true"
      >
        <filter id="ink-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0.5  0 0 0 0 0.42  0 0 0 0 0.28  0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#ink-paper)" />
      </svg>

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 300 200"
        style={{ left: "10%", right: "10%", top: "32%", width: "80%", height: "180px" }}
        aria-hidden="true"
      >
        <path
          d="M 30 100 C 50 60, 80 60, 90 100 C 95 130, 70 140, 75 110 C 80 90, 110 80, 130 100 L 140 90 M 150 100 C 160 75, 185 75, 195 100 M 210 100 C 220 70, 250 70, 260 100 C 263 120, 245 130, 250 105"
          stroke="#1a1a2e"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 700,
            strokeDashoffset: 700,
            animation: "ink-draw 3s ease-out 0.4s forwards",
          }}
        />
      </svg>

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 200 60"
        style={{
          left: "50%",
          top: "62%",
          width: "70%",
          height: "60px",
          transform: "translateX(-50%)",
        }}
        aria-hidden="true"
      >
        <path
          d="M 10 30 C 30 20, 40 40, 60 30 C 80 20, 100 40, 120 30 C 140 20, 160 40, 190 30"
          stroke="#1a1a2e"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 250,
            strokeDashoffset: 250,
            animation: "ink-draw 2s ease-out 1.4s forwards",
          }}
        />
      </svg>

      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          left: "12%",
          top: "12%",
          width: "10px",
          height: "10px",
          background: "#1a1a2e",
          opacity: 0.6,
          boxShadow: "0 0 4px rgba(26,26,46,0.5)",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          right: "18%",
          bottom: "18%",
          width: "6px",
          height: "6px",
          background: "#1a1a2e",
          opacity: 0.45,
        }}
      />

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "12%" }}>
        <p
          className="font-mono text-[10px] tracking-[0.55em] uppercase"
          style={{ color: "#3a3a52" }}
        >
          Una historia escrita a mano
        </p>
        <div className="my-3 h-px w-12" style={{ background: "#3a3a52", opacity: 0.5 }} />
        <h2
          className="font-display text-5xl leading-tight"
          style={{ color: "#1a1a2e", fontStyle: "italic" }}
        >
          {data.title}
        </h2>
        <div style={{ height: "20%" }} />
        <div className="mt-auto mb-[28%] space-y-1.5">
          <p
            className="font-mono text-[11px] tracking-[0.35em] uppercase"
            style={{ color: "#1a1a2e" }}
          >
            {data.date}
          </p>
          {data.time && (
            <p
              className="font-mono text-[10px] tracking-[0.35em] uppercase"
              style={{ color: "#3a3a52" }}
            >
              {data.time}
            </p>
          )}
          <p
            className="font-display italic text-sm max-w-[80%] mx-auto"
            style={{ color: "#1a1a2e" }}
          >
            {data.location}
          </p>
        </div>
        {data.rsvp && (
          <p
            className="absolute bottom-5 text-[10px] font-mono uppercase tracking-[0.4em]"
            style={{ color: "#3a3a52" }}
          >
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes ink-draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
