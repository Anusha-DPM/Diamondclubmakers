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
    icon: "/website-logo.ico",
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
      <head>
        <link rel="icon" href="/website-logo.ico" sizes="any" />
        <link rel="icon" href="/website-logo.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/website-logo.ico" />
        <link rel="apple-touch-icon" href="/website-logo.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
