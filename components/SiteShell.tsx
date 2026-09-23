"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [sticky, setSticky] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("skin");
    if (saved === "dark") {
      document.body.classList.remove("light-skin");
      document.body.classList.add("dark-skin");
    } else {
      document.body.classList.remove("dark-skin");
      document.body.classList.add("light-skin");
    }

    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 100) {
        setSticky(y > lastY ? "sticky animate-in" : y < 200 ? "sticky animate-out" : "sticky");
      } else {
        setSticky("");
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="container-page">
      <Preloader />
      <Header stickyClass={sticky} />
      <div className="wrapper">{children}</div>
      <Footer />
    </div>
  );
}
