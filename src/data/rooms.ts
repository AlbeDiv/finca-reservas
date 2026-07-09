export interface Room {
  id: number;
  name: string;
  capacity: number;
  beds: { type: string; quantity: number }[];
  description?: string;
  images: string[];
}

export const rooms: Room[] = [
  {
    id: 1,
    name: 'Habitación Principal',
    capacity: 2,
    beds: [
      { type: 'Cama Doble', quantity: 1 },
      { type: 'Baño Privado', quantity: 1 },
    ],
    description: 'Suite con vista al jardín, baño con ducha y amenidades premium.',
    images: ['/images/rooms/room-1.jpg'],
  },
  {
    id: 2,
    name: 'Habitación Deluxe',
    capacity: 2,
    beds: [
      { type: 'Cama Doble', quantity: 1 },
      { type: 'Baño Privado', quantity: 1 },
    ],
    description: 'Habitación confortable con balcón, TV por cable y aire acondicionado.',
    images: ['/images/rooms/room-2.jpg'],
  },
  {
    id: 3,
    name: 'Habitación Familiar',
    capacity: 3,
    beds: [
      { type: 'Cama Doble', quantity: 1 },
      { type: 'Cama Sencilla', quantity: 1 },
      { type: 'Baño Privado', quantity: 1 },
    ],
    description: 'Ideal para familias pequeñas. Amplia, con zona de estar integrada.',
    images: ['/images/rooms/room-3.jpg'],
  },
  {
    id: 4,
    name: 'Habitación Twin',
    capacity: 2,
    beds: [
      { type: 'Cama Sencilla', quantity: 2 },
      { type: 'Baño Privado', quantity: 1 },
    ],
    description: 'Dos camas individuales, perfecta para amigos o compañeros de viaje.',
    images: ['/images/rooms/room-4.jpg'],
  },
  {
    id: 5,
    name: 'Habitación Estándar',
    capacity: 2,
    beds: [
      { type: 'Cama Doble', quantity: 1 },
      { type: 'Baño Privado', quantity: 1 },
    ],
    description: 'Habitación acogedora con todas las comodidades necesarias.',
    images: ['/images/rooms/room-5.jpg'],
  },
];
