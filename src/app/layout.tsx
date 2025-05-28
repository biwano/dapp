import Footer from '@/shared/components/Footer/footer';
import NavBar from '@/shared/components/NavBar/NavBar';
import '@/shared/css/global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row">
          <NavBar />
          <div className="flex flex-col flex-1">
            <div className="flex-1 background-void-10 p-6">
              {children}
            </div>
            <Footer />
            </div>
        </div>
      </body>
    </html>
  );
}
