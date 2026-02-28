export type EvidenceLevel = 'Sólida' | 'Moderada' | 'Limitada' | 'Inconsistente';

export interface Study {
  id: string;
  title: string;
  doi: string;
  year: number;
  journal: string;
  type: 'Meta-análisis' | 'RCT' | 'Observacional' | 'Revisión sistemática';
  sampleSize: number;
  result: 'Positivo' | 'Neutro' | 'Negativo';
  conflictOfInterest: boolean;
}

export interface EvidenceObjective {
  objective: string;
  studyCount: number;
  positivePercent: number;
  avgQuality: number;
  consistency: number;
  conclusion: EvidenceLevel;
}

export interface ConsistencyAnalysis {
  positivePercent: number;
  neutralPercent: number;
  negativePercent: number;
  metaVsRctDiff: number;
  conflictPenalty: number;
}

export interface ProductVariant {
  id: string;
  label: string;
  concentration: string;
  form: string;
  price: number;
  currency: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  brand: string;
  concentration: string;
  form: string;
  price: number;
  currency: string;
  effectiveDoseMatch: 'Sí' | 'Parcial' | 'No';
  certifications: string[];
  pricePerEffectiveDose: number;
  rankingScore: number;
  variants: ProductVariant[];
  imageUrl?: string;
}

export interface Supplement {
  id: string;
  name: string;
  slug: string;
  category: string;
  methodologyScore: number;
  consistencyScore: number;
  safetyScore: number;
  evidenceLevel: EvidenceLevel;
  summary: string;
  objectives: EvidenceObjective[];
  consistency: ConsistencyAnalysis;
  studies: Study[];
  products: Product[];
  effectiveDose: string;
  population: string;
}

export interface CartItem {
  productId: string;
  variantId: string;
  brand: string;
  variantLabel: string;
  price: number;
  currency: string;
  quantity: number;
  supplementName: string;
  supplementSlug: string;
}
