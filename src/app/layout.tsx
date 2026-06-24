import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thiruselvan | Software Developer & ECE Student",
  description: "Portfolio of Thiruselvan, an Electronics and Communication Engineering student and aspiring software developer specializing in web technologies, databases, and AI integration.",
  keywords: [
    "Thiruselvan",
    "ECE Student",
    "Software Developer Portfolio",
    "AI Enthusiast",
    "Next.js Portfolio",
    "React Developer",
    "Tailwind CSS Portfolio"
  ],
  authors: [{ name: "Thiruselvan" }],
  openGraph: {
    title: "Thiruselvan | Software Developer Portfolio",
    description: "Electronics and Communication Engineering Student, Software Developer, and AI Enthusiast building practical digital solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Thiruselvan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiruselvan | Software Developer Portfolio",
    description: "Electronics and Communication Engineering Student, Software Developer, and AI Enthusiast building practical digital solutions.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
