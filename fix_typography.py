import re
import os

# Pasta com os arquivos
sections_dir = r"C:\Users\ADMIN\AppData\Local\Temp\site-creator-studio\src\components\sections"

# Arquivos e substituições específicas
replacements = {
    # h2 headings: text-3xl md:text-4xl -> text-xl md:text-2xl
    # h3 headings: text-3xl md:text-4xl -> text-lg md:text-xl
    # Stats/counters: text-4xl md:text-5xl -> text-2xl md:text-3xl
    # text-3xl sozinho -> text-xl
    # text-4xl sozinho -> text-xl ou text-2xl dependendo do contexto
}

files_to_check = [
    "EngenhariadoDrone.tsx", "InfraestruturaRegenerativa.tsx", "EngajamentoComunidade.tsx",
    "ProtocoloTecnico.tsx", "ParceriasESG.tsx", "VisaoMissaoValores.tsx", "ParceirosEDrones.tsx",
    "Embaixadores.tsx", "Parceiros.tsx", "EcossistemaImpacto.tsx", "EcossistemaEducacional.tsx",
    "ParceiroCorporativo.tsx", "VisaoFinal.tsx", "VideoShowcase.tsx", "ModeloEconomico.tsx",
    "Videos.tsx", "MapeamentoBiologico.tsx", "UrgenciaAmbiental.tsx", "TecnologiaSemente.tsx",
    "Tecnologia.tsx", "SistemaPlantio.tsx", "SegurancaOperacional.tsx", "SeedMovement.tsx",
    "RecebaPageamentos.tsx", "ComoFunciona.tsx", "CerebroSistema.tsx", "AppEcoDrones.tsx",
    "ApoieOProjeto.tsx", "CoracaoEcossistema.tsx", "Comunidade.tsx", "DoacaoCripto.tsx",
    "Ecossistema.tsx", "InspiracaoNatural.tsx", "ManifestoPDF.tsx"
]

# Padrões para substituição
patterns = [
    # h2 headings principais
    (r'className="([^"]*)text-3xl md:text-4xl([^"]*)"', r'className="\1text-xl md:text-2xl\2"'),
    # h3 headings
    (r'className="([^"]*)text-3xl md:text-4xl([^"]*)"', r'className="\1text-lg md:text-xl\2"'),
    # Stats grandes
    (r'className="([^"]*)text-4xl md:text-5xl([^"]*)"', r'className="\1text-2xl md:text-3xl\2"'),
    # text-5xl md:text-6xl
    (r'className="([^"]*)text-5xl md:text-6xl([^"]*)"', r'className="\1text-2xl md:text-3xl\2"'),
    # text-5xl md:text-7xl (footer watermark)
    (r'className="([^"]*)text-5xl md:text-7xl([^"]*)"', r'className="\1text-3xl md:text-4xl\2"'),
    # text-4xl sozinho em headings
    (r'<h[23][^>]*className="([^"]*)text-4xl([^"]*)"', r'<h2 className="\1text-xl md:text-2xl\2"'),
    # text-3xl sozinho em headings
    (r'<h[23][^>]*className="([^"]*)text-3xl([^"]*)"', r'<h2 className="\1text-xl md:text-2xl\2"'),
]

