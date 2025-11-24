import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Café Aroma | Contáctanos y Visítanos',
  description: 'Contáctanos en Café Aroma. Envíanos un mensaje, conoce nuestra ubicación y horarios. Estamos aquí para ayudarte.',
  keywords: 'contacto café, ubicación café, horarios café, reservas café',
  openGraph: {
    title: 'Contacto - Café Aroma',
    description: 'Contáctanos y visítanos en Café Aroma',
    type: 'website',
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

