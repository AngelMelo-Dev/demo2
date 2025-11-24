import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galería - Café Aroma | Nuestro Ambiente y Productos',
  description: 'Descubre el ambiente acogedor de Café Aroma y nuestros deliciosos productos a través de nuestra galería de imágenes.',
  keywords: 'galería café, fotos café, ambiente café, productos café',
  openGraph: {
    title: 'Galería - Café Aroma',
    description: 'Explora nuestro ambiente y productos',
    type: 'website',
  },
};

export default function GaleriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

