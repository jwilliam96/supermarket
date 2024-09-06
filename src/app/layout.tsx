import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "../ui/globals.css";
import { Footer, TopMenu } from "@/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <TopMenu />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
