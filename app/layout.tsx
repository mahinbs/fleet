import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/40 to-purple-50/30`}
        style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.08) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 60%)' }}
      >
        {children}
      </body>
    </html>
  );
}
