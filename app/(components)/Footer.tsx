export default function Footer() {
  return (
    <footer className="bg-coffee-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Café Aroma</h3>
          <p className="text-coffee-200 text-sm">
            Tu lugar favorito para disfrutar del mejor café
          </p>
          <p className="text-coffee-300 text-xs mt-4">
            © {new Date().getFullYear()} Café Aroma. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}





