# Instrucciones para GitHub Copilot

Este archivo contiene la guía de contexto para GitHub Copilot. Úsalo como referencia al generar código.

## Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript (strict mode)
- **Estilos:** Tailwind CSS
- **Formularios:** React Hook Form + Zod
- **Hospedaje:** Vercel

## Convenciones de Código

1. **TypeScript:**
   - Modo estricto habilitado (`strict: true`)
   - Siempre tipificar parámetros de funciones y returns
   - No usar `any`

2. **Componentes:**
   - Componentes funcionales únicamente
   - Props tipificadas con interfaces
   - Exportar por defecto solo en páginas (`page.tsx`)
   - Exportar con nombre en componentes reutilizables

3. **Tailwind:**
   - Usar clases utilitarias de Tailwind
   - **No** usar CSS-in-JS ni librerías de UI pesadas (Material UI, Ant Design)
   - Mantener el proyecto ligero
   - Paleta de colores:
     - Verde bosque: `forest-dark`, `forest`, `forest-light`
     - Dorado tierra: `earth-gold`, `earth-light`
     - Fondos: `cream`, `cream-dark`

4. **Datos y Formatos:**
   - Precios en pesos colombianos (COP) como enteros sin decimales
   - Usar `formatCOP()` o `formatCOPAmount()` de `@/lib/formatCurrency.ts` para mostrar
   - Nunca hardcodear formato de moneda en componentes
   - Datos estructurados en `src/data/` (rooms.ts, pricing.ts, property.ts)

5. **Validación:**
   - Formularios validados con React Hook Form + Zod
   - Esquemas en `src/lib/validations.ts`
   - Validación en cliente y servidor

6. **Ruta de API:**
   - Crear rutas en `src/app/api/`
   - Siempre validar entrada con Zod
   - Manejar errores con status codes HTTP apropiados

7. **Copiar:**
   - Tono cálido y cercano
   - Enfoque en "tu grupo, tu familia, la finca completa para ustedes"
   - Evitar lenguaje corporativo/hotelero genérico
   - Español (Colombia)

## Placeholders

- `TODO:` comentarios marcan datos reales a reemplazar
- No inventar datos de contacto, testimonios, redes sociales
- Usar imágenes de unsplash.com como placeholder hasta tener fotos reales

## Fases del Proyecto

Ver `PLAN_DESARROLLO_WEB.md` en la raíz del repo para el plan completo de trabajo.

Orden de implementación:
1. ✓ Fase 0: Setup inicial (completa)
2. ✓ Fase 1: Contenido y datos base (en progreso)
3. Fase 2: Componentes de layout
4. Fase 3: Página de inicio
5. Fase 4: Habitaciones y tarifas
6. Fase 5: Contacto y formulario
7. Fase 6: SEO y analítica
8. Fase 7: QA y despliegue
