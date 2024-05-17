'use client'
import Hero from "@/components/Hero/Hero";
import Projetos from "@/components/Projects/Projetos";
import Habilidades from "@/components/Skills/Habilidades";


export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <Habilidades />
      <Projetos />
    </main>
  );
}
