import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marija Tashevska | Software Engineer",
  description: "Personal website showcasing my projects, skills, and experience.",
  openGraph: {
    title: "Marija Tashevska | Software Engineer",
    description: "Personal website showcasing my projects, skills, and experience.",
    url: "https://marijatashevska.xyz",
    siteName: "Marija Tashevska",
    images: [
      {
        url: "https://marijatashevska.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marija Tashevska | Software Engineer",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>      </body>
    </html>
  );
}
