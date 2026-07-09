'use client';

import Link from 'next/link';
import { propertyInfo } from '@/data/property';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-cream pt-12 pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">
              Finca Belalcázar
            </h3>
            <p className="text-cream-dark text-sm">
              Alojamiento exclusivo para grupos en el corazón del Eje Cafetero.
              Naturaleza, confort y experiencias inolvidables.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-cream-dark hover:text-cream transition"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/habitaciones"
                  className="text-cream-dark hover:text-cream transition"
                >
                  Habitaciones
                </Link>
              </li>
              <li>
                <Link
                  href="/tarifas"
                  className="text-cream-dark hover:text-cream transition"
                >
                  Tarifas
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-cream-dark hover:text-cream transition"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Location */}
          <div>
            <h4 className="font-bold mb-4">Ubicación</h4>
            <p className="text-sm text-cream-dark">
              <strong>{propertyInfo.location}</strong>
            </p>
            <p className="text-sm text-cream-dark mt-2">
              Pereira: {propertyInfo.distanceFromPereira}
            </p>
            <p className="text-sm text-cream-dark">
              Manizales: {propertyInfo.distanceFromManizales}
            </p>
            <p className="text-sm text-cream-dark">
              Armenia: {propertyInfo.distanceFromArmenia}
            </p>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <p className="text-sm text-cream-dark mb-2">
              <strong>WhatsApp:</strong>
              <br />
              <a
                href={`https://wa.me/${propertyInfo.whatsappNumber.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-300 hover:text-green-100 transition"
              >
                {propertyInfo.whatsappNumber}
              </a>
            </p>
            <p className="text-sm text-cream-dark">
              <strong>Email:</strong>
              <br />
              <a
                href={`mailto:${propertyInfo.email}`}
                className="text-earth-light hover:text-cream transition"
              >
                {propertyInfo.email}
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-forest-light my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-cream-dark">
          <p>
            &copy; {currentYear} Finca Turística Belalcázar. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-cream transition">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-cream transition">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
