'use client';

import { useState } from 'react';
import Link from 'next/link';
import { propertyInfo } from '@/data/property';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    guests: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hola, me gustaría reservar en Finca Belalcázar.\n\nNombre: ${formData.name}\nCorreo: ${formData.email}\nTeléfono: ${formData.phone}\nFechas: ${formData.dates}\nCantidad de personas: ${formData.guests}\n\nMensaje: ${formData.message}`
    );

    const whatsappLink = `https://wa.me/${propertyInfo.whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappLink, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      dates: '',
      guests: '',
      message: '',
    });

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-forest-dark to-forest py-16 px-4">
        <div className="mx-auto max-w-7xl text-center text-cream">
          <h1 className="text-5xl font-display font-bold mb-4">
            Contáctanos
          </h1>
          <p className="text-xl text-cream-dark">
            Estamos listos para hacer tu reserva
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* WhatsApp */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-forest-dark mb-4">
                    WhatsApp
                  </h3>
                  <a
                    href={`https://wa.me/${propertyInfo.whatsappNumber.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.948 1.266c-1.53.766-2.888 1.805-3.897 3.12-.934 1.194-1.531 2.544-1.752 3.998-.099.614-.093 1.265-.042 1.844.026.303.08.618.163.938.266 1.003 1.02 1.922 1.846 2.55.425.326.851.533 1.342.757.444.202.909.36 1.382.465.445.095.958.15 1.486.089.347-.04.643-.106.943-.188.379-.101.703-.274 1.042-.519.328-.237.6-.533.83-.864.23-.331.396-.758.539-1.15.117-.322.213-.652.287-.987.08-.36.115-.721.094-1.08-.021-.36-.08-.675-.188-.985-.221-.636-.642-1.234-1.15-1.57-.507-.335-1.158-.52-1.786-.52z" />
                    </svg>
                    {propertyInfo.whatsappNumber}
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    Respuesta rápida, disponible 24/7
                  </p>
                </div>

                {/* Email */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-forest-dark mb-4">
                    Email
                  </h3>
                  <a
                    href={`mailto:${propertyInfo.email}`}
                    className="text-forest-dark hover:text-forest font-medium transition"
                  >
                    {propertyInfo.email}
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    Te responderemos en máximo 24 horas
                  </p>
                </div>

                {/* Location */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-forest-dark mb-4">
                    Ubicación
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {propertyInfo.location}
                  </p>
                  <div className="mt-4 text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>Pereira:</strong> {propertyInfo.distanceFromPereira}
                    </p>
                    <p>
                      <strong>Manizales:</strong>{' '}
                      {propertyInfo.distanceFromManizales}
                    </p>
                    <p>
                      <strong>Armenia:</strong> {propertyInfo.distanceFromArmenia}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-display font-bold text-forest-dark mb-6">
                  Formulario de Contacto
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 font-medium">
                      ¡Excelente! Tu mensaje ha sido enviado a WhatsApp. Pronto
                      nos pondremos en contacto.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-dark focus:border-transparent outline-none transition"
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-dark focus:border-transparent outline-none transition"
                      placeholder="tu@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-dark focus:border-transparent outline-none transition"
                      placeholder="+57 300 123 4567"
                    />
                  </div>

                  {/* Dates */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fechas Tentativas *
                    </label>
                    <input
                      type="text"
                      name="dates"
                      value={formData.dates}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-dark focus:border-transparent outline-none transition"
                      placeholder="15 - 18 de Agosto 2024"
                    />
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cantidad de Personas *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-dark focus:border-transparent outline-none transition"
                    >
                      <option value="">Selecciona...</option>
                      <option value="1-3">1 - 3 personas</option>
                      <option value="4-6">4 - 6 personas</option>
                      <option value="7-9">7 - 9 personas</option>
                      <option value="10-12">10 - 12 personas</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-dark focus:border-transparent outline-none transition resize-none"
                      placeholder="Cuéntanos más sobre tu grupo y lo que te interesa..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-forest-dark text-white py-3 rounded-lg hover:bg-forest transition font-bold text-lg mt-6"
                  >
                    Enviar por WhatsApp
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Al enviar, aceptas nuestra política de privacidad.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-white py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-display font-bold text-forest-dark text-center mb-8">
            Ubicación en el Mapa
          </h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 font-medium mb-2">
                Mapa interactivo próximamente
              </p>
              <p className="text-sm text-gray-500">
                Belalcázar, Caldas - Colombia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-cream py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-forest-dark text-center mb-12">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: '¿Cuál es el período mínimo de reserva?',
                a: 'Aceptamos reservas desde 1 noche, aunque recomendamos un mínimo de 2-3 noches para disfrutar plenamente de la finca.',
              },
              {
                q: '¿Incluye alimentación?',
                a: 'La tarifa base de alojamiento no incluye comidas, pero ofrecemos servicios de catering y alimentación personalizada bajo consulta.',
              },
              {
                q: '¿Hay descuentos para grupos?',
                a: 'Sí, ofrecemos descuentos progresivos según la cantidad de noches. Consulta nuestras tarifas especiales.',
              },
              {
                q: '¿Puedo hacer eventos especiales?',
                a: 'Absolutamente. Bodas, cumpleaños, retiros corporativos y más. Contacta para personalizar tu evento.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-forest-dark mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
