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
                    
                  {/* NOVA SEÇÃO: LOGO COM EFEITO DE LUZES */}
                    <div className="relative w-full py-20 md:py-32 flex items-center justify-center bg-black overflow-hidden">
                        {/* Fundo com efeito de luzes verdes */}
                            <div className="absolute inset-0 w-full h-full">
                                {/* Gradiente de fundo */}
                                      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/30 to-black" />
                                      
                                {/* Luz verde grande (blur) */}
                                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/25 rounded-full blur-3xl" />
                                      
                                {/* Luz verde animada pulsante */}
                                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-400/15 rounded-full blur-2xl animate-pulse" />
                            </div>div>
                            
                        {/* LOGO */}
                            <div className="relative z-20 flex flex-col items-center justify-center gap-8">
                                {/* Hexágono do logo com cores EcoDrones */}
                                      <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 border-4 border-green-300 animate-pulse">
                                                  <div className="text-center">
                                                                <div className="text-6xl md:text-7xl font-bold text-white">🌱</div>div>
                                                                <div className="text-white text-sm md:text-lg font-semibold mt-2">DRONES</div>div>
                                                  </div>div>
                                      </div>div>
                                      
                                {/* Texto abaixo do logo */}
                                      <p className="text-center text-green-400 text-xs md:text-sm font-light tracking-wider uppercase">Tecnologia de Regeneração</p>p>
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
