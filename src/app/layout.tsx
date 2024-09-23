import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const outfitBold = localFont({
  src: "./fonts/Outfit-Bold.ttf",
  variable: "--font-outfit-bold",
  weight: "100 900",
});
const outfitRegular = localFont({
  src: "./fonts/Outfit-Regular.ttf",
  variable: "--font-outfit-regular",
  weight: "100 900",
});

const spaceMonoBold = localFont({
  src: "./fonts/SpaceMono-Bold.ttf",
  variable: "--font-spacemono-bold",
});

const spaceMonoRegular = localFont({
  src: "./fonts/SpaceMono-Regular.ttf",
  variable: "--font-spacemono-regular",
});

export const metadata: Metadata = {
  title: "Jacob Balane",
  description: "Personal website of Jacob Balane",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfitBold.variable} ${outfitRegular.variable} ${spaceMonoBold.variable} ${spaceMonoRegular.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
