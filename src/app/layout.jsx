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
    <html lang="en" className="h-full">
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
