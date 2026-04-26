import { Suspense, lazy } from "react";
import { useTranslation } from "@/i18n/LanguageContext";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { Nav } from "@/components/sections/Nav";
// Critical above-the-fold sections — loaded eagerly
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Manifesto } from "@/components/sections/Manifesto";

// All remaining sections — lazy loaded
const VisaoMissaoValores = lazy(() => import("@/components/sections/VisaoMissaoValores").then(m => ({ default: m.VisaoMissaoValores })));
const UrgenciaAmbiental = lazy(() => import("@/components/sections/UrgenciaAmbiental").then(m => ({ default: m.UrgenciaAmbiental })));
const InspiracaoNatural = lazy(() => import("@/components/sections/InspiracaoNatural").then(m => ({ default: m.InspiracaoNatural })));
const Ecossistema = lazy(() => import("@/components/sections/Ecossistema").then(m => ({ default: m.Ecossistema })));
const ComoFunciona = lazy(() => import("@/components/sections/ComoFunciona").then(m => ({ default: m.ComoFunciona })));
const EcossistemaImpacto = lazy(() => import("@/components/sections/EcossistemaImpacto").then(m => ({ default: m.EcossistemaImpacto })));
const CoracaoEcossistema = lazy(() => import("@/components/sections/CoracaoEcossistema").then(m => ({ default: m.CoracaoEcossistema })));
const ImpactoCascata = lazy(() => import("@/components/sections/ImpactoCascata").then(m => ({ default: m.ImpactoCascata })));
const SeedMovement = lazy(() => import("@/components/sections/SeedMovement").then(m => ({ default: m.SeedMovement })));
const Tecnologia = lazy(() => import("@/components/sections/Tecnologia").then(m => ({ default: m.Tecnologia })));
const EngenhariadoDrone = lazy(() => import("@/components/sections/EngenhariadoDrone").then(m => ({ default: m.EngenhariadoDrone })));
const TecnologiaSemente = lazy(() => import("@/components/sections/TecnologiaSemente").then(m => ({ default: m.TecnologiaSemente })));
const ProtocoloTecnico = lazy(() => import("@/components/sections/ProtocoloTecnico").then(m => ({ default: m.ProtocoloTecnico })));
const JanelaDeOuro = lazy(() => import("@/components/sections/JanelaDeOuro").then(m => ({ default: m.JanelaDeOuro })));
const MapeamentoBiologico = lazy(() => import("@/components/sections/MapeamentoBiologico").then(m => ({ default: m.MapeamentoBiologico })));
const InfraestruturaRegenerativa = lazy(() => import("@/components/sections/InfraestruturaRegenerativa").then(m => ({ default: m.InfraestruturaRegenerativa })));
const SistemaPlantio = lazy(() => import("@/components/sections/SistemaPlantio").then(m => ({ default: m.SistemaPlantio })));
const AppEcoDrones = lazy(() => import("@/components/sections/AppEcoDrones").then(m => ({ default: m.AppEcoDrones })));
const CerebroSistema = lazy(() => import("@/components/sections/CerebroSistema").then(m => ({ default: m.CerebroSistema })));
const SegurancaOperacional = lazy(() => import("@/components/sections/SegurancaOperacional").then(m => ({ default: m.SegurancaOperacional })));
const ModeloEconomico = lazy(() => import("@/components/sections/ModeloEconomico").then(m => ({ default: m.ModeloEconomico })));
const ParceriasESG = lazy(() => import("@/components/sections/ParceriasESG").then(m => ({ default: m.ParceriasESG })));
const EstrategiaRegenerativa = lazy(() => import("@/components/sections/EstrategiaRegenerativa").then(m => ({ default: m.EstrategiaRegenerativa })));
const EngajamentoComunidade = lazy(() => import("@/components/sections/EngajamentoComunidade").then(m => ({ default: m.EngajamentoComunidade })));
const EcossistemaEducacional = lazy(() => import("@/components/sections/EcossistemaEducacional").then(m => ({ default: m.EcossistemaEducacional })));
const Impacto = lazy(() => import("@/components/sections/Impacto").then(m => ({ default: m.Impacto })));
const Embaixadores = lazy(() => import("@/components/sections/Embaixadores").then(m => ({ default: m.Embaixadores })));
const Comunidade = lazy(() => import("@/components/sections/Comunidade").then(m => ({ default: m.Comunidade })));
const ApoieOProjeto = lazy(() => import("@/components/sections/ApoieOProjeto").then(m => ({ default: m.ApoieOProjeto })));
const ParceiroCorporativo = lazy(() => import("@/components/sections/ParceiroCorporativo").then(m => ({ default: m.ParceiroCorporativo })));
const ParceirosEDrones = lazy(() => import("@/components/sections/ParceirosEDrones").then(m => ({ default: m.ParceirosEDrones })));
const Parceiros = lazy(() => import("@/components/sections/Parceiros").then(m => ({ default: m.Parceiros })));
const RecebaPageamentos = lazy(() => import("@/components/sections/RecebaPageamentos").then(m => ({ default: m.RecebaPageamentos })));
const ManifestoPDF = lazy(() => import("@/components/sections/ManifestoPDF").then(m => ({ default: m.ManifestoPDF })));
const Videos = lazy(() => import("@/components/sections/Videos").then(m => ({ default: m.Videos })));
const Fundador = lazy(() => import("@/components/sections/Fundador").then(m => ({ default: m.Fundador })));
const VisaoFinal = lazy(() => import("@/components/sections/VisaoFinal").then(m => ({ default: m.VisaoFinal })));
const DoacaoCripto = lazy(() => import("@/components/sections/DoacaoCripto").then(m => ({ default: m.DoacaoCripto })));
const Footer = lazy(() => import("@/components/sections/Footer").then(m => ({ default: m.Footer })));

// Minimal fallback — invisible, preserves layout flow
const SectionFallback = () => <div className="min-h-[200px]" />;

const Index = () => {
  const { t } = useTranslation();
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <ScrollProgressBar />
      <Nav />
      {/* Above-the-fold — eager */}
      <Hero />
      <Marquee words={t("marquee.words").split(",")} />
      <Manifesto />
      {/* Everything below — lazy */}
      <Suspense fallback={<SectionFallback />}>
        <Videos />
        <VisaoMissaoValores />
        <UrgenciaAmbiental />
        <InspiracaoNatural />
        <Ecossistema />
        <ComoFunciona />
        <EcossistemaImpacto />
        <CoracaoEcossistema />
        <ImpactoCascata />
        <SeedMovement />
        <Tecnologia />
        <EngenhariadoDrone />
        <TecnologiaSemente />
        <ProtocoloTecnico />
        <JanelaDeOuro />
        <MapeamentoBiologico />
        <InfraestruturaRegenerativa />
        <SistemaPlantio />
        <AppEcoDrones />
        <CerebroSistema />
        <SegurancaOperacional />
        <ModeloEconomico />
        <ParceriasESG />
        <EstrategiaRegenerativa />
        <EngajamentoComunidade />
        <EcossistemaEducacional />
        <Impacto />
        <Embaixadores />
        <Comunidade />
        <ApoieOProjeto />
        <ParceiroCorporativo />
        <ParceirosEDrones />
        <Parceiros />
        <RecebaPageamentos />
        <ManifestoPDF />
        <Videos />
        <VisaoFinal />
        <DoacaoCripto />
        <Fundador />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
