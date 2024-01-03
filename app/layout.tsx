import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sajawal Hassan",
  description: "My portfolio",
  authors: { name: "Sajawal Hassan", url: "https://sajawalhassan.vercel.app" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-th-background">{children}</body>
    </html>
  );
}
