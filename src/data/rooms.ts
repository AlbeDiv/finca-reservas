export type Bed = 'doble' | 'semidoble' | 'sencilla' | 'nicho sencillo' | 'sofá cama';

export interface Room {
  id: string;
  name: string;
  beds: { type: Bed; quantity: number }[];
  capacity: number;
  images: string[];
  description?: string;
}

/**
 * Datos de las 5 habitaciones de la finca.
 * TODO: Reemplazar URLs de imágenes con fotos reales de la finca.
 */
export const rooms: Room[] = [
  {
    id: 'habitacion-1',
    name: 'Habitación 1',
    beds: [{ type: 'doble', quantity: 1 }],
    capacity: 2,
    images: [
      'https://images.unsplash.com/photo-1631049307038-da0ec84d8a46?w=800&q=80',
    ],
    description: 'Habitación con cama doble, baño privado y vista a la naturaleza.',
  },
  {
    id: 'habitacion-2',
    name: 'Habitación 2',
    beds: [{ type: 'doble', quantity: 1 }],
    capacity: 2,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    ],
    description: 'Habitación con cama doble, baño privado y acceso a terraza.',
  },
  {
    id: 'habitacion-3',
    name: 'Habitación 3',
    beds: [
      { type: 'semidoble', quantity: 1 },
      { type: 'sencilla', quantity: 2 },
    ],
    capacity: 4,
    images: [
      'https://images.unsplash.com/photo-1540932239986-310128078ceb?w=800&q=80',
    ],
    description:
      'Habitación con 1 cama semidoble y 2 sencillas, ideal para familias.',
  },
  {
    id: 'habitacion-4',
    name: 'Habitación 4',
    beds: [{ type: 'doble', quantity: 2 }],
    capacity: 4,
    images: [
      'https://images.unsplash.com/photo-1591088323688-a8efa6e5dffe?w=800&q=80',
    ],
    description: 'Habitación con 2 camas dobles, perfecta para dos parejas.',
  },
  {
    id: 'habitacion-5',
    name: 'Habitación 5 - Suite',
    beds: [
      { type: 'doble', quantity: 1 },
      { type: 'sofá cama', quantity: 1 },
    ],
    capacity: 4,
    images: [
      'https://images.unsplash.com/photo-1568605116036-5312f7fbe0a8?w=800&q=80',
    ],
    description: 'Suite con cama doble y sofá cama, espacio amplio con baño privado.',
  },
];
