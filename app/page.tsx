import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Bienvenido a Café Aroma
            </h1>
            <p className="text-xl sm:text-2xl text-coffee-100 mb-8 max-w-2xl mx-auto">
              Disfruta de la experiencia única del café artesanal en un ambiente acogedor
            </p>
            <Link
              href="#"
              className="inline-block bg-white text-coffee-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-coffee-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver Menú
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Café artesanal */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
              <div className="text-center">
                <div className="inline-block bg-coffee-100 rounded-full p-4 mb-4">
                  <svg
                    className="w-12 h-12 text-coffee-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Café Artesanal
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Seleccionamos los mejores granos y los tostamos con cuidado para ofrecerte una experiencia única en cada taza.
                </p>
              </div>
            </div>

            {/* Card 2 - Postres caseros */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
              <div className="text-center">
                <div className="inline-block bg-coffee-100 rounded-full p-4 mb-4">
                  <svg
                    className="w-12 h-12 text-coffee-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Postres Caseros
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Elaborados diariamente con ingredientes frescos y recetas tradicionales que endulzarán tu momento especial.
                </p>
              </div>
            </div>

            {/* Card 3 - Ambiente acogedor */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
              <div className="text-center">
                <div className="inline-block bg-coffee-100 rounded-full p-4 mb-4">
                  <svg
                    className="w-12 h-12 text-coffee-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Ambiente Acogedor
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Un espacio diseñado para que te sientas como en casa, perfecto para relajarte, trabajar o compartir con amigos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





