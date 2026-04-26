import re
import os

sections_dir = r"C:\Users\ADMIN\AppData\Local\Temp\site-creator-studio\src\components\sections"

# Lista de arquivos que ainda precisam de correção
files = [
    "ApoieOProjeto.tsx", "ComoFunciona.tsx", "CerebroSistema.tsx", "AppEcoDrones.tsx",
    "CoracaoEcossistema.tsx", "Comunidade.tsx", "Ecossistema.tsx", "EcossistemaEducacional.tsx",
    "Embaixadores.tsx", "EcossistemaImpacto.tsx", "EngajamentoComunidade.tsx",
    "ManifestoPDF.tsx", "ModeloEconomico.tsx", "MapeamentoBiologico.tsx",
    "InfraestruturaRegenerativa.tsx", "Parceiros.tsx", "ParceiroCorporativo.tsx",
    "ParceirosEDrones.tsx", "ProtocoloTecnico.tsx", "RecebaPageamentos.tsx",
    "SeedMovement.tsx", "SegurancaOperacional.tsx", "SistemaPlantio.tsx",
    "TecnologiaSemente.tsx", "UrgenciaAmbiental.tsx", "Videos.tsx", "VideoShowcase.tsx",
    "VisaoFinal.tsx", "VisaoMissaoValores.tsx", "EngenhariadoDrone.tsx"
]

for filename in files:
    filepath = os.path.join(sections_dir, filename)
    if not os.path.exists(filepath):
        print(f"✗ Não encontrado: {filename}")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # h2 com text-3xl md:text-4xl -> text-xl md:text-2xl
    content = re.sub(
        r'(<h2[^\u003e]*className="[^"]*)text-3xl md:text-4xl([^"]*")',
        r'\1text-xl md:text-2xl\2',
        content
    )
    
    # motion.h2 com text-3xl md:text-4xl -> text-xl md:text-2xl
    content = re.sub(
        r'(<motion\.h2[^\u003e]*className="[^"]*)text-3xl md:text-4xl([^"]*")',
        r'\1text-xl md:text-2xl\2',
        content
    )
    
    # h3 com text-3xl md:text-4xl -> text-lg md:text-xl
    content = re.sub(
        r'(<h3[^\u003e]*className="[^"]*)text-3xl md:text-4xl([^"]*")',
        r'\1text-lg md:text-xl\2',
        content
    )
    
    # motion.h3 com text-3xl md:text-4xl -> text-lg md:text-xl
    content = re.sub(
        r'(<motion\.h3[^\u003e]*className="[^"]*)text-3xl md:text-4xl([^"]*")',
        r'\1text-lg md:text-xl\2',
        content
    )
    
    # text-2xl md:text-3xl em p (quotes) -> text-lg md:text-xl
    content = re.sub(
        r'(<p[^\u003e]*className="[^"]*)text-2xl md:text-3xl([^"]*")',
        r'\1text-lg md:text-xl\2',
        content
    )
    
    # text-2xl md:text-3xl lg:text-3xl xl:text-4xl -> text-lg md:text-xl
    content = re.sub(
        r'text-2xl md:text-3xl lg:text-3xl xl:text-4xl',
        r'text-lg md:text-xl',
        content
    )
    
    # text-3xl lg:text-4xl -> text-lg md:text-xl
    content = re.sub(
        r'text-3xl lg:text-4xl',
        r'text-lg md:text-xl',
        content
    )
    
    # text-3xl sozinho em headings -> text-xl
    content = re.sub(
        r'(<h[23][^\u003e]*className="[^"]*)\btext-3xl\b([^"]*")',
        r'\1text-xl\2',
        content
    )
    
    # text-3xl md:text-2xl (inconsistente) -> text-lg md:text-xl
    content = re.sub(
        r'text-3xl md:text-2xl',
        r'text-lg md:text-xl',
        content
    )
    
    # text-2xl md:text-3xl (em h3 ou p) -> text-lg md:text-xl
    content = re.sub(
        r'(<(?:h3|p)[^\u003e]*className="[^"]*)text-2xl md:text-3xl([^"]*")',
        r'\1text-lg md:text-xl\2',
        content
    )
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ {filename}")
    else:
        print(f"- {filename}")

print("\nConcluído!")
