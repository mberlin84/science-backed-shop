import { EvidenceObjective } from '@/data/types';
import { EvidenceBadge } from './EvidenceBadge';

interface EvidenceMatrixProps {
  objectives: EvidenceObjective[];
}

export function EvidenceMatrix({ objectives }: EvidenceMatrixProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Objetivo</th>
            <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Nº Estudios</th>
            <th className="text-center py-3 px-4 font-semibold text-muted-foreground">% Positivos</th>
            <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Calidad Prom.</th>
            <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Consistencia</th>
            <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Conclusión</th>
          </tr>
        </thead>
        <tbody>
          {objectives.map((obj) => (
            <tr key={obj.objective} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
              <td className="py-3 px-4 font-medium text-foreground">{obj.objective}</td>
              <td className="py-3 px-4 text-center font-mono">{obj.studyCount}</td>
              <td className="py-3 px-4 text-center font-mono">{obj.positivePercent}%</td>
              <td className="py-3 px-4 text-center font-mono">{obj.avgQuality.toFixed(1)}</td>
              <td className="py-3 px-4 text-center font-mono">{obj.consistency}%</td>
              <td className="py-3 px-4 text-center">
                <EvidenceBadge level={obj.conclusion} size="sm" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
