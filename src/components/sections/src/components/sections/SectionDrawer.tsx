import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft } from "lucide-react";

const VisaoMissaoValores     = lazy(() => import("./VisaoMissaoValores").then(m => ({ default: m.VisaoMissaoValores })));
const UrgenciaAmbiental      = lazy(() => import("./UrgenciaAmbiental").then(m => ({ default: m.UrgenciaAmbiental })));
const InspiracaoNatural      = lazy(() => import("./InspiracaoNatural").then(m => ({ default: m.InspiracaoNatural })));
const Tecnologia             = lazy(() => import("./Tecnologia").then(m => ({ default: m.Tecnologia })));
const ComoFunciona           = lazy(() => import("./ComoFunciona").then(m => ({ default: m.ComoFunciona })));
const EngenhariadoDrone      = lazy(() => import("./EngenhariadoDrone").then(m => ({ default: m.EngenhariadoDrone })));
const CerebroSistema         = lazy(() => import("./CerebroSistema").then(m => ({ default: m.CerebroSistema })));
const SegurancaOperacional   = lazy(() => import("./SegurancaOperacional").then(m => ({ default: m.SegurancaOperacional })));
const SistemaPlantio         = lazy(() => import("./SistemaPlantio").then(m => ({ default: m.SistemaPlantio })));
const AppEcoDrones           = lazy(() => import("./AppEcoDrones").then(m => ({ default: m.AppEcoDrones })));
const MapeamentoBiologico    = lazy(() => import("./MapeamentoBiologico").then(m => ({ default: m.MapeamentoBiologico })));
const InfraestruturaRegenerativa = lazy(() => import("./InfraestruturaRegenerativa").then(m => ({ default: m.InfraestruturaRegenerativa })));
const Ecossistema            = lazy(() => import("./Ecossistema").then(m => ({ default: m.Ecossistema })));
const EcossistemaImpacto     = lazy(() => import("./EcossistemaImpacto").then(m => ({ default: m.EcossistemaImpacto })));
const CoracaoEcossistema     = lazy(() => import("./CoracaoEcossistema").then(m => ({ default: m.CoracaoEcossistema })));
const ImpactoCascata         = lazy(() => import("./ImpactoCascata").then(m => ({ default: m.ImpactoCascata })));
const SeedMovement           = lazy(() => import("./SeedMovement").then(m => ({ default: m.SeedMovement })));
const Comunidade             = lazy(() => import("./Comunidade").then(m => ({ default: m.Comunidade })));
const Embaixadores           = lazy(() => import("./Embaixadores").then(m => ({ default: m.Embaixadores })));
const EngajamentoComunidade  = lazy(() => import("./EngajamentoComunidade").then(m => ({ default: m.EngajamentoComunidade })));
const EcossistemaEducacional = lazy(() => import("./EcossistemaEducacional").then(m => ({ default: m.EcossistemaEducacional })));
const ModeloEconomico        = lazy(() => import("./ModeloEconomico").then(m => ({ default: m.ModeloEconomico })));
const ParceriasESG           = lazy(() => import("./ParceriasESG").then(m => ({ default: m.ParceriasESG })));
const EstrategiaRegenerativa = lazy(() => import("./EstrategiaRegenerativa").then(m => ({ default: m.EstrategiaRegenerativa })));
const ParceiroCorporativo    = lazy(() => import("./ParceiroCorporativo").then(m => ({ default: m.ParceiroCorporativo })));
const ParceirosEDrones       = lazy(() => import("./ParceirosEDrones").then(m => ({ default: m.ParceirosEDrones })));
const Parceiros              = lazy(() => import("./Parceiros").then(m => ({ default: m.Parceiros })));
const RecebaPageamentos      = lazy(() => import("./RecebaPageamentos").then(m => ({ default: m.RecebaPageamentos })));
const Videos                 = lazy(() => import("./Videos").then(m => ({ default: m.Videos })));
const ManifestoPDF           = lazy(() => import("./ManifestoPDF").then(m => ({ default: m.ManifestoPDF })));

