import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideNav from "@/components/_in_house/sidenav";
import UpperNav from "@/components/_in_house/uppernav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Wingman Store",
  description:
    "The ultimate dashboard and analytics platform for streamlined operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="h-screen flex">
          <SideNav />
          <div className="flex-grow pb-8 min-h-full flex flex-col">
            <UpperNav />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
