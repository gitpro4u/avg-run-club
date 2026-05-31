import type { Metadata } from "next";
import "./globals.css";
import { ClubProvider } from "../context/ClubContext";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "AVG RUN CLUB | Bharuch, Gujarat",
  description: "Run Far, Not Fast. A premium running community in Bharuch for all paces.",
  icons: { icon: "/avg-logo.svg" },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#080808] text-white antialiased">
        <SessionProvider>
          <ClubProvider>
            {children}
          </ClubProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
