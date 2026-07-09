'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-forest-dark font-display">
              Finca Belalcázar
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-forest-dark transition">
              Inicio
            </Link>
            <Link href="/habitaciones" className="text-gray-700 hover:text-forest-dark transition">
              Habitaciones
            </Link>
            <Link href="/tarifas" className="text-gray-700 hover:text-forest-dark transition">
              Tarifas
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-forest-dark transition">
              Contacto
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contacto"
              className="bg-forest-dark text-white px-6 py-2 rounded-lg hover:bg-forest transition"
            >
              Reservar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-cream-dark rounded"
            >
              Inicio
            </Link>
            <Link
              href="/habitaciones"
              className="block px-4 py-2 text-gray-700 hover:bg-cream-dark rounded"
            >
              Habitaciones
            </Link>
            <Link
              href="/tarifas"
              className="block px-4 py-2 text-gray-700 hover:bg-cream-dark rounded"
            >
              Tarifas
            </Link>
            <Link
              href="/contacto"
              className="block px-4 py-2 text-gray-700 hover:bg-cream-dark rounded"
            >
              Contacto
            </Link>
            <Link
              href="/contacto"
              className="block px-4 py-2 bg-forest-dark text-white rounded hover:bg-forest"
            >
              Reservar
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
