"use client";

import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";

export function SiteShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = window.localStorage.getItem("skin");
    if (saved === "dark") {
      document.body.classList.remove("light-skin");
      document.body.classList.add("dark-skin");
    } else {
      document.body.classList.remove("dark-skin");
      document.body.classList.add("light-skin");
    }

  }, []);

  return (
    <div className="container-page">
      <Preloader />
      <Header />
      <div className="wrapper">{children}</div>
      <Footer />
    </div>
  );
}
