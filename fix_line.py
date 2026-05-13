with open("src/components/sections/EstrategiaRegenerativa.tsx", "r", encoding="utf-8") as f:
    content = f.read()
lines = content.split("\n")
# Line 52 in editor = index 51 in 0-based list
# Fix the broken double-quote-inside-double-quote string
lines[51] = "    desc: \"Deixe de pagar imposto 'seco' e invista na EcoDrones: gere marketing positivo, ativos ESG e melhore a comunidade.\","
with open("src/components/sections/EstrategiaRegenerativa.tsx", "w", encoding="utf-8") as f:
    f.write("\n".join(lines))
print("done - line 52 fixed")
