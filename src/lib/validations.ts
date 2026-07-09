import { z } from 'zod';

/**
 * Esquema de validación para el formulario de contacto/reserva.
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  phone: z
    .string()
    .regex(/^(\+57|0)?([1-9][0-9]{9})$/, 'Teléfono colombiano inválido'),
  numberOfPeople: z
    .number()
    .int()
    .min(1, 'Mínimo 1 persona')
    .max(12, 'Máximo 12 personas'),
  tentativeDates: z.string().min(1, 'Por favor indica las fechas tentativas'),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
