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
                <div className="relative w-full py-16 md:py-24 flex items-center justify-center bg-black overflow-hidden">
                  {/* Container com efeito de partículas */}
                        <div className="absolute inset-0 w-full h-full">
                          {/* Gradient de partículas com efeito visual */}
                                  <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/20 to-black" />
                                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
                                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-400/10 rounded-full blur-2xl animate-pulse" />
                        </div>div>
                        
                  {/* Logo */}
                        <div className="relative z-20 flex flex-col items-center justify-center gap-6">
                                  <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
                                              <img
                                                              src="/logo-ecodrones.png"
                                                              alt="EcoDrones Community Logo"
                                                              className="w-full h-full object-cover drop-shadow-xl"
                                                            />
                                  </div>div>
                                  <p className="text-center text-green-400 text-sm md:text-base font-light tracking-wider">TECNOLOGIA DE REGENERAÇÃO</p>p>
                        </div>div>
                </div>div>
                <Marquee words={["REGENERAÇÃO", "REFLORESTAMENTO", "DRONES", "FLORESTAS", "COMUNIDADE", "AÇÃO"]} />
                <Manifesto />
                <Ecossistema />
                <Tecnologia />
                <Impacto />
                <Footer />
          </main>main>
        );
};

export default Index;</main>
