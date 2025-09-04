import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diamond Club Makers",
  description: "North America's largest solo doctor Invisalign provider community",
  icons: {
    icon: [
      { url: "/website-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/website-logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/website-logo.png",
    apple: "/website-logo.png",
  },
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
        {children}
      </body>
    </html>
  );
}
