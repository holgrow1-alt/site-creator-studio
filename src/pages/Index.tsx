import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Manifesto } from "@/components/sections/Manifesto";
import { Ecossistema } from "@/components/sections/Ecossistema";
import { Tecnologia } from "@/components/sections/Tecnologia";
import { Impacto } from "@/components/sections/Impacto";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee words={["REGENERAÇÃO", "IMPACTO", "DRONES", "IA", "FLORESTAS", "OCEANOS", "ATMOSFERA", "AÇÃO"]} />
      <Manifesto />
      <Ecossistema />
      <Tecnologia />
      <Impacto />
      <Footer />
    </main>
  );
};

export default Index;
