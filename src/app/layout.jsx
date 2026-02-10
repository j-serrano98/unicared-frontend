import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { cookies } from "next/headers";
import fetcher from "./lib/api/fetcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'UnicaRed | Recursos y Reseñas para Estudiantes',
    template: '%s | UnicaRed'
  },
  description: 'La plataforma definitiva para estudiantes: encuentra reseñas de profesores, recursos para tu carrera y herramientas para gestionar tu pensum.',
  keywords: ['UnicaRed', 'reseñas de profesores', 'recursos estudiantiles', 'universidad', 'pensum', 'estudiantes'],
  authors: [{ name: 'UnicaRed Team' }],
  creator: 'UnicaRed',
  openGraph: {
    title: 'UnicaRed - Empoderando a la comunidad estudiantil',
    description: 'Descubre opiniones reales sobre profesores y accede a los mejores recursos para tu formación profesional.',
    url: 'https://unicared.tech',
    siteName: 'UnicaRed',
    locale: 'es_DO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;
  let profile;

  if (token) {
    try {
      profile = await fetcher("profile/me");
    } catch (err) {
      profile = null;
    }
  }

  return (
    <html lang="es" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
        <div className="flex flex-col h-full">
          
          <Navbar isAuthenticated={!!token} profile={profile}/>

          <main className="flex-1">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
