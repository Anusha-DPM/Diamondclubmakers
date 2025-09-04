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
      { url: "/website-logo.ico", sizes: "any" },
      { url: "/website-logo.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/website-logo.ico", sizes: "16x16", type: "image/x-icon" },
    ],
    shortcut: "/website-logo.ico",
    apple: "/website-logo.ico",
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