const DRAWER_MAP: Record<string, React.ComponentType[]> = {
  Sobre: [VisaoMissaoValores, UrgenciaAmbiental, InspiracaoNatural],
  Tecnologia: [Tecnologia, ComoFunciona, EngenhariadoDrone, SistemaPlantio,
               MapeamentoBiologico, InfraestruturaRegenerativa, AppEcoDrones,
               CerebroSistema, SegurancaOperacional],
  Ecossistema: [Ecossistema, EcossistemaImpacto, CoracaoEcossistema,
                ImpactoCascata, SeedMovement],
  Comunidade: [Comunidade, Embaixadores, EngajamentoComunidade, EcossistemaEducacional],
  Parceiros: [ModeloEconomico, ParceriasESG, EstrategiaRegenerativa,
              ParceiroCorporativo, ParceirosEDrones, Parceiros, RecebaPageamentos],
  Mídia: [Videos, ManifestoPDF],
};

const DESCRIPTIONS: Record<string, string> = {
  Sobre: "Missão, urgência e inspiração por trás do projeto",
  Tecnologia: "Drones, sementes, app e sistema inteligente de plantio",
  Ecossistema: "Como cada árvore desencadeia uma cadeia de vida",
  Comunidade: "Pilotos, embaixadores e educação regenerativa",
  Parceiros: "Modelo econômico, ESG e parcerias corporativas",
  Mídia: "Vídeos e manifesto em PDF",
};

export function openDrawer(group: string) {
  window.dispatchEvent(new CustomEvent("ecodrones:openDrawer", { detail: group }));
}

export function SectionDrawer() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: Event) => setActiveGroup((e as CustomEvent<string>).detail);
    window.addEventListener("ecodrones:openDrawer", handler);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveGroup(null); };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("ecodrones:openDrawer", handler);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeGroup ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeGroup]);

  const sections = activeGroup ? (DRAWER_MAP[activeGroup] ?? []) : [];

  return (
    <AnimatePresence>
      {activeGroup && (
        <>
          <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveGroup(null)} />

          <motion.div key="drawer" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[100] w-full md:w-[90vw] lg:w-[85vw] bg-background overflow-y-auto shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-background/95 backdrop-blur-xl border-b border-border/60">
              <div className="flex items-center gap-3">
                <button onClick={() => setActiveGroup(null)}
                  className="flex items-center gap-1.5 text-xs text-foreground/60 hover:text-primary transition-colors font-mono uppercase tracking-wider">
                  <ChevronLeft className="w-4 h-4" />Voltar
                </button>
                <span className="text-border/40">|</span>
                <div>
                  <span className="text-sm font-semibold text-foreground tracking-wide">{activeGroup}</span>
                  {DESCRIPTIONS[activeGroup] && (
                    <p className="text-xs text-foreground/50 mt-0.5">{DESCRIPTIONS[activeGroup]}</p>
                  )}
                </div>
              </div>
              <div className="hidden md:flex items-center gap-1">
                {Object.keys(DRAWER_MAP).map((g) => (
                  <button key={g} onClick={() => setActiveGroup(g)}
                    className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all duration-200 ${
                      g === activeGroup ? "bg-primary text-white" : "text-foreground/50 hover:text-primary hover:bg-primary/10"
                    }`}>
                    {g}
                  </button>
                ))}
              </div>
              <button onClick={() => setActiveGroup(null)}
                className="p-2 rounded-full border border-border/60 hover:border-primary/60 hover:text-primary transition-all duration-200"
                aria-label="Fechar">
                <X className="w-4 h-4" />
              </button>
            </div>

            <Suspense fallback={
              <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-foreground/40">
                <div className="w-8 h-8 border-2 border-primary/40 border-t-primary rounded-full animate-spin" />
                <span className="font-mono text-xs uppercase tracking-widest">Carregando {activeGroup}...</span>
              </div>
            }>
              {sections.map((Section, i) => <Section key={i} />)}
            </Suspense>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
                                    }
