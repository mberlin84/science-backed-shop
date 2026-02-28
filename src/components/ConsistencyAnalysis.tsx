import { ConsistencyAnalysis as ConsistencyType } from '@/data/types';

interface ConsistencyAnalysisProps {
  data: ConsistencyType;
}

export function ConsistencyAnalysis({ data }: ConsistencyAnalysisProps) {
  const bars = [
    { label: 'Positivos', value: data.positivePercent, color: 'bg-score-high' },
    { label: 'Neutros', value: data.neutralPercent, color: 'bg-score-medium' },
    { label: 'Negativos', value: data.negativePercent, color: 'bg-score-low' },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Distribución de Resultados</h4>
        <div className="flex h-6 rounded-full overflow-hidden bg-muted">
          {bars.map((bar) => (
            <div
              key={bar.label}
              className={`${bar.color} transition-all duration-700`}
              style={{ width: `${bar.value}%` }}
              title={`${bar.label}: ${bar.value}%`}
            />
          ))}
        </div>
        <div className="flex gap-6 text-sm">
          {bars.map((bar) => (
            <div key={bar.label} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${bar.color}`} />
              <span className="text-muted-foreground">{bar.label}</span>
              <span className="font-mono font-semibold">{bar.value}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-muted/50">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Δ Meta-análisis vs RCT</p>
          <p className="font-mono text-2xl font-bold text-foreground">{data.metaVsRctDiff}%</p>
          <p className="text-xs text-muted-foreground mt-1">
            {data.metaVsRctDiff <= 5 ? 'Consistente' : data.metaVsRctDiff <= 15 ? 'Divergencia moderada' : 'Divergencia alta'}
          </p>
        </div>
        <div className="p-4 rounded-lg bg-muted/50">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Penalización conflictos</p>
          <p className="font-mono text-2xl font-bold text-foreground">-{data.conflictPenalty}pts</p>
          <p className="text-xs text-muted-foreground mt-1">
            {data.conflictPenalty <= 3 ? 'Bajo impacto' : data.conflictPenalty <= 10 ? 'Impacto moderado' : 'Alto impacto'}
          </p>
        </div>
      </div>
    </div>
  );
}
