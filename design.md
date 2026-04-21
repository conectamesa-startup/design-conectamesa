# CONECTA MESA — Design System

**Infraestrutura Digital de Redistribuição Alimentar**
Recife, Pernambuco — Brasil
Versão 2.0 | 2026

⚠️ **CONFIDENCIAL** — Uso Interno Exclusivo

Este documento define o Design System e a identidade visual completa do Conecta Mesa e atua como a única fonte de verdade de UI/UX e Branding para a equipe de desenvolvimento (Flutter) e de produto. Ele foi realinhado a partir da documentação base do produto (PRD, Doc Institucional e Especificação UI/UX) para refletir a interface real e as melhores práticas de mercado.

---

## 1. Princípios de Design

O design do Conecta Mesa foca em combinar uma experiência fluida de marketplace com o impacto social profundo de uma infraestrutura governamental/B2G e corporativa (ESG).

1. **Eficiência e Urgência Positiva**: O design incentiva a compra e doação ágeis, especialmente para itens próximos do vencimento. A interface não é passiva; ela instiga a ação preventiva contra o desperdício alimentar.
2. **Confiança Visual e Transparência**: Através de leitura clara de alérgenos, validação com OCR por IA (Google ML Kit), e exibições honestas de ficha nutricional, criamos a antítese da "sacola surpresa". O usuário precisa de garantias e segurança.
3. **Escalável e Inclusivo (Mobile-First)**: Interfaces de alto contraste preparadas para rodar em dispositivos móveis menos potentes e para serem legíveis para o público sênior ou no corre-corre diário por consumidores na periferia do Recife.
4. **Comunicação Direta (Zero Fricção)**: Fluxo híbrido com conversão automatizada do modelo de venda para B2G usando transições e badges visuais sem desorientar o modelo mental do usuário comum.

## 2. Tradução do Produto em Design

Baseando-nos nos fluxos do **PRD**, a lógica do negócio exige comunicação visual de status muito específicos:
- **Modelo Híbrido Temporal**: A interface precisa guiar as empresas (B2B) durante a fase de **Venda com Desconto**, e, 4 horas antes do limite estipulado, transformar a UI da oferta para o layout de **Doação Gratuita (B2G/ONGs)**. O design usará a cor Primária (Verde) e Secundária (Laranja) para delinear e reforçar esses estados.
- **Validação com Edge AI (ML Kit)**: A validação de OCR precisa de um feedback de sucesso (verde/check) ou bloqueio (vermelho/erro) instantâneo para ser compreensível para os lojistas doadores durante o upload.
- **Micro-interações Financeiras Seguras**: Com **Asaas Split** nas transações de PIX e Cartão (3-DS 2.0), precisamos incutir selos de segurança (PCI DSS) e status responsivos da transação que acalmem o usuário.

## 3. Integração com UI/UX (CRÍTICO)

Baseado no arquivo `Conecta_Mesa_Especificacao_UI_UX.md`, a integração central mapeia as telas aos padrões de interface. 

