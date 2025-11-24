import { Metadata } from 'next';
import menuData from '@/data/menu.json';

export const metadata: Metadata = {
  title: 'Menú - Café Aroma | Cafés, Postres y Bebidas',
  description: 'Descubre nuestro menú completo con cafés artesanales, postres caseros y bebidas frías. Precios y descripciones detalladas de cada producto.',
  keywords: 'menú café, cafés artesanales, postres caseros, bebidas frías, carta café, precios café',
  openGraph: {
    title: 'Menú - Café Aroma',
    description: 'Explora nuestro delicioso menú con cafés, postres y bebidas frías',
    type: 'website',
  },
};

interface MenuItem {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
}

interface Categoria {
  id: string;
  nombre: string;
  items: MenuItem[];
}

export default function MenuPage() {
  const categorias: Categoria[] = menuData.categorias;

  const whatsappNumber = '573053572263'; // Reemplazar con el número real
  const whatsappMessage = encodeURIComponent('¡Hola! Me gustaría hacer una reserva en Café Aroma.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Nuestro Menú
          </h1>
          <p className="text-xl text-coffee-100 max-w-2xl mx-auto">
            Descubre nuestra selección de cafés artesanales, postres caseros y bebidas refrescantes
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categorias.map((categoria) => (
            <div key={categoria.id} className="mb-16 last:mb-0">
              {/* Category Title */}
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {categoria.nombre}
                </h2>
                <div className="w-24 h-1 bg-coffee-600 mx-auto rounded-full"></div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoria.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 group"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-coffee-700 transition-colors">
                          {item.nombre}
                        </h3>
                        <span className="text-2xl font-bold text-coffee-600 whitespace-nowrap ml-4">
                          ${item.precio.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp Button - Fixed */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Reservar por WhatsApp"
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>

      {/* WhatsApp Button - Bottom Section (Alternative) */}
      <section className="bg-coffee-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            ¿Listo para disfrutar?
          </h2>
          <p className="text-coffee-100 mb-8 max-w-2xl mx-auto">
            Reserva tu mesa o haz tu pedido a través de WhatsApp
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Reservar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

