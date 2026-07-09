/**
 * Formatea un número a pesos colombianos (COP) sin decimales.
 * Ej: 1294010 → "$1.294.010"
 */
export function formatCOP(value: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Formatea un número a pesos colombianos sin símbolo ($).
 * Ej: 1294010 → "1.294.010"
 */
export function formatCOPAmount(value: number): string {
  return new Intl.NumberFormat('es-CO', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
