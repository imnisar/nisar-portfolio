import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Nisar | Flutter Mobile App Developer",
  description: "Flutter Developer with 2+ years of experience building scalable, real-time mobile applications using Flutter, Firebase, and Clean Architecture.",
  keywords: ["Flutter Developer", "Mobile App Developer", "GetX", "Firebase", "Real-time Apps", "Islamabad", "Pakistan"],
  authors: [{ name: "Muhammad Nisar" }],
  openGraph: {
    title: "Muhammad Nisar | Flutter Mobile App Developer",
    description: "Expert Flutter Developer building production-grade mobile applications.",
    url: "https://muhammad-nisar.dev", // Update with actual URL if known
    siteName: "Muhammad Nisar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Nisar | Flutter Mobile App Developer",
    description: "Expert Flutter Developer building production-grade mobile applications.",
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
