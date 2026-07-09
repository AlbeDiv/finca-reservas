'use client';

import Image from 'next/image';
import Link from 'next/link';
import { rooms } from '@/data/rooms';
import { stayRates } from '@/data/pricing';
import { formatCOP } from '@/lib/formatCurrency';

export default function HabitacionesPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-forest-dark to-forest py-16 px-4">
        <div className="mx-auto max-w-7xl text-center text-cream">
          <h1 className="text-5xl font-display font-bold mb-4">
            Nuestras Habitaciones
          </h1>
          <p className="text-xl text-cream-dark">
            5 habitaciones diseñadas para tu comodidad
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                {/* Room Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={room.images[0]}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Room Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-forest-dark mb-2">
                    {room.name}
                  </h3>

                  {/* Capacity */}
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Capacidad:</strong> Hasta {room.capacity} personas
                  </p>

                  {/* Beds */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-forest mb-2">
                      Camas:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {room.beds.map((bed, idx) => (
                        <li key={idx}>
                          • {bed.quantity}x {bed.type}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Description */}
                  {room.description && (
                    <p className="text-sm text-gray-600 mb-6">
                      {room.description}
                    </p>
                  )}

                  {/* CTA Button */}
                  <Link
                    href="/contacto"
                    className="block text-center bg-forest-dark text-white py-2 rounded-lg hover:bg-forest transition font-medium"
                  >
                    Reservar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-forest-dark text-cream py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">
            Tarifas por Noche
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stayRates.map((rate, idx) => (
              <div
                key={idx}
                className="bg-forest rounded-lg p-6 text-center hover:bg-forest-light transition"
              >
                <p className="text-sm text-cream-dark mb-2">
                  {rate.nights} {rate.nights === 1 ? 'noche' : 'noches'}
                </p>
                <p className="text-3xl font-bold text-cream mb-4">
                  {formatCOP(rate.totalPrice)}
                </p>
                <p className="text-sm text-cream-dark mb-2">
                  Por persona: {formatCOP(rate.pricePerPerson)}
                </p>
                {rate.discountPercentage && rate.discountPercentage > 0 && (
                  <p className="text-xs bg-earth-light text-cream px-3 py-1 rounded inline-block">
                    Descuento: {rate.discountPercentage.toFixed(1)}%
                  </p>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-cream-dark mt-8 text-sm">
            * Tarifa para grupos de hasta 12 personas.
            <br />* Servicios de alimentación disponibles bajo consulta.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-display font-bold text-forest-dark mb-4">
            ¿Listo para tu experiencia?
          </h2>
          <p className="text-gray-600 mb-8">
            Contacta con nosotros para conocer disponibilidad y hacer tu reserva.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-forest-dark text-white px-8 py-3 rounded-lg hover:bg-forest transition font-medium"
          >
            Reservar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
