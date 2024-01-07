import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Sajawal Hassan",
  description: "Sajawal Hassan's portfolio, a Data Scientist and a Fullstack Web Developer",
  authors: { name: "Sajawal Hassan", url: "https://sajawalhassan.vercel.app" },
  keywords: [
    "Data",
    "Data Scientist",
    "Websites",
    "Web Developer",
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Sajawal Hassan",
    "Porfolio",
    "Personal Portfolio",
  ],
  category: "Portfolio",
  creator: "Sajawal Hassan",
  abstract: "Sajawal Hassan's portfolio, a Data Scientist and a Fullstack Web Developer",
  classification: "Sajawal Hassan portfolio",
  publisher: "vercel",
  appLinks: {
    web: {
      url: "https://reddit-clone-nextjs-1f12.vercel.app",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-th-background" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
