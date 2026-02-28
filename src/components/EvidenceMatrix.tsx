import { EvidenceObjective } from '@/data/types';
import { EvidenceBadge } from './EvidenceBadge';
import { CheckCircle2, Circle, XCircle } from 'lucide-react';

interface EvidenceMatrixProps {
  objectives: EvidenceObjective[];
}

function getEffectivenessIcon(percent: number) {
  if (percent >= 70) return <CheckCircle2 className="w-4 h-4 text-score-high" />;
  if (percent >= 50) return <Circle className="w-4 h-4 text-score-medium" />;
  return <XCircle className="w-4 h-4 text-score-low" />;
}

export function EvidenceMatrix({ objectives }: EvidenceMatrixProps) {
  return (
    <div className="space-y-3">
      {objectives.map((obj) => (
        <div key={obj.objective} className="p-4 rounded-lg border border-border bg-card hover:bg-muted/30 transition-colors">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {getEffectivenessIcon(obj.positivePercent)}
              <div>
                <p className="font-medium text-foreground text-sm">{obj.objective}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {obj.studyCount} estudios · {obj.positivePercent}% con resultados positivos
                </p>
              </div>
            </div>
            <EvidenceBadge level={obj.conclusion} size="sm" />
          </div>
        </div>
      ))}
    </div>
  );
}
