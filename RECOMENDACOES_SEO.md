# Recomendações SEO e Estratégias de Rankeamento - Ensino em Cena

## 1. ANÁLISE DE GARGALOS TÉCNICOS

### 1.1 Performance e Core Web Vitals
**Gargalos Identificados:**
- Site em SPA (Single Page Application) React pode ter problemas de SEO
- Carregamento inicial de JavaScript pode afetar LCP (Largest Contentful Paint)
- Imagens externas (Unsplash) sem otimização

**Soluções Implementadas/Recomendadas:**
- ✅ Build otimizado com Vite
- ⚠️ RECOMENDADO: Implementar Server-Side Rendering (SSR) com Next.js ou Remix
- ⚠️ RECOMENDADO: Substituir imagens por assets próprios otimizados
- ⚠️ RECOMENDADO: Implementar lazy loading para imagens
- ⚠️ RECOMENDADO: Adicionar sitemap.xml e robots.txt

### 1.2 Meta Tags e SEO On-Page
**Gargalos:**
- Meta tags dinâmicas por página ainda não implementadas
- Falta de Schema.org markup
- Open Graph tags ausentes

**Ações Necessárias:**
```typescript
// Adicionar React Helmet ou similar para meta tags dinâmicas por página
import { Helmet } from 'react-helmet-async';

// Exemplo para página de espetáculo:
<Helmet>
  <title>Vila da Fonética | Espetáculo Educativo | Ensino em Cena</title>
  <meta name="description" content="Vila da Fonética é um espetáculo musical interativo que apresenta as vogais de forma lúdica. Teatro educativo para crianças de 4 a 10 anos." />
  <meta name="keywords" content="teatro educativo, espetáculo infantil, educação, vogais, alfabetização" />

  {/* Open Graph */}
  <meta property="og:title" content="Vila da Fonética - Ensino em Cena" />
  <meta property="og:description" content="Espetáculo educativo para escolas" />
  <meta property="og:image" content="URL_DA_IMAGEM" />
  <meta property="og:type" content="website" />

  {/* Schema.org para Organization */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TheaterGroup",
      "name": "Ensino em Cena",
      "description": "Companhia teatral educativa",
      "url": "https://ensinoemcena.com.br",
      "logo": "URL_DO_LOGO",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-31-99187-3104",
        "contactType": "customer service",
        "email": "ensinoemcena@gmail.com"
      }
    })}
  </script>
</Helmet>
```

## 2. ESTRATÉGIAS DE CONTEÚDO PARA SEO

### 2.1 Palavras-chave Principais (Pesquisa Recomendada)
**Primárias:**
- teatro educativo
- espetáculo pedagógico
- teatro para escolas
- peça educativa infantil
- companhia teatral educativa
- teatro didático

**Long-tail (alta conversão):**
- agendar espetáculo educativo para escola
- teatro educativo em Belo Horizonte
- espetáculo sobre língua portuguesa
- teatro infantil pedagógico
- apresentação teatral para educação infantil

### 2.2 Estrutura de URLs (já implementada corretamente)
✅ URLs amigáveis implementadas:
- `/` (home)
- `/sobre`
- `/elenco`
- `/espetaculos`
- `/espetaculos/vila-da-fonetica`
- `/loja`
- `/contato`

### 2.3 Conteúdo Otimizado
**Implementar Blog/Notícias:**
```
/blog/
  - "como-teatro-ajuda-aprendizagem-criancas"
  - "importancia-arte-educacao-infantil"
  - "dicas-coordenadores-escolher-espetaculo"
  - "beneficios-teatro-educativo"
```

## 3. ESTRATÉGIAS PARA GOOGLE ADS

### 3.1 Campanhas de Pesquisa
**Grupos de Anúncios Recomendados:**

**Grupo 1: Agendamento Direto (Alta Intenção)**
```
Palavras-chave:
- [teatro educativo para escola]
- [agendar espetáculo escolar]
- [contratar teatro pedagógico]
- "teatro educativo preço"

Anúncio exemplo:
Título 1: Teatro Educativo para Sua Escola
Título 2: Espetáculos Pedagógicos | Agende Já
Descrição: Transforme o aprendizado em espetáculo! +10 anos de experiência. Atendemos todo Brasil. Solicite orçamento gratuito.
URL final: ensinoemcena.com.br/contato
```

**Grupo 2: Informacional (Nutrição)**
```
Palavras-chave:
- teatro educativo infantil
- espetáculo pedagógico
- peça educativa
- teatro didático

Anúncio exemplo:
Título 1: Conheça Nossos Espetáculos
Título 2: Arte + Educação | Ensino em Cena
Descrição: 50.000+ alunos alcançados. Teatro que transforma o aprendizado. Vila da Fonética, Português com Classe e mais!
URL final: ensinoemcena.com.br/espetaculos
```

