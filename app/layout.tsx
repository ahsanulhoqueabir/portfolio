import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md Ahsanul Hoque Abir | Web Developer & Software Engineer",
  description:
    "Portfolio of Md Ahsanul Hoque Abir, a Computer Science student at Jagannath University, Dhaka. Professional Web Developer and Software Engineer specializing in modern web technologies. Alumnus of Hajera Toju Degree College and Gachbaria NG Govt High School.",
  keywords: [
    "Md Ahsanul Hoque Abir",
    "Web Developer",
    "Programmer",
    "Software Engineer",
    "Full Stack Developer",
    "Jagannath University",
    "Dhaka",
    "Bangladesh",
    "Hajera Toju Degree College",
    "Gachbaria NG Govt High School",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Software Engineering student",
    "Chattogram",
    "Chandanaish",
    "MERN Stack",
    "Node.js Developer",
    "Backend Developer",
    "Frontend Developer",
    "Web Development Portfolio",
    "Abir Hoque",
    "JnU CSE",
  ],
  authors: [{ name: "Md Ahsanul Hoque Abir" }],
  creator: "Md Ahsanul Hoque Abir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahsanull.com",
    title: "Md Ahsanul Hoque Abir | Web Developer & Software Engineer",
    description:
      "CSE Undergraduate at Jagannath University | Full Stack Web Developer | Programmer",
    siteName: "Md Ahsanul Hoque Abir Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Ahsanul Hoque Abir | Web Developer & Software Engineer",
    description:
      "CSE Undergraduate at Jagannath University | Full Stack Web Developer | Programmer",
    creator: "@abir_hoque",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="mx-auto flex w-full max-w-screen-2xl flex-1 flex-col">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
