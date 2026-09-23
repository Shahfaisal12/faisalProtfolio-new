import { Contact } from "@/components/Contact";
import { Expertise } from "@/components/Expertise";
import { Hero } from "@/components/Hero";
import { Resume } from "@/components/Resume";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Strengths } from "@/components/Strengths";
import { TechStack } from "@/components/TechStack";
import { Works } from "@/components/Works";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Skills />
      <Works />
      <Resume />
      <Strengths />
      <TechStack />
      <Expertise />
      <Contact />
    </>
  );
}
