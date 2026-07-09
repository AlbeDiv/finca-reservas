import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Finca Turística Belalcázar | Alojamiento para Grupos',
  description:
    'Finca exclusiva en Belalcázar, Caldas. Capacidad para 12 personas en 5 habitaciones. Naturaleza, descanso y exclusividad en el Eje Cafetero.',
  keywords: ['finca turística', 'Belalcázar', 'Caldas', 'alojamiento grupos'],
  openGraph: {
    title: 'Finca Turística Belalcázar',
    description: 'Disfrute una experiencia exclusiva de descanso y naturaleza.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
