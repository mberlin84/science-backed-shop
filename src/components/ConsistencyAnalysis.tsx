import { ConsistencyAnalysis as ConsistencyType } from '@/data/types';
import { AlertTriangle, CheckCircle2, Info } from 'lucide-react';

interface ConsistencyAnalysisProps {
  data: ConsistencyType;
}

export function ConsistencyAnalysis({ data }: ConsistencyAnalysisProps) {
  const bars = [
    { label: 'Resultados a favor', value: data.positivePercent, color: 'bg-score-high' },
    { label: 'Sin efecto claro', value: data.neutralPercent, color: 'bg-score-medium' },
    { label: 'Resultados en contra', value: data.negativePercent, color: 'bg-score-low' },
  ];

  const reliabilityLevel = data.metaVsRctDiff <= 5 ? 'alta' : data.metaVsRctDiff <= 15 ? 'moderada' : 'baja';
  const conflictLevel = data.conflictPenalty <= 3 ? 'bajo' : data.conflictPenalty <= 10 ? 'moderado' : 'alto';

  return (
    <div className="space-y-5">
      {/* Visual bar */}
      <div className="space-y-3">
        <div className="flex h-5 rounded-full overflow-hidden bg-muted">
          {bars.map((bar) => (
            <div
              key={bar.label}
              className={`${bar.color} transition-all duration-700`}
              style={{ width: `${bar.value}%` }}
              title={`${bar.label}: ${bar.value}%`}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {bars.map((bar) => (
            <div key={bar.label} className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${bar.color}`} />
              <span className="text-muted-foreground text-xs">{bar.label}</span>
              <span className="font-mono text-xs font-semibold">{bar.value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Simple insights */}
      <div className="space-y-2">
        <div className="flex items-start gap-2.5 p-3 rounded-lg bg-muted/50">
          {reliabilityLevel === 'alta' ? (
            <CheckCircle2 className="w-4 h-4 text-score-high shrink-0 mt-0.5" />
          ) : reliabilityLevel === 'baja' ? (
            <AlertTriangle className="w-4 h-4 text-score-low shrink-0 mt-0.5" />
          ) : (
            <Info className="w-4 h-4 text-score-medium shrink-0 mt-0.5" />
          )}
          <p className="text-sm text-foreground">
            <span className="font-medium">Fiabilidad {reliabilityLevel}:</span>{' '}
            {reliabilityLevel === 'alta'
              ? 'Los estudios grandes y pequeños muestran resultados similares.'
              : reliabilityLevel === 'moderada'
              ? 'Hay cierta diferencia entre estudios grandes y pequeños.'
              : 'Los resultados varían mucho según el tipo de estudio.'}
          </p>
        </div>

        {data.conflictPenalty > 3 && (
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-muted/50">
            <AlertTriangle className="w-4 h-4 text-score-low shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              <span className="font-medium">Independencia {conflictLevel === 'alto' ? 'preocupante' : 'a considerar'}:</span>{' '}
              Algunos estudios fueron financiados por marcas de suplementos.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
