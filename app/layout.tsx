import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './(components)/Header';
import Footer from './(components)/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Café Aroma - Tu lugar favorito para disfrutar del mejor café',
  description: 'Café artesanal, postres caseros y un ambiente acogedor te esperan en Café Aroma',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}





