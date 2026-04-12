import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { GTM_ID } from "@/config/env.config";

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
        {GTM_ID ? (
          <>
            <Script id="gtm-base" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        ) : null}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="mx-auto flex w-full max-w-screen-2xl flex-1 flex-col pb-24 md:pb-0">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