for filename in files_to_check:
    filepath = os.path.join(sections_dir, filename)
    if not os.path.exists(filepath):
        print(f"Arquivo não encontrado: {filename}")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Aplicar substituições específicas por padrão
    # text-3xl md:text-4xl em h2 -> text-xl md:text-2xl
    content = re.sub(
        r'(<h2[^>]*className="[^"]*)text-3xl md:text-4xl([^"]*")',
        r'\1text-xl md:text-2xl\2',
        content
    )
    
    # text-3xl md:text-4xl em h3 -> text-lg md:text-xl
    content = re.sub(
        r'(<h3[^>]*className="[^"]*)text-3xl md:text-4xl([^"]*")',
        r'\1text-lg md:text-xl\2',
        content
    )
    
    # text-3xl lg:text-4xl em h3 -> text-lg md:text-xl
    content = re.sub(
        r'(<h3[^>]*className="[^"]*)text-3xl lg:text-4xl([^"]*")',
        r'\1text-lg md:text-xl\2',
        content
    )
    
    # text-2xl md:text-3xl lg:text-3xl xl:text-4xl em h3 -> text-lg md:text-xl
    content = re.sub(
        r'(<h3[^>]*className="[^"]*)text-2xl md:text-3xl lg:text-3xl xl:text-4xl([^"]*")',
        r'\1text-lg md:text-xl\2',
        content
    )
    
    # text-4xl md:text-5xl (stats) -> text-2xl md:text-3xl
    content = re.sub(
        r'className="([^"]*)text-4xl md:text-5xl([^"]*)"',
        r'className="\1text-2xl md:text-3xl\2"',
        content
    )
    
    # text-3xl sozinho em h2/h3 -> text-xl
    content = re.sub(
        r'(<h[23][^>]*className="[^"]*)\btext-3xl\b([^"]*")',
        r'\1text-xl\2',
        content
    )
    
    # text-4xl sozinho em spans/divs (não headings) -> text-2xl
    content = re.sub(
        r'(<(?:span|div|p)[^>]*className="[^"]*)\btext-4xl\b([^"]*")',
        r'\1text-2xl\2',
        content
    )
    
    # text-5xl sozinho -> text-3xl
    content = re.sub(
        r'(<[^>]*className="[^"]*)\btext-5xl\b([^"]*")',
        r'\1text-3xl\2',
        content
    )
    
    # text-6xl sozinho -> text-3xl
    content = re.sub(
        r'(<[^>]*className="[^"]*)\btext-6xl\b([^"]*")',
        r'\1text-3xl\2',
        content
    )
    
    # text-7xl -> text-4xl
    content = re.sub(
        r'(<[^>]*className="[^"]*)\btext-7xl\b([^"]*")',
        r'\1text-4xl\2',
        content
    )
    
    # text-2xl md:text-3xl em h3 -> manter (já está no padrão)
    # text-xl md:text-2xl lg:text-3xl -> text-lg md:text-xl
    content = re.sub(
        r'(<[^>]*className="[^"]*)text-xl md:text-2xl lg:text-3xl([^"]*")',
        r'\1text-lg md:text-xl\2',
        content
    )
    
    # text-2xl sm:text-3xl md:text-4xl -> text-xl md:text-2xl
    content = re.sub(
        r'(<[^>]*className="[^"]*)text-2xl sm:text-3xl md:text-4xl([^"]*")',
        r'\1text-xl md:text-2xl\2',
        content
    )
    
    # text-2xl sm:text-3xl -> text-lg md:text-xl
    content = re.sub(
        r'(<[^>]*className="[^"]*)text-2xl sm:text-3xl([^"]*")',
        r'\1text-lg md:text-xl\2',
        content
    )
    
    # text-base sm:text-2xl md:text-4xl -> text-base md:text-xl
    content = re.sub(
        r'(<[^>]*className="[^"]*)text-base sm:text-2xl md:text-4xl([^"]*")',
        r'\1text-base md:text-xl\2',
        content
    )
    
    # text-xl md:text-4xl -> text-xl md:text-2xl
    content = re.sub(
        r'(<[^>]*className="[^"]*)text-xl md:text-4xl([^"]*")',
        r'\1text-xl md:text-2xl\2',
        content
    )
    
    # text-2xl md:text-4xl -> text-xl md:text-2xl
    content = re.sub(
        r'(<[^>]*className="[^"]*)text-2xl md:text-4xl([^"]*")',
        r'\1text-xl md:text-2xl\2',
        content
    )
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Atualizado: {filename}")
    else:
        print(f"- Sem alterações: {filename}")

print("\nConcluído!")
