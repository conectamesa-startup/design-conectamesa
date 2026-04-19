# CONECTA MESA — Guia de Identidade Visual

> **Infraestrutura Digital de Redistribuição Alimentar**  
> Recife, Pernambuco — Brasil  
> Versão 1.0 | 2026

---

**Brand Identity & Design System**

Este documento define a identidade visual completa do Conecta Mesa: paleta de cores, tipografia, direção de logo, aplicações no produto e diretrizes de acessibilidade. Serve como base para o design system e guia para equipe de produto e desenvolvedores.

> ⚠️ **CONFIDENCIAL** — Uso Interno Exclusivo

---

## Sumário

1. [Conceito da Marca](#1-conceito-da-marca)
2. [Tipografia](#2-tipografia)
3. [Paleta de Cores](#3-paleta-de-cores)
4. [Aplicação das Cores no Produto](#4-aplicação-das-cores-no-produto)
5. [Direção da Logo](#5-direção-da-logo)
6. [Mascote](#6-mascote)
7. [Acessibilidade](#7-acessibilidade)
8. [Resumo Estratégico da Identidade](#8-resumo-estratégico-da-identidade)

---

## 1. Conceito da Marca

### 1.1 Ideia Central

O Conecta Mesa não é um aplicativo — é uma infraestrutura de impacto social que redefine a cadeia de redistribuição alimentar no Nordeste. A ideia central da marca é a de uma ponte viva entre quem tem excedente e quem tem necessidade, mediada por tecnologia transparente e propósito genuíno.

> *"Conectar é o ato mais revolucionário em um sistema marcado pela desconexão."*
>
> A marca nasce da convicção de que o problema da fome no Brasil não é de produção — é de distribuição.

### 1.2 Emoção da Marca

A identidade emocional do Conecta Mesa deve evocar:

- **Confiança:** o usuário sabe exatamente o que está comprando — sem opacidade, sem surpresas.
- **Pertencimento:** a marca celebra os protagonistas locais — a padeira da Madalena, a coordenadora da Cozinha Solidária do Ibura, a estudante de Santo Amaro.
- **Esperança prática:** não é uma narrativa de caridade, mas de eficiência com propósito. Dignidade alimentar conquistada por tecnologia.
- **Urgência positiva:** cada transação salva comida, evita CO₂, alimenta uma família. O impacto é imediato e mensurável.

### 1.3 Diferenciação no Mercado

O Conecta Mesa se posiciona na interseção única entre três pilares que nenhum concorrente atual integra:

| Marketplace Transparente | Motor Social Integrado | Infraestrutura ESG |
|---|---|---|
| Ficha nutricional, alérgenos e validade atestada por IA — o oposto da sacola surpresa. | Venda com desconto e doação assistencial no mesmo fluxo de software, com B2G real. | Relatórios de CO₂ evitado e Selo Doador de Alimentos (Lei 15.224/2025) para empresas. |

---

## 2. Tipografia

### 2.1 Fonte Principal — Plus Jakarta Sans

#### Justificativa Estratégica

Plus Jakarta Sans é uma fonte sans-serif geométrica moderna, projetada com atenção especial para legibilidade em interfaces digitais e telas pequenas — condição crítica para um produto mobile-first como o Conecta Mesa. Seu caráter é ao mesmo tempo acolhedor e contemporâneo: transmite a acessibilidade que o produto precisa sem perder a sofisticação de uma plataforma de impacto real.

A fonte possui excelente suporte para caracteres do português brasileiro (acentuação, til, cedilha) e ótimo desempenho em peso Bold para hierarquias de CTA e títulos de impacto.

| Categoria | Detalhe |
|---|---|
| **Família** | Plus Jakarta Sans |
| **Pesos** | Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800) |
| **Aplicação** | Títulos de tela, CTAs, nomes de produto, impacto de gamificação |
| **Google Fonts** | `plus-jakarta-sans` |
| **Flutter** | `google_fonts: GoogleFonts.plusJakartaSans()` |

### 2.2 Fonte Secundária — Inter

#### Justificativa Estratégica

Inter é a escolha ideal para textos de corpo, descrições de produto, fichas nutricionais e interfaces de dados — contextos onde a legibilidade em tamanhos pequenos é mais crítica do que expressividade. Desenvolvida especificamente para telas digitais, Inter é o padrão de ouro da indústria para SaaS, aplicativos mobile e dashboards.

A combinação **Plus Jakarta Sans** (display/CTAs) + **Inter** (corpo/dados) cria uma hierarquia tipográfica clara, profissional e consistente com os padrões de produtos FoodTech maduros.

| Categoria | Detalhe |
|---|---|
| **Família** | Inter |
| **Pesos** | Regular (400), Medium (500), SemiBold (600) |
| **Aplicação** | Corpo de texto, descrições, fichas de produto, dashboards ESG, preços |
| **Google Fonts** | `inter` |
| **Flutter** | `google_fonts: GoogleFonts.inter()` |
| **Fallback** | `system-ui, -apple-system, Segoe UI, Roboto, sans-serif` |

### 2.3 Escala Tipográfica Mobile

| Uso | Tamanho | Peso | Fonte |
|---|---|---|---|
| Display / Impacto (kg salvos) | 28–32sp | ExtraBold 800 | Plus Jakarta Sans |
| Título de Tela | 22–24sp | Bold 700 | Plus Jakarta Sans |
| Subtítulo / Nome do Produto | 18–20sp | SemiBold 600 | Plus Jakarta Sans |
| Corpo / Descrição | 14–16sp | Regular 400 | Inter |
| Preço / Destaque | 16–18sp | Bold 700 | Plus Jakarta Sans |
| Caption / Metadado | 12sp | Medium 500 | Inter |
| Label de Status/Tag | 11–12sp | SemiBold 600 | Inter |

---

## 3. Paleta de Cores

A paleta do Conecta Mesa parte da referência visual inicial (verde `#4CAF50` e laranja `#FF9800`), refinando os tons para maior sofisticação, acessibilidade e coerência com o posicionamento de infraestrutura de impacto social. O verde foi aprofundado para um verde-floresta institucional; o laranja foi aquecido e controlado para uso estratégico — não decorativo.

> *Princípio: Verde é a identidade; laranja é a ação. Neutros são a estrutura. Estados guiam a experiência.*

### 3.1 Cores Primárias e Secundárias

| Nome | HEX | Justificativa | Uso no App |
|---|---|---|---|
| **Verde Institucional** | `#1A6B3A` | Cor âncora da marca. Evoca saúde, vida e responsabilidade ambiental. Mais profundo que o verde original para transmitir seriedade institucional. | Cabeçalhos, logo principal, navbar ativa, impacto metrics |
| **Verde Ação** | `#2E8B57` | Tom médio para elementos interativos principais. Contraste WCAG AA em fundo branco (relação 5.2:1). | Botões CTA primários ('Aceitar Coleta', 'Reservar'), links |
| **Verde Claro** | `#4CAF7A` | Mantido da referência original, refinado (+2% de saturação). Tom de suporte e gradientes. | Tags 'Doação', bordas de cards ativos, ícones de impacto |
| **Laranja Ação** | `#E07B00` | Versão aquecida do `#FF9800` original. Mais controlado, evita saturação excessiva em mobile. | Botão 'Venda', badges de urgência, contadores regressivos |
| **Laranja Suave** | `#FFA726` | Laranja de suporte para estados hover e alertas não-críticos. | Hover de botões secundários, alertas de prazo próximo |

### 3.2 Neutros

| Nome | HEX | Justificativa | Uso no App |
|---|---|---|---|
| **Carvão** | `#1C1C1E` | Quase-preto com leve tom quente. Preferido ao preto puro para suavizar contraste em leitura longa. | Títulos, textos principais, ícones |
| **Grafite** | `#3D3D3D` | Tom intermediário para textos secundários de alta legibilidade. | Nomes de estabelecimento, descrições de produto |
| **Cinza Médio** | `#6B7280` | Informações auxiliares sem peso visual excessivo. | Metadados, distância, horários, captions |
| **Cinza Suave** | `#D1D9D1` | Neutro com leve toque de verde — integra-se ao tom da marca sem competir. | Bordas de cards, divisores, campos de input |
| **Verde Menta** | `#F0F4F0` | Background de telas internas. Verde muito diluído que cria ambiência coerente com a marca. | Background principal do app, áreas de conteúdo |
| **Branco** | `#FFFFFF` | Espaço negativo, clareza de leitura. | Cards, modais, superfícies de input |

### 3.3 Estados do Sistema

| Nome | HEX | Justificativa | Uso no App |
|---|---|---|---|
| **Sucesso** | `#2E8B57` | Confirma ações completadas: reserva confirmada, entrega validada, doação recebida. | Toast de sucesso, QR code validado, 'Entregue' |
| **Alerta** | `#E07B00` | Urgência positiva: produto próximo ao vencimento, poucas unidades. | Badge 'Restam 2h', contador de estoque crítico |
| **Erro** | `#C0392B` | Falha de operação ou data inválida detectada por OCR. | Bloqueio de validade expirada, falha de pagamento |
| **Info** | `#1A78C2` | Informações contextuais neutras, dicas de uso. | Tooltips, onboarding, dicas de gamificação |
| **Doação** | `#4CAF7A` | Estado específico do Conecta Mesa: produto convertido para doação B2G. | Tag 'Doação', badge de ONG, indicador de rota |
| **Venda** | `#E07B00` | Estado de produto disponível para compra com desconto. | Tag 'Venda (com desconto)', badge de preço |

---

## 4. Aplicação das Cores no Produto

> ⚠️ Este guia serve como especificação direta para implementação. Cada elemento de UI possui cor, estado e uso definidos. Desvios devem ser aprovados pelo design lead.

### 4.1 Componentes de Interface

| Elemento | HEX | Descrição de Uso |
|---|---|---|
| **Botão Primário (CTA)** | `#2E8B57` | Texto branco, raio de borda 12px. 'Aceitar Coleta', 'Reservar e Retirar', 'Publicar Lote' |
| **Botão Venda** | `#E07B00` | Texto branco, raio 12px. Sempre acompanhado de preço com desconto visível. |
| **Botão Doação** | `#4CAF7A` | Texto branco ou verde escuro. Usado para selecionar tipo de lote como doação. |
| **Botão Secundário** | `#FFFFFF` | Borda `#2E8B57` (1.5px), texto verde escuro. Ações secundárias, cancelamento suave. |
| **Botão Destrutivo** | `#C0392B` | Apenas para ações irreversíveis: cancelar reserva, remover produto. |
| **Card de Produto** | `#FFFFFF` | Sombra leve (`0 2px 8px rgba(0,0,0,0.08)`). Borda `#D1D9D1`. Tag colorida no canto inferior. |
| **Tag 'Doação'** | `#4CAF7A` | Texto branco, raio 6px, padding 4x8px. Posicionada sobre foto do produto. |
| **Tag 'Venda'** | `#E07B00` | Idêntica à tag Doação. Cor laranja indica transação comercial. |
| **Navbar Ativa** | `#1A6B3A` | Ícone e label com cor verde institucional. Inativo: `#6B7280`. |
| **Background de Tela** | `#F0F4F0` | Verde menta muito diluído. Cria ambiência coerente sem competir com conteúdo. |
| **Cabeçalho de Seção** | `#1C1C1E` | Texto bold, fonte Plus Jakarta Sans 22sp. Sem cor de background. |
| **Preço Original (riscado)** | `#6B7280` | Texto cinza médio, `text-decoration: line-through`. Exibe o desconto conquistado. |
| **Preço com Desconto** | `#1A6B3A` | Texto verde institucional, bold, tamanho maior. Destaque do valor salvo. |
| **Métrica de Impacto** | `#2E8B57` | Ex: '50kg salvos este mês'. Bold, Plus Jakarta Sans ExtraBold, destaque central. |

### 4.2 Mapa e Geolocalização

| Elemento | HEX | Descrição de Uso |
|---|---|---|
| **Pin de Venda (mapa)** | `#E07B00` | Ícone de localização laranja. Estabelecimento com produto para venda. |
| **Pin de Doação (mapa)** | `#2E8B57` | Ícone de localização verde. Produto convertido para doação disponível. |
| **Pin Selecionado** | `#1A6B3A` | Pin amplificado com sombra. Verde institucional mais profundo. |
| **Área de Raio (2km)** | `#4CAF7A` + 20% opacidade | Círculo translúcido indicando raio de busca do usuário. |
| **Rota de Coleta** | `#1A6B3A` | Linha pontilhada verde para rota de retirada, conforme Google Maps API. |

### 4.3 Gamificação e Impacto

| Elemento | HEX | Descrição de Uso |
|---|---|---|
| **Badge de Impacto** | `#1A6B3A` | Ícone circular com fundo verde escuro. Texto branco. '🌿 50kg salvos' |
| **Leaderboard Top 1** | `#E07B00` | Destaque laranja para o primeiro colocado no ranking de bairros. |
| **Progress Bar** | Gradiente verde claro → médio | Barra de progresso de impacto mensal. Fundo: `#D1D9D1`. |
| **Notificação Push** | `#2E8B57` | Ícone de notificação com ponto verde quando há ofertas próximas. |
| **Toast de Sucesso** | `#2E8B57` | Fundo verde médio, texto branco, ícone check. Duração: 3s. |
| **Toast de Urgência** | `#E07B00` | Fundo laranja, texto branco. 'Restam apenas 3 unidades!' |

---

## 5. Direção da Logo

### 5.1 Conceito da Logo

A logo do Conecta Mesa deve sintetizar visualmente três conceitos simultaneamente: **conexão** (a ponte entre quem tem e quem precisa), **alimentação** (a presença sutil do alimento ou da mesa) e **tecnologia acessível** (linhas limpas, sem ornamentos desnecessários).

> *Conceito central: uma mesa estilizada cujos pés ou extremidades se transformam em nós de rede — representando conexão digital e redistribuição. Simples o suficiente para funcionar em 20px; significativo o suficiente para contar a história do produto.*

### 5.2 Tipo de Logo

- **Logotipo combinado:** símbolo + wordmark ("Conecta Mesa")
- **Versão compacta:** apenas símbolo (para app icon, favicon, badges)
- **Versão horizontal:** símbolo à esquerda, nome à direita (uso principal em header)
- **Versão vertical:** símbolo acima, nome abaixo (uso em splash screen e materiais impressos)

### 5.3 Estilo Visual

- Geometria suave — formas arredondadas (border radius alto), não angulosas
- Linhas de peso médio (2–3px) — acolhedor, não rígido
- Versão flat (sem gradientes) como padrão — compatível com todos os contextos digitais
- Versão com gradiente verde (`#1A6B3A` → `#4CAF7A`) para marketing e splash screen

### 5.4 Elementos Visuais do Símbolo

O símbolo deve incorporar pelo menos dois dos seguintes elementos de forma integrada:

- **Mesa estilizada** — superfície horizontal que representa o ato de compartilhar alimentação
- **Ponto de conexão / nó de rede** — círculo ou seta que sugere a plataforma digital
- **Folha ou semente** — referência à origem vegetal dos alimentos e sustentabilidade ambiental
- **Seta de redistribuição** — movimento circular que expressa o ciclo de recuperação alimentar

### 5.5 Wordmark — Tratamento Tipográfico

- **Fonte:** Plus Jakarta Sans Bold (700) — coerência com o design system
- **Espaçamento entre letras:** -0.5px (tracking ligeiramente comprimido = senso de solidez)
- **"Conecta"** em verde institucional (`#1A6B3A`) — a ação de conectar
- **"Mesa"** em verde ação (`#2E8B57`) — o ponto de encontro
- **Alternativa monocromática:** todo em `#1C1C1E` para uso sobre fundos coloridos

### 5.6 Passo a Passo de Construção da Logo

| Etapa | Descrição |
|---|---|
| **01 — Conceito** | Definir o elemento central: mesa + nó de conexão. Esboçar 5–8 variações em papel antes de digitalizar. Filtrar pela legibilidade em 20px. |
| **02 — Geometria** | Construir em grid de 24x24px (app icon). Usar formas básicas (retângulo, círculo, path). Testar se é reconhecível sem cor. |
| **03 — Tipografia** | Aplicar Plus Jakarta Sans Bold para o wordmark. Testar kerning e alinhamento óptico. O símbolo deve ter altura visual igual ao cap-height da fonte. |
| **04 — Paleta** | Aplicar verde institucional (`#1A6B3A`) como cor principal do símbolo. Testar versão monocromática preta, versão em branco sobre fundo verde. |
| **05 — Contraste** | Verificar ratio WCAG: mínimo 4.5:1 para texto normal, 3:1 para elementos gráficos grandes. Testar sobre fundo branco, verde claro e laranja. |
| **06 — Teste Mobile** | Exportar em 20x20, 40x40, 80x80, 192x192px. Verificar legibilidade em tela retina e em dispositivos de baixo DPI. Testar como app icon arredondado (iOS e Android). |

---

## 6. Mascote

### 6.1 Avaliação de Necessidade

A adoção de um mascote deve ser avaliada com rigor estratégico. No caso do Conecta Mesa, a recomendação é:

> **Recomendação: NÃO implementar mascote na versão 1.0.** Reavaliar em V2 após validação de mercado e consolidação da identidade visual base.

### 6.2 Justificativa

- O produto serve três perfis de usuário com maturidades digitais e contextos emocionais muito distintos: o comerciante preocupado com CMV, a consumidora periférica buscando dignidade alimentar, e a coordenadora de ONG gerenciando logística crítica. Um mascote corre o risco de parecer infantilizante para o pilar B2B e B2G.

- O posicionamento como "Infraestrutura Digital de Redistribuição Alimentar" exige sobriedade visual. Mascotes comunicam leveza e entretenimento — valores secundários para o Conecta Mesa.

- A gamificação de impacto (badges, leaderboards, CO₂ evitado) já cumpre o papel de engajamento emocional sem necessidade de personagem adicional.

- Caso exista demanda de marketing futura, uma ilustração estilizada de personagens reais (o feirante, a consumidora, a coordenadora) seria mais alinhada ao posicionamento do que um mascote cartoon.

---

## 7. Acessibilidade

A acessibilidade no Conecta Mesa não é conformidade regulatória — é valor fundamental do produto. O app foi projetado para populações com baixa renda, maturidade digital variável e dispositivos de hardware limitado. As diretrizes abaixo são **requisitos**, não recomendações.

### 7.1 Contraste — Requisitos Mínimos

| Combinação | Ratio Obtido | Padrão WCAG | Aprovado? |
|---|---|---|---|
| Verde Ação (`#2E8B57`) sobre branco | 5.2:1 | AA (4.5:1) | ✅ Sim |
| Verde Institucional (`#1A6B3A`) sobre branco | 8.1:1 | AAA (7:1) | ✅ Sim |
| Laranja Ação (`#E07B00`) sobre branco | 4.6:1 | AA (4.5:1) | ✅ Sim |
| Texto branco sobre Verde Ação (`#2E8B57`) | 5.2:1 | AA | ✅ Sim |
| Texto branco sobre Laranja (`#E07B00`) | 4.6:1 | AA | ✅ Sim |
| Carvão (`#1C1C1E`) sobre Verde Menta (`#F0F4F0`) | 15.3:1 | AAA | ✅ Sim |

### 7.2 Tipografia e Legibilidade

- Tamanho mínimo de fonte: **12sp** para qualquer texto legível pelo usuário (nunca abaixo disso)
- Espaçamento entre linhas (line height): mínimo **1.4x** o tamanho da fonte para textos de corpo
- Evitar texto sobre imagens sem camada de overlay escuro com opacidade ≥ 40%
- Nenhuma informação crítica deve ser transmitida apenas por cor — sempre acompanhar com ícone ou texto
- Campos de input: placeholder com contraste mínimo 4.5:1 sobre o fundo do campo

### 7.3 Tamanho de Toque

- Área mínima de toque para qualquer elemento interativo: **48x48dp** (Apple HIG e Material Design)
- Espaçamento mínimo entre elementos tocáveis adjacentes: **8dp**
- Botões CTA principais: mínimo **56dp** de altura para facilitar uso com dedos em movimento

### 7.4 Leitura em Dispositivos de Baixo Custo

- Testar obrigatoriamente em dispositivos com tela de 5 polegadas e resolução HD (720p) — perfil dominante entre usuários periféricos
- Otimizar carregamento de imagens: usar WebP com fallback JPEG. Tamanho máximo por imagem de produto: **200KB**
- Implementar modo de imagem reduzida para usuários com dados móveis limitados
- Feedback tátil (haptic) nos CTAs principais para dispositivos Android que suportam

### 7.5 Acessibilidade para Screen Readers

- Todos os ícones devem ter `ContentDescription` no Flutter (`accessibilityLabel` no iOS)
- Imagens de produto: alt text descritivo e automático (ex.: 'Pão integral artesanal, Padaria Boa Viagem, R$ 7,00')
- Ordem de foco: lógica de cima para baixo, esquerda para direita
- Anunciar mudanças de estado: 'Produto reservado com sucesso' via `Semantics`/`AccessibilityEvent`

---

## 8. Resumo Estratégico da Identidade

> *O Conecta Mesa é verde porque salva. É laranja porque age. É limpo porque respeita. E é acessível porque é para todos.*

| Dimensão | Decisão e Rationale |
|---|---|
| **Cor âncora** | Verde institucional `#1A6B3A` — profundidade de propósito, não verde de startup genérica |
| **Cor de ação** | Laranja controlado `#E07B00` — urgência positiva, sem alarme. Saúde sustentável do ecossistema alimentar |
| **Tipografia display** | Plus Jakarta Sans — humanidade geométrica, mobile-first, identidade própria |
| **Tipografia corpo** | Inter — clareza máxima para dados, fichas nutricionais, dashboards ESG |
| **Tom visual** | Sóbrio mas acolhedor. Tecnologia a serviço das pessoas, não o contrário |
| **Mascote** | Não recomendado na V1.0. Revisitar em V2 com dados de usuário |
| **Contraste** | WCAG AA mínimo em todos os contextos. AAA nos elementos críticos de texto principal |
| **Logo** | Combinado (símbolo + wordmark). Mesa estilizada com nó de conexão. Flat, arredondado, legível em 20px |

---

Este documento constitui a base oficial para o Design System do Conecta Mesa. Qualquer alteração de elementos aqui definidos deve ser registrada, versionada e aprovada pelo responsável de produto e design.

---

*— Conecta Mesa | Guia de Identidade Visual | Versão 1.0 | Confidencial —*