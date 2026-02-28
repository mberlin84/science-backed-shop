import { EvidenceLevel } from '@/data/types';
import { Shield, TrendingUp, FlaskConical, AlertTriangle } from 'lucide-react';

interface EvidenceBadgeProps {
  level: EvidenceLevel;
  size?: 'sm' | 'md' | 'lg';
}

const config: Record<EvidenceLevel, { bg: string; text: string; icon: typeof Shield }> = {
  'Sólida': { bg: 'bg-evidence-solid-bg', text: 'text-evidence-solid', icon: Shield },
  'Moderada': { bg: 'bg-evidence-moderate-bg', text: 'text-evidence-moderate', icon: TrendingUp },
  'Limitada': { bg: 'bg-evidence-limited-bg', text: 'text-evidence-limited', icon: FlaskConical },
  'Inconsistente': { bg: 'bg-evidence-inconsistent-bg', text: 'text-evidence-inconsistent', icon: AlertTriangle },
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs gap-1',
  md: 'px-3 py-1 text-sm gap-1.5',
  lg: 'px-4 py-2 text-base gap-2',
};

export function EvidenceBadge({ level, size = 'md' }: EvidenceBadgeProps) {
  const { bg, text, icon: Icon } = config[level];
  return (
    <span className={`inline-flex items-center font-semibold rounded-full ${bg} ${text} ${sizes[size]}`}>
      <Icon className={size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5'} />
      {level}
    </span>
  );
}
