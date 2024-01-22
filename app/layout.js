import { Inter } from "next/font/google";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
