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

const DRAWER_MAP: Record<string, React.ComponentType[]> = {
  Sobre:      [VisaoMissaoValores, UrgenciaAmbiental, InspiracaoNatural],
  Tecnologia: [Tecnologia, ComoFunciona, EngenhariadoDrone, SistemaPlantio,
               MapeamentoBiologico, InfraestruturaRegenerativa, AppEcoDrones,
               CerebroSistema, SegurancaOperacional],
  Ecossistema:[Ecossistema, EcossistemaImpacto, CoracaoEcossistema, ImpactoCascata, SeedMovement],
  Comunidade: [Comunidade, Embaixadores, EngajamentoComunidade, EcossistemaEducacional],
  Parceiros:  [ModeloEconomico, ParceriasESG, EstrategiaRegenerativa,
               ParceiroCorporativo, ParceirosEDrones, Parceiros, RecebaPageamentos],
};

const DESC: Record<string, string> = {
  Sobre:      "Missão, urgência e inspiração por trás do projeto",
  Tecnologia: "Drones, sementes, app e sistema inteligente de plantio",
  Ecossistema:"Como cada árvore desencadeia uma cadeia de vida",
  Comunidade: "Pilotos, embaixadores e educação regenerativa",
  Parceiros:  "Modelo econômico, ESG e parcerias corporativas",
};

export function openDrawer(group: string) {
  window.dispatchEvent(new CustomEvent("ecodrones:openDrawer", { detail: group }));
}

export function SectionDrawer() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const open = (e: Event) => setActive((e as CustomEvent<string>).detail);
    const close = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("ecodrones:openDrawer", open);
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("ecodrones:openDrawer", open);
      window.removeEventListener("keydown", close);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  const sections = active ? (DRAWER_MAP[active] ?? []) : [];

  return (
    <AnimatePresence>
      {active && (
        <>
          <motion.div key="bd" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] bg-black/55 backdrop-blur-sm cursor-pointer"
            onClick={() => setActive(null)} />

          <motion.div key="dw" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[100] w-full md:w-[88vw] lg:w-[82vw] bg-background overflow-y-auto shadow-2xl flex flex-col"
          >
            {/* Barra de navegação do painel */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-3 sm:px-5 py-2.5 bg-background backdrop-blur-md border-b border-border/50 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <button onClick={() => setActive(null)}
                  className="flex items-center gap-1 text-[11px] text-foreground/50 hover:text-primary transition-colors font-mono uppercase tracking-wider shrink-0">
                  <ChevronLeft className="w-3.5 h-3.5" />Voltar
                </button>
                <span className="w-px h-4 bg-border/50 shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{active}</p>
                  {DESC[active] && <p className="text-[11px] text-foreground/45 truncate">{DESC[active]}</p>}
                </div>
              </div>

              {/* Tabs de grupos */}
              <div className="hidden md:flex items-center gap-1 mx-4">
                {Object.keys(DRAWER_MAP).map((g) => (
                  <button key={g} onClick={() => setActive(g)}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all duration-200 ${
                      g === active ? "bg-primary text-white shadow-sm" : "text-foreground/45 hover:text-primary hover:bg-primary/8"
                    }`}>
                    {g}
                  </button>
                ))}
              </div>

              <button onClick={() => setActive(null)} aria-label="Fechar"
                className="shrink-0 p-1.5 rounded-full border border-border/50 hover:border-primary/60 hover:text-primary transition-all duration-200">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile tab strip */}
        <div className="md:hidden overflow-x-auto border-b border-border/30 bg-background">
          <div className="flex gap-1 px-3 py-2 min-w-max">
            {Object.keys(DRAWER_MAP).map((g) => (
              <button key={g} onClick={() => setActive(g)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                  g === active ? "bg-primary text-background font-bold" : "text-foreground/50 border border-border/50"
                }`}>{g}</button>
            ))}
          </div>
        </div>

        {/* Conteúdo — carrega apenas quando o painel abre */}
            <div className="flex-1 overflow-y-auto">
              <Suspense fallback={
                <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 text-foreground/30">
                  <div className="w-7 h-7 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  <span className="font-mono text-[11px] uppercase tracking-widest">Carregando {active}...</span>
                </div>
              }>
                {sections.map((Section, i) => <Section key={i} />)}
              </Suspense>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
