export interface PropertyInfo {
  name: string;
  location: string;
  region: string;
  capacity: number;
  totalRooms: number;
  distanceFromPereira: string;
  distanceFromManizales: string;
  distanceFromArmenia: string;
  distanceFromCartago: string;
  whatsappNumber: string; // Formato: +57XXXXXXXXXX
  email: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

/**
 * Información de la propiedad.
 * TODO: Actualizar con datos reales de la finca (coordenadas, email, número de WhatsApp).
 */
export const propertyInfo: PropertyInfo = {
  name: 'Finca Turística Belalcázar',
  location: 'Belalcázar, Caldas',
  region: 'Eje Cafetero',
  capacity: 12,
  totalRooms: 5,
  distanceFromPereira: '45 km',
  distanceFromManizales: '35 km',
  distanceFromArmenia: '60 km',
  distanceFromCartago: '50 km',
  whatsappNumber: '+573001234567', // TODO: reemplazar con número real
  email: 'info@fincabelalcazar.com', // TODO: reemplazar con email real
  coordinates: {
    latitude: 5.3667, // TODO: coordenadas reales
    longitude: -75.5, // TODO: coordenadas reales
  },
};
