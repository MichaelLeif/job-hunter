import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Providers from "./_components/Providers";
import NavBar from "./_components/NavBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Job Hunter",
  description: "Keep track of your job hunt!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
