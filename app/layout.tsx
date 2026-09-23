import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Shah Faisal - Full Stack Developer",
  description:
    "Full Stack Developer with 5+ years building scalable web applications and enterprise solutions. React, Next.js, TypeScript, .NET, and REST APIs.",
  authors: [{ name: "Shah Faisal" }],
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Caveat:400,500,600,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Roboto+Slab:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link rel="stylesheet" href="/assets/css/vendors/bootstrap.css" />
        <link rel="stylesheet" href="/assets/fonts/font-awesome/css/font-awesome.css" />
        <link rel="stylesheet" href="/assets/css/vendors/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/vendors/splitting.css" />
        <link rel="stylesheet" href="/assets/css/vendors/swiper.css" />
        <link rel="stylesheet" href="/assets/css/vendors/animate.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/dark.css" />
      </head>
      <body className="home light-skin">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
