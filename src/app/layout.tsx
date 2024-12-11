import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/ui/app-sidebar"

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
    <SidebarProvider>
      <AppSidebar />
      <body className="bg-zinc-900 min-h-screen">
        <SidebarTrigger />
        {children}
      </body>
    </SidebarProvider>
    </html>
  );
}
