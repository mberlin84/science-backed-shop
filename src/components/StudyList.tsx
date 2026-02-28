import { useState } from 'react';
import { Study } from '@/data/types';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface StudyListProps {
  studies: Study[];
}

export function StudyList({ studies }: StudyListProps) {
  const [expanded, setExpanded] = useState(false);
  const visibleStudies = expanded ? studies : studies.slice(0, 3);

  const resultConfig: Record<string, string> = {
    'Positivo': 'bg-evidence-solid-bg text-score-high',
    'Neutro': 'bg-evidence-moderate-bg text-score-medium',
    'Negativo': 'bg-evidence-inconsistent-bg text-score-low',
  };

  return (
    <div className="space-y-2">
      {visibleStudies.map((study) => (
        <div key={study.id} className="flex items-center justify-between gap-3 p-3 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{study.title}</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {study.journal} · {study.year} · {study.sampleSize.toLocaleString()} participantes
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${resultConfig[study.result]}`}>
              {study.result}
            </span>
            <a
              href={`https://doi.org/${study.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Ver estudio"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      ))}

      {studies.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-sm text-primary hover:underline mx-auto mt-2"
        >
          {expanded ? (
            <>Mostrar menos <ChevronUp className="w-4 h-4" /></>
          ) : (
            <>Ver los {studies.length} estudios <ChevronDown className="w-4 h-4" /></>
          )}
        </button>
      )}
    </div>
  );
}
