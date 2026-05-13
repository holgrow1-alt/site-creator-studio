import { Suspense, lazy } from "react";
import { useTranslation } from "@/i18n/LanguageContext";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { Nav } from "@/components/sections/Nav";
// Seções acima da dobra — carregadas de forma eager
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Manifesto } from "@/components/sections/Manifesto";

// Seções do front — carregadas de forma lazy
const Impacto       = lazy(() => import("@/components/sections/Impacto").then(m => ({ default: m.Impacto })));
const Videos        = lazy(() => import("@/components/sections/Videos").then(m => ({ default: m.Videos })));
const ManifestoPDF  = lazy(() => import("@/components/sections/ManifestoPDF").then(m => ({ default: m.ManifestoPDF })));
const ApoieOProjeto = lazy(() => import("@/components/sections/ApoieOProjeto").then(m => ({ default: m.ApoieOProjeto })));
const DoacaoCripto  = lazy(() => import("@/components/sections/DoacaoCripto").then(m => ({ default: m.DoacaoCripto })));
const VisaoFinal    = lazy(() => import("@/components/sections/VisaoFinal").then(m => ({ default: m.VisaoFinal })));
const Fundador      = lazy(() => import("@/components/sections/Fundador").then(m => ({ default: m.Fundador })));
const Footer        = lazy(() => import("@/components/sections/Footer").then(m => ({ default: m.Footer })));

// Painel lateral com todo o conteúdo dos grupos do menu
const SectionDrawer = lazy(() => import("@/components/sections/SectionDrawer").then(m => ({ default: m.SectionDrawer })));

// Fallback invisível
const SectionFallback = () => <div className="min-h-[120px]" />;

// Provérbio Chinês — antes do CTA principal
const ProverbioPlantio = () => (
  <div className="py-10 px-6 text-center border-t border-border/20">
    <p className="text-lg md:text-2xl italic text-foreground/80 max-w-2xl mx-auto leading-relaxed">
      "A melhor época para plantar uma árvore foi há 20 anos. A segunda é agora."
    </p>
    <span className="text-sm text-muted-foreground mt-3 block tracking-widest uppercase">— Provérbio Chinês</span>
  </div>
);

const Index = () => {
  const { t } = useTranslation();
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <ScrollProgressBar />
      <Nav />

      {/* Acima da dobra — eager */}
      <Hero />
      <Marquee words={t("marquee.words").split(",")} />
      <Manifesto />

      {/* Conteúdo principal do front — lazy */}
      <Suspense fallback={<SectionFallback />}>
        <Impacto />
        <Videos />
        <ManifestoPDF />
        <ProverbioPlantio />
        <ApoieOProjeto />
        <DoacaoCripto />
        <VisaoFinal />
        <Fundador />
        <Footer />
      </Suspense>

      {/* Painel lateral — renderizado fora do fluxo, abre via evento do menu */}
      <Suspense fallback={null}>
        <SectionDrawer />
      </Suspense>
    </main>
  );
};

export default Index;