### Telas de Autenticação e Onboarding
- **Objetivo:** Reduzir a fricção na entrada e direcionando PF do B2B e ONGs.
- **Hierarquia:** Priorização dos "Paginadores de 3 dots", ilustrações flat de impacto local e apelo emotivo no login.
- **Padrões:** Clean screen white (#FFFFFF), Form inputs baseados no Material 3 e CTAs de bottom sticky.

### Feed de Marketplace (Lista) e Mapa (Mapbox)
- **Objetivo:** Conversão hiperlocal por proximidade.
- **Hierarquia:** Filtros textuais em AppBar -> Chips de categoria -> Cards verticais.
- **Padrões:** Cards com *shimmer loading*, tags flutuantes "50% OFF" vs "GRATUITO", badges de urgência "⏰ Urgente". Pins no mapa coloridos baseados no tipo.

### Ficha do Produto e Checkout
- **Objetivo:** Absorver fichas técnicas completas com foco em confiança visual e pagamento por Pix dinâmico.
- **Hierarquia:** Hero Image Edge-to-edge estendida -> Header c/ Verified Badge -> Macronutrientes -> Mapbox View -> CTA Fixo de "Pagar R$X" / "Reservar".
- **Padrões:** Polling states (verificação de PIX e animação de "check" e transição para o Asaas).

## 4. Design Tokens

Adota a **Paleta Ponte**, implementada via `ThemeData` e `ColorScheme` no Material 3, garantindo acessibilidade sem perca de expressividade visual.

### Cores

| Token Name | Cor | Atribuição no Flutter | Uso e Aplicação Principal |
|------------|-----|----------------------|---------------------------|
| **Verde Ponte** | `#4CAF50` | `primary` | Doações, ONGs, CTAs primários, ícones de sucesso, fundos B2G. |
| **Laranja Ponte** | `#FF9800` | `secondary` | Vendas, urgência, ofertas/preços, empresas verificadas. |
| **Background Principal** | `#FFFFFF` | `surface` / `background`| Scaffold bg, fundo de todas as telas. |
| **Surface Claro** | `#F5F5F5` | `surfaceVariant` | TextFields de busca, fundos de chips, botões inativos e cards. |
| **Texto Foreground** | `#333333` | `onSurface` | Cor de tipografia primária para BodyLarge e descrições sólidas. |
| **Texto Muted** | `#737373` | `onSurfaceVariant` | Labels, ícones inativos, bodySmall, distâncias. |
| **Verde Badges** | `#E8F5E9` | `primaryContainer` | Fundo de selos "ONG Verificada", tags de aprovação. |
| **Laranja Badges** | `#FFF3E0` | `secondaryContainer`| Fundo de selos "Empresa Verificada", balões de info. |
| **Erro Crítico** | `#C62828` | `error` | Bloqueio do OCR em validade falha, erros de Auth. |
| **Azul Info** | `#1565C0` | `info` | Tags hipertexto, notificações pontuais. |

### Tipografia

Famílias tipográficas de fácil leitura que reforçam autoridade premium:

| Token / Escala | Tamanho | Peso (Weight) | Fonte | Exemplo de Aplicação |
|----------------|---------|---------------|-------|----------------------|
| **Display/Hero**| 24sp, 28sp | Montserrat ExtraBold (800) | Montserrat | Hero AppBar, Valores de "R$ / Pix", Telas Fixas. |
| **Títulos/Sub** | 20sp, 22sp | Montserrat Bold (700) | Montserrat | Nomes de produtos, "Como você vai usar o app?". |
| **Labels CTA** | 16sp | Montserrat SemiBold (600) | Montserrat | Label ElevatedButton, Tags nos FilterChips. |
| **Secundário** | 14sp | Montserrat Medium (500) | Montserrat | Categorizações dentro de views e seções. |
| **Corpo Bold** | 16sp | Nunito Bold (700) | Nunito | Variáveis de KPI no dashboard, ênfases de métricas. |
| **Corpo Standard**| 14sp | Nunito Regular (400) | Nunito | Multilines de chat, descrição de produto, text normais. |
| **Caption/Meta** | 11sp, 12sp | Nunito Regular (400) | Nunito | Datas, distâncias no feed (ex: "a 1.2km"), selos SEC. |

### Espaçamento (Spaces) e Grid
Base de fator de repetição 8.
- `gap_small`: **8dp** - Elementos vizinhos mínimos num component (Ex.: ícone e numeração).
- `gap_medium`: **16dp** - Dentro dos padding de *Cards* e Margem de bordos (Padding screen total).
- `gap_large`: **24dp** - Separação vertical entre seções do formulário ou abaixo da AppBar.

### Radius (Bordas)
- `border_radius_card`: **16dp** - Todos os Cards de superfície Material 3, Modais e Sheets.
- `border_radius_button`: **12dp** - TextFields e ElevatedButtons.
- `border_radius_chip`: **9999dp (pill)** - Formato arredondado estilo cápsula para badges, botões circulares e toggles de categoria.

## 5. Componentes

Os sistemas de componentes reutilizam diretamente a especificação UI/UX garantindo desenvolvimento simplificado em Flutter.

### CTAs (Botões)
- **Primary (Elevated)**: Fundo `Verde Ponte #4CAF50` (Doações/Padroes) ou `Laranja Ponte #FF9800` (Urgency/Vendas e Pagamento). Raio 12px, Altura: 52dp. Minimum a11y click height é estritamente 48dp.
- **Secondary (Outlined)**: OutlinedButton da mesma cor respectiva. 
- **Estados**: Hover aplica um leve shift no overlay (no mobile, traduzido no material `splash color`); Loading oculta o label para dar espaço a um `CircularProgressIndicator` da cor do botão dentro do surface area com um overlay opaco; Desativado recebe opacity de `0.4` e desativa *gestures*.

### Inputs e Formulários
- **TextFields**: Material 3 padrão `OutlinedInputBorder` (Raio 12dp, Borda E0E0E0, Foco no Verde Ponte). Ícones Muted no prefix, helpers de erro (Erro Crítico: `#C62828`).

### Product Cards e Chips
- **Feed Card**: Ocupa width máxima - 32dp (margin grid), altura variável por ratio 16:9 de capa, contendo Badges pill fixos overlayed na top-right (`% OFF` ou `GRATUITO`). Elevação subtil: 2. Tap responde com ripple native do InkWell focado na cor Verde.
- **Filter Chips**: Scroll horizontal (ListView.builder invertido ou inline). Fundo branco ativado, fallback p/ `#F5F5F5` se desativado.

### Modal (Draggable Bottom Sheets)
- **Config**: Sheets puxadas do rodapé com topo em 20px de radius. Apresentam Handles horizontais (Linha cinza 32x4dp para swipe-down gestures). Implementados largamente em validações completas (OCR preview, Confirmação Checkout).

## 6. Layout e Grid

- Toda tela padrão usa Scaffold do Flutter Material 3 com bgColor `#FFFFFF`. 
- **Bottom Navigation Bar**: 80dp com uso do *NavigationBar* moderno sem shadow ou com linha limite no topo (`#E0E0E0`). Abas: [Início, Impacto, Anunciar, Conta]. Ícone ativado puxa `#4CAF50`.
- **Top AppBar**: 56dp. Estilo Flat, sem elevação ou scroll elevation 0, garantindo o "white clean aesthetic" Modern UI iOS/Android.

## 7. Padrões por Tela

| Módulo Mestre | Design Applicado (UX) | Checkpoints |
|---------------|-----------------------|-------------|
| **Home/Marketplace** | Feed ListView com lazy-loading. Pull-to-refresh para Sync Realtime + Mapbox Toggle FAB Flutuante. | 6 Cards Skeleton (shimmer loading). Update via Supabase. |
| **Mapa Interativo** | Uso de Pins no Mapbox via API Flutter GL. Heatmaps seletivos apenas em Logins B2G Institucional. | Clusters visuais com numeração circulada em Verde. |
| **Detail Action** | Tela sem AppBar e capa hero transparente no topo (parallax scroll). Fixação sticky-bottom do CTA p/ evitar dropoff. | Badges explícitas e layout focado em validação IA e Alergenos. |
| **Checkout + Pagamentos** | UX minimalista durante scanner/câmeras. Em pagamentos (13/14), uso de QR Code massivo. Temporizador visual laranja decrescente. | Estado de Confirmação é um takeover de tela completa, animação Lottie celebratória. |
| **Upload B2B (Foto/OCR)** | Abordagem Wizard linear. Linear Bar progressivo 33% -> 66% -> 100%. Container grande tracejado UI. | Banners pós-capture. Tratamentos por cor "Pass / Warning / Stop" (Verde, Laranja, Vermelho). |
| **Impact Dashboard** | Grade Múltipla 2x2. Cartões limpos com sombra neutra. Títulos de fonte grande e uso da FlChart API. | Coeficientes da ONU. Cores progressivas. Dashboard claro. |

## 8. Interações e Microinterações

- **Microanimações**: Utilizar Flutter `AnimatedContainer` e blocos transitórios de hero para navegações fluidas intertelas. Lottie animations em confirmações de pagamento Pix para recompensar os B2B e Consumidores na cadeia.
- **Feedback Háptico:** Uso do `HapticFeedback.lightImpact()` ao confirmar doação/reserva ou gerar os links da API do Asaas Split, garantindo solidez.
- **Polling Indicator**: Nas telas de PIX onde a web API varre webhook, microinteração circular de loader e texto Muted pulsa 1 vez a cada segundo para informar que não travou.
- **Animações de Mapbox**: Zoom progressivo nos pins (Spring de 300ms) sem hard-rendering.

## 9. Acessibilidade

O propósito assistencial exige **WCAG AA** nativo em toda a escala de produto. 
- **Tap Targets**: Toda a zona de clique tem 48dp no mínimo.
- **Visuals vs Semantics**: Sempre ter rótulos e content-descriptions `Semantic(child:)` atrelados às ilustrações SVG, ícones de Alérgenos, preenchimento de campos Date e status temporizações (ex: leitores de Tela devem dizer explicitamente "Faltam 3 horas") e nunca basear informações só em cores (símbolos e ícones sempre combinam as mensagens cruciais junto da cor).
- **Dark Mode**: No momento MVP o escopo prioriza o High Contrast Light Theme (tema claro base #FFFFFF) para garantir legibilidade com os brilhos do ecossistema do mobile no Brasil.

## 10. Regras de Consistência

1. **Botões jamais alteram seu padding**: Toda chamada a ação principal não difere por tela.
2. O sistema de Tipografia limita os bold-weights para numéricos (preço ou métricas de dashboard) ou navegação de top-level titles. Nada de texto descritivo denso em negrito.
3. Se houver falha de rede/Supabase Database, os *Empty States* são unificados no app com layout genérico: Ícone SVG Flat + Label de Error `16sp Muted` + Botão "Tente outra vez".
4. B2B / Empresa Verificada requer o `Verified Badge` padronizado. Os administradores jamais usarão selo diferenciado do visual estabelecido para parceiros corporativos (pill colorida c/ ícone).

## 11. Integração com Flutter

O Design System acima foi concebido pensando diretamente em componentes limpos e *feature-first* via Riverpod Providers no Flutter, em conjunto com o Material 3. O arquivo `theme.dart` (a ser implementado no repositório) deverá mapear inteiramente o *Color Scheme*, importando fontes globais do *google_fonts*, customizando o *ElevatedButtonThemeData* e assegurando uma única dependência UI partilhada globalmente (ex: *CardTheme* controlando os 16px radius universalmente).

## 12. Diferenças vs versão anterior

**Este Design System substitui todas as normas estipuladas em versões antigas do PDF Conecta Mesa (ou `design.md` anteriores).**
1. **Pauta Cromática Uniformizada**: Tons verdes profundos conflituantes (o `#1A6B3A` "Verde Floresta" do material anterior) não se aplicavam bem no visual mobile de impacto rápido. Alterado a base principal unicamente para **Verde Ponte (#4CAF50)** e **Laranja Ponte (#FF9800)**.
2. **Tipografia Unificada de Alta Retenção**: Exclusões do font-pairing genérico "Plus Jakarta/Inter". Integração da combinação **Montserrat (Headlines)** + **Nunito (Bodies)** que formam a espinha visual oficial do Especificação UI/UX e do Material Design do produto.
3. A direção é inteiramente focada no **aplicativo palpável** com validações OCR Edge AI e Mapbox, e não mais apenas num documento teórico de marca. As telas, estados responsivos, ícones sistêmicos estão traçados numa matriz tática e definitiva para o desenvolvedor no dia a dia.
4. Remoção e adaptação completa de falsos pressupostos operacionais ou componentes ausentes da UI do MVP final. Todas as regras desta versão acompanham obrigatoriamente as tabelas listadas na especificação de UI oficial [Conecta_Mesa_Especificacao_UI_UX.md](./Conecta_Mesa_Especificacao_UI_UX.md).