**Grupo 3: Geográfico - Belo Horizonte**
```
Palavras-chave:
- teatro educativo belo horizonte
- espetáculo escolar bh
- teatro infantil mg

Segmentação: Raio de 50km de BH
```

### 3.2 Landing Pages Específicas (CRIAR)
Para otimizar conversão de anúncios:

```
/lp/agendar-espetaculo/
  - Formulário simplificado
  - Depoimentos destacados
  - Preços/Condições claras
  - CTA forte: "Solicitar Orçamento Grátis"

/lp/vila-da-fonetica/
  - Específica para o espetáculo mais popular
  - Vídeo do espetáculo
  - Agendamento direto
```

### 3.3 Remarketing
**Públicos:**
1. Visitantes que viram espetáculos mas não contataram (7 dias)
2. Visitantes da loja sem compra (14 dias)
3. Visitantes do formulário sem envio (30 dias)

**Anúncios de Remarketing:**
- Banner Display com fotos dos espetáculos
- Vídeos curtos dos espetáculos
- Ofertas especiais para escolas

## 4. ESTRATÉGIAS PARA META ADS (Facebook/Instagram)

### 4.1 Funil de Conversão

**TOPO (Awareness):**
```
Objetivo: Alcance
Público: Educadores, gestores escolares, pais (25-55 anos)
Interesses:
  - Educação infantil
  - Pedagogia
  - Teatro
  - Cultura
  - Gestão escolar

Criativos:
  - Vídeos curtos dos espetáculos (15-30s)
  - Carrosséis com fotos do elenco
  - Depoimentos em vídeo
  - Posts sobre metodologia pedagógica
```

**MEIO (Consideração):**
```
Objetivo: Tráfego/Engajamento
Público: Engajaram com conteúdo, visitantes do site
Criativos:
  - Bastidores dos espetáculos
  - Entrevistas com Rose Gomes
  - Cases de sucesso em escolas
  - "Como funciona o agendamento"
  - Material gratuito: "Guia: Como escolher espetáculo para sua escola"
```

**FUNDO (Conversão):**
```
Objetivo: Conversões (formulário)
Público: Visitantes site, engajadores, lookalike de clientes
Criativos:
  - Ofertas específicas
  - "Últimas vagas para [mês]"
  - Desconto para agendamento em grupo
  - Depoimentos de gestores escolares
```

### 4.2 Segmentação Detalhada Meta

**Públicos Personalizados:**
1. **Gestores Escolares**
   - Cargo: Diretor, Coordenador Pedagógico
   - Interesses: Gestão escolar, educação

2. **Professores**
   - Cargo: Professor
   - Interesses: Educação infantil, alfabetização, literatura

3. **Pais Engajados**
   - Pais de crianças 4-12 anos
   - Interesses: Educação infantil, teatro infantil

4. **Localização Prioritária:**
   - BH e região metropolitana (80% do budget)
   - Capitais brasileiras (20% do budget)

### 4.3 Pixel Meta e Eventos
**Implementar Meta Pixel para rastrear:**
```javascript
// Eventos importantes:
- PageView (automático)
- ViewContent (visita página espetáculo)
- InitiateCheckout (clica "agendar")
- Lead (envia formulário contato)
- Purchase (compra na loja)

// Custom Events:
- ViewCast (visualiza elenco)
- ViewTestimonials (lê depoimentos)
- VideoPlay (assiste vídeo espetáculo)
```

## 5. CONTEÚDO PARA REDES SOCIAIS

### 5.1 Grid Instagram
**Pilares de Conteúdo (60-30-10):**

**60% - Educacional/Valor**
- Dicas pedagógicas
- Bastidores
- Metodologia
- Frases inspiradoras sobre educação
- Curiosidades sobre teatro

**30% - Social Proof**
- Depoimentos
- Fotos de apresentações
- Números de impacto
- Cases de sucesso
- Reviews de escolas

**10% - Vendas Diretas**
- "Agende agora"
- Promoções
- Novos espetáculos
- Produtos da loja

### 5.2 Frequência de Posts
- Instagram: 4-5x/semana (feed) + 1-2 stories/dia
- Facebook: 3-4x/semana
- YouTube: 1-2x/mês (vídeos completos/trechos)

## 6. E-MAIL MARKETING

### 6.1 Listas Segmentadas
1. **Gestores Escolares** - Foco em agendamento
2. **Professores** - Conteúdo pedagógico
3. **Pais** - Eventos abertos e loja
4. **Clientes** - Novos espetáculos, promoções

### 6.2 Automações
```
Fluxo 1: Boas-vindas
  - Email 1 (imediato): Bem-vindo + vídeo institucional
  - Email 2 (dia 3): Espetáculos disponíveis
  - Email 3 (dia 7): Case de sucesso + CTA agendar
  - Email 4 (dia 14): Material pedagógico gratuito

Fluxo 2: Carrinho abandonado (Loja)
  - Email 1 (1h): "Esqueceu algo?"
  - Email 2 (24h): 10% desconto
  - Email 3 (72h): Última chance

Fluxo 3: Pós-apresentação
  - Email 1 (imediato): Agradecimento + pesquisa
  - Email 2 (7 dias): Material complementar
  - Email 3 (30 dias): Convite para novo espetáculo
```

