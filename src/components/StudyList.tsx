import { Study } from '@/data/types';
import { ExternalLink } from 'lucide-react';

interface StudyListProps {
  studies: Study[];
}

export function StudyList({ studies }: StudyListProps) {
  const resultColors: Record<string, string> = {
    'Positivo': 'text-score-high',
    'Neutro': 'text-score-medium',
    'Negativo': 'text-score-low',
  };

  return (
    <div className="space-y-3">
      {studies.map((study) => (
        <div key={study.id} className="p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-foreground text-sm leading-snug">{study.title}</h4>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground">
                <span>{study.journal}</span>
                <span className="font-mono">{study.year}</span>
                <span className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{study.type}</span>
                <span>n={study.sampleSize.toLocaleString()}</span>
                <span className={`font-semibold ${resultColors[study.result]}`}>{study.result}</span>
                {study.conflictOfInterest && (
                  <span className="text-evidence-inconsistent font-medium">⚠ Conflicto de interés</span>
                )}
              </div>
            </div>
            <a
              href={`https://doi.org/${study.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors shrink-0"
              title="Ver en DOI"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
