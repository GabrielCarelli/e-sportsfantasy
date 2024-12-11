import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/ui/app-sidebar";

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
        <SidebarProvider>
          <AppSidebar />
          {/* <SidebarTrigger /> */}
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
