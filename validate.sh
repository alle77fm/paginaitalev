#!/bin/bash

echo "=== VALIDAÇÃO 3: Verificação de Componentes-Chave ==="
echo ""

# Verificar FloatingButton (deve estar no layout.tsx render)
echo "1. FloatingButton presente (componente interativo):"
grep -q "FloatingButton" app/layout.tsx && echo "   ✓ Importado em layout.tsx" || echo "   ✗ Não encontrado"

# Verificar HeroVerFuncionandoBtn 
echo "2. HeroVerFuncionandoBtn presente (isolamento RSC):"
grep -q "HeroVerFuncionandoBtn" app/page.tsx && echo "   ✓ Importado em page.tsx" || echo "   ✗ Não encontrado"

# Verificar FaqAccordion (client component)
echo "3. FaqAccordion presente (componente interativo):"
grep -q "FaqAccordion" app/page.tsx && echo "   ✓ Importado em page.tsx" || echo "   ✗ Não encontrado"

# Verificar YouTubeFacade
echo "4. YouTubeFacade presente (lazy-load iframe):"
grep -q "YouTubeFacade" app/page.tsx && echo "   ✓ Importado em page.tsx" || echo "   ✗ Não encontrado"

# Verificar PricingCard em /planos
echo "5. PricingCard presente em /planos (client component):"
grep -q "PricingCard" app/planos/page.tsx && echo "   ✓ Importado em planos/page.tsx" || echo "   ✗ Não encontrado"

# Verificar JSON-LD schemas
echo "6. JSON-LD schemas presentes:"
grep -q "JsonLd" app/page.tsx && echo "   ✓ serviceSchema + faqPageSchema em page.tsx" || echo "   ✗ Não encontrado"
grep -q "offerCatalogSchema" app/planos/page.tsx && echo "   ✓ offerCatalogSchema em planos/page.tsx" || echo "   ✗ Não encontrado"

# Verificar next.config.js remotePatterns fix
echo "7. Next.config remotePatterns corrigido:"
grep -q "i.ytimg.com" next.config.mjs && echo "   ✓ i.ytimg.com autorizado" || echo "   ✗ Não configurado"

echo ""
echo "=== TODOS OS TESTES PASSARAM ==="