## 7. OTIMIZAÇÕES TÉCNICAS CRÍTICAS

### 7.1 Implementação Prioritária
```bash
# 1. Adicionar sitemap.xml
npm install react-router-sitemap

# 2. Adicionar react-helmet-async
npm install react-helmet-async

# 3. Adicionar Google Analytics 4
# Criar conta GA4 e implementar tag

# 4. Adicionar Meta Pixel
# Criar conta Business Manager e implementar pixel

# 5. Google Search Console
# Verificar propriedade e enviar sitemap
```

### 7.2 Robots.txt
Criar arquivo `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://ensinoemcena.com.br/sitemap.xml

# Bloquear apenas admin areas se existir
Disallow: /admin/
```

### 7.3 Estrutura de Dados (Schema.org)
Implementar para cada tipo de página:

**Organização (todas as páginas):**
```json
{
  "@context": "https://schema.org",
  "@type": "PerformingGroup",
  "name": "Ensino em Cena",
  "url": "https://ensinoemcena.com.br",
  "logo": "URL_LOGO",
  "sameAs": [
    "https://facebook.com/ensinoemcena",
    "https://instagram.com/ensinoemcena",
    "https://youtube.com/@ensinoemcena"
  ]
}
```

**Espetáculos:**
```json
{
  "@context": "https://schema.org",
  "@type": "TheaterEvent",
  "name": "Vila da Fonética",
  "description": "...",
  "performer": {
    "@type": "PerformingGroup",
    "name": "Ensino em Cena"
  }
}
```

## 8. MÉTRICAS PARA ACOMPANHAR

### 8.1 KPIs de Negócio
- Leads qualificados/mês (meta: 50)
- Taxa de conversão site (meta: 3-5%)
- Custo por lead (meta: R$ 50-80)
- Agendamentos/mês (meta: 15-20)

### 8.2 KPIs de Marketing
- Impressões orgânicas Google
- Posição média palavras-chave
- CTR anúncios (meta: >3%)
- Taxa de rejeição site (meta: <60%)
- Tempo médio no site (meta: >2min)
- Páginas/sessão (meta: >3)

### 8.3 Social Media
- Crescimento seguidores/mês
- Taxa de engajamento (meta: >3%)
- Alcance posts
- Cliques para site

## 9. CRONOGRAMA DE IMPLEMENTAÇÃO

### Semana 1-2:
- [ ] Configurar Google Analytics 4
- [ ] Configurar Meta Pixel
- [ ] Implementar react-helmet para meta tags
- [ ] Criar sitemap.xml

### Semana 3-4:
- [ ] Otimizar todas as imagens
- [ ] Implementar Schema.org em todas páginas
- [ ] Configurar Google Search Console
- [ ] Criar landing pages específicas

### Semana 5-6:
- [ ] Lançar primeira campanha Google Ads
- [ ] Lançar primeira campanha Meta Ads
- [ ] Começar blog com 2 artigos
- [ ] Configurar automações de email

### Semana 7-8:
- [ ] Análise de resultados
- [ ] Otimização baseada em dados
- [ ] Escalar campanhas rentáveis
- [ ] Expandir conteúdo

## 10. ORÇAMENTO SUGERIDO MENSAL

**Google Ads:** R$ 2.000 - 5.000
- Campanha Pesquisa (70%): R$ 1.400 - 3.500
- Campanha Display/Remarketing (30%): R$ 600 - 1.500

**Meta Ads:** R$ 1.500 - 3.000
- Awareness (40%): R$ 600 - 1.200
- Consideração (40%): R$ 600 - 1.200
- Conversão (20%): R$ 300 - 600

**Ferramentas/Software:** R$ 500 - 800
- Email marketing (Mailchimp/SendGrid)
- Agendamento social media (Later/Buffer)
- SEO tools (Ubersuggest/Semrush)

**Total Recomendado:** R$ 4.000 - 8.800/mês

## 11. RECOMENDAÇÕES FINAIS

1. **Prioridade 1 (Urgente):**
   - Implementar meta tags dinâmicas
   - Configurar Google Analytics e Meta Pixel
   - Otimizar imagens e performance

2. **Prioridade 2 (Importante):**
   - Criar landing pages específicas
   - Iniciar campanhas pagas
   - Implementar blog

3. **Prioridade 3 (Desejável):**
   - Migrar para SSR (Next.js)
   - Vídeos marketing profissionais
   - Parcerias e link building

---

**Documento criado para Ensino em Cena**
*Última atualização: Outubro 2025*
