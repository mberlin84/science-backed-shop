import { Supplement } from './types';

const creatineImages = [
  'https://images.unsplash.com/photo-1593095948071-474c5cc2c129?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=200&fit=crop',
];

const vitaminDImages = [
  'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1505576399279-0d06b0f0de29?w=300&h=200&fit=crop',
];

const ashwagandhaImages = [
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop',
];

const omega3Images = [
  'https://images.unsplash.com/photo-1535185384036-28bbc8035f28?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop',
];

const turmericImages = [
  'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=200&fit=crop',
];

export const supplements: Supplement[] = [
  {
    id: '1',
    name: 'Creatina Monohidrato',
    slug: 'creatina-monohidrato',
    category: 'Rendimiento deportivo',
    methodologyScore: 94,
    consistencyScore: 91,
    safetyScore: 96,
    evidenceLevel: 'Sólida',
    summary: 'La creatina es uno de los suplementos más estudiados. Ayuda a ganar fuerza, potencia y rendimiento en ejercicios intensos. Es segura a largo plazo y también puede mejorar la función cognitiva.',
    effectiveDose: '3–5 g/día',
    population: 'Adultos sanos, atletas, personas mayores',
    objectives: [
      { objective: 'Fuerza muscular', studyCount: 78, positivePercent: 89, avgQuality: 8.2, consistency: 92, conclusion: 'Sólida' },
      { objective: 'Rendimiento en sprint', studyCount: 45, positivePercent: 82, avgQuality: 7.8, consistency: 85, conclusion: 'Sólida' },
      { objective: 'Masa muscular', studyCount: 52, positivePercent: 76, avgQuality: 7.5, consistency: 80, conclusion: 'Moderada' },
      { objective: 'Cognición', studyCount: 18, positivePercent: 67, avgQuality: 6.8, consistency: 65, conclusion: 'Moderada' },
    ],
    consistency: { positivePercent: 82, neutralPercent: 12, negativePercent: 6, metaVsRctDiff: 4, conflictPenalty: 2 },
    studies: [
      { id: 's1', title: 'Effects of creatine supplementation on muscle strength', doi: '10.1234/study1', year: 2022, journal: 'J Sports Med', type: 'Meta-análisis', sampleSize: 1200, result: 'Positivo', conflictOfInterest: false },
      { id: 's2', title: 'Creatine and cognitive performance in healthy adults', doi: '10.1234/study2', year: 2023, journal: 'Nutrients', type: 'RCT', sampleSize: 180, result: 'Positivo', conflictOfInterest: false },
      { id: 's3', title: 'Long-term safety of creatine monohydrate', doi: '10.1234/study3', year: 2021, journal: 'Int J Sport Nutr', type: 'Revisión sistemática', sampleSize: 3400, result: 'Positivo', conflictOfInterest: false },
      { id: 's4', title: 'Creatine supplementation and sprint performance', doi: '10.1234/study4', year: 2020, journal: 'Eur J Appl Physiol', type: 'RCT', sampleSize: 95, result: 'Positivo', conflictOfInterest: true },
      { id: 's5', title: 'No significant effect of creatine on endurance', doi: '10.1234/study5', year: 2022, journal: 'Med Sci Sports Exerc', type: 'RCT', sampleSize: 60, result: 'Neutro', conflictOfInterest: false },
    ],
    products: [
      {
        id: 'p1', brand: 'Creapure®', concentration: '5g por dosis', form: 'Polvo micronizado', price: 24.99, currency: 'USD',
        effectiveDoseMatch: 'Sí', certifications: ['NSF Certified', 'Informed Sport'], pricePerEffectiveDose: 0.28, rankingScore: 96,
        images: creatineImages,
        seller: { id: 'seller1', name: 'NutriPro Store', rating: 4.8, totalSales: 12400 },
        variants: [
          { id: 'p1v1', label: '250g (50 dosis)', concentration: '5g', form: 'Polvo', price: 24.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.50 },
          { id: 'p1v2', label: '500g (100 dosis)', concentration: '5g', form: 'Polvo', price: 42.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.43 },
          { id: 'p1v3', label: '1kg (200 dosis)', concentration: '5g', form: 'Polvo', price: 74.99, currency: 'USD', inStock: false, pricePerEffectiveDose: 0.37 },
        ],
      },
      {
        id: 'p2', brand: 'Optimum Nutrition', concentration: '5g por dosis', form: 'Polvo', price: 19.99, currency: 'USD',
        effectiveDoseMatch: 'Sí', certifications: ['Informed Choice'], pricePerEffectiveDose: 0.22, rankingScore: 91,
        images: creatineImages,
        seller: { id: 'seller2', name: 'FitMarket', rating: 4.6, totalSales: 8900 },
        variants: [
          { id: 'p2v1', label: '300g', concentration: '5g', form: 'Polvo', price: 19.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.33 },
          { id: 'p2v2', label: '600g', concentration: '5g', form: 'Polvo', price: 34.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.29 },
        ],
      },
      {
        id: 'p3', brand: 'BulkSupplements', concentration: '5g por dosis', form: 'Polvo', price: 15.99, currency: 'USD',
        effectiveDoseMatch: 'Sí', certifications: [], pricePerEffectiveDose: 0.16, rankingScore: 82,
        images: creatineImages,
        seller: { id: 'seller3', name: 'Bulk Direct', rating: 4.3, totalSales: 5600 },
        variants: [
          { id: 'p3v1', label: '250g', concentration: '5g', form: 'Polvo', price: 15.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.32 },
          { id: 'p3v2', label: '1kg', concentration: '5g', form: 'Polvo', price: 39.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.20 },
        ],
      },
      {
        id: 'p4', brand: 'MuscleTech', concentration: '3g por cápsula', form: 'Cápsula', price: 29.99, currency: 'USD',
        effectiveDoseMatch: 'Parcial', certifications: ['GMP'], pricePerEffectiveDose: 0.50, rankingScore: 68,
        images: creatineImages,
        seller: { id: 'seller4', name: 'SupplementKing', rating: 4.1, totalSales: 3200 },
        variants: [
          { id: 'p4v1', label: '120 cápsulas', concentration: '3g', form: 'Cápsula', price: 29.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.50 },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Vitamina D3',
    slug: 'vitamina-d3',
    category: 'Salud general',
    methodologyScore: 82,
    consistencyScore: 74,
    safetyScore: 90,
    evidenceLevel: 'Moderada',
    summary: 'Vitamina esencial para huesos y defensas. Especialmente útil si tienes poca exposición al sol o niveles bajos confirmados. Los beneficios para otras enfermedades son más inciertos.',
    effectiveDose: '1000–4000 UI/día',
    population: 'Adultos con deficiencia, personas mayores, baja exposición solar',
    objectives: [
      { objective: 'Salud ósea', studyCount: 95, positivePercent: 78, avgQuality: 7.9, consistency: 82, conclusion: 'Sólida' },
      { objective: 'Función inmune', studyCount: 42, positivePercent: 68, avgQuality: 7.2, consistency: 70, conclusion: 'Moderada' },
      { objective: 'Prevención cardiovascular', studyCount: 28, positivePercent: 45, avgQuality: 7.5, consistency: 50, conclusion: 'Limitada' },
      { objective: 'Estado de ánimo', studyCount: 22, positivePercent: 55, avgQuality: 6.5, consistency: 55, conclusion: 'Limitada' },
    ],
    consistency: { positivePercent: 65, neutralPercent: 22, negativePercent: 13, metaVsRctDiff: 12, conflictPenalty: 5 },
    studies: [
      { id: 's6', title: 'Vitamin D and bone mineral density meta-analysis', doi: '10.1234/study6', year: 2023, journal: 'Lancet', type: 'Meta-análisis', sampleSize: 8500, result: 'Positivo', conflictOfInterest: false },
      { id: 's7', title: 'Vitamin D supplementation and immune response', doi: '10.1234/study7', year: 2022, journal: 'BMJ', type: 'RCT', sampleSize: 420, result: 'Positivo', conflictOfInterest: false },
      { id: 's8', title: 'High-dose vitamin D and cardiovascular outcomes', doi: '10.1234/study8', year: 2023, journal: 'NEJM', type: 'RCT', sampleSize: 2500, result: 'Neutro', conflictOfInterest: false },
    ],
    products: [
      {
        id: 'p5', brand: 'NOW Foods', concentration: '2000 UI', form: 'Cápsula blanda', price: 12.99, currency: 'USD',
        effectiveDoseMatch: 'Sí', certifications: ['GMP', 'Non-GMO'], pricePerEffectiveDose: 0.07, rankingScore: 93,
        images: vitaminDImages,
        seller: { id: 'seller5', name: 'VitaShop', rating: 4.7, totalSales: 15200 },
        variants: [
          { id: 'p5v1', label: '120 cápsulas', concentration: '2000 UI', form: 'Cápsula blanda', price: 12.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.11 },
          { id: 'p5v2', label: '240 cápsulas', concentration: '2000 UI', form: 'Cápsula blanda', price: 21.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.09 },
        ],
      },
      {
        id: 'p6', brand: 'Solgar', concentration: '4000 UI', form: 'Cápsula blanda', price: 18.99, currency: 'USD',
        effectiveDoseMatch: 'Sí', certifications: ['GMP', 'Kosher'], pricePerEffectiveDose: 0.10, rankingScore: 90,
        images: vitaminDImages,
        seller: { id: 'seller6', name: 'HealthFirst', rating: 4.5, totalSales: 7800 },
        variants: [
          { id: 'p6v1', label: '60 cápsulas', concentration: '4000 UI', form: 'Cápsula blanda', price: 18.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.32 },
        ],
      },
      {
        id: 'p7', brand: 'NatureMade', concentration: '1000 UI', form: 'Tableta', price: 8.99, currency: 'USD',
        effectiveDoseMatch: 'Parcial', certifications: ['USP Verified'], pricePerEffectiveDose: 0.06, rankingScore: 85,
        images: vitaminDImages,
        seller: { id: 'seller7', name: 'NaturalHub', rating: 4.4, totalSales: 6100 },
        variants: [
          { id: 'p7v1', label: '100 tabletas', concentration: '1000 UI', form: 'Tableta', price: 8.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.09 },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Ashwagandha (KSM-66)',
    slug: 'ashwagandha-ksm66',
    category: 'Adaptógenos',
    methodologyScore: 68,
    consistencyScore: 62,
    safetyScore: 78,
    evidenceLevel: 'Moderada',
    summary: 'Puede ayudar a reducir el estrés y mejorar el sueño. Para rendimiento deportivo y testosterona la evidencia es más débil. Se recomienda consultar con un profesional para uso prolongado.',
    effectiveDose: '300–600 mg/día (extracto estandarizado)',
    population: 'Adultos con estrés crónico, atletas recreacionales',
    objectives: [
      { objective: 'Reducción de estrés', studyCount: 24, positivePercent: 75, avgQuality: 6.8, consistency: 72, conclusion: 'Moderada' },
      { objective: 'Rendimiento deportivo', studyCount: 12, positivePercent: 58, avgQuality: 6.2, consistency: 55, conclusion: 'Limitada' },
      { objective: 'Testosterona', studyCount: 8, positivePercent: 50, avgQuality: 5.8, consistency: 48, conclusion: 'Limitada' },
      { objective: 'Calidad del sueño', studyCount: 10, positivePercent: 70, avgQuality: 6.5, consistency: 65, conclusion: 'Moderada' },
    ],
    consistency: { positivePercent: 62, neutralPercent: 25, negativePercent: 13, metaVsRctDiff: 15, conflictPenalty: 8 },
    studies: [
      { id: 's9', title: 'KSM-66 and cortisol reduction: a systematic review', doi: '10.1234/study9', year: 2023, journal: 'J Clin Med', type: 'Revisión sistemática', sampleSize: 950, result: 'Positivo', conflictOfInterest: true },
      { id: 's10', title: 'Ashwagandha and athletic performance in young adults', doi: '10.1234/study10', year: 2022, journal: 'J Int Soc Sports Nutr', type: 'RCT', sampleSize: 57, result: 'Positivo', conflictOfInterest: true },
      { id: 's11', title: 'No effect of ashwagandha on testosterone in healthy males', doi: '10.1234/study11', year: 2023, journal: 'Phytother Res', type: 'RCT', sampleSize: 80, result: 'Neutro', conflictOfInterest: false },
    ],
    products: [
      {
        id: 'p8', brand: 'KSM-66 by Ixoreal', concentration: '600 mg', form: 'Cápsula', price: 22.99, currency: 'USD',
        effectiveDoseMatch: 'Sí', certifications: ['GMP', 'Organic'], pricePerEffectiveDose: 0.38, rankingScore: 88,
        images: ashwagandhaImages,
        seller: { id: 'seller8', name: 'AdaptoGen Co', rating: 4.6, totalSales: 4300 },
        variants: [
          { id: 'p8v1', label: '60 cápsulas', concentration: '600 mg', form: 'Cápsula', price: 22.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.38 },
          { id: 'p8v2', label: '120 cápsulas', concentration: '600 mg', form: 'Cápsula', price: 39.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.33 },
        ],
      },
      {
        id: 'p9', brand: 'Jarrow Formulas', concentration: '300 mg', form: 'Cápsula', price: 14.99, currency: 'USD',
        effectiveDoseMatch: 'Parcial', certifications: ['GMP'], pricePerEffectiveDose: 0.50, rankingScore: 72,
        images: ashwagandhaImages,
        seller: { id: 'seller9', name: 'WellnessPlus', rating: 4.2, totalSales: 2800 },
        variants: [
          { id: 'p9v1', label: '60 cápsulas', concentration: '300 mg', form: 'Cápsula', price: 14.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.50 },
        ],
      },
    ],
  },
  {
    id: '4',
    name: 'Omega-3 (EPA/DHA)',
    slug: 'omega-3-epa-dha',
    category: 'Salud general',
    methodologyScore: 86,
    consistencyScore: 70,
    safetyScore: 92,
    evidenceLevel: 'Moderada',
    summary: 'Los omega-3 ayudan a reducir triglicéridos y cuidar el corazón. Para el cerebro y el ánimo los resultados son más variados. La calidad del producto importa mucho: busca alta concentración de EPA/DHA.',
    effectiveDose: '1–3 g EPA+DHA/día',
    population: 'Adultos, pacientes cardiovasculares, embarazadas',
    objectives: [
      { objective: 'Triglicéridos', studyCount: 65, positivePercent: 85, avgQuality: 8.0, consistency: 88, conclusion: 'Sólida' },
      { objective: 'Salud cardiovascular', studyCount: 48, positivePercent: 68, avgQuality: 8.2, consistency: 65, conclusion: 'Moderada' },
      { objective: 'Inflamación', studyCount: 35, positivePercent: 72, avgQuality: 7.0, consistency: 70, conclusion: 'Moderada' },
      { objective: 'Cognición / Depresión', studyCount: 28, positivePercent: 55, avgQuality: 6.8, consistency: 52, conclusion: 'Limitada' },
    ],
    consistency: { positivePercent: 70, neutralPercent: 20, negativePercent: 10, metaVsRctDiff: 8, conflictPenalty: 6 },
    studies: [
      { id: 's12', title: 'Omega-3 and triglyceride reduction: updated meta-analysis', doi: '10.1234/study12', year: 2023, journal: 'Circulation', type: 'Meta-análisis', sampleSize: 12000, result: 'Positivo', conflictOfInterest: false },
      { id: 's13', title: 'EPA supplementation and cardiovascular events', doi: '10.1234/study13', year: 2022, journal: 'NEJM', type: 'RCT', sampleSize: 8000, result: 'Positivo', conflictOfInterest: true },
    ],
    products: [
      {
        id: 'p10', brand: 'Nordic Naturals', concentration: '1100 mg EPA+DHA', form: 'Cápsula blanda', price: 34.99, currency: 'USD',
        effectiveDoseMatch: 'Sí', certifications: ['IFOS 5-Star', 'Non-GMO'], pricePerEffectiveDose: 0.58, rankingScore: 94,
        images: omega3Images,
        seller: { id: 'seller10', name: 'OmegaVita', rating: 4.9, totalSales: 18700 },
        variants: [
          { id: 'p10v1', label: '60 cápsulas', concentration: '1100 mg', form: 'Cápsula blanda', price: 34.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.58 },
          { id: 'p10v2', label: '120 cápsulas', concentration: '1100 mg', form: 'Cápsula blanda', price: 59.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.50 },
        ],
      },
      {
        id: 'p11', brand: 'Carlson Labs', concentration: '1600 mg EPA+DHA', form: 'Líquido', price: 29.99, currency: 'USD',
        effectiveDoseMatch: 'Sí', certifications: ['IFOS 5-Star', 'NSF'], pricePerEffectiveDose: 0.50, rankingScore: 92,
        images: omega3Images,
        seller: { id: 'seller11', name: 'PureHealth MX', rating: 4.5, totalSales: 6400 },
        variants: [
          { id: 'p11v1', label: '200 ml', concentration: '1600 mg', form: 'Líquido', price: 29.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.75 },
          { id: 'p11v2', label: '500 ml', concentration: '1600 mg', form: 'Líquido', price: 54.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.55 },
        ],
      },
    ],
  },
  {
    id: '5',
    name: 'Cúrcuma / Curcumina',
    slug: 'curcuma-curcumina',
    category: 'Antiinflamatorio',
    methodologyScore: 58,
    consistencyScore: 48,
    safetyScore: 82,
    evidenceLevel: 'Inconsistente',
    summary: 'Los resultados científicos son contradictorios. Algunos estudios muestran efectos antiinflamatorios leves, pero la evidencia general es débil. La absorción es un problema clave. Muchos estudios tienen conflictos de interés.',
    effectiveDose: '500–1500 mg/día (con potenciador de absorción)',
    population: 'Adultos con dolor articular, inflamación crónica',
    objectives: [
      { objective: 'Inflamación (CRP)', studyCount: 32, positivePercent: 55, avgQuality: 6.0, consistency: 45, conclusion: 'Inconsistente' },
      { objective: 'Dolor articular', studyCount: 18, positivePercent: 62, avgQuality: 5.8, consistency: 50, conclusion: 'Limitada' },
      { objective: 'Antioxidante', studyCount: 15, positivePercent: 48, avgQuality: 5.5, consistency: 40, conclusion: 'Inconsistente' },
    ],
    consistency: { positivePercent: 52, neutralPercent: 28, negativePercent: 20, metaVsRctDiff: 22, conflictPenalty: 15 },
    studies: [
      { id: 's14', title: 'Curcumin and inflammatory markers: a critical review', doi: '10.1234/study14', year: 2023, journal: 'Phytomedicine', type: 'Revisión sistemática', sampleSize: 2200, result: 'Neutro', conflictOfInterest: false },
      { id: 's15', title: 'Bioavailable curcumin and joint pain in osteoarthritis', doi: '10.1234/study15', year: 2022, journal: 'Arthritis Res Ther', type: 'RCT', sampleSize: 140, result: 'Positivo', conflictOfInterest: true },
    ],
    products: [
      {
        id: 'p12', brand: 'Meriva (Thorne)', concentration: '1000 mg', form: 'Cápsula (fitosoma)', price: 38.99, currency: 'USD',
        effectiveDoseMatch: 'Sí', certifications: ['NSF', 'GMP'], pricePerEffectiveDose: 0.65, rankingScore: 78,
        images: turmericImages,
        seller: { id: 'seller12', name: 'ThorneOfficial', rating: 4.8, totalSales: 9200 },
        variants: [
          { id: 'p12v1', label: '60 cápsulas', concentration: '1000 mg', form: 'Cápsula', price: 38.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.65 },
          { id: 'p12v2', label: '120 cápsulas', concentration: '1000 mg', form: 'Cápsula', price: 69.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.58 },
        ],
      },
      {
        id: 'p13', brand: 'Generic Turmeric', concentration: '500 mg', form: 'Cápsula', price: 9.99, currency: 'USD',
        effectiveDoseMatch: 'No', certifications: [], pricePerEffectiveDose: 0.33, rankingScore: 35,
        images: turmericImages,
        seller: { id: 'seller13', name: 'BudgetSupps', rating: 3.8, totalSales: 1200 },
        variants: [
          { id: 'p13v1', label: '90 cápsulas', concentration: '500 mg', form: 'Cápsula', price: 9.99, currency: 'USD', inStock: true, pricePerEffectiveDose: 0.33 },
        ],
      },
    ],
  },
];

export function getSupplementBySlug(slug: string): Supplement | undefined {
  return supplements.find(s => s.slug === slug);
}

export function getSupplementById(id: string): Supplement | undefined {
  return supplements.find(s => s.id === id);
}
