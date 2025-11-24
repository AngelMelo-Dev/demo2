import { Metadata } from 'next';
import Image from 'next/image';

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

// Lista de imágenes de ejemplo (reemplazar con las imágenes reales en public/galeria/)
// Las imágenes deben tener nombres como: imagen1.jpg, imagen2.jpg, etc.
const imagenes = [
  { id: 1, nombre: 'imagen1.jpg', alt: 'Interior del café' },
  { id: 2, nombre: 'imagen2.jpg', alt: 'Café artesanal' },
  { id: 3, nombre: 'imagen3.jpg', alt: 'Postres caseros' },
  { id: 4, nombre: 'imagen4.jpg', alt: 'Ambiente acogedor' },
  { id: 5, nombre: 'imagen5.jpg', alt: 'Bebidas frías' },
  { id: 6, nombre: 'imagen6.jpg', alt: 'Espacio de trabajo' },
];

export default function GaleriaPage() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Nuestra Galería
          </h1>
          <p className="text-xl text-coffee-100 max-w-2xl mx-auto">
            Descubre el ambiente único y los productos que hacen especial a Café Aroma
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {imagenes.map((imagen) => (
              <div
                key={imagen.id}
                className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-coffee-900/0 group-hover:bg-coffee-900/20 transition-all duration-300 z-10"></div>
                <Image
                  src={`/galeria/${imagen.nombre}`}
                  alt={imagen.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <p className="text-white font-semibold text-lg px-4 text-center">
                    {imagen.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mensaje si no hay imágenes */}
          {imagenes.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg mb-4">
                Próximamente agregaremos imágenes de nuestra galería
              </p>
              <p className="text-gray-500 text-sm">
                Agrega imágenes en la carpeta public/galeria/
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

