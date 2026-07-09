export interface StayRate {
  nights: number;
  totalPrice: number; // COP
  pricePerPerson: number; // COP
  discountPercentage?: number; // Descuento vs. 1 noche
}

export interface MealRate {
  service: 'desayuno' | 'almuerzo' | 'cena';
  pricePerPerson: number; // COP
}

/**
 * Tarifas de estadía para grupos de hasta 12 personas.
 * Basadas en el análisis del plan de desarrollo.
 * TODO: Actualizar con tarifas reales del cliente.
 */
export const stayRates: StayRate[] = [
  {
    nights: 1,
    totalPrice: 1294010,
    pricePerPerson: 107834,
    discountPercentage: 0,
  },
  {
    nights: 2,
    totalPrice: 2441529,
    pricePerPerson: 203461,
    discountPercentage: 5.7,
  },
  {
    nights: 3,
    totalPrice: 3454994,
    pricePerPerson: 287916,
    discountPercentage: 11.0,
  },
  {
    nights: 4,
    totalPrice: 4335171,
    pricePerPerson: 361264,
    discountPercentage: 16.2,
  },
];

/**
 * Tarifas de servicios de alimentación (opcional).
 * Se coordina directamente con la finca.
 * TODO: Confirmar tarifas con el cliente.
 */
export const mealRates: MealRate[] = [
  { service: 'desayuno', pricePerPerson: 10000 },
  { service: 'almuerzo', pricePerPerson: 18000 },
  { service: 'cena', pricePerPerson: 10000 },
];
