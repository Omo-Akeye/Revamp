import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";


const rage = localFont({
  src: [
    {
      path: '../../public/font/Rage Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-rage', 
});

export const metadata: Metadata = {
  title: "Bime",
  description: "Bime landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rage.variable}>
      <body>{children}</body>
    </html>
  );
}
