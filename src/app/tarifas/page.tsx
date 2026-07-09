'use client';

import Link from 'next/link';
import { stayRates } from '@/data/pricing';
import { formatCOP } from '@/lib/formatCurrency';

export default function TarifasPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-forest-dark to-forest py-16 px-4">
        <div className="mx-auto max-w-7xl text-center text-cream">
          <h1 className="text-5xl font-display font-bold mb-4">
            Nuestras Tarifas
          </h1>
          <p className="text-xl text-cream-dark">
            Alojamiento exclusivo para grupos de hasta 12 personas
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stayRates.map((rate, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-8 shadow-lg transition hover:shadow-xl ${
                  rate.featured
                    ? 'bg-forest-dark text-cream border-4 border-earth-light transform md:scale-105'
                    : 'bg-white text-gray-900'
                }`}
              >
                {/* Featured Badge */}
                {rate.featured && (
                  <div className="inline-block bg-earth-light text-cream px-4 py-1 rounded-full text-sm font-bold mb-4">
                    MEJOR PRECIO
                  </div>
                )}

                {/* Duration */}
                <h3 className="text-3xl font-display font-bold mb-2">
                  {rate.nights} {rate.nights === 1 ? 'Noche' : 'Noches'}
                </h3>

                {/* Total Price */}
                <div className="mb-6 pb-6 border-b border-current border-opacity-20">
                  <p className={`text-sm ${rate.featured ? 'text-cream-dark' : 'text-gray-600'} mb-2`}>
                    Precio por grupo completo
                  </p>
                  <p className="text-4xl font-bold">
                    {formatCOP(rate.totalPrice)}
                  </p>
                </div>

                {/* Per Person */}
                <div className="mb-6">
                  <p className={`text-sm ${rate.featured ? 'text-cream-dark' : 'text-gray-600'} mb-1`}>
                    Por persona
                  </p>
                  <p className="text-2xl font-bold">
                    {formatCOP(rate.pricePerPerson)}
                  </p>
                </div>

                {/* Discount */}
                {rate.discountPercentage && rate.discountPercentage > 0 && (
                  <div className={`mb-6 p-3 rounded-lg ${rate.featured ? 'bg-green-900 bg-opacity-50' : 'bg-green-50'}`}>
                    <p className={`text-sm font-semibold ${rate.featured ? 'text-green-200' : 'text-green-700'}`}>
                      ¡Ahorro de {rate.discountPercentage.toFixed(1)}%!
                    </p>
                  </div>
                )}

                {/* What's Included */}
                <div className="mb-8">
                  <h4 className={`font-bold mb-3 ${rate.featured ? 'text-cream' : 'text-forest-dark'}`}>
                    Incluye:
                  </h4>
                  <ul className={`space-y-2 text-sm ${rate.featured ? 'text-cream-dark' : 'text-gray-700'}`}>
                    <li>✓ Alojamiento en 5 habitaciones</li>
                    <li>✓ Acceso a todas las áreas de la finca</li>
                    <li>✓ WiFi en toda la propiedad</li>
                    <li>✓ Estacionamiento incluido</li>
                    <li>✓ Atención personalizada</li>
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contacto"
                  className={`block text-center py-3 rounded-lg font-bold transition ${
                    rate.featured
                      ? 'bg-earth-light text-cream hover:bg-earth'
                      : 'bg-forest-dark text-white hover:bg-forest'
                  }`}
                >
                  Consultar Disponibilidad
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-white py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-forest-dark text-center mb-12">
            Servicios Adicionales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-cream rounded-lg">
              <h3 className="text-xl font-bold text-forest-dark mb-2">
                Catering & Alimentación
              </h3>
              <p className="text-gray-600 text-sm">
                Contamos con opciones de alimentación personalizadas. Desde
                desayunos hasta cenas gourmet. Consulta disponibilidad y
                presupuesto.
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg">
              <h3 className="text-xl font-bold text-forest-dark mb-2">
                Actividades Especiales
              </h3>
              <p className="text-gray-600 text-sm">
                Tours por la región, avistamiento de aves, senderismo, yoga al
                amanecer. Diseñamos experiencias a tu medida.
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg">
              <h3 className="text-xl font-bold text-forest-dark mb-2">
                Eventos y Celebraciones
              </h3>
              <p className="text-gray-600 text-sm">
                Bodas, cumpleaños, retiros corporativos. Nuestro equipo se
                encarga de que todo sea perfecto.
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg">
              <h3 className="text-xl font-bold text-forest-dark mb-2">
                Traslados & Transporte
              </h3>
              <p className="text-gray-600 text-sm">
                Facilitamos transporte desde los aeropuertos de Pereira, Armenia
                o Manizales. Consulta tarifas especiales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="bg-forest-dark text-cream py-16 px-4">
        <div className="mx-auto max-w-4xl text-sm">
          <h3 className="text-2xl font-display font-bold mb-6">
            Términos y Condiciones
          </h3>

          <div className="space-y-4 text-cream-dark">
            <div>
              <h4 className="font-bold text-cream mb-2">Política de Cancelación</h4>
              <ul className="space-y-1 ml-4">
                <li>• Hasta 30 días antes: Reembolso 100%</li>
                <li>• 15-29 días antes: Reembolso 50%</li>
                <li>• Menos de 14 días: Sin reembolso</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-cream mb-2">Reserva</h4>
              <p>
                Se requiere depósito del 30% para confirmar tu reserva. El saldo
                se paga al momento del check-in.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-cream mb-2">Check-in / Check-out</h4>
              <p>
                Check-in: 3:00 PM | Check-out: 12:00 PM (Pueden requerir ajustes)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-cream">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-display font-bold text-forest-dark mb-4">
            ¿Preguntas sobre nuestras tarifas?
          </h2>
          <p className="text-gray-600 mb-8">
            Contacta con nosotros directamente vía WhatsApp o correo.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-forest-dark text-white px-8 py-3 rounded-lg hover:bg-forest transition font-medium"
          >
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
