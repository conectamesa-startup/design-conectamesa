# CONECTA MESA — Documento de Especificação de Telas UI/UX

**Infraestrutura Digital de Redistribuição Alimentar**
Recife, Pernambuco — Brasil
Versão 1.0 | Abril 2026

Stack: Flutter (iOS + Android) + Supabase + Mapbox GL

⚠️ **CONFIDENCIAL — Uso Interno Exclusivo**

## Sumário
1. [DESIGN SYSTEM — PALETA PONTE & FUNDAMENTOS VISUAIS](#1-design-system--paleta-ponte--fundamentos-visuais)
2. [MAPA COMPLETO DE TELAS DO MVP](#2-mapa-completo-de-telas-do-mvp)
3. [ESPECIFICAÇÃO DETALHADA DAS TELAS](#3-especificação-detalhada-das-telas)
4. [PROMPTS PARA IA DE DESIGN — TELA A TELA](#4-prompts-para-ia-de-design--tela-a-tela)
5. [CHECKLIST DE IMPLEMENTAÇÃO](#5-checklist-de-implementação)

---

## Fluxo Oficial do Produto

## 👥 Personas

| Persona | Pode Comprar | Pode Vender | Pode Doar |
|---|---|---|---|
| **PF** (Pessoa Física) | ✅ | ✅ | ✅ |
| **PJ** (Pessoa Jurídica) | ✅ | ✅ | ✅ |
| **ONG** | ✅ | ✅ | ✅ |

---

## 📋 Cadastro

**Pessoa Física**
- Fluxo de cadastro padrão

**Pessoa Jurídica**
- Fluxo de cadastro padrão
- Campo adicional: **segmento de atuação**

**ONG**
- Mesmo fluxo do PJ
- Diferenciada por uma opção: *"Sou uma ONG"*
- Internamente cadastrada como `companyType: "ASSOCIATION"` na API do Asaas

> ⚠️ **Atenção técnica:** ONGs exigem documentação adicional no onboarding da subconta Asaas (Ata de Eleição), além dos documentos padrão (selfie + documento de identidade).

---

## 🔄 Fluxo de Compra (todas as personas)

1. Usuário navega pelo **feed** ou pelo **mapa** e encontra um anúncio
2. Seleciona o anúncio desejado, faz a **reserva** e realiza o **pagamento**
3. Após o pagamento, acessa o **chat** da plataforma para combinar a retirada com o vendedor
4. No momento da retirada, o comprador apresenta um **QR Code ou código da reserva**
5. O vendedor **escaneia o QR Code** ou **digita o código** na plataforma
6. Confirmada a retirada → o valor muda de **"pendente"** para **"disponível"** na carteira do vendedor
7. O comprador pode **avaliar** o vendedor e o alimento

---

## 💳 Fluxo de Pagamento e Liberação

O controle de liberação do saldo é feito pelo **banco de dados da Conecta Mesa**, sem uso de Escrow. O Asaas processa o pagamento e o split normalmente — quem decide quando o vendedor pode sacar é o sistema da plataforma.

```
Comprador paga
      ↓
Asaas processa o pagamento
Split automático: 60% subconta do vendedor / 40% conta-pai
Saldo do vendedor marcado como "PENDENTE" no banco de dados
      ↓
Comprador escaneia QR Code / vendedor confirma entrega na plataforma
      ↓
Sistema atualiza status para "DISPONÍVEL"
      ↓
Vendedor consegue sacar via Pix
```

**Estados da transação no banco de dados:**

| Status | Descrição |
|---|---|
| `PENDENTE` | Pagamento confirmado, aguardando confirmação da retirada |
| `DISPONIVEL` | Retirada confirmada, saldo liberado para saque |
| `CANCELADO` | Compra cancelada, estorno processado automaticamente |

---

## 🔁 Fluxo de Estorno e Cancelamento

### Cancelamento com status PENDENTE (automático)

Enquanto a retirada não foi confirmada, o cancelamento é **100% automático**. O botão *"Cancelar compra"* fica visível para o comprador enquanto o status for `PENDENTE`.

```
Comprador solicita cancelamento
        ↓
Sistema verifica: status = PENDENTE?
        ↓
        SIM → Chama POST /v3/payments/{id}/refund
              Atualiza status para CANCELADO
              Notifica comprador e vendedor via push + e-mail
        ↓
Asaas processa o estorno automaticamente
        ↓
Webhook PAYMENT_REFUNDED chega no sistema
        ↓
Comprador e vendedor notificados da conclusão
```

**O estorno volta sempre para a origem do pagamento — a plataforma não toca no dinheiro:**

| Forma de Pagamento | Para onde volta o estorno | Prazo |
|---|---|---|
| **Pix** | Conta Pix do comprador | Instantâneo |
| **Boleto** | Conta bancária informada pelo comprador | Até 10 dias úteis |
| **Cartão de crédito** | Crédito na fatura do comprador | Até 2 faturas seguintes |
| **Cartão de débito** | Conta bancária do comprador | Até 10 dias úteis |

> ⚠️ Quando o estorno acontece, o split também é desfeito automaticamente pelo Asaas — os 40% da conta-pai voltam junto. Nenhuma ação manual necessária.

### Disputa com status DISPONÍVEL (suporte interno)

Casos onde o comprador reporta problema **após** confirmar a retirada são raros mas precisam de análise humana — esse é o padrão de qualquer marketplace.

```
Comprador acessa "Reportar problema" na compra finalizada
        ↓
Sistema abre ticket interno com prazo de 48h
        ↓
Equipe Conecta Mesa analisa (chat, fotos, avaliações)
        ↓
Disputa procedente?
  SIM → Estorno via painel ou API
  NÃO → Ticket encerrado com justificativa enviada ao comprador
```

---

## 🏪 Fluxo de Venda (todas as personas)

1. Usuário solicita ativação como vendedor na plataforma
2. Passa por **verificação de identidade** (documentos + selfie)
3. Após aprovação → recebe **notificação push** no app e **e-mail**
4. Passa a ter acesso ao botão **"Anunciar"**
5. Cada venda realizada aparece na **Carteira Digital** com status **"Pendente"**
6. Após confirmação da retirada pelo comprador → status muda para **"Disponível"**

---

## 💰 Carteira Digital (todas as personas vendedoras)

- **Saldo disponível** — valor liberado após confirmação da retirada, pronto para saque
- **Saldo pendente** — vendas pagas mas ainda aguardando confirmação da retirada
- **Histórico de vendas** — com data, valor bruto, valor líquido (60%) e status
- **Sacar via Pix** — transferência para a chave Pix cadastrada pelo vendedor

> ⚠️ **Divisão de receita — comunicar claramente ao vendedor:**
> - O valor recebido é **60% do valor líquido** (após desconto das taxas do Asaas)
> - Os **40% restantes** são da Conecta Mesa
> - Exemplo: venda de R$ 100,00 via Pix → vendedor recebe R$ 60,00 (Pix não tem taxa)
> - Exemplo: venda de R$ 100,00 via boleto → Asaas desconta R$ 1,99 → vendedor recebe 60% de R$ 98,01 = **R$ 58,81**

> ⚠️ **Taxas de saque:**
> - PF e MEI: Pix sempre **gratuito**
> - PJ e ONG: **30 saques Pix gratuitos/mês**, depois R$ 2,00 por saque
> - A Conecta Mesa cobre os R$ 12,90 de criação de subconta por vendedor aprovado

---

## 🗂️ Navbars

### PF — Navbar

| Ícone | Aba | Comportamento |
|---|---|---|
| 🏠 | **Início** | Feed de anúncios de vendas e doações |
| 🗺️ | **Mapa** | Mapa com localização dos anúncios |
| ➕ | **Anunciar** | Se não verificado → redireciona para verificação de identidade. Se verificado → abre formulário de anúncio |
| 👛 | **Carteira** | Se não verificado → redireciona para verificação. Se verificado → saldo disponível, saldo pendente, histórico de vendas e opção de saque via Pix |
| 📋 | **Histórico** | Cards de compras com status: *A pagar / A retirar / Finalizado*. Se em aberto → botão de chat com o vendedor |
| 👤 | **Perfil** | Configurações gerais e logout |

---

### PJ — Navbar

| Ícone | Aba | Comportamento |
|---|---|---|
| 🏠 | **Início** | Feed de anúncios de vendas e doações |
| 🗺️ | **Mapa** | Mapa com localização dos anúncios |
| ➕ | **Anunciar** | Mesmo comportamento do PF |
| 👛 | **Carteira** | Mesmo comportamento do PF, com destaque para saldo pendente x disponível |
| 📋 | **Histórico** | Mesmo comportamento do PF |
| 🌱 | **Impacto** | Tela exclusiva PJ com métricas da cadeia de impacto (ver abaixo) |
| 👤 | **Perfil** | Configurações gerais e logout |

**Tela de Impacto (exclusiva PJ):**

```
🌍 Cadeia de Impacto Hub

Gases Evitados Totais (Brasil)
... ton

Famílias Beneficiadas
... k

Lixo Zerado
... k kgs
```

---

### ONG — Navbar

| Ícone | Aba | Comportamento |
|---|---|---|
| 🏠 | **Início** | Feed de anúncios + destaque para doações disponíveis |
| 🗺️ | **Mapa** | Mapa com localização dos anúncios |
| ➕ | **Anunciar** | Mesmo comportamento do PF, adaptado para contexto de ONG |
| 👛 | **Carteira** | Mesmo comportamento do PF, com histórico de doações recebidas |
| 📋 | **Histórico** | Cards de compras, retiradas e doações com status |
| 🌱 | **Impacto** | Mesma tela de impacto do PJ, com foco em doações e famílias atendidas |
| 👤 | **Perfil** | Configurações gerais e logout |

---

## 1. DESIGN SYSTEM — PALETA PONTE & FUNDAMENTOS VISUAIS
Todos os elementos visuais do Conecta Mesa seguem a Paleta Ponte, implementada via ThemeData e ColorScheme do Flutter Material 3. Este capítulo é a referência obrigatória para qualquer implementação de tela.

### 1.1 Paleta de Cores
- **#4CAF50 Verde Ponte (Primary)** — Doações, ONGs, CTAs primários, ícones de sucesso, fundos de cards B2G
- **#FF9800 Laranja Ponte (Secondary)** — Vendas, urgência, badges de oferta, empresas verificadas, preços
- **#FFFFFF Background Principal** — Scaffold background — fundo branco de todas as telas
- **#F5F5F5 Surface / Cards** — Fundo de cards, inputs, seções secundárias
- **#333333 Foreground** — Texto principal — bodyLarge, títulos de cards
- **#737373 Muted** — Texto secundário — bodySmall, labels, metadados
- **#E8F5E9 Verde Claro** — Fundo de badges ONG Verificada, estados de sucesso
- **#FFF3E0 Laranja Claro** — Fundo de badges Empresa Verificada, alertas leves
- **#C62828 Erro / Alerta Crítico** — Mensagens de erro, bloqueio de validade vencida, estados de falha
- **#1565C0 Azul Info** — Links, informações secundárias, ícones de navegação ativos

### 1.2 Tipografia
| Família | Peso | Tamanho Flutter | Uso |
|---------|------|-----------------|-----|
| Montserrat | 800 (ExtraBold) | 24sp | Títulos de tela (AppBar title, hero headings) |
| Montserrat | 700 (Bold) | 20sp | Subtítulos, nomes de produtos em cards |
| Montserrat | 600 (SemiBold) | 16sp | Labels de botões, chips de filtro |
| Montserrat | 500 (Medium) | 14sp | Cabeçalhos de seção dentro de telas |
| Nunito | 700 (Bold) | 16sp | Corpo enfatizado, valores de KPI no Dashboard |
| Nunito | 400 (Regular) | 14sp | Corpo de texto, descrições, mensagens de chat |
| Nunito | 400 (Regular) | 12sp | Metadados, timestamps, distância em cards |

### 1.3 Componentes Globais
| Componente | Especificação Flutter | Uso |
|------------|-----------------------|-----|
| Bottom Navigation Bar | Material 3 NavigationBar — 4 a 5 abas — fundo #FFFFFF. Dinâmico por role: **PF:** Início, Mapa, Anunciar, Chat, Perfil | **Empresa (PJ):** Lotes, Anunciar, Impacto, Conta | **ONG (PJ):** Feed ONG, Mapa, Chat, Perfil |
| Botão Primário (CTA) | ElevatedButton — fundo Verde Ponte #4CAF50 — texto branco Montserrat 600 16sp — BorderRadius 12px — altura 52dp | Ações primárias em todas as telas |
| Botão Secundário | OutlinedButton — borda Verde Ponte — texto Verde Ponte — mesmo border-radius | Ações secundárias, cancelar |
| Botão de Urgência | ElevatedButton — fundo Laranja Ponte #FF9800 — texto branco | Reservar, pagar, publicar urgente |
| Card de Produto | Card Material 3 — elevation 2 — BorderRadius 16px — fundo #FFFFFF — sombra sutil | Feed, lista de anúncios |
| Input / TextField | OutlinedInputBorder — BorderRadius 12px — borda #E0E0E0 — foco Verde Ponte — label flutuante Nunito 14sp | Todos os formulários |
| Chip de Filtro | FilterChip — pill shape BorderRadius 9999 — selecionado: Verde Ponte fundo + texto branco — não selecionado: fundo #F5F5F5 + texto #737373 | Feed, filtros de categoria |
| Badge VerifiedBadge | Container pill — Empresa: fundo #FFF3E0 + ícone Laranja — ONG: fundo #E8F5E9 + ícone Verde — Parceiro Ponte: gradiente | Cards e perfis de parceiros |
| Snackbar / Toast | SnackBar Material 3 — sucesso: Verde Ponte — erro: #C62828 — duração 3s | Feedback de ações |
| Bottom Sheet | DraggableScrollableSheet — BorderRadius 20px topo — handle cinza 32x4dp | Detalhes de anúncio, confirmações |
| Loading State | CircularProgressIndicator — cor Verde Ponte — centralizado na área de conteúdo | Carregamentos de dados |
| Empty State | Ilustração vetorial + texto Nunito 16sp + CTA opcional — centralizado | Feed vazio, histórico vazio |

### 1.4 Espaçamento e Grid
| Token | Valor | Uso |
|-------|-------|-----|
| padding_screen | 16dp horizontal | Margem lateral padrão de todas as telas |
| padding_card | 16dp interno | Padding interno de todos os cards |
| gap_small | 8dp | Espaço entre elementos irmãos pequenos |
| gap_medium | 16dp | Espaço entre seções e grupos de elementos |
| gap_large | 24dp | Espaço entre seções maiores, antes de CTAs |
| border_radius_card | 16dp | Cards, modals, bottom sheets |
| border_radius_button | 12dp | Botões padrão |
| border_radius_input | 12dp | TextFields e inputs |
| border_radius_chip | 9999dp (pill) | Chips, badges, tags |
| tap_target_min | 48dp | Altura mínima de qualquer elemento tocável (Material a11y) |
| appbar_height | 56dp | AppBar padrão Flutter Material 3 |
| bottom_nav_height | 80dp | NavigationBar com safe area incluída |

---

## 2. MAPA COMPLETO DE TELAS DO MVP
O MVP do Conecta Mesa é composto por 25 telas distribuídas em 7 módulos funcionais. A tabela abaixo serve como índice de navegação do documento.

| Nº | Nome da Tela | Módulo | Usuário(s) |
|----|--------------|--------|------------|
| 01 | Splash Screen / Onboarding | Autenticação | Todos |
| 02 | Escolha de Perfil (PF vs PJ) | Autenticação | Todos |
| 03 | Cadastro Pessoa Física (PF) | Autenticação | PF Doador / B2C |
| 04 | Cadastro Pessoa Jurídica (PJ) | Autenticação | B2B / ONG |
| 05 | Login | Autenticação | Todos |
| 06 | Recuperação de Senha | Autenticação | Todos |
| 07 | Feed de Anúncios (Lista) | Marketplace | B2C / ONG |
| 08 | Mapa Interativo (Mapbox) | Marketplace | B2C / ONG |
| 09 | Detalhe do Anúncio | Marketplace | B2C / ONG |
| 10 | Publicar Anúncio (Passo 1 — Foto + OCR) | Marketplace | B2B / PF Doador |
| 11 | Publicar Anúncio (Passo 2 — Dados do Produto) | Marketplace | B2B / PF Doador |
| 12 | Publicar Anúncio (Passo 3 — Revisão e Publicação) | Marketplace | B2B / PF Doador |
| 13 | Checkout — Seleção de Pagamento | Pagamento | B2C |
| 14 | Pagamento PIX (QR Code) | Pagamento | B2C |
| 15 | Pagamento Cartão (3-DS 2.0) | Pagamento | B2C |
| 16 | Confirmação de Pagamento | Pagamento | B2C / B2B |
| 17 | QR Code de Entrega (Consumidor) | Pagamento | B2C |
| 18 | Scanner QR Code (Lojista) | Pagamento | B2B |
| 19 | Chat Assíncrono | Comunicação | Todos |
| 20 | Dashboard de Impacto | Impacto | Todos |
| 21 | Perfil do Usuário | Conta | Todos |
| 22 | Histórico de Transações | Conta | Todos |
| 23 | Carteira Digital | Conta | Vendedores (PF/PJ/ONG) |
| 24 | Solicitação de Verificação Institucional | Selos | B2B / ONG |
| 25 | Notificações Push (Central) | Comunicação | Todos |

---

## 3. ESPECIFICAÇÃO DETALHADA DAS TELAS

### TELA 01: Splash Screen / Onboarding
**Usuário:** Todos os usuários — primeiro acesso
**🎯 Objetivo**
Apresentar a identidade visual do Conecta Mesa, carregar sessão existente (auto-login se token JWT válido) e introduzir a proposta de valor em 3 slides para novos usuários.

**🧱 Estrutura da Tela**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| Splash (1.5s) | Logo centralizado + tagline | Fundo Verde Ponte #4CAF50 — Logo "CONECTA MESA" Montserrat 800 32sp branco — tagline "Redistribuição Alimentar" Nunito 400 14sp branco 70% opacidade — ícone de garfo+seta estilizado centralizado |
| Slide 1 — Problema | Ilustração + headline + subtexto | Fundo #FFFFFF — Ilustração SVG flat de alimentos (tomate, pão, cenoura) sendo redistribuídos — Headline Montserrat 700 22sp: "Comida boa não pode virar lixo" — Subtexto Nunito 400 14sp #737373 — paginador (3 dots) Laranja Ponte |
| Slide 2 — Solução | Ícone + headline + subtexto | Ícone de mapa com pin verde — Headline: "Encontre alimentos de qualidade perto de você com até 50% off" — Mesma tipografia |
| Slide 3 — Impacto | Ícone + headline + subtexto | Ícone CO₂ + folha — Headline: "Cada compra salva comida e o planeta" — Subtexto com coeficiente FAO visual |
| CTA Final | Dois botões empilhados | Botão Primário Verde: "Criar conta" — Botão Secundário Outline Verde: "Já tenho conta" — espaçamento 12dp entre botões — padding 32dp lateral |
| Paginador | Dots de progresso | 3 dots — ativo: Laranja Ponte 8dp — inativo: #E0E0E0 6dp — animação suave de transição |

**🎨 Elementos Visuais Detalhados**
| Elemento | Cor / Estilo | Notas Flutter |
|----------|--------------|---------------|
| Fundo Splash | #4CAF50 (Verde Ponte) | Container fullscreen, sem AppBar |
| Logo texto | Branco #FFFFFF Montserrat 800 | Centralizado vertical e horizontal |
| Slides onboarding | #FFFFFF com PageView | PageView.builder com 3 pages, swipe horizontal |
| Ilustrações | SVG flat estilo Material You | Assets locais — sem dependência de rede |
| CTA "Criar conta" | Verde Ponte + texto branco | Width: double.infinity, height: 52dp |
| CTA "Já tenho conta" | Outline Verde Ponte | Width: double.infinity, height: 52dp |

**⚙️ Comportamentos e Estados**
- Auto-login: se token JWT válido no Supabase Auth → navega direto para Feed (T07). Se expirado → navega para Login (T05). Primeiro acesso → exibe onboarding 3 slides.
- Loading state: durante verificação de sessão, exibe apenas splash com CircularProgressIndicator Verde Ponte no centro inferior.
- Swipe nos slides: PageView com PhysicsScroll. Botão "Pular" no topo direito (Nunito 400 14sp Laranja Ponte) disponível nos slides 1 e 2.
- Skip → navega direto para tela de Escolha de Perfil (T02).

### TELA 02: Escolha de Perfil (PF vs PJ)
**Usuário:** Todos — novo cadastro
**🎯 Objetivo**
Direcionar o novo usuário ao formulário correto de cadastro (Pessoa Física ou Pessoa Jurídica), com explicação clara das diferenças e benefícios de cada perfil.

**🧱 Estrutura da Tela**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| AppBar | Título + botão voltar | AppBar fundo #FFFFFF — título "Criar conta" Montserrat 600 18sp #333333 — ícone voltar Leading #333333 |
| Header da tela | Headline + subtexto | Padding top 32dp — Headline Montserrat 700 24sp: "Como você vai usar o Conecta Mesa?" — Subtexto Nunito 400 14sp #737373 |
| Card PF | Ícone + título + descrição + bullets | Card BorderRadius 16dp — borda 2dp — ícone 👤 48dp centralizado — título Montserrat 600 18sp — bullets 3 itens Nunito 14sp — altura mínima 180dp |
| Card PJ | Ícone + título + descrição + bullets | Mesmo estilo do Card PF — ícone 🏪 para empresa ou 🤝 para ONG — cor de seleção diferente |
| Seletor de subcategoria (PJ) | Row de dois chips | Aparece ao selecionar PJ — Chips "Empresa / Comércio" e "ONG / Cozinha Solidária" — pill shape — selecionado: Laranja Ponte (empresa) ou Verde Ponte (ONG) |
| CTA | Botão primário | "Continuar" — Verde Ponte — desabilitado (opacity 0.4) até seleção |

**🎨 Estados dos Cards de Seleção**
| Estado | Card PF | Card PJ Empresa | Card PJ ONG |
|--------|---------|-----------------|-------------|
| Não selecionado | Borda #E0E0E0 — fundo #FFFFFF | Borda #E0E0E0 — fundo #FFFFFF | Borda #E0E0E0 — fundo #FFFFFF |
| Selecionado | Borda 2dp Verde Ponte #4CAF50 — fundo #E8F5E9 — ícone check Verde | Borda 2dp Laranja Ponte #FF9800 — fundo #FFF3E0 | Borda 2dp Verde Ponte — fundo #E8F5E9 |
| Tap feedback | InkWell ripple Verde Ponte suave | Ripple Laranja suave | Ripple Verde suave |

**⚙️ Comportamentos**
- Seleção exclusiva: apenas um card ativo por vez. Ao selecionar PJ, dropdown de subcategoria aparece com AnimatedContainer (300ms). CTA desabilitado até seleção completa.
- Navegação: PF → T03 | PJ Empresa → T04 com tipo=empresa | PJ ONG → T04 com tipo=ong.

### TELA 03: Cadastro Pessoa Física (PF)
**Usuário:** PF Doador / Consumidor B2C
**🎯 Objetivo**
Coletar dados mínimos obrigatórios para criação de conta PF: nome, CPF, telefone, e-mail e senha, com validação em tempo real e aceite de termos.

**🧱 Estrutura e Campos**
| Campo | Tipo / Validação | Especificação Visual |
|-------|------------------|----------------------|
| Nome completo | TextFormField — obrigatório — mínimo 3 chars | Label: "Nome completo" — ícone person_outline Muted — teclado: textCapWords |
| CPF | TextFormField — máscara 000.000.000-00 — validação algoritmo | Label: "CPF" — ícone badge_outlined — teclado: number — helper: "Somente números" |
| Telefone | TextFormField — máscara (00) 00000-0000 | Label: "Telefone" — ícone phone_outlined — teclado: phone |
| E-mail | TextFormField — validação regex RFC 5322 | Label: "E-mail" — ícone email_outlined — teclado: emailAddress |
| Senha | TextFormField — mínimo 8 chars — toggle visibilidade | Label: "Senha" — ícone lock_outlined — sufixo: ícone olho toggle |
| Confirmar senha | TextFormField — igualdade com campo senha | Label: "Confirmar senha" — validação: "Senhas não coincidem" |
| Aceite de termos | Checkbox + texto com link | CheckBox Verde Ponte — texto Nunito 12sp: "Li e aceito os Termos de Uso e Política de Privacidade" — link sublinhado Verde Ponte |
| Botão CTA | ElevatedButton — submissão | "Criar minha conta" — Verde Ponte — width: double.infinity — desabilitado se form inválido |

**⚙️ Comportamentos de Validação**
| Campo | Erro | Exibição |
|-------|------|----------|
| CPF | CPF inválido (dígito verificador) | Texto vermelho #C62828 abaixo do campo: "CPF inválido. Verifique os números." |
| E-mail | Formato inválido | "E-mail inválido. Exemplo: nome@email.com" |
| Senha | Menos de 8 caracteres | "A senha precisa ter pelo menos 8 caracteres." |
| E-mail duplicado | Supabase retorna erro 400 | Snackbar vermelho: "Este e-mail já está cadastrado. Faça login." |
| Campos vazios | Submit sem preencher | Outline vermelho em cada campo obrigatório vazio + texto erro |

**🔁 Estados**
Inicial: todos os campos vazios, CTA desabilitado (opacity 0.4). Loading: CTA substituído por CircularProgressIndicator Verde Ponte. Erro: campos marcados em vermelho. Sucesso: navega para T05 (Login) com Snackbar verde: "Conta criada! Confirme seu e-mail."

### TELA 04: Cadastro Pessoa Jurídica (PJ)
**Usuário:** Comerciante B2B / ONG B2G
**🎯 Objetivo**
Coletar dados de pessoa jurídica: razão social, CNPJ, segmento, responsável, e-mail e senha. Layout adapta-se ao tipo selecionado (Empresa vs ONG) com campos específicos.

**🧱 Campos Específicos PJ**
| Campo | Tipo / Validação | Visível para |
|-------|------------------|--------------|
| Razão Social | TextFormField — obrigatório | Empresa + ONG |
| CNPJ | TextFormField — máscara 00.000.000/0000-00 — validação algoritmo + Brasil API async | Empresa + ONG |
| Segmento | DropdownButtonFormField | Empresa: opções "Padaria", "Hortifruti", "Supermercado", "CEASA-PE", "Outro" — ONG: "Cozinha Solidária", "Banco de Alimentos", "Outro" |
| Nome do responsável | TextFormField | Empresa + ONG |
| Telefone comercial | TextFormField — máscara | Empresa + ONG |
| E-mail comercial | TextFormField — validação | Empresa + ONG |
| Senha | TextFormField — toggle | Empresa + ONG |
| Confirmar senha | TextFormField | Empresa + ONG |
| Aceite de termos | Checkbox + link | Empresa + ONG |

**🎨 Diferenciação Visual por Tipo**
- Empresa: AppBar com chip "Empresa" Laranja Ponte — badge laranja no topo do form — campo Segmento com ícones de cada tipo.
- ONG: AppBar com chip "ONG" Verde Ponte — badge verde — mensagem informativa: "ONGs verificadas recebem doações sem custo e com prioridade."
- Validação CNPJ assíncrona: ao sair do campo (onEditingComplete), chama Brasil API — loader inline (16dp) aparece no sufixo do campo durante a consulta. Resultado: ícone check verde (CNPJ ativo) ou ícone X vermelho (inativo/inválido).

### TELA 05: Login
**Usuário:** Todos os usuários
**🎯 Objetivo**
Autenticar usuário cadastrado via e-mail e senha usando Supabase Auth. Tela minimalista, sem fricção, com acesso rápido a recuperação de senha.

**🧱 Estrutura**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| Header visual | Logo + tagline | Logo "CONECTA MESA" Montserrat 800 28sp Verde Ponte — tagline Nunito 14sp Muted — padding top: 48dp |
| Formulário | E-mail + Senha + Esqueceu senha | Gap 16dp entre campos — link "Esqueci minha senha" Nunito 14sp Laranja Ponte à direita abaixo do campo senha |
| CTA principal | Botão Entrar | "Entrar" Verde Ponte — width: double.infinity — 52dp altura |
| Rodapé | Link para cadastro | Texto Nunito 14sp: "Não tem conta?" + link "Criar conta" Verde Ponte sublinhado — centralizado |
| Segurança visual | Texto informativo | Ícone lock_outline 12dp + texto Nunito 12sp Muted: "Seus dados são protegidos com criptografia" — bottom |

**⚙️ Comportamentos**
- Erro de credenciais: Snackbar vermelho: "E-mail ou senha incorretos." Campos não marcados individualmente (segurança — não revelar qual está errado).
- Loading: botão "Entrar" com CircularProgressIndicator branco 20dp — texto desaparece. Todos os campos desabilitados durante loading.
- Sucesso: navega para T07 (Feed) com substituição de rota (não empilha). Token JWT salvo em Supabase Auth local storage.

### TELA 06: Recuperação de Senha
**Usuário:** Todos os usuários
**🎯 Objetivo**
Permitir que o usuário solicite link de redefinição de senha via e-mail. Fluxo em dois estados: entrada do e-mail e confirmação de envio.

**🧱 Estrutura — 2 Estados**
| Estado | Conteúdo | Especificação |
|--------|----------|---------------|
| Estado 1 — Input | Campo e-mail + botão enviar | Ícone envelope 64dp Verde Ponte centralizado — título "Esqueceu a senha?" Montserrat 700 22sp — subtexto Nunito 14sp — campo e-mail — botão "Enviar link" Verde Ponte |
| Estado 2 — Confirmação | Feedback visual + instrução | Ícone check_circle 64dp Verde Ponte — título "Link enviado!" — subtexto "Verifique sua caixa de entrada. O link expira em 24h." — link "Reenviar e-mail" Laranja Ponte (habilitado após 60s) — botão "Voltar ao login" |

**⚙️ Comportamentos**
- Se e-mail não cadastrado: Snackbar discreto (não revela se e-mail existe — segurança): "Se este e-mail estiver cadastrado, você receberá o link." Mesmo feedback para e-mails válidos e inválidos.
- Timer de reenvio: countdown visual 60s no botão "Reenviar" — texto "Reenviar em 45s" — desabilitado até zerar.

### TELA 07: Feed de Anúncios (Lista)
**Usuário:** Consumidor B2C / ONG B2G
**🎯 Objetivo**
Tela principal de descoberta de produtos. Exibe anúncios ordenados por proximidade GPS com busca textual e filtros por categoria e tipo (venda/doação). É a home do app para consumidores e ONGs.

**🧱 Estrutura Completa**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| AppBar | Logo + localização + ícone mapa | AppBar fundo #FFFFFF elevation 0 — left: logo pequeno "CM" Verde Ponte — center: chip localização " 📍 Boa Viagem, Recife" Nunito 12sp — right: ícone map_outlined que navega para T08 |
| SearchBar | Campo de busca | Container fundo #F5F5F5 BorderRadius 12dp — ícone search Muted — placeholder "Buscar alimentos..." Nunito 14sp Muted — altura 44dp — padding horizontal 16dp |
| Filtros — Row 1 | Tipo: Todos / Venda / Doação | FilterChip pill — "Todos" (default, selecionado Verde), " 🛒 Venda" (Laranja quando selecionado), " 🤝 Doação" (Verde quando selecionado) — scroll horizontal |
| Filtros — Row 2 | Categorias | FilterChips: " 🍞 Padaria", " 🥦 Hortifruti", " 🛒 Mercado", " 🌽 CEASA-PE", " 🍽 Outros" — scroll horizontal — selecionado: Verde Ponte fundo + texto branco |
| Contador de resultados | Texto dinâmico | Nunito 12sp Muted: "23 anúncios perto de você" — atualiza com filtros |
| Lista de cards | ListView.builder | gap 12dp entre cards — padding horizontal 16dp |
| Card de Produto | Foto + dados + CTA | Ver especificação abaixo |
| Empty state | Ilustração + texto + CTA | Visível quando nenhum anúncio no raio — ícone location_off 64dp Muted — texto "Nenhum anúncio perto de você agora" — botão "Ampliar busca" Outline Verde |
| Bottom Navigation Bar | Navegação global | Início (ativo, Verde Ponte), Impacto, Anunciar, Conta |

**🃏 Especificação do Card de Produto**
| Elemento | Especificação | Notas |
|----------|---------------|-------|
| Container | Card BorderRadius 16dp — elevation 2 — fundo #FFFFFF — largura: screen_width - 32dp | Material InkWell ripple Verde ao toque |
| Foto do produto | CachedNetworkImage — aspect ratio 16:9 — BorderRadius top 16dp — placeholder shimmer #F5F5F5 | Fallback: ícone local_dining 48dp Muted centralizado em fundo #F5F5F5 |
| Badge de tipo | Posição: top-right sobre a foto | Venda: "% OFF" Laranja Ponte fundo Laranja pill — Doação: "GRATUITO" Verde Ponte fundo Verde pill — Montserrat 700 11sp branco — padding 4x8dp |
| Badge urgência | Posição: top-left sobre a foto | Se menos de 4h para expirar: " ⏰ Urgente" fundo vermelho pill — Nunito 700 10sp branco |
| Badge verificação | VerifiedBadge widget | Abaixo da foto, ao lado do nome — Empresa: laranja — ONG: verde — pill 20dp altura |
| Nome do produto | Montserrat 600 16sp #333333 | MaxLines 1 — overflow ellipsis |
| Nome do estabelecimento | Nunito 400 12sp Muted | MaxLines 1 |
| Preço / "Gratuito" | Montserrat 700 18sp Laranja (venda) ou Verde (doação) | Linha com preço original riscado (TextDecoration.lineThrough Muted 14sp) ao lado |
| Distância | Row: ícone location_on 12dp Muted + texto Nunito 12sp Muted | "a 1,2 km" |
| Tempo restante | Row: ícone schedule 12dp + texto Nunito 12sp | Verde se >4h — Laranja se 2-4h — Vermelho se <2h: "Expira em 1h 30min" |
| Peso / Quantidade | Nunito 12sp Muted | "2,5 kg disponíveis" |

**⚙️ Comportamentos**
- Carregamento inicial: 6 cards shimmer (skeleton) enquanto dados chegam do Supabase. Supabase Realtime: status "Esgotado" aparece em overlay sobre card ao ser reservado por outro usuário — card some da lista em 2s com animação fade.
- Pull to refresh: RefreshIndicator Verde Ponte para recarregar feed. Infinite scroll: carrega mais 10 anúncios ao chegar nos últimos 3 itens (paginação).
- Filtros combinados: atualização imediata sem loading — debounce 300ms na busca textual. Estado dos filtros persiste na sessão (Provider Riverpod).

### TELA 08: Mapa Interativo (Mapbox GL)
**Usuário:** Consumidor B2C / ONG B2G
**🎯 Objetivo**
Visualização geográfica dos anúncios disponíveis com pins dinâmicos atualizados em tempo real via Supabase Realtime. ONGs visualizam heatmap de hotspots de doações. Alternativa visual ao feed em lista.

**🧱 Estrutura**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| MapWidget fullscreen | Mapbox GL Flutter — estilo Streets Light mapbox_maps_flutter | Ocupa 100% da tela — fundo claro Mapbox padrão |
| Overlay AppBar | Busca + botão voltar flutuando sobre o mapa | Container semi-transparente (branco 90%) BorderRadius 12dp — shadow elevation 4 — topo: 16dp below status bar — padding horizontal 16dp |
| Pins de anúncios | PointAnnotation customizado | Pins por tipo: Venda=Laranja Ponte, Doação=Verde Ponte — ícone local_dining 20dp — sombra preta 30% — cluster acima de 3 pins sobrepostos: contador circular |
| Heatmap de doações (ONG) | Mapbox GL Heatmap Layer | Visível apenas para perfil ONG — gradiente azul→verde→amarelo→vermelho por densidade — toggle no topo: " 🔥 Hotspots de Doação" |
| Bottom Sheet de anúncio | DraggableScrollableSheet ao tap no pin | Aparece ao tocar pin — BorderRadius 20dp topo — handle 32x4dp cinza — mostra foto + nome + preço + distância + botão "Ver detalhes" |
| FAB lista/mapa toggle | FloatingActionButton | Posição: bottom-right acima do bottom nav — ícone list_alt — fundo Verde Ponte — tap alterna para T07 |
| Monitor de uso Mapbox | Indicador discreto interno | Badge no canto superior direito (visível apenas Admin): "X% do limite mensal" — invisível para usuários finais |
| Fallback | Banner informativo | Se limite 50k atingido: banner laranja no topo "Mapa temporariamente indisponível" + feed lista exibido automaticamente |

**⚙️ Comportamentos de Mapa**
- Supabase Realtime: novo anúncio → pin aparece com animação de scale (0.0 → 1.0 em 300ms). Anúncio reservado → pin some com animação scale-out.
- Tap no pin: Bottom Sheet sobe com animação spring (300ms). Swipe down fecha o sheet.
- Clustering: ao zoom < 12, pins próximos se agrupam em círculo numerado (Verde Ponte fundo, branco texto). Tap no cluster dá zoom in automático.
- Centralizar no usuário: FAB secundário (location_on, fundo branco borda Verde) centraliza câmera na posição GPS atual.

### TELA 09: Detalhe do Anúncio
**Usuário:** Consumidor B2C / ONG B2G
**🎯 Objetivo**
Exibir ficha técnica completa do produto: foto, macronutrientes, alérgenos, data de validade, localização precisa e CTA de reserva/checkout. É a tela de decisão de compra/reserva.

**🧱 Estrutura Detalhada**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| Foto hero | Imagem em tela cheia (top) | Aspect ratio 3:2 — BorderRadius 0 (edge-to-edge) — gradient overlay bottom para texto — back button flutuante (branco, fundo preto 40%, BorderRadius circular) |
| Badges sobre foto | Tipo + desconto + urgência | Mesmos badges do card (T07) — posicionados sobre a imagem |
| Header da ficha | Nome + estabelecimento + verificação | Padding 16dp — Nome Montserrat 700 22sp — estabelecimento Nunito 14sp Muted + VerifiedBadge — gap 8dp |
| Preço e desconto | Preço atual + original + % desconto | Preço: Montserrat 800 28sp Laranja Ponte — Original riscado: Montserrat 400 16sp Muted — Chip "50% OFF" Laranja sólido pill |
| Info rápida (chips row) | Distância + peso + tempo | Row de 3 chips informativos fundo #F5F5F5 — " 📍 1,2 km" — " ⚖ 2,5 kg" — " ⏰ 3h restantes" — Nunito 12sp |
| Seção: Descrição | Texto descritivo | Label Montserrat 600 14sp Muted — texto Nunito 14sp #333333 — collapsible se >3 linhas com "Ver mais" Verde Ponte |
| Seção: Ficha Nutricional | Tabela de macros + alérgenos | Card fundo #F5F5F5 BorderRadius 12dp — grid 2x2: Proteínas, Carboidratos, Gorduras, Calorias — cada célula: valor Montserrat 700 16sp + unidade Nunito 12sp Muted — abaixo: " ⚠ Contém:" + chips de alérgenos (vermelho claro) |
| Seção: Validade | Data de validade + validação IA | Row: ícone verified_outlined Verde + texto "Validade: DD/MM/AAAA" Nunito 14sp + chip "Verificado por IA" Verde Claro pequeno |
| Seção: Localização | Mini mapa estático + endereço | Container 120dp altura — Mapbox static image — BorderRadius 12dp — endereço abaixo Nunito 14sp — link "Ver no mapa" Verde Ponte |
| Seção: Doador | Perfil do estabelecimento | Row: avatar circular 40dp + nome + VerifiedBadge — botão " 💬 Conversar" Outline Verde Ponte para T19 |
| CTA Sticky | Botão de ação fixo no rodapé | Container fundo branco com borda topo #E0E0E0 — padding 16dp — botão "Reservar" ou "Solicitar gratuitamente" (ONG) — Verde Ponte (doação) ou Laranja Ponte (venda) — width double.infinity — 52dp |

**🔁 Estados do CTA**
"Reservar agora" (Laranja Ponte) — produto disponível para venda. "Solicitar gratuitamente" (Verde Ponte) — produto em doação. "Produto esgotado" (cinza desabilitado) — já reservado via Realtime. "Produto convertido para doação" — badge especial se conversão temporal ocorreu durante visualização.

### TELA 10: Publicar Anúncio — Passo 1: Foto + OCR
**Usuário:** Comerciante B2B / PF Doador
**🎯 Objetivo**
Capturar foto do produto via câmera nativa e validar automaticamente a data de validade via OCR on-device (Google ML Kit). Bloquear publicação de produto vencido na origem.

**🧱 Estrutura**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| AppBar | Passo 1 de 3 + progresso | Título "Publicar anúncio" — subtítulo "Passo 1 de 3" — LinearProgressIndicator Verde Ponte 33% |
| Área de foto | Placeholder ou imagem capturada | Container 280dp altura — BorderRadius 16dp — fundo #F5F5F5 — dashed border 2dp #E0E0E0 — ícone add_a_photo 48dp Verde Ponte centralizado + texto "Tirar foto do produto" |
| Botões de ação | Câmera + galeria | Row de 2 botões lado a lado — " 📷 Câmera" (Verde Ponte sólido) + " 🖼 Galeria" (Outline Verde) — height 48dp cada |
| OCR automático | Ativado após captura da foto | Banner animado " 🔍 Lendo data de validade..." com shimmer linear — aparece 1s após captura |
| Resultado OCR — Sucesso | Data encontrada e válida | Card verde: ícone check_circle Verde + "Data de validade: DD/MM/AAAA — Produto válido!" — fundo #E8F5E9 BorderRadius 12dp |
| Resultado OCR — Falha | Produto vencido | Card vermelho: ícone cancel Vermelho + "Produto vencido em DD/MM/AAAA — Publicação bloqueada." — fundo #FFEBEE — sem CTA de continuar |
| Resultado OCR — Não encontrada | Data não legível | Card laranja: ícone warning Laranja + "Não foi possível ler a data. Insira manualmente." — aparece campo de data manual DatePicker |
| Campo data manual | DatePicker nativo Flutter | Visível apenas se OCR não encontrar data — label "Data de validade" — abre date picker Material |
| CTA continuar | Botão passo 2 | "Continuar" Verde Ponte — desabilitado se produto vencido ou sem foto |

**⚙️ Fluxo OCR Detalhado**
1. image_picker abre câmera nativa.
2. Usuário captura foto.
3. google_mlkit_text_recognition processa on-device (Edge AI) — sem upload ao servidor.
4. Regex extrai padrões de data (DD/MM/AAAA, MM/AAAA, AAAA-MM-DD).
5. Compara com DateTime.now().
6. Exibe resultado em <2s.

### TELA 11: Publicar Anúncio — Passo 2: Dados do Produto
**Usuário:** Comerciante B2B / PF Doador
**🎯 Objetivo**
Formulário de detalhamento do produto: nome, descrição, macronutrientes, alérgenos, quantidade, preço (ou doação) e prazo de retirada.

**🧱 Campos do Formulário**
| Campo | Tipo | Especificação |
|-------|------|---------------|
| Nome do produto | TextField — obrigatório | Placeholder: "Ex: Pão francês, Caju, Iogurte..." — Montserrat campo |
| Descrição | TextField multiline — 3 linhas | Placeholder: "Descreva o produto, estado de conservação..." — Nunito campo |
| Categoria | DropdownButtonFormField | " 🍞 Padaria", " 🥦 Hortifruti", " 🛒 Mercado", " 🌽 CEASA-PE", " 🍽 Outros" |
| Quantidade (kg) | TextField numérico | Sufixo "kg" — teclado decimal — placeholder "0,0" |
| Tipo de anúncio | Toggle switch animado | Row: " 🛒 Venda" toggle " 🤝 Doação" — toggle Verde/Laranja — se Doação: oculta campo preço |
| Preço (R$) | TextField numérico — condicional | Visível apenas se Venda — prefixo "R$" — teclado decimal — helper "Sugerido: 50% off do preço original" |
| Macronutrientes (grid) | 4 TextFields pequenos | Grid 2x2: "Proteínas (g)", "Carboidratos (g)", "Gorduras (g)", "Calorias (kcal)" — todos opcionais — size reduzido |
| Alérgenos | Multi-select chips | Chips selecionáveis: "Glúten", "Lactose", "Ovos", "Nozes", "Amendoim", "Soja", "Frutos do mar", "Nenhum" — selecionado: vermelho claro |
| Prazo de retirada | DateTimePicker | Label "Retirar até:" — bottom sheet com seletor de data e hora — helper "Produto será convertido para doação 4h antes deste prazo" |

AppBar: título "Publicar anúncio" — progresso 66% Verde Ponte. Thumb da foto do passo 1 no topo como referência visual (32x32dp BorderRadius 8dp). CTA: "Continuar" Verde Ponte. Validação em tempo real nos campos obrigatórios.

### TELA 12: Publicar Anúncio — Passo 3: Revisão e Publicação
**Usuário:** Comerciante B2B / PF Doador
**🎯 Objetivo**
Exibir preview do anúncio exatamente como aparecerá no feed antes da publicação final. GPS capturado automaticamente. Confirmação de publicação com feedback de sucesso.

**🧱 Estrutura**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| AppBar | Passo 3 + progresso completo | LinearProgressIndicator 100% — cor Verde Ponte |
| Preview do card | Card exatamente igual ao T07 | Label "Prévia do seu anúncio" Montserrat 600 14sp Muted acima — card idêntico ao feed (não interativo) — sombra elevation 4 |
| Info de GPS | Localização capturada | Row: ícone location_on Verde + "Localização capturada automaticamente" Nunito 14sp Verde — endereço abreviado Nunito 12sp Muted |
| Aviso de conversão | Regra de negócio | Card azul info: " ℹ️ Se não vendido em [prazo - 4h], este produto será automaticamente doado para ONGs parceiras." Nunito 12sp |
| Botão "Publicar agora" | CTA final | Verde Ponte — height 56dp — ícone rocket_launch à esquerda — Montserrat 600 16sp |
| Link "Editar" | Ação secundária | Texto " ✏ Editar informações" Nunito 14sp Verde Ponte centralizado abaixo do botão |

**⚙️ Comportamentos Pós-Publicação**
- Loading: botão substituído por "Publicando... ⬆" com indicator. Supabase Storage: upload da foto para bucket com CDN. Supabase DB: inserção na tabela listings. Supabase Realtime: anúncio aparece instantaneamente no feed de todos os usuários.
- Sucesso: Bottom sheet celebratório — ícone check_circle 64dp Verde — "Anúncio publicado!" Montserrat 700 — "Seu produto já está visível para compradores próximos!" — botão "Ver meu anúncio" e "Publicar outro".

### TELA 13: Checkout — Seleção de Pagamento
**Usuário:** Consumidor B2C
**🎯 Objetivo**
Apresentar resumo do pedido e permitir seleção do método de pagamento (PIX ou Cartão de Crédito) antes do processamento. Iniciar reserva no Supabase.

**🧱 Estrutura**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| AppBar | Título + back button | Título "Confirmar pedido" — back button descarta reserva com dialog de confirmação |
| Resumo do pedido | Card com produto selecionado | Card fundo #F5F5F5 — foto thumb 60dp — nome Montserrat 600 — quantidade — preço Laranja — distância — nome do estabelecimento |
| Aviso de reserva | Timer regressivo | Banner Laranja Claro: " ⏰ Reservado por 15:00 minutos — Após esse tempo, o produto volta ao feed." — countdown regressivo Montserrat 700 Laranja |
| Seleção de pagamento | Radio tiles | Título "Forma de pagamento" Montserrat 600 16sp — 2 RadioListTile: PIX (ícone Pix brand + "Aprovação imediata") e Cartão de Crédito (ícone credit_card + "Seguro com 3-DS 2.0") |
| Subtotal | Breakdown de valores | Row: Subtotal — Taxa do serviço (incluída) — Total em destaque Montserrat 800 20sp |
| CTA | Botão pagar | "Pagar com PIX" ou "Pagar com Cartão" (dinâmico) — Laranja Ponte — width double.infinity — 56dp |

### TELA 14: Pagamento PIX (QR Code)
**Usuário:** Consumidor B2C
**🎯 Objetivo**
Exibir QR Code dinâmico PIX gerado pela API Asaas com copia-e-cola e polling automático de confirmação de pagamento a cada 3 segundos.

**🧱 Estrutura**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| AppBar | Título + timer | Título "Pagar com PIX" — timer " ⏰ 14:32" Laranja Ponte no topo direito (countdown 15min) |
| Instrução | Texto de orientação | Nunito 14sp centralizado: "Abra seu banco, escolha Pix e escaneie o código abaixo" |
| QR Code | Widget qr_flutter | QR Code 220x220dp — fundo branco padding 16dp — BorderRadius 12dp — elevation 4 — Verde Ponte nos pixels do código (foreground color) |
| Valor | Destaque do valor a pagar | Montserrat 800 28sp #333333 centralizado: "R$ 12,50" |
| Copia e cola | Código PIX textual | TextField read-only fundo #F5F5F5 — texto truncado — botão sufixo " 📋 Copiar" Verde Ponte — feedback háptico ao copiar + Snackbar "Código copiado!" |
| Status de pagamento | Indicador de polling | Row: CircularProgressIndicator 16dp Verde + texto Nunito 12sp Muted "Aguardando confirmação..." — atualiza a cada 3s |
| Pago com sucesso | Substitui tela inteira | Animação lottie/explode de check — fundo Verde Ponte suave — navega para T16 após 1.5s |

**⚙️ Comportamentos**
Timer expira: overlay "Tempo esgotado" com botão "Gerar novo QR Code" — cancela reserva e volta ao estado DISPONIVEL. Webhook Asaas PAYMENT_CONFIRMED → Edge Function atualiza status → Realtime notifica app → tela muda automaticamente.

### TELA 15: Pagamento Cartão (3-DS 2.0)
**Usuário:** Consumidor B2C
**🎯 Objetivo**
Formulário seguro de pagamento com cartão de crédito processado via Asaas com 3-D Secure 2.0 obrigatório para transações acima de R$200. Dados do cartão não trafegam pelo servidor do Conecta Mesa (PCI-compliant).

**🧱 Estrutura**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| AppBar | Título + ícone segurança | Título "Pagar com Cartão" — ícone lock Verde Ponte no lado direito — subtexto "Transação segura 3-DS 2.0" |
| Preview visual do cartão | Card animado 3D | Container 200x120dp BorderRadius 12dp — gradiente escuro — número mascarado, nome, validade — anima flip ao preencher CVV |
| Número do cartão | TextField — máscara 0000 0000 0000 0000 | Label "Número do cartão" — ícone credit_card — detecção automática de bandeira (Visa/Master) com logo à direita |
| Nome no cartão | TextField — uppercase | Label "Nome no cartão" — placeholder "COMO IMPRESSO" |
| Validade | TextField — máscara MM/AA | Label "Validade" — width 50% lado esquerdo |
| CVV | TextField — 3 dígitos — obscure | Label "CVV" — width 50% lado direito — ícone info com tooltip ao tap |
| Selos de segurança | Row de ícones | Lock SSL + "Asaas 3-DS 2.0" + "PCI DSS Compliant" — Nunito 11sp Muted |
| CTA | Botão pagar | "Pagar R$ [valor]" — Laranja Ponte — height 56dp — Asaas Score roda automaticamente no backend |

### TELA 16: Confirmação de Pagamento
**Usuário:** Consumidor B2C / Comerciante B2B
**🎯 Objetivo**
Feedback positivo de pagamento confirmado com instruções para retirada, QR Code de entrega e atualização do Dashboard de Impacto.

**🧱 Estrutura**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| Animação de sucesso | Ícone animado | check_circle 96dp Verde Ponte — animação scale in 0.0→1.2→1.0 em 600ms + CircularReveal fundo Verde claro |
| Título | Confirmação textual | "Pagamento confirmado! 🎉" Montserrat 800 24sp #333333 |
| Subtexto | Instrução de retirada | Nunito 14sp #737373: "Dirija-se ao [Nome do estabelecimento] e mostre o QR Code abaixo ao atendente." |
| Card do pedido | Resumo compacto | Card fundo #F5F5F5 — foto thumb + nome + valor pago + endereço do estabelecimento + mapa link |
| Mini QR Code | Preview do QR de entrega | QR Code 120x120dp com label "QR de entrega" Verde — botão "Ver QR Code completo" que navega para T17 |
| Dashboard de Impacto inline | Métricas da transação | Row 3 chips: " 🌱 +2,3 kg CO₂ evitado" \| " ⚖ +1,5 kg salvos" \| " 🍽 +1,8 refeições" — fundo Verde Claro pill |
| CTA principal | Ação pós-compra | "Ver QR Code de entrega" — Verde Ponte — width double.infinity |
| CTA secundário | Voltar ao feed | "Continuar comprando" — Text button Verde Ponte — centralizado |

### TELA 17: QR Code de Entrega (Consumidor)
**Usuário:** Consumidor B2C
**🎯 Objetivo**
Exibir QR Code único por pedido para o consumidor apresentar ao lojista no momento da retirada. Confirma a entrega física e libera o repasse ao estabelecimento.

**🧱 Estrutura**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| Header | Título + instrução | Título "Meu QR de Entrega" — instrução "Mostre este código ao atendente" |
| QR Code principal | qr_flutter — único por pedido | QR Code 260x260dp — Verde Ponte — fundo branco padding 20dp — sombra elevation 6 — bordas suaves |
| Número do pedido | ID truncado | Montserrat 600 14sp Muted: "Pedido #CM-XXXXXX" centralizado abaixo do QR |
| Status animado | Indicador de estado | Animação pulsante enquanto aguarda scan: " ⏳ Aguardando confirmação do lojista..." — Verde Ponte pulse ring ao redor do QR |
| Resumo do produto | Card compacto | Foto thumb 48dp + nome + estabelecimento — Nunito 14sp |
| Brilho automático | UX de usabilidade | setSystemUIOverlayStyle brightness máxima ao entrar na tela para facilitar leitura em ambientes com luz variável |

**⚙️ Comportamento pós-scan**
Ao lojista escanear: status muda via Supabase Realtime para ENTREGUE — animação de celebração (check verde gigante) — texto "Entrega confirmada! Bom apetite 🎉" — repasse automático Asaas Split disparado — Dashboard de Impacto atualizado.

### TELA 18: Scanner QR Code (Lojista)
**Usuário:** Comerciante B2B
**🎯 Objetivo**
Permitir ao lojista escanear o QR Code apresentado pelo consumidor para confirmar a entrega física, atualizar o status do pedido para ENTREGUE e disparar o repasse via Asaas Split.

**🧱 Estrutura**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| Câmera fullscreen | mobile_scanner — viewport completo | Camera preview fullscreen — overlay escuro nas bordas — janela central 240x240dp transparente (área de scan) |
| Overlay de guia | Quadrado de alinhamento animado | Border 2dp Verde Ponte com cantos arredondados — animação de scan bar descendo verticalmente (loop) |
| Instrução | Texto flutuando sobre câmera | Container branco semi-transparente bottom — Nunito 14sp: "Aponte para o QR Code do cliente" |
| Resultado — Sucesso | Overlay verde fullscreen (1s) | Fundo Verde Ponte 80% — check_circle 96dp branco animado — "Entrega confirmada!" Montserrat 700 branco — auto-dismiss 2s |
| Resultado — Erro | Snackbar vermelho | "QR Code inválido ou pedido já confirmado." — botão "Tentar novamente" |
| Flash toggle | Ícone flashlight_on | FAB pequeno topo-direito — toggle ligado/desligado — para ambientes com pouca luz |
| Histórico do dia | Badge contador | Badge numérico Verde no ícone da aba "Anunciar" mostrando pedidos pendentes de entrega |

### TELA 19: Chat Assíncrono
**Usuário:** Todos os usuários
**🎯 Objetivo**
Canal de comunicação entre doador/vendedor e interessado para combinação de horário e local de retirada. Chat em tempo real via Supabase Realtime com histórico persistido.

**🧱 Estrutura**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| AppBar | Nome do contato + foto + produto | Foto avatar circular 32dp — nome Montserrat 600 16sp — subtítulo: nome do produto Nunito 12sp Muted — ícone info_outline direito |
| Card do produto (sticky) | Referência visual da conversa | Banner compacto fundo #F5F5F5 — foto thumb 40dp + nome + preço/status — tap abre T09 |
| Lista de mensagens | ListView.builder invertido | Mensagens do usuário: alinhadas à direita — fundo Verde Ponte BorderRadius 16dp (top-right 4dp) — texto branco Nunito 14sp. Mensagens do outro: alinhadas à esquerda — fundo #F5F5F5 BorderRadius 16dp (top-left 4dp) — texto #333333 |
| Timestamp | Abaixo de cada mensagem | Nunito 11sp #737373 — "HH:mm" — agrupado por data (hoje, ontem, DD/MM) |
| Status de leitura | Check marks | Mensagem enviada: check simples Verde — lida: check duplo Verde Ponte |
| Campo de input | TextField + botão enviar | Container fundo #FFFFFF borda topo #E0E0E0 — TextField BorderRadius 24dp fundo #F5F5F5 placeholder "Mensagem..." — botão send circular 44dp Verde Ponte — padding bottom: safe area + 8dp |
| Estado vazio | Primeira mensagem | Ilustração de balão de chat + "Diga olá para combinar a retirada!" — CTA placeholder sugere mensagem padrão: tap preenche input |

**⚙️ Comportamentos**
Supabase Realtime: nova mensagem aparece instantaneamente (<500ms) sem reload de página. Notificação push em background via flutter_local_notifications. ScrollToBottom automático ao receber mensagem quando usuário está no fundo da lista.

### TELA 20: Dashboard de Impacto
**Usuário:** Todos os usuários
**🎯 Objetivo**
Tela da aba "Impacto" que exibe o impacto ambiental e social gerado pelo usuário: CO₂ evitado, kg resgatados, refeições criadas e valor salvo. Com gráfico semanal e impacto coletivo da plataforma.

**🧱 Estrutura**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| AppBar | Título da aba | Título "Meu Impacto" Montserrat 700 — sem back button (aba fixa) |
| Header motivacional | Saudação + nível | Gradiente Verde Ponte → Verde Escuro — texto branco — saudação "Olá, [Nome]! 🌱" Montserrat 700 22sp — subtexto "Juntos já resgatamos X kg de alimentos!" |
| Grid de KPIs (2x2) | 4 cards de impacto individual | Card 1: 🌿 CO₂ Evitado — valor Montserrat 800 24sp Verde — unidade "kg CO₂-eq" Nunito 12sp. Card 2: ⚖ Kg Resgatados. Card 3: 🍽 Refeições Criadas. Card 4: 💰 Valor Salvo (R$) — fundo #F5F5F5 BorderRadius 16dp — coeficientes FAO 2013 |
| Gráfico semanal | BarChart fl_chart 8 semanas | Título "Evolução das suas retiradas" Montserrat 600 16sp — BarChart horizontal — barras Verde Ponte — barra atual Laranja Ponte — tooltip ao tap na barra mostrando kg + semana — eixo Y: kg — eixo X: semanas (Semana 1… Semana 8) |
| Card impacto coletivo | Métricas globais da plataforma | Gradiente Laranja — texto branco — " 🌍 Impacto Coletivo" título — 3 métricas: total kg, CO₂, estabelecimentos — separador vertical entre métricas |
| Card Selo Parceiro Ponte | CTA para PJ não verificado | Visível apenas para perfil empresa/ONG sem verificação — borda gradiente Verde→Laranja — ícone verified_outlined — texto "Obtenha o Selo Parceiro Ponte" — botão "Solicitar verificação" → navega para T23 |

**🎨 Coeficientes e Cálculos**
| KPI | Fórmula | Fonte |
|-----|---------|-------|
| CO₂ Evitado | kg_resgatados × 2,5 kg CO₂-eq | FAO 2013 |
| Refeições Criadas | kg_resgatados × 1,2 refeições/kg | WRAP UK |
| Valor Salvo | kg_resgatados × R$ 9,50/kg | Ajustável via constants.dart |

### TELA 21: Perfil do Usuário
**Usuário:** Todos os usuários
**🎯 Objetivo**
Tela da aba "Conta" com dados do usuário, selos de verificação, métricas individuais e acesso ao histórico de transações e configurações.

**🧱 Estrutura**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| Header do perfil | Avatar + nome + tipo + verificação | Fundo Verde Ponte gradiente — avatar circular 72dp (inicial do nome se sem foto) — nome Montserrat 700 20sp branco — tipo de conta Nunito 14sp branco 70% — VerifiedBadge se verificado |
| Resumo de impacto inline | Row de 3 métricas | Fundo branco semi-transparente no header — kg / transações / CO₂ — Montserrat 700 18sp + Nunito 11sp label |
| Seção: Dados cadastrais | ListTiles editáveis | ListTile com ícone + label + valor — Nome, E-mail, Telefone — trailing: edit_outlined — tap abre bottom sheet de edição |
| Seção: Segurança | ListTile senha | "Alterar senha" — trailing: arrow_forward_ios — navega para tela de redefinição |
| Seção: Minha atividade | Atalhos | " 📦 Histórico de pedidos" → T22 — " 📢 Meus anúncios" (B2B/PF Doador) → lista de anúncios próprios |
| Seção: Configurações | Preferências de notificação | Toggle de notificações — Raio de alertas (slider 1-10km) — Toggle heatmap ONG |
| Seção: Institucional | Links | Termos de Uso — Política de Privacidade — Sobre o Conecta Mesa |
| CTA sair | Botão logout | TextButton vermelho "Sair da conta" — posicionado ao final — dialog de confirmação |

### TELA 22: Histórico de Transações
**Usuário:** Todos os usuários
**🎯 Objetivo**
Listar todas as transações do usuário (compras, vendas, doações) com status, valores e opção de acessar detalhes de cada pedido.

**🧱 Estrutura**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| AppBar | Título + filtro | "Histórico" — ícone filter_list_outlined direito — abre bottom sheet com filtros |
| Filtros de status | Chips horizontais | "Todos", "Concluídos", "Em andamento", "Cancelados" — pill chips |
| Lista de pedidos | ListView.builder | Cards de pedido com gap 8dp |
| Card de pedido | Resumo de cada transação | Foto thumb 48dp BorderRadius 8dp — nome produto Montserrat 600 14sp — data Nunito 12sp Muted — status chip (Verde=Entregue, Laranja=Em andamento, Vermelho=Cancelado, Verde claro=Doação) — valor Montserrat 700 16sp alinhado à direita |
| Empty state | Sem transações | Ilustração compras vazia + "Nenhuma transação ainda" + botão "Explorar o feed" |

### TELA 23: Solicitação de Verificação Institucional
**Usuário:** Comerciante B2B / ONG B2G
**🎯 Objetivo**
Formulário para solicitação do Selo Parceiro Ponte: envio de CNPJ, documentos comprobatórios e acompanhamento do status de aprovação. Validação automática via Brasil API.

**🧱 Estrutura e Fluxo**
| Estado | Conteúdo | Especificação |
|--------|----------|---------------|
| Intro / Benefícios | Antes de iniciar | Header gradiente Verde→Laranja — ícone verified 48dp branco — título "Torne-se um Parceiro Verificado" — 3 benefícios em bullets visuais — botão "Iniciar solicitação" |
| Formulário CNPJ | Campo + validação automática | Campo CNPJ com validação assíncrona Brasil API — loader inline — resultado: dados da empresa aparecem preenchidos automaticamente (razão social, endereço) |
| Upload de documentos | file_picker / câmera | Empresa: "Comprovante de atividade comercial" — ONG: "Estatuto social" + "Comprovante de atuação" — cards de upload com ícone upload_file — preview após seleção — status " ✅ Enviado" |
| Revisão | Preview antes de enviar | Sumário dos dados e documentos — checkbox de confirmação de veracidade |
| Enviado — Aguardando | Status de análise | Ícone pending 64dp Laranja — "Solicitação enviada! Analisaremos em até 48h." — status visível no perfil — push notification ao aprovar/rejeitar |
| Aprovado | Celebração + badge | Animação confetti verde — VerifiedBadge aparece no perfil — instrução de uso do selo em redes sociais |
| Rejeitado | Feedback construtivo | Ícone info vermelho — motivo da rejeição — botão "Corrigir e reenviar" |

### TELA 24: Central de Notificações
**Usuário:** Todos os usuários
**🎯 Objetivo**
Histórico de todas as notificações push recebidas, organizadas por tipo e data. Permite ao usuário rever alertas perdidos e navegar para o contexto relevante.

**🧱 Estrutura**
| Zona | Conteúdo | Especificação |
|------|----------|---------------|
| AppBar | Título + ação | "Notificações" — botão "Marcar todas como lidas" TextButton Verde direito |
| Seções por data | Agrupamento temporal | Seção "Hoje", "Ontem", "Esta semana" — label Montserrat 600 14sp Muted |
| Card de notificação | Ícone + texto + tempo | Row: ícone do tipo (chat=Verde, pagamento=Laranja, urgência=Vermelho, conversão=Azul) 40dp circular fundo claro — texto Nunito 14sp — timestamp Nunito 11sp Muted — fundo #FFF8E7 se não lida, branco se lida |
| Tipos de notificação | Categorias visuais | 💬 Nova mensagem no chat (Verde) — ✅ Pagamento confirmado (Laranja) — 📍 Produto disponível perto de você (Azul) — 🔄 Produto convertido para doação (Verde escuro) — ⚠ Produto expirando (Vermelho) |
| Tap na notificação | Navegação contextual | Chat → T19 \| Pagamento → T16 \| Produto → T09 \| Conversão → lista de anúncios |
| Empty state | Sem notificações | Ícone notifications_none 64dp Muted — "Nenhuma notificação ainda" Nunito 14sp Muted |

---

## 4. PROMPTS PARA IA DE DESIGN — TELA A TELA
Esta seção contém prompts otimizados para ferramentas de geração de UI por IA (Midjourney, Galileo AI, Uizard, Framer AI, etc.). Cada tela tem versão em português e inglês. Os prompts foram calibrados para gerar interfaces realistas e fiéis à identidade visual do Conecta Mesa.

### TELAS DE AUTENTICAÇÃO (01 – 06)

**🇧🇷 TELA 01 — Splash + Onboarding — Prompt PT**
> App mobile FoodTech brasileiro chamado "Conecta Mesa". Tela de onboarding com 3 slides swipáveis. Fundo totalmente branco, design mobile-first iOS/Android. Primeiro slide: ilustração flat colorida de frutas e legumes sendo redistribuídos (tomate, pão, cenoura), título central em negrito "Comida boa não pode virar lixo" em fonte Montserrat, subtexto menor cinza. Barra de paginação com 3 pontos laranja (#FF9800) embaixo. Dois botões empilhados no rodapé: botão sólido verde (#4CAF50) "Criar conta" e botão contorno verde "Já tenho conta". Cantos dos botões arredondados 12px. Design limpo, moderno, acessível, alto contraste. Paleta: verde #4CAF50 + laranja #FF9800 + branco + cinza #737373. Tipografia Montserrat para títulos, Nunito para corpo.

**🇺🇸 TELA 01 — Splash + Onboarding — Prompt EN**
> Brazilian FoodTech mobile app "Conecta Mesa" — onboarding screen with 3 swipeable slides. Clean white background, mobile-first Material Design 3 layout for iOS/Android. First slide: flat vector illustration of colorful fruits and vegetables being redistributed (tomato, bread, carrot), bold centered title "Good food cannot become waste" in Montserrat font, smaller gray subtitle in Nunito. Pagination bar with 3 orange (#FF9800) dots at bottom. Two stacked CTA buttons in footer: solid green (#4CAF50) "Create account" primary button + green outlined "I already have an account" secondary button. 12px border-radius on buttons. Clean, modern, accessible UI, high contrast. Color palette: green #4CAF50, orange #FF9800, white #FFFFFF, muted gray #737373. Montserrat for headings, Nunito for body text.

**🇧🇷 TELA 05 — Login — Prompt PT**
> Tela de login de app mobile FoodTech "Conecta Mesa". Design minimalista, branco, mobile-first. Topo: logo do app "CONECTA MESA" em verde #4CAF50 Montserrat ExtraBold centralizado, tagline menor em cinza. Formulário centralizado com dois campos de texto arredondados (12px): "E-mail" com ícone de envelope cinza e "Senha" com ícone de cadeado + ícone olho para toggle. Link "Esqueci minha senha" em laranja #FF9800 alinhado à direita abaixo do campo senha. Botão CTA sólido verde #4CAF50 largura total "Entrar" Montserrat SemiBold. Rodapé: texto "Não tem conta?" + link verde "Criar conta". Ícone de cadeado pequeno + texto "Transação segura" no fundo. Paleta verde #4CAF50, laranja #FF9800, branco, cinza. Alto contraste, acessível, sem elementos desnecessários.

**🇺🇸 TELA 05 — Login — Prompt EN**
> Minimalist login screen for Brazilian FoodTech mobile app "Conecta Mesa". Clean white background, Material Design 3 principles, mobile-first. Top: app logo "CONECTA MESA" in green #4CAF50 Montserrat ExtraBold centered, small gray tagline below. Centered form with two rounded text fields (12px radius): "Email" with envelope icon and "Password" with lock + eye toggle icon. Forget password link in orange #FF9800 right-aligned below password field. Full-width solid green #4CAF50 CTA button "Login" Montserrat SemiBold. Footer: "No account?" + green link "Create account". Small lock icon + "Secure connection" text at bottom. High contrast, accessible, no decorative clutter.

### TELAS DE MARKETPLACE (07 – 09)

**🇧🇷 TELA 07 — Feed de Anúncios — Prompt PT**
> Tela principal (home) de app mobile FoodTech "Conecta Mesa". Feed de produtos alimentares com desconto, design mobile-first moderno. Topo: AppBar branca sem elevação com logo pequeno "CM" verde à esquerda, chip de localização " 📍 Boa Viagem, Recife" no centro. Barra de busca arredondada cinza claro "#F5F5F5" com ícone de lupa. Duas linhas de filtros horizontais roláveis: linha 1 chips tipo "Todos / Venda / Doação", linha 2 chips categoria " 🍞 Padaria / 🥦 Hortifruti / 🛒 Mercado". Chips selecionados: fundo verde #4CAF50 + texto branco. Lista vertical de cards de produto: cada card tem foto realista de alimento (aspect 16:9, cantos 16px superior), badge "35% OFF" laranja sobre foto, badge " ⏰ Urgente" vermelho se expirando, nome do produto Montserrat Bold 16sp, preço atual laranja #FF9800 ao lado de preço original riscado cinza, distância e tempo restante em ícones pequenos. Bottom navigation bar branca com 4 ícones: Início (ativo verde), Impacto, Anunciar+, Conta.

**🇺🇸 TELA 07 — Announcement Feed — Prompt EN**
> Main home screen of "Conecta Mesa" FoodTech mobile app — discounted food marketplace feed. Modern mobile-first Material Design 3 layout. Top: white AppBar with small green "CM" logo left, location chip " 📍 Boa Viagem, Recife" center. Light gray rounded search bar with magnifier icon. Two horizontal scrollable filter rows: row 1 type chips "All / Sale / Donation", row 2 category chips " 🍞 Bakery / 🥦 Produce / 🛒 Market". Selected chips: green #4CAF50 background + white text. Vertical card list: each product card has realistic food photo (16:9 ratio, 16px top radius), "35% OFF" orange badge over photo, " ⏰ Urgent" red badge if expiring, product name Montserrat Bold 16sp, current price in orange #FF9800 next to struck-through original price gray, distance and time remaining with small icons. White bottom navigation bar with 4 icons: Home (active green), Impact, Post+, Account.

**🇧🇷 TELA 09 — Detalhe do Anúncio — Prompt PT**
> Tela de detalhe de produto de app mobile FoodTech "Conecta Mesa". Topo: foto do alimento em tela quase cheia (3:2) com gradiente preto translúcido embaixo, botão voltar flutuante branco semi-transparente. Badge " 🍞 Padaria" e "40% OFF" laranja sobre a foto. Conteúdo rolável abaixo: nome do produto Montserrat Bold 22sp preto, nome do estabelecimento + badge "Empresa Verificada" laranja pill. Preço atual Montserrat ExtraBold 28sp laranja #FF9800 + preço original riscado cinza. Row de 3 chips cinza claro: " 📍 1,2 km", " ⚖ 2,5 kg", " ⏰ 3h restantes". Seção "Ficha Nutricional" em card cinza claro: grade 2x2 com Proteínas/Carboidratos/Gorduras/Calorias, valores em verde bold. Seção "Data de validade" com ícone verde verificado + chip pequeno "Verificado por IA". Mini mapa Mapbox com pin laranja. Rodapé sticky branco com botão "Reservar agora" laranja #FF9800 largura total. Design limpo, muita hierarquia visual, mobile-first.

**🇺🇸 TELA 09 — Product Detail — Prompt EN**
> Product detail screen for "Conecta Mesa" FoodTech mobile app. Top: near-fullwidth food photo (3:2 ratio) with black-to-transparent gradient at bottom, floating semi-transparent white back button. Orange "40% OFF" and " 🍞 Bakery" badges over photo. Scrollable content below: product name Montserrat Bold 22sp black, store name + orange "Verified Business" pill badge. Current price Montserrat ExtraBold 28sp orange #FF9800 + struck-through original gray price. Row of 3 light gray chips: " 📍 1.2 km", " ⚖ 2.5 kg", " ⏰ 3h left". "Nutrition Facts" section in light gray card: 2x2 grid with Protein/Carbs/Fat/Calories, values in bold green. "Best Before" section with green check icon + small "AI-Verified" green chip. Mapbox static mini-map with orange pin. Sticky white footer with full-width orange #FF9800 "Reserve Now" button. Clean layout, strong visual hierarchy, mobile-first.

### TELAS DE PUBLICAÇÃO (10 – 12)

**🇧🇷 TELAS 10-12 — Publicar Anúncio (Multi-step) — Prompt PT**
> Fluxo de 3 telas de publicação de anúncio de app mobile FoodTech "Conecta Mesa". Design mobile-first moderno com barra de progresso linear verde #4CAF50 no topo indicando passo atual (33% / 66% / 100%). PASSO 1: área central tracejada grande para adicionar foto (" 📷 Tirar foto do produto"), dois botões lado a lado "Câmera" verde sólido e "Galeria" outline verde. Abaixo: banner de resultado OCR em card verde "#E8F5E9": ícone check verde + "Data de validade: 15/05/2025 — Produto válido!". PASSO 2: formulário com campos: nome do produto, categoria (dropdown), quantidade em kg, toggle animado "Venda / Doação" (laranja/verde), preço em R$, grid 2x2 de macronutrientes, chips de alérgenos. PASSO 3: card preview do anúncio exatamente como aparece no feed + info GPS verde + aviso azul de conversão automática + botão "Publicar agora" verde large com ícone de foguete. Paleta verde #4CAF50, laranja #FF9800, branco.

**🇺🇸 TELAS 10-12 — Post Announcement (Multi-step) — Prompt EN**
> 3-step announcement posting flow for "Conecta Mesa" FoodTech mobile app. Modern mobile-first design with green #4CAF50 linear progress bar at top showing current step (33%/66%/100%). STEP 1: large central dashed area for adding food photo (" 📷 Take product photo"), two side-by-side buttons — solid green "Camera" and outlined green "Gallery". Below: OCR result banner in green card "#E8F5E9": green check icon + "Best before: 05/15/2025 — Product is valid!". STEP 2: form with fields: product name, category dropdown, weight in kg, animated "Sale / Donation" toggle (orange/green), price in R$, 2x2 macronutrients grid, allergen selection chips. STEP 3: full product card preview exactly as it appears in the feed + green GPS info row + blue auto-conversion notice + large green "Publish Now" button with rocket icon. Color palette: green #4CAF50, orange #FF9800, white.

### TELAS DE PAGAMENTO (13 – 18)

**🇧🇷 TELA 14 — Pagamento PIX — Prompt PT**
> Tela de pagamento PIX de app mobile FoodTech "Conecta Mesa". Fundo branco, design mobile-first. Topo: AppBar branca com título "Pagar com PIX" e timer regressivo " ⏰ 14:32" em laranja #FF9800 à direita. Instrução em texto Nunito cinza centralizado. Centro: QR Code grande (220x220dp) com pixels em verde #4CAF50 em fundo branco, dentro de card arredondado com sombra suave. Valor em destaque: "R$ 12,50" Montserrat ExtraBold 28sp preto centralizado. Campo cinza claro de copia-e-cola com botão " 📋 Copiar" verde. Indicador sutil de polling: "● Aguardando confirmação do banco..." Nunito 12sp cinza com ponto pulsante verde. Layout minimalista, sem distrações, foco total no QR Code. Paleta: verde #4CAF50, laranja #FF9800, branco, cinza #737373.

**🇺🇸 TELA 14 — PIX Payment — Prompt EN**
> PIX payment screen for "Conecta Mesa" FoodTech mobile app. White background, mobile-first design. Top: white AppBar with title "Pay with PIX" and countdown timer " ⏰ 14:32" in orange #FF9800 right-aligned. Centered gray Nunito instruction text. Center: large QR Code (220x220dp) with green #4CAF50 pixels on white background, inside rounded card with soft shadow. Highlighted amount: "R$ 12.50" Montserrat ExtraBold 28sp black centered. Light gray copy-paste field with green " 📋 Copy" button. Subtle polling indicator: "● Waiting for bank confirmation..." Nunito 12sp gray with pulsing green dot. Minimalist layout, no distractions, full focus on QR Code. Color palette: green #4CAF50, orange #FF9800, white, gray #737373.

**🇧🇷 TELAS 16-17 — Confirmação + QR Entrega — Prompt PT**
> Duas telas de app mobile FoodTech "Conecta Mesa". TELA 16 — Confirmação de Pagamento: animação central de ícone check_circle grande em verde #4CAF50 com ring pulsante verde claro ao redor. Título "Pagamento confirmado! 🎉" Montserrat ExtraBold 24sp. Card cinza com resumo do pedido: foto thumb do produto + nome + valor pago. Mini QR Code preview 120dp com botão "Ver QR Code completo" verde. Row de 3 chips verdes com impacto: " 🌱 +2,3 kg CO₂ evitado | ⚖ +1,5 kg salvos | 🍽 +1,8 refeições". TELA 17 — QR Code de Entrega: QR Code grande 260dp centralizado com pixels verdes #4CAF50 + fundo branco + sombra elevation 6. Texto instrução acima. Ring pulsante verde ao redor do QR animando suavemente. Card resumo do produto abaixo. Fundo branco brilhante (brightness max). Design celebratório, confiante, minimal.

**🇺🇸 TELAS 16-17 — Confirmation + Delivery QR — Prompt EN**
> Two screens for "Conecta Mesa" FoodTech mobile app. SCREEN 16 — Payment Confirmation: centered large check_circle icon animation in green #4CAF50 with pulsing light-green ring. Title "Payment confirmed! 🎉" Montserrat ExtraBold 24sp. Gray card with order summary: product thumbnail + name + amount paid. Mini 120dp QR Code preview with "View full QR Code" green button. Row of 3 green impact chips: " 🌱 +2.3 kg CO₂ avoided | ⚖ +1.5 kg saved | 🍽 +1.8 meals". SCREEN 17 — Delivery QR Code: large 260dp QR Code centered with green #4CAF50 pixels + white background + strong shadow elevation. Instruction text above. Soft pulsing green ring animating around the QR. Product summary card below. Bright white background (max brightness). Celebratory, confident, minimal design.

### TELA DE CHAT (19)

**🇧🇷 TELA 19 — Chat Assíncrono — Prompt PT**
> Tela de chat de app mobile FoodTech "Conecta Mesa". Design WhatsApp-like mas com identidade Conecta Mesa. AppBar branca com avatar circular 32dp, nome do contato Montserrat SemiBold, subtítulo com nome do produto Nunito Muted. Banner compacto cinza do produto referenciado no topo da conversa (foto thumb + nome + preço). Mensagens: balões à direita (do usuário) em verde #4CAF50 com texto branco Nunito 14sp, BorderRadius com canto superior direito menor. Balões à esquerda (outro) em cinza claro #F5F5F5 texto escuro, canto superior esquerdo menor. Timestamps Nunito 11sp cinza entre grupos. Campo de input no fundo: TextField arredondado 24px cinza claro + botão enviar circular verde #4CAF50 com ícone send branco. Fundo geral levemente cinza. Minimal, funcional, legível, alto contraste.

**🇺🇸 TELA 19 — Async Chat — Prompt EN**
> Chat screen for "Conecta Mesa" FoodTech mobile app. WhatsApp-inspired design but with Conecta Mesa brand identity. White AppBar with 32dp circular avatar, contact name Montserrat SemiBold, product name subtitle in Nunito muted gray. Compact light gray banner of referenced product at top (thumb + name + price). Messages: right-side bubbles (current user) in green #4CAF50 with white Nunito 14sp text, upper-right corner tighter radius. Left-side bubbles (other user) in light gray #F5F5F5 dark text, upper-left corner tighter. Nunito 11sp gray timestamps between groups. Bottom input area: rounded 24px light gray TextField + circular green #4CAF50 send button with white send icon. Slightly gray overall background. Minimal, functional, highly legible, high contrast.

### DASHBOARD DE IMPACTO (20)

**🇧🇷 TELA 20 — Dashboard de Impacto — Prompt PT**
> Tela de Dashboard de Impacto Ambiental de app mobile FoodTech "Conecta Mesa". Design data-visual moderno, mobile-first. Topo: header com gradiente verde escuro (#2E7D32 para #4CAF50), texto branco "Olá, Marina! 🌱" Montserrat Bold 22sp, subtexto "Juntos já resgatamos 2,4 toneladas!". Grade 2x2 de cards de KPI: card 1 " 🌿 CO₂ Evitado" com valor grande "18,5 kg" Montserrat ExtraBold verde, unidade menor cinza; card 2 " ⚖ Kg Resgatados" 7,4 kg; card 3 " 🍽 Refeições" 8,9; card 4 " 💰 Valor Salvo" R$ 70,30. Todos cards fundo #F5F5F5 cantos 16px. Gráfico de barras verticais (fl_chart style) com 8 barras semanais: barras verdes #4CAF50 com barra atual laranja #FF9800, eixo X semanas, eixo Y kg. Título "Evolução das suas retiradas" Montserrat SemiBold. Card inferior com gradiente laranja: impacto coletivo da plataforma em branco. Paleta verde + laranja + branco + cinza claro.

**🇺🇸 TELA 20 — Impact Dashboard — Prompt EN**
> Environmental Impact Dashboard screen for "Conecta Mesa" FoodTech mobile app. Modern data-visual mobile-first design. Top: dark green gradient header (#2E7D32 to #4CAF50), white text "Hey, Marina! 🌱" Montserrat Bold 22sp, subtitle "Together we've already rescued 2.4 tons!". 2x2 KPI card grid: card 1 " 🌿 CO₂ Avoided" with large "18.5 kg" Montserrat ExtraBold green, smaller gray unit; card 2 " ⚖ kg Rescued" 7.4kg; card 3 " 🍽 Meals" 8.9; card 4 " 💰 Saved" R$70.30. All cards light gray #F5F5F5 background 16px radius. Vertical bar chart (fl_chart style) with 8 weekly bars: green #4CAF50 bars with current week in orange #FF9800, X-axis weeks, Y-axis kg. Title "Your rescue evolution" Montserrat SemiBold. Bottom card with orange gradient: platform collective impact in white text. Color palette: green + orange + white + light gray.

### TELAS DE CONTA E SELOS (21 – 23)

**🇧🇷 TELA 21 — Perfil — Prompt PT**
> Tela de perfil de usuário de app mobile FoodTech "Conecta Mesa". Topo: header com gradiente verde #4CAF50 para verde escuro #2E7D32, avatar circular grande 72dp (inicial do nome em branco), nome "Rafael Pimentel" Montserrat Bold 20sp branco, tipo "Comerciante • Padaria da Esperança" Nunito 14sp branco 70%. Badge " ✓ Empresa Verificada" laranja pill branco no header. Row de 3 métricas brancas: "47 kg | 8 transações | 117 kg CO₂". Seções com ListTiles: ícone circular colorido + label + valor + seta ou toggle. Separadores cinza entre seções. Toggle de notificações com thumb verde quando ativo. CTA "Sair da conta" vermelho text button no fundo da lista. Design hierárquico, informativo, sem poluição visual.

**🇺🇸 TELA 21 — Profile — Prompt EN**
> User profile screen for "Conecta Mesa" FoodTech mobile app. Top: header with green gradient #4CAF50 to dark green #2E7D32, large 72dp circular avatar (white initial letter), name "Rafael Pimentel" Montserrat Bold 20sp white, type "Merchant • Esperança Bakery" Nunito 14sp white 70% opacity. Orange pill " ✓ Verified Business" badge in white on header. Row of 3 white metrics: "47 kg | 8 transactions | 117 kg CO₂". List sections with ListTiles: colored circular icon + label + value + arrow or toggle. Gray separators between sections. Notification toggle with green thumb when active. Red "Log out" text button at bottom of list. Hierarchical, informative, visually uncluttered design.

**🇧🇷 TELA 23 — Verificação Institucional — Prompt PT**
> Tela de solicitação de Selo Parceiro Ponte de app mobile FoodTech "Conecta Mesa". Topo: header com gradiente de verde para laranja (diagonal), ícone " ✓ " verified grande 48dp branco centralizado, título "Torne-se um Parceiro Verificado" Montserrat Bold 22sp branco. Abaixo: 3 benefícios em lista visual (ícone verde + texto). Campo CNPJ com validação visual (ícone loading inline → ícone check verde quando válido + razão social preenchida automaticamente cinza). Seção de upload de documentos: dois cards de upload com ícone upload_file #4CAF50 e label "Comprovante de atividade" / "Estatuto social". Após upload: preview miniatura + " ✅ Enviado" verde. Botão "Enviar solicitação" gradiente verde→laranja width total. Nível de verificação: 3 steps visuais em linha (Empresa Verificada → ONG Verificada → Parceiro Ponte) com bola preenchida/vazia.

**🇺🇸 TELA 23 — Institutional Verification — Prompt EN**
> Institutional verification (Seal application) screen for "Conecta Mesa" FoodTech mobile app. Top: diagonal green-to-orange gradient header, large white centered " ✓ " verified icon 48dp, title "Become a Verified Partner" Montserrat Bold 22sp white. Below: 3 benefits in visual list (green icon + text). CNPJ field with inline validation animation (loading spinner → green check when valid + company name auto-filled in gray). Document upload section: two upload cards with green #4CAF50 upload icon and labels "Business activity proof" / "Association bylaws". After upload: small preview thumbnail + " ✅ Uploaded" green. Full-width gradient green→orange "Submit application" button. Verification level tracker: 3 visual steps in a horizontal line (Verified Business → Verified NGO → Bridge Partner) with filled/empty circles.

---

## 5. CHECKLIST DE IMPLEMENTAÇÃO
Use este checklist para validar a fidelidade de cada tela implementada com esta especificação.

### 5.1 Checklist Visual
| Item | Critério de Verificação | OK |
|------|-------------------------|----|
| Paleta de cores | Todas as cores correspondem aos valores HEX da Paleta Ponte (#4CAF50, #FF9800, #333333, #737373, #F5F5F5) | ☐ |
| Tipografia | Montserrat usado em títulos/botões, Nunito em corpo/metadados — sem fontes genéricas do sistema | ☐ |
| Border-radius | Cards 16dp, botões 12dp, chips pill (9999dp), inputs 12dp — consistência em todas as telas | ☐ |
| Tap targets | Todos os elementos tocáveis têm mínimo de 48dp de altura — verificado em todos os botões, listTiles e chips | ☐ |
| Bottom Navigation | 4 abas: Início / Impacto / Anunciar / Conta — ícone ativo Verde Ponte | ☐ |
| AppBar | Fundo #FFFFFF, elevation 0 na maioria das telas, título Montserrat 600 18sp | ☐ |
| CTAs sticky | Botões de ação principal fixos no rodapé nas telas T09, T12, T13 | ☐ |
| VerifiedBadge | Widget consistente com 3 variantes visuais em todos os locais onde aparece | ☐ |
| Empty states | Todas as telas com listas possuem estado vazio com ilustração + texto + CTA | ☐ |
| Loading states | Shimmer/skeleton em T07 e listas, CircularProgressIndicator nas ações | ☐ |

### 5.2 Checklist Funcional
| Módulo | Critério | OK |
|--------|----------|----|
| Autenticação | Auto-login funcional — sessão JWT persistida — redirect correto por perfil | ☐ |
| Feed | Ordenação por distância Haversine — filtros combinados — Realtime updates | ☐ |
| Mapa | Pins dinâmicos — tap abre detalhe — heatmap só para ONG — fallback 50k loads | ☐ |
| OCR | Bloqueio de produto vencido — on-device sem upload — log de tentativas | ☐ |
| Publicação | GPS obrigatório — foto obrigatória — prazo de retirada define conversão | ☐ |
| PIX | QR gerado <3s — polling 3s — confirmação por webhook HMAC — cancelamento 15min | ☐ |
| Cartão | 3-DS 2.0 obrigatório >R$200 — Asaas Score em todas — cartão não passa pelo servidor | ☐ |
| QR Entrega | QR único por pedido — scan pelo lojista = ENTREGUE — split Asaas disparado | ☐ |
| Chat | Realtime <500ms — notificação push ao receber — histórico persistido | ☐ |
| Dashboard | Coeficientes FAO corretos — gráfico 8 semanas — atualização após transação | ☐ |
| Conversão B2C→B2G | Edge Function a cada 60min — 4h antes do prazo — notificação ao vendedor | ☐ |
| Selos | Validação CNPJ Brasil API — upload documentos Supabase Storage — aprovação manual | ☐ |
