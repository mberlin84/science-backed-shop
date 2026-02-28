interface ScoreBarProps {
  label: string;
  value: number;
  max?: number;
}

function getScoreColor(value: number): string {
  if (value >= 80) return 'bg-score-high';
  if (value >= 60) return 'bg-score-medium';
  return 'bg-score-low';
}

export function ScoreBar({ label, value, max = 100 }: ScoreBarProps) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="font-mono text-sm font-semibold text-foreground">{value}</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${getScoreColor(value)}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
