import type { Metadata } from "next";
//import { Inter, Mountains_of_Christmas } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-inter",
//   display: "swap",
// });
// const mountainsOfChristmas = Mountains_of_Christmas({
//   weight: ['400', '700'], // Assurez-vous d'inclure les poids que vous utilisez
//   subsets: ['latin'],
//   display: 'swap', // Ajoutez cette ligne
// });

export const normal = localFont({
  src:"./font/inter/Inter-VariableFont_opsz,wght.ttf",
  weight:"400 500 600 700 800 900"
})

export const metadata: Metadata = {
  title: "Portfolio | Edwardo",
  description: "This is a few description about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${normal.className} antialized`}
      >
        {children}
      </body>
    </html>
  );
}
