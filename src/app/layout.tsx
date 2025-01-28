import { Inter } from "next/font/google";
import { Provider } from "@/provider";
import type { Metadata } from "next";
import "../ui/globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freskia",
  description: "supermercado online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main>
          <Provider>
            {children}
          </Provider>
        </main>
      </body>
    </html>
  );
}
