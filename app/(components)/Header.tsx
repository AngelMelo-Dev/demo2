import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-coffee-800">
              Café Aroma
            </h1>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-coffee-700 transition-colors"
            >
              Inicio
            </Link>
            <Link 
              href="/menu" 
              className="text-gray-700 hover:text-coffee-700 transition-colors"
            >
              Menú
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}





