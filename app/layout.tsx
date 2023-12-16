import type { Metadata } from 'next';

import '@/scss/main.scss';
import Header from './components/header/header';



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" >
      <body className="body">
        <Header/>
        <main className="body__main main">{children}</main>
      </body>
    </html>
  );
}
