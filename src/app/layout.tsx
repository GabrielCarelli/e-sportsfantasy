import type { Metadata } from "next";
import "./globals.css";
import { AppNavbar } from "@/components/ui/app-navbar";

export const metadata: Metadata = {
  title: "CartoLOL",
  description: "League of Legends E-sports fantasy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">
      <AppNavbar />
          {children}
      </body>
    </html>
  );
}
