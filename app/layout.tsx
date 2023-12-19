import type { Metadata } from 'next';

import '@/scss/main.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';

export const metadata: Metadata = {
  title: 'Fucking. Refrigerator',
  description: 'Fucking. Refrigerator',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="body">
        <Header />
        <main className="body__main main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
