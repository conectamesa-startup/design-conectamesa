# CONECTA MESA — PRD (Product Requirements Document)

**Infraestrutura Digital de Redistribuição Alimentar**
Recife, Pernambuco — Brasil
Versão 1.1 | 2026

⚠️ **CONFIDENCIAL — Uso Interno Exclusivo**

---

## Sumário
1. [Visão Geral do Produto](#1-visão-geral-do-produto)
2. [Objetivos do MVP](#2-objetivos-do-mvp)
3. [Escopo do MVP](#3-escopo-do-mvp)
4. [Personas](#4-personas)
5. [Jornadas do Usuário](#5-jornadas-do-usuário)
6. [Histórias de Usuário](#6-histórias-de-usuário)
7. [Requisitos Funcionais](#7-requisitos-funcionais)
8. [Requisitos Não Funcionais](#8-requisitos-não-funcionais)
9. [Regras de Negócio](#9-regras-de-negócio)
10. [Fluxos do Sistema](#10-fluxos-do-sistema)
11. [Arquitetura Financeira (Asaas BaaS)](#11-arquitetura-financeira-asaas-baas)
12. [Dependências Técnicas](#12-dependências-técnicas)
13. [Timeline de Desenvolvimento](#13-timeline-de-desenvolvimento)
14. [Glossário](#14-glossário)

---

## Legenda — Tipos de Usuário da Plataforma

| Rótulo | Tipo de Usuário | Descrição |
|--------|-----------------|-----------|
| [👤 PF Doador] | Pessoa Física Doadora | Usuário individual que doa excedentes domésticos via câmera e GPS |
| [🛒 Consumidor B2C] | Consumidor Final | Pessoa que compra alimentos com desconto no feed geolocalizado |
| [🏪 Comerciante B2B] | Comerciante Local | Padaria, hortifruti, mercadinho, permissionário CEASA-PE |
| [🤝 ONG/B2G] | ONG / Cozinha Solidária | Entidades sociais que resgatam doações gratuitas do pool B2G (take rate = 0% para doações; vendas seguem a regra universal de 40%) |
| [⚙️ Admin] | Administrador Interno | Equipe do Conecta Mesa para moderação, selos e painel admin |
| [Todos] | Todos os usuários | Funcionalidade compartilhada entre dois ou mais perfis |

---

## 1. Visão Geral do Produto

### 1.1 Descrição do Conecta Mesa
O Conecta Mesa é uma plataforma FoodTech mobile-first (iOS e Android) que opera como Infraestrutura Digital de Redistribuição Alimentar. A plataforma conecta comerciantes locais com excedente alimentar — padarias, hortifrutis, supermercados regionais e permissionários de centros de abastecimento — a consumidores finais e organizações sociais em tempo real, por meio de um marketplace geolocalizado, transparente e inteligente.

Diferentemente dos modelos opacos de "sacola surpresa" existentes no mercado, o Conecta Mesa exibe ficha técnica completa de cada produto: macronutrientes, alérgenos, data de validade e localização precisa. A plataforma opera uma mecânica de conversão temporal automatizada: produtos que não foram vendidos no canal B2C dentro de um prazo crítico são automaticamente redirecionados ao pool de doações para ONGs e Cozinhas Comunitárias parceiras — maximizando o aproveitamento do ciclo de vida de 100% dos ativos alimentares cadastrados.

### 1.2 O Problema que Resolve

| Dimensão do Problema | Dado Quantitativo |
|----------------------|-------------------|
| Domicílios em insegurança alimentar no Nordeste | ~38% do total nacional |
| Pernambuco no ranking de insegurança alimentar | 5º pior estado da federação |
| Domicílios com privação alimentar em PE | ~35,3% |
| Alimentos desperdiçados no varejo e domicílios no Brasil | ~19% do total disponível |
| Desperdício domiciliar médio por família brasileira | 353g/dia \| 128,8 kg/ano |

### 1.3 Público-Alvo
- Consumidores finais de baixa e média renda na Região Metropolitana do Recife (RMR)
- Pequenos e médios comerciantes locais: padarias, hortifrutis, supermercados regionais, feiras e CEASA-PE
- ONGs, Cozinhas Comunitárias e Banco de Alimentos do Recife
- Pessoas físicas com excedente doméstico de alimentos que desejam evitar o desperdício

### 1.4 Proposta de Valor

| Ator | Proposta de Valor |
|------|-------------------|
| [🛒 Consumidor B2C] | Acesso a alimentos de qualidade com descontos acima de 50%, com transparência total (ficha nutricional e validade) |
| [🏪 Comerciante B2B] | Conversão de prejuízo operacional em recuperação de CMV, reputação corporativa e acesso ao Selo Doador de Alimentos (Lei nº 15.224/2025) |
| [🤝 ONG/B2G] | Fonte estável e gratuita de alimentos com ficha nutricional, sem a imprevisibilidade dos modelos analógicos |
| [👤 PF Doador] | Canal simples para redistribuir excedentes domésticos e medir o impacto social de cada doação |

---

## 2. Objetivos do MVP

### 2.1 O que o MVP deve validar
- **Superação do Estigma Cultural:** a população recifense vulnerável priorizará o custo-benefício de alimentos próximos ao vencimento frente ao estigma da "sobra", especialmente em cenário de inflação persistente.
- **Digitalização do Pequeno Varejo:** pequenos comerciantes possuem maturidade digital mínima para integrar a publicação de inventário excedente via câmera e IA.
- **Eficácia da Gamificação:** métricas de impacto ambiental e badges gerarão engajamento recorrente.
- **Viabilidade da Conversão Temporal Automatizada:** o mecanismo de redirecionamento automático B2C → B2G funciona sem intervenção humana.
- **Product-Market Fit Hiperlocal:** densidade de oferta e demanda suficiente em bairros-âncora da RMR antes de expansão.

### 2.2 Métricas de Sucesso do MVP (KPIs — 90 dias)

| Métrica | Meta | Instrumento |
|---------|------|-------------|
| Parceiros B2B onboardados | 30 estabelecimentos | Painel admin |
| Usuários registrados ativos (MAU) | 500 usuários | Supabase Analytics |
| Transações B2C completadas/semana | 150 transações | Tabela payments |
| Quilogramas redistribuídos (B2C + B2G) | 500 kg/mês | Dashboard de Impacto |
| Taxa de conversão feed → pedido (B2C) | >8% | Funil de eventos |
| NPS inicial (comerciantes B2B) | >40 | Formulário in-app |
| ONGs / Cozinhas cadastradas (B2G) | 10 entidades | Painel admin |

---

## 3. Escopo do MVP

### 3.1 In Scope — O que será construído no MVP

| ID | Funcionalidade | Tipo de Usuário | Observação |
|----|----------------|-----------------|------------|
| F01 | Autenticação: cadastro e login via e-mail e senha (sem Google/OAuth) | [Todos] | Supabase Auth |
| F02 | Cadastro de Pessoa Física (CPF, nome, telefone, senha) | [👤 PF Doador] [🛒 Consumidor B2C] | |
| F03 | Cadastro de Pessoa Jurídica com seleção de segmento; ONG selecionada pelo campo "Sou uma ONG" | [🏪 Comerciante B2B] [🤝 ONG/B2G] | companyType: ASSOCIATION para ONGs |
| F04 | [CORRIGIDO v2.0] Feed cronológico de anúncios com busca textual e filtros por categoria e tipo (venda/doação). Distância exibida nos cards calculada no cliente via Mapbox SDK + GPS | [🛒 Consumidor B2C] [🤝 ONG/B2G] | GPS via geolocator + Mapbox SDK |
| F05 | [CORRIGIDO v2.0] Detalhe do anúncio: foto, descrição, macronutrientes (`proteins_g`, `carbs_g`, `fats_g`, `calories_kcal`), alérgenos (`allergens TEXT[]`), validade, GPS (`lat`/`lng`), chips e CTA de reserva/checkout. Campos nutricionais na própria tabela `listings` | [🛒 Consumidor B2C] [🤝 ONG/B2G] | Ficha técnica completa |
| F06 | Publicação de anúncio: captura de foto via câmera nativa, GPS automático, formulário de descrição e valor | [🏪 Comerciante B2B] [👤 PF Doador] | image_picker + geolocator |
| F07 | [CORRIGIDO v2.0] Validação de data de validade manual: vendedor insere a data via DatePicker nativo. Sistema bloqueia publicação se data pretérita (`DateTime.now()` vs data inserida). ~~OCR descartado~~ | [🏪 Comerciante B2B] [👤 PF Doador] | DatePicker Flutter nativo |
| F08 | Conversão temporal automatizada: produto não vendido é redirecionado automaticamente ao pool B2G | [🏪 Comerciante B2B] (sistema) | Edge Function Supabase |
| F09 | Chat assíncrono entre doador/vendedor e interessado para combinação de retirada | [Todos] | Supabase Realtime |
| F10 | Pagamento via PIX dinâmico (QR Code + copia-e-cola) | [🛒 Consumidor B2C] | Asaas API |
| F11 | Pagamento via cartão de crédito com 3-D Secure 2.0 e antifraude Asaas Score | [🛒 Consumidor B2C] | Obrigatório acima de R$ 200 |
| F12 | Webhook de confirmação de pagamento com validação HMAC (Asaas) | Sistema | Edge Function asaas-webhook |
| F13 | QR Code de confirmação de entrega: consumidor exibe código, vendedor escaneia para confirmar e liberar saldo | [🛒 Consumidor B2C] [🏪 Comerciante B2B] | qr_flutter + mobile_scanner |
| F14 | Dashboard de Impacto: CO₂ evitado, kg resgatados, refeições criadas, valor salvo | [Todos] | Coeficientes FAO 2013 |
| F15 | Gráfico de evolução semanal de resgates (8 semanas) | [Todos] | fl_chart |
| F16 | Sistema de Selos Parceiro Ponte: Empresa Verificada, ONG Verificada e Parceiro Ponte | [🏪 Comerciante B2B] [🤝 ONG/B2G] | Widget VerifiedBadge reutilizável |
| F17 | Solicitação de verificação institucional (CNPJ + documentos) | [🏪 Comerciante B2B] [🤝 ONG/B2G] | Brasil API + aprovação manual |
| F18 | Navegação nativa Flutter com Bottom Navigation Bar adaptada por persona | [Todos] | Material 3 |
| F19 | Push notifications para chat, confirmação de pagamento, alertas de urgência geolocalizada e liberação de saldo | [Todos] | flutter_local_notifications |
| F20 | Carteira Digital: saldo disponível, saldo pendente, histórico de vendas e saque via Pix | [🏪 Comerciante B2B] [👤 PF Doador] | Asaas API + banco de dados interno |
| F21 | Mapa interativo com pins dinâmicos via Mapbox GL, atualizado em tempo real. Tap no pin abre detalhe. | [🛒 Consumidor B2C] [🤝 ONG/B2G] | mapbox_maps_flutter + Supabase Realtime |
| F22 | Heatmap de hotspots de doações por bairro no mapa, com filtro exclusivo para doações | [🤝 ONG/B2G] | Mapbox GL Heatmap Layer |
| F23 | Monitoramento do tier gratuito Mapbox (50k loads/mês) com alerta em 80% e fallback para lista | [Todos] | Mapbox Token Usage API |
| F24 | [CORRIGIDO v2.0] Avaliações pós-entrega: rating 1-5 estrelas + comentário opcional. Uma avaliação por pedido (`reviews.payment_id UNIQUE`). Avaliador e avaliado rastreados via Exclusive Arc | [🛒 Consumidor B2C] [🤝 ONG/B2G] | Tabela `reviews` |

### 3.2 Out of Scope — O que NÃO será construído no MVP

| Funcionalidade Excluída | Justificativa |
|-------------------------|---------------|
| Login com Google / OAuth / OTP SMS | Dependências externas desnecessárias para MVP |
| ~~Sistema de avaliações pós-retirada~~ | [CORRIGIDO v2.0] **Movido para In-Scope** — tabela `reviews` adicionada no banco v2.0 (rating 1-5, comment, unique por `payment_id`) |
| Painel Administrativo Flutter Web | Moderação via Supabase Studio no MVP |
| Relatórios PDF mensais automáticos | Longo prazo |
| Integração com sistemas de ONGs (PIPA, APAC) | Longo prazo |
| API pública para parceiros (supermercados, redes) | Após consolidação na RMR |
| Programa de gamificação com leaderboard e cupons tangíveis | Médio prazo |
| Internacionalização (ES, EN) | Foco em PT-BR para validação no Nordeste |

---

## 4. Personas

| Persona | Pode Comprar | Pode Vender | Pode Doar |
|---------|-------------|-------------|-----------|
| **PF** (Pessoa Física) | ✅ | ✅ | ✅ |
| **PJ** (Pessoa Jurídica) | ✅ | ✅ | ✅ |
| **ONG** | ✅ | ✅ | ✅ |

> ⚠️ **Regra financeira universal:** O split de 40% Conecta Mesa / 60% vendedor aplica-se a **todas as transações de venda**, independentemente da persona. A flag `is_ong` **não altera o preço de venda**. A isenção de take rate (= 0%) só se aplica ao **resgate de doações gratuitas** no fluxo B2G, onde não há transação financeira.

### Cadastro por Persona

**Pessoa Física**
- Fluxo de cadastro padrão: nome, e-mail, CPF, telefone, senha, aceite de termos

**Pessoa Jurídica**
- Fluxo padrão + campo adicional: **segmento de atuação** (padaria, hortifruti, supermercado, etc.)

**ONG**
- Mesmo fluxo do PJ
- Diferenciada pela opção: *"Sou uma ONG"*
- Internamente cadastrada como `companyType: "ASSOCIATION"` na API do Asaas
- Exige documentação adicional no onboarding Asaas: Ata de Eleição + documentos padrão (selfie + documento de identidade)

---

## 5. Jornadas do Usuário

### 5.1 Jornada do Consumidor B2C (Compra)
1. Abre o app → feed geolocalizado de anúncios ou mapa de pins
2. Filtra por categoria, tipo (venda/doação) ou distância
3. Seleciona anúncio → visualiza ficha técnica completa
4. Toca em "Reservar" → escolhe forma de pagamento (Pix ou cartão)
5. Realiza o pagamento → recebe confirmação e QR Code de retirada
6. Acessa chat para combinar retirada com o vendedor
7. No local: exibe QR Code → vendedor escaneia → entrega confirmada
8. Avalia o vendedor e o alimento

### 5.2 Jornada do Vendedor/Doador (Venda)
1. Solicita ativação como vendedor na plataforma
2. Passa por verificação de identidade (documentos + selfie)
3. Recebe notificação push e e-mail de aprovação
4. Toca em "Anunciar" → captura foto via câmera → insere data de validade manualmente via DatePicker
5. Preenche formulário (descrição, peso, preço ou "Doação") → publica
6. Recebe notificação de reserva/pagamento
7. Combina retirada via chat
8. Escaneia QR Code do comprador → entrega confirmada
9. Saldo (60% do valor líquido) muda de **Pendente** para **Disponível** na Carteira Digital
10. Saca via Pix quando desejar

### 5.3 Jornada da ONG (Resgate de Doação B2G)
1. Cadastra-se como ONG → solicita verificação institucional
2. Recebe Selo ONG Verificada após aprovação
3. Acessa feed com filtro de doações + heatmap de hotspots
4. Reserva itens do pool de doações gratuitas (take rate = 0% — não há transação financeira nesse fluxo)
5. Combina retirada via chat
6. Confirma retirada via QR Code

> ℹ️ Se a ONG anunciar e **vender** um produto na plataforma (ex: arrecadação de fundos), o split 40/60 é aplicado normalmente — igual a qualquer outro vendedor.

---

## 6. Histórias de Usuário

### Módulo: Autenticação

| ID | Tipo | História | Critérios de Aceitação | Prioridade |
|----|------|----------|------------------------|------------|
| US-01 | [Todos] | Como novo usuário, quero me cadastrar com nome, e-mail, CPF (ou CNPJ), telefone e senha. | Campos obrigatórios validados. CPF/CNPJ validado por algoritmo. Senha ≥ 8 caracteres. Confirmação de e-mail enviada. | 🔴 Alta |
| US-02 | [Todos] | Como usuário cadastrado, quero fazer login com e-mail e senha. | Login validado via Supabase Auth. Sessão persistida. Token JWT renovado automaticamente. | 🔴 Alta |
| US-03 | [Todos] | Como usuário, quero redefinir minha senha via e-mail. | Link enviado em até 60s. Expira em 24h. Nova senha salva com hash bcrypt. | 🟡 Média |
| US-04 | [🏪 Comerciante B2B] [🤝 ONG/B2G] | Como empresa ou ONG, quero me cadastrar validando meu CNPJ via Brasil API e assinando o Termo Sanitário. | [CORRIGIDO v2.0] Busca de CNAE/Segmento via Brasil API. Assinatura obrigatória do Termo de Responsabilidade Sanitária — registrada na tabela `sanitary_terms` como registro auditável (`term_version`, `agreed_at`, `ip_address`, `device_info`), não como booleano em `business`. Enum user_roles salvo separadamente. | 🔴 Alta |

### Módulo: Marketplace

| ID | Tipo | História | Critérios de Aceitação | Prioridade |
|----|------|----------|------------------------|------------|
| US-05 | [🛒 Consumidor B2C] [🤝 ONG/B2G] | Como consumidor ou ONG, quero ver feed de anúncios disponíveis com distância exibida. | [CORRIGIDO v2.0] Feed cronológico (`SELECT * FROM listings WHERE status = 'DISPONIVEL' ORDER BY created_at DESC`). A distância exibida nos cards é calculada no cliente via Mapbox SDK + permissão de GPS do celular. Sem filtro de raio ou ordenação geoespacial no backend. | 🔴 Alta |
| US-06 | [🛒 Consumidor B2C] [🤝 ONG/B2G] | Como consumidor, quero filtrar por categoria e tipo (venda/doação). | Chips de filtro visíveis. Filtros combinados funcionam. Estado persiste na sessão. | 🔴 Alta |
| US-07 | [🛒 Consumidor B2C] [🤝 ONG/B2G] | Como consumidor, quero ver ficha técnica completa do produto. | Todos os campos obrigatórios exibidos. Selo Parceiro Ponte visível. CTA sticky no rodapé. | 🔴 Alta |
| US-08 | [🏪 Comerciante B2B] [👤 PF Doador] | Como vendedor, quero publicar anúncio validando o Checklist Sanitário e com GPS automático. | Checkbox obrigatório do Checklist Sanitário. Câmera nativa abre via image_picker. Formulário ≤ 3 telas. | 🔴 Alta |
| US-09 | [🏪 Comerciante B2B] [👤 PF Doador] | Como vendedor, quero que produto vencido seja bloqueado automaticamente. | [CORRIGIDO v2.0] Vendedor insere data de validade manualmente via DatePicker. Sistema compara com `DateTime.now()` e bloqueia publicação se data pretérita. Mensagem de erro: "Produto vencido — publicação bloqueada." | 🔴 Alta |
| US-10 | Sistema | Como plataforma, quero converter automaticamente produtos não vendidos em doações B2G. | Edge Function verifica a cada hora. Produto convertido 4h antes do prazo. Vendedor notificado. Produto aparece no feed de ONGs. | 🔴 Alta |

### Módulo: Mapa Interativo

| ID | Tipo | História | Critérios de Aceitação | Prioridade |
|----|------|----------|------------------------|------------|
| US-MAP01 | [🛒 Consumidor B2C] [🤝 ONG/B2G] | Como consumidor, quero mapa com pins dos anúncios próximos. | Mapbox GL carregado. Pins atualizados via Realtime. Tap abre sheet de detalhe. Alerta em 80% do limite mensal. | 🔴 Alta |
| US-MAP02 | [🤝 ONG/B2G] | Como ONG, quero heatmap de doações por bairro para planejar coleta. | Heatmap por densidade renderizado. Filtro exclusivo para doações. Atualização em tempo real. | 🔴 Alta |
| US-MAP03 | [🏪 Comerciante B2B] | Como comerciante, quero ver densidade de consumidores próximos para calibrar anúncios. | Raio de 2 km ao redor do pin. Indicador alto/médio/baixo baseado em buscas. Dados anonimizados. | 🟡 Média |

### Módulo: Pagamento

| ID | Tipo | História | Critérios de Aceitação | Prioridade |
|----|------|----------|------------------------|------------|
| US-11 | [🛒 Consumidor B2C] | Como consumidor, quero pagar via PIX com QR Code dinâmico. | QR Code gerado em < 3s. Copia-e-cola disponível. Polling a cada 3s. Confirmação exibida em < 5s. | 🔴 Alta |
| US-12 | [🛒 Consumidor B2C] | Como consumidor, quero pagar com cartão com 3-DS 2.0. | 3-DS obrigatório acima de R$ 200. Asaas Score em todas as transações. Dados do cartão nunca trafegam pelo servidor do Conecta Mesa. | 🔴 Alta |
| US-13 | Sistema | Como plataforma, quero receber webhook com validação HMAC. | Assinatura HMAC validada antes de processar. Status atualizado automaticamente. Notificação push enviada. | 🔴 Alta |
| US-14 | [🛒 Consumidor B2C] [🏪 Comerciante B2B] | Como consumidor, quero confirmar entrega via QR Code para liberar repasse ao vendedor. | QR Code único por pedido. Vendedor escaneia via mobile_scanner. Status muda para ENTREGUE. Saldo do vendedor muda de PENDENTE para DISPONIVEL. | 🔴 Alta |

### Módulo: Carteira Digital

| ID | Tipo | História | Critérios de Aceitação | Prioridade |
|----|------|----------|------------------------|------------|
| US-15 | [🏪 Comerciante B2B] [👤 PF Doador] | Como vendedor, quero ver meu saldo disponível e pendente na Carteira Digital. | Saldo disponível (retiradas confirmadas) e saldo pendente (pagos, aguardando retirada) exibidos separadamente. Histórico de vendas com data, valor bruto, valor líquido (60%) e status. | 🔴 Alta |
| US-16 | [🏪 Comerciante B2B] [👤 PF Doador] | Como vendedor, quero sacar meu saldo via Pix para minha conta bancária. | Saque disponível apenas para saldo com status DISPONIVEL. Chave Pix cadastrada previamente. Transferência processada pela API Asaas. Confirmação exibida no app. | 🔴 Alta |
| US-17 | [🏪 Comerciante B2B] [👤 PF Doador] | Como vendedor, quero cancelar uma compra e acionar estorno automático. | Botão "Cancelar compra" visível apenas para pedidos com status PENDENTE. Estorno automático via Asaas Refund API. Comprador e vendedor notificados. Saldo desfeito. | 🔴 Alta |

### Módulo: Chat e Notificações

| ID | Tipo | História | Critérios de Aceitação | Prioridade |
|----|------|----------|------------------------|------------|
| US-18 | [Todos] | Como interessado em anúncio, quero enviar mensagem ao vendedor/doador diretamente pelo app. | Chat via Supabase Realtime. Mensagens em tempo real. Notificação push ao receber mensagem. Histórico persistido. | 🔴 Alta |
| US-19 | [🛒 Consumidor B2C] [🤝 ONG/B2G] | Como usuário, quero notificação push de produto disponível em até 2 km. | Notificação com nome, distância e tempo restante. Toque abre detalhe do anúncio. Usuário configura raio. | 🟡 Média |

### Módulo: Dashboard de Impacto

| ID | Tipo | História | Critérios de Aceitação | Prioridade |
|----|------|----------|------------------------|------------|
| US-20 | [Todos] | Como usuário, quero ver meu impacto individual (CO₂, kg, refeições, valor). | 4 cards de KPI em tempo real. Coeficientes FAO 2013. Layout responsivo. | 🔴 Alta |
| US-21 | [Todos] | Como usuário, quero gráfico semanal de evolução de resgates. | Barras com 8 semanas via fl_chart. Tooltip interativo. Cores Verde e Laranja Ponte. | 🟡 Média |

### Módulo: Selos e Verificação

| ID | Tipo | História | Critérios de Aceitação | Prioridade |
|----|------|----------|------------------------|------------|
| US-22 | [🏪 Comerciante B2B] [🤝 ONG/B2G] | Como empresa ou ONG, quero solicitar verificação para obter Selo Parceiro Ponte. | Formulário com upload de documentos. CNPJ via Brasil API. Status visível no perfil. Notificação de aprovação/rejeição. | 🟡 Média |
| US-23 | [🛒 Consumidor B2C] [🤝 ONG/B2G] | Como usuário do feed, quero identificar parceiros verificados por selos coloridos. | VerifiedBadge em card e detalhe. Empresa: Laranja (#FF9800). ONG: Verde (#4CAF50). Parceiro Ponte: gradiente. | 🔴 Alta |

---

## 7. Requisitos Funcionais

### RF-01: Autenticação e Perfis

| ID | Tipo | Requisito | Impl. Técnica | Status |
|----|------|-----------|---------------|--------|
| RF-01.1 | [Todos] | Cadastro PF: nome, e-mail, CPF, telefone, senha, aceite de termos | Supabase Auth + tabela profiles | ✅ MVP |
| RF-01.2 | [🏪 Comerciante B2B] [🤝 ONG/B2G] | Cadastro PJ: razão social, CNPJ, segmento, responsável, e-mail, telefone | tabela profiles + segmento enum | ✅ MVP |
| RF-01.3 | [Todos] | Login com e-mail e senha — sem OAuth, Google Sign-In, OTP SMS | Supabase Auth signInWithPassword | ✅ MVP |
| RF-01.4 | [Todos] | Recuperação de senha via e-mail | Supabase Auth resetPasswordForEmail | ✅ MVP |
| RF-01.5 | [⚙️ Admin] | [CORRIGIDO v2.0] Tabela `user_roles` separada de profiles com PK composta `(user_id, role)` e enum `user_role` (admin \| pf \| pj \| ong) — **não "empresa"** | PostgreSQL + RLS | ✅ MVP |
| RF-01.6 | [⚙️ Admin] | RLS habilitado em todas as tabelas — usuários acessam apenas seus próprios dados | Supabase RLS Policies | ✅ MVP |

### RF-02: Marketplace e Anúncios

| ID | Tipo | Requisito | Impl. Técnica | Status |
|----|------|-----------|---------------|--------|
| RF-02.1 | [🛒 Consumidor B2C] [🤝 ONG/B2G] | [CORRIGIDO v2.0] Feed cronológico com busca textual e filtros por categoria/tipo. A distância exibida nos cards é calculada no cliente via Mapbox SDK + GPS do celular — sem ordenação geoespacial no backend | Supabase Database + geolocator + Mapbox SDK | ✅ MVP |
| RF-02.2 | [🛒 Consumidor B2C] [🤝 ONG/B2G] | Card de anúncio: foto, nome, desconto, distância, tempo restante e selo | Flutter Widget | ✅ MVP |
| RF-02.3 | [🛒 Consumidor B2C] [🤝 ONG/B2G] | [CORRIGIDO v2.0] Tela de detalhe: foto HD, descrição, macronutrientes (`proteins_g`, `carbs_g`, `fats_g`, `calories_kcal`), alérgenos (`allergens TEXT[]`), validade, GPS (`lat`, `lng`), chips e CTA sticky. Todos os campos nutricionais ficam na própria tabela `listings` | Flutter Screen | ✅ MVP |
| RF-02.4 | [🏪 Comerciante B2B] [👤 PF Doador] | Publicação: câmera nativa, GPS automático, formulário com peso, preço ou Doação | image_picker + geolocator | ✅ MVP |
| RF-02.5 | [🏪 Comerciante B2B] [👤 PF Doador] | [CORRIGIDO v2.0] Validação de data de validade manual via DatePicker nativo. Bloqueio de publicação se data pretérita (comparação `DateTime.now()` no formulário). ~~OCR on-device descartado; tabela `ocr_validation_logs` removida~~ | DatePicker Flutter | ✅ MVP |
| RF-02.6 | Sistema | Edge Function: verifica produtos a cada hora; converte B2C → B2G 4h antes do prazo | Supabase Edge Function + cron | ✅ MVP |
| RF-02.7 | [Todos] | Realtime: atualização instantânea de disponibilidade ao confirmar reserva (evita overselling) | Supabase Realtime WebSocket | ✅ MVP |
| RF-02.8 | [🏪 Comerciante B2B] [👤 PF Doador] | Storage de fotos com CDN e RLS por proprietário | Supabase Storage | ✅ MVP |

### RF-02B: Mapa Interativo (Mapbox GL)

| ID | Tipo | Requisito | Impl. Técnica | Status |
|----|------|-----------|---------------|--------|
| RF-MAP.1 | [🛒 Consumidor B2C] [🤝 ONG/B2G] | Mapa com pins dinâmicos atualizados via Realtime | mapbox_maps_flutter + Supabase Realtime | ✅ MVP |
| RF-MAP.2 | [🤝 ONG/B2G] | Heatmap de hotspots de doações por bairro em tempo real | Mapbox GL Heatmap Layer | ✅ MVP |
| RF-MAP.3 | [Todos] | Monitoramento do tier gratuito (50k loads/mês); alerta em 80% | Mapbox Token Usage API | ✅ MVP |
| RF-MAP.4 | [Todos] | Fallback gracioso para feed em lista se limite atingido | Flutter conditional render | ✅ MVP |
| RF-MAP.5 | [⚙️ Admin] | Arquitetura de camadas dinâmicas: pins, heatmap e raio adicionados/removidos em runtime | Mapbox Style Layers API | ✅ MVP |

### RF-03: Pagamento (Asaas)

| ID | Tipo | Requisito | Impl. Técnica | Status |
|----|------|-----------|---------------|--------|
| RF-03.1 | [🛒 Consumidor B2C] | PIX dinâmico: QR Code com TXID único, copia-e-cola e polling a cada 3s | Asaas POST /v3/payments + qr_flutter | ✅ MVP |
| RF-03.2 | [🛒 Consumidor B2C] | Cartão de crédito com 3-DS 2.0 obrigatório acima de R$ 200; Asaas Score em todas as transações | Asaas Cartão + 3-DS | ✅ MVP |
| RF-03.3 | Sistema | Edge Function create-payment: autentica com ASAAS_API_KEY (secret), cria cobrança e retorna QR ou link 3-DS | Supabase Edge Function | ✅ MVP |
| RF-03.4 | Sistema | Edge Function asaas-webhook: valida HMAC, processa PAYMENT_CONFIRMED / PAYMENT_RECEIVED / PAYMENT_OVERDUE | Supabase Edge Function | ✅ MVP |
| RF-03.5 | [🏪 Comerciante B2B] [👤 PF Doador] | Split automático Asaas: **40% conta-pai (Conecta Mesa) / 60% subconta do vendedor**, calculado sobre o netValue (valor líquido após taxas Asaas) | Asaas Split API | ✅ MVP |
| RF-03.6 | [🛒 Consumidor B2C] [🏪 Comerciante B2B] | QR Code de confirmação de entrega: consumidor exibe, vendedor escaneia; dispara liberação do saldo na Carteira Digital | qr_flutter + mobile_scanner | ✅ MVP |
| RF-03.7 | Sistema | Estorno automático via POST /v3/payments/{id}/refund para pedidos não retirados em 2h ou cancelados enquanto PENDENTE | Asaas Refund API | ✅ MVP |
| RF-03.8 | [🤝 ONG/B2G] | Resgates B2G (doações gratuitas do pool B2C → B2G): take rate = 0% — sem split configurado, pois não há transação financeira. **Vendas realizadas por ONGs seguem o split universal 40/60 como qualquer outro vendedor.** | Asaas — sem split configurado para o fluxo de doação | ✅ MVP |

### RF-04: Carteira Digital

| ID | Tipo | Requisito | Impl. Técnica | Status |
|----|------|-----------|---------------|--------|
| RF-04.1 | [🏪 Comerciante B2B] [👤 PF Doador] | Exibir saldo disponível (retiradas confirmadas) e saldo pendente (pagos, aguardando retirada) separadamente | Banco de dados interno + Asaas API | ✅ MVP |
| RF-04.2 | [🏪 Comerciante B2B] [👤 PF Doador] | Histórico de vendas: data, valor bruto, valor líquido (60% do netValue), forma de pagamento e status | Supabase Database | ✅ MVP |
| RF-04.3 | [🏪 Comerciante B2B] [👤 PF Doador] | [CORRIGIDO v2.0] Saque via Pix: transferência do saldo DISPONIVEL para chave Pix cadastrada; saque só permitido após status = DISPONIVEL. Cada saque na tabela `withdrawals` agora rastreia `payment_ids UUID[]` — array de `payments.id` que compõem o saldo sacado, permitindo detalhar "quais transações geraram este saque" na Carteira Digital | Asaas POST /v3/transfers + tabela `withdrawals` | ✅ MVP |
| RF-04.4 | [🏪 Comerciante B2B] [👤 PF Doador] | Cadastro de chave Pix ou dados bancários (banco, agência, conta, tipo) para recebimento | Supabase Database + Asaas API | ✅ MVP |
| RF-04.5 | Sistema | Controle de liberação de saldo gerenciado pelo banco de dados do Conecta Mesa: status PENDENTE → DISPONIVEL somente após confirmação de retirada via QR Code | Supabase Database | ✅ MVP |
| RF-04.6 | Sistema | Cancelamento com status PENDENTE aciona estorno automático via Asaas Refund API; estorno retorna à origem do pagamento; split desfeito automaticamente pelo Asaas | Asaas Refund API | ✅ MVP |
| RF-04.7 | Sistema | [CORRIGIDO v2.0] Disputa pós-DISPONIVEL cria registro na tabela `disputes` com `deadline_at = created_at + 48h`, `evidence_urls TEXT[]`, `resolved_by`, `resolution_note` e `asaas_refund_id`. Status rastreado via enum `dispute_status` (OPEN → UNDER_REVIEW → RESOLVED_REFUND \| RESOLVED_DENIED) para análise pela equipe Conecta Mesa | Supabase Database (tabela `disputes`) | ✅ MVP |

### RF-05: Chat e Notificações

| ID | Tipo | Requisito | Impl. Técnica | Status |
|----|------|-----------|---------------|--------|
| RF-05.1 | [Todos] | [CORRIGIDO v2.0] Chat assíncrono por anúncio com histórico persistido e mensagens em tempo real. Mensagens agora agrupadas pela tabela `conversations` (FK `conversation_id` em `messages`), que armazena `last_message_at` e `last_message_preview` (100 chars) — permite listar "conversas ativas" na UI sem buscar mensagens brutas. Participantes rastreados via Exclusive Arcs (A/B) | Supabase Realtime + tabelas `conversations` e `messages` | ✅ MVP |
| RF-05.2 | [Todos] | [CORRIGIDO v2.0] Push notifications para: nova mensagem, confirmação de pagamento, alerta de produto próximo, produto convertido para doação, saldo liberado na carteira. Todas as notificações são persistidas na tabela `notifications` com `type` (enum de 9 tipos), `context_listing_id`, `context_payment_id` e `read_at` — habilitando a Central de Notificações como tela de histórico | flutter_local_notifications + Supabase (tabela `notifications`) | ✅ MVP |

### RF-06: Dashboard de Impacto

| ID | Tipo | Requisito | Impl. Técnica | Status |
|----|------|-----------|---------------|--------|
| RF-06.1 | [Todos] | [CORRIGIDO v2.0] 4 cards de KPI: CO₂ evitado (2,5 kg/kg — FAO 2013), kg resgatados, refeições (1,2/kg — WRAP UK), valor salvo (R$ 9,50/kg). Métricas calculadas na tabela `impact_metrics` por `payment_id` (transação individual) quando `payment.status` muda para DISPONIVEL — permite exibir impacto imediatamente após cada compra confirmada | constants.dart + tabela `impact_metrics` | ✅ MVP |
| RF-06.2 | [Todos] | Gráfico de barras semanal com 8 semanas (Verde Ponte → Laranja Ponte no hover) | fl_chart | ✅ MVP |
| RF-06.3 | [Todos] | Card de impacto individual com gradiente Verde Ponte | Flutter Widget | ✅ MVP |
| RF-06.4 | [🏪 Comerciante B2B] [🤝 ONG/B2G] | Card promocional do Selo Parceiro Ponte com CTA para verificação (apenas PJ não verificados) | Flutter Widget | ✅ MVP |

### RF-07: Selos Parceiro Ponte

| ID | Tipo | Requisito | Impl. Técnica | Status |
|----|------|-----------|---------------|--------|
| RF-07.1 | [Todos] | Widget VerifiedBadge: Empresa Verificada (Laranja #FF9800), ONG Verificada (Verde #4CAF50), Parceiro Ponte (gradiente) | Flutter Widget | ✅ MVP |
| RF-07.2 | [🏪 Comerciante B2B] [🤝 ONG/B2G] | [CORRIGIDO v2.0] Formulário de verificação com upload de CNPJ + documentos; validação via Brasil API; aprovação manual admin. Solicitações persistidas na tabela `verification_requests` com `level_requested` (VERIFIED \| PARCEIRO_PONTE), `document_urls TEXT[]`, `status` enum `kyc_status` (PENDING → UNDER_REVIEW → APPROVED \| REJECTED), `reviewed_by`, `reviewed_at` e `rejection_reason`. Separado de `kyc_documents`: KYC = identidade, `verification_requests` = reputação institucional | Supabase Storage + Brasil API + tabela `verification_requests` | ✅ MVP |
| RF-07.3 | [⚙️ Admin] | Critérios: Empresa = CNPJ ativo + comprovante; ONG = CNPJ associação + estatuto + comprovante; Parceiro Ponte = verificação + 6 meses de doação recorrente | tabela verification_requests | ✅ MVP |

### RF-08: Arquitetura de Banco de Dados e Cron Jobs

| ID | Requisito | Descrição |
|----|-----------|-----------|
| RF-08.1 | [CORRIGIDO v2.0] Tabelas Core de Entidades | `personal` e `business` — dois perfis distintos. `business.is_ong` inferido pelo CNAE via Brasil API. `user_roles` — PK composta `(user_id, role)` com enum: admin, pf, pj, ong. Ambas as tabelas agora possuem: `kyc_level INT` (1=comprar, 2=vender, 3=sacar — KYC progressivo), `asaas_account_status` enum (NOT_CREATED \| PENDING \| APPROVED \| REJECTED), `asaas_wallet_id`, `kyc_reminder_sent_at TIMESTAMP`. `business` também possui `asaas_regulatory_until TIMESTAMP` (Bacen: 60 dias após 1ª subconta). |
| RF-08.1b | [CORRIGIDO v2.0] KYC e Compliance | `kyc_documents` — fonte da verdade do KYC (selfie, documento, activity_proof, bylaws, election_minutes) com `reviewed_by`, `reviewed_at`, `admin_feedback`, `asaas_feedback TEXT` (motivo de rejeição retornado pelo Asaas via webhook), `last_kyc_attempt_at TIMESTAMP` (rate-limit de reenvio) e `verification_requested_at TIMESTAMP` (quando solicitou Selo). `sanitary_terms` — registro auditável do Termo Sanitário (`term_version`, `agreed_at`, `ip_address`, `device_info`). `pix_keys` — chaves Pix; referenciada por `withdrawals`. |
| RF-08.2 | [CORRIGIDO v2.0] Tabelas Operacionais | `listings` (anúncios com `lat`/`lng` numéricos, campos nutricionais `proteins_g`/`carbs_g`/`fats_g`/`calories_kcal`/`allergens TEXT[]`, checklist sanitário `sanitary_verified`/`package_integrity`/`thermal_control`, flag `pool_ong`, status enum incluindo `EXPIRADO` — `pickup_deadline` venceu sem ação, controlado por Edge Function), `payments` (com `gross_value`, `asaas_fee`, `net_value`, `platform_fee` 40%, `seller_value` 60%, `delivery_code`, `retrieved_at`, `asaas_webhook_event`), `conversations` (agrupador de mensagens com `last_message_at`, `last_message_preview`), `messages` (Chat/Realtime com `read_at TIMESTAMP`, FK `conversation_id`). ~~`ocr_validation_logs` removida (OCR descartado)~~ |
| RF-08.3 | [CORRIGIDO v2.0] Tabela de Reputação | `reputation_scores` com campos: `points INTEGER` (lifetime, default 100), `points_this_month INTEGER` (base do ranking mensal “Heróis da Ponte”, resetado no 1º dia do mês via Edge Function), `no_show_count`, `abusive_cancel_count`, `is_blocked`, `blocked_until TIMESTAMP`, `last_strike_at TIMESTAMP` e `trust_store_badge`. `reputation_events` — log auditável de cada penalidade/bônus com `points_delta`, `reason` (enum: `no_show` \| `abusive_cancellation` \| `other`) e `payment_id`. `reputation_monthly_snapshots` — snapshots mensais (`year_month CHAR(7)`, `points`, `rank`) gravados antes do reset mensal para ranking histórico. |
| RF-08.3b | [CORRIGIDO v2.0] Tabelas Financeiras/Social | `disputes` (pós-DISPONIVEL com `deadline_at`, `evidence_urls TEXT[]`, `resolved_by`, `resolution_note`, `asaas_refund_id`, `status` enum `dispute_status`). `notifications` (persistidas com `type` enum 9 tipos, `context_listing_id`, `context_payment_id`, `read_at`). `impact_metrics` (FK para `payment_id` e `listing_id`). `reviews` (avaliações pós-entrega: `rating` 1-5, `comment`, `payment_id UNIQUE`, avaliador/avaliado via Exclusive Arcs). `user_settings` (preferências de UX: `notification_radius_km`, `push_aggressive_opt_in`, `heatmap_enabled`). `withdrawals` com `payment_ids UUID[]` e `status` enum `withdrawal_status` para rastreio de saldo. |
| RF-08.4 | [CORRIGIDO v2.0] Edge Functions (Cron Jobs) | `temporal_conversion` (4h B2C→B2G), `no_show_cancellation` (2h cancelamento automático e estorno via Asaas Refund), `listing_expiration` (marca como EXPIRADO quando `pickup_deadline` vence sem ação) e `reputation_monthly_reset` (1º dia do mês: grava snapshot em `reputation_monthly_snapshots`, reseta `points_this_month = 0`). |

---

## 8. Requisitos Não Funcionais

### 8.1 Performance

| Requisito | Meta | Instrumento |
|-----------|------|-------------|
| [CORRIGIDO v2.0] Feed principal | < 2s em 4G | Flutter DevTools |
| Cold start do app | < 3s em dispositivo mid-range | Flutter DevTools |
| Geração do QR Code PIX | < 3s | Monitoring Asaas |
| Latência de mensagens no chat | < 500ms | Supabase Dashboard |
| ~~OCR de validade on-device~~ | ~~< 2s~~ | [CORRIGIDO v2.0] **Descartado** — substituído por DatePicker manual |
| Tamanho do bundle Flutter | < 20 MB (APK/IPA) | Build output |
| Imagens: lazy loading + compressão 80% | Sem layout shift | Supabase CDN |
| Carregamento do mapa Mapbox | < 3s em 4G | Mapbox Monitor |

### 8.2 Segurança
- Autenticação exclusiva por e-mail e senha via Supabase Auth — sem OAuth, sem Google Sign-In
- Row-Level Security (RLS) em todas as tabelas PostgreSQL
- Tabela `user_roles` separada de `profiles` — prevenção de privilege escalation
- `ASAAS_API_KEY` armazenada como variável de ambiente secreta na Edge Function; dados de cartão nunca trafegam pelo servidor do Conecta Mesa (PCI-compliant)
- Webhook validado por assinatura HMAC antes de qualquer processamento
- Supabase Storage com RLS por proprietário do anúncio
- CPF e CNPJ armazenados com criptografia at-rest no PostgreSQL
- Token Mapbox com restrições de domínio configuradas no painel Mapbox

### 8.3 Usabilidade
- Alvos de toque mínimo de 48px (Material Design 3)
- Bottom Navigation Bar adaptada por persona (ver seção Navbars)
- CTAs sticky nas telas de ação (detalhe do anúncio, checkout, publicação)
- Formulário de publicação ≤ 3 telas
- Tipografia: Plus Jakarta Sans (500–800) para títulos; Inter (400–700) para corpo via google_fonts
- Border-radius 16px em cards; pill (BorderRadius.circular(9999)) em badges e chips
- Interfaces de alto contraste para maturidade digital variável do público-alvo

### 8.4 Acessibilidade
- Contraste mínimo AA: texto escuro (#333333) em fundo branco; texto branco em Verde Ponte (#4CAF50)
- Semantics do Flutter em todos os widgets interativos
- Suporte a Dynamic Type via textScaleFactor
- Feedback háptico em ações críticas (confirmação de pagamento, bloqueio de validade vencida)
- Navegação por gestos preservada

### 8.5 Escalabilidade
- Supabase Pro Plan para até 5.000 MAU com custo < R$ 500/mês na fase de validação
- Arquitetura serverless com Edge Functions (2M invocações/mês incluídas)
- Flutter multiplataforma (iOS + Android) a partir de um único codebase Dart
- CDN Supabase Storage para imagens fotográficas
- Mapbox tier gratuito (50k loads/mês) cobre o período de validação; upgrade somente após 30k loads/mês consistentes

---

## 9. Regras de Negócio

### 9.1 Publicação e Validade

| ID | Tipo | Regra | Ação do Sistema |
|----|------|-------|-----------------|
| RN-01 | [🏪 Comerciante B2B] [👤 PF Doador] | [CORRIGIDO v2.0] Produto com data de validade vencida NÃO pode ser publicado. Vendedor insere data manualmente via DatePicker; sistema compara com `DateTime.now()` e bloqueia se pretérita | Bloqueio imediato no formulário + alerta visual vermelho: "Produto vencido — publicação bloqueada." |
| RN-02 | Sistema | Produto não vendido 4h antes do prazo de retirada é convertido automaticamente para "Doação" | Edge Function cron horário; atualiza tipo_anuncio = 'doacao', comissao = 0; notifica vendedor e ONGs |
| RN-03 | [🤝 ONG/B2G] | ONGs com Selo ONG Verificada acessam o pool de **doações gratuitas** sem comissionamento (take rate = 0%). Esse fluxo não tem transação financeira. **Se a ONG vender um produto na plataforma, o split 40/60 é aplicado normalmente.** | Filtro de feed por tipo = 'doacao'; campo comissao = 0 apenas na transação B2G de resgate gratuito |
| RN-04 | [🏪 Comerciante B2B] [👤 PF Doador] | Foto do produto OBRIGATÓRIA para publicação | Validação no formulário Flutter; campo foto_url NOT NULL |
| RN-05 | [🏪 Comerciante B2B] [👤 PF Doador] | GPS OBRIGATÓRIO para publicação; se negado, exibe alerta e bloqueia | geolocator verifica permissão antes de habilitar botão |
| RN-MAP01 | Sistema | Uso Mapbox monitorado; alerta interno ao atingir 80% do limite mensal (50k loads) | Mapbox Token Usage API consultada diariamente |

### 9.2 Estados do Pedido

| ESTADO | Tipo Afetado | Descrição | Transição |
|--------|-------------|-----------|-----------|
| DISPONIVEL | [Todos] | Anúncio publicado e disponível no feed | → RESERVADO |
| RESERVADO | [🛒 Consumidor B2C] [🏪 Comerciante B2B] | Consumidor reservou; aguardando pagamento | → PAGO (webhook) → DISPONIVEL (expirou em 15min) |
| PAGO | [🛒 Consumidor B2C] [🏪 Comerciante B2B] | Pagamento confirmado; saldo marcado como PENDENTE | → ENTREGUE (QR Code) → CANCELADO_NO_SHOW (não retirado em 2h) |
| ENTREGUE | [🛒 Consumidor B2C] [🏪 Comerciante B2B] | QR Code confirmado; saldo muda para DISPONIVEL | Estado final (sucesso) |
| CANCELADO_NO_SHOW | [🛒 Consumidor B2C] [🏪 Comerciante B2B] | [CORRIGIDO v2.0] Pedido não retirado na janela de 2h ou cancelado antes. Estorno automático; penalidade em `reputation_scores` via incremento de `no_show_count` e registro em `reputation_events` com `reason = 'no_show'`. | → Asaas Refund API + `reputation_events` |
| EXPIRADO | Sistema | [CORRIGIDO v2.0] `pickup_deadline` venceu sem ação — Edge Function marca o anúncio como EXPIRADO automaticamente. Sem transação financeira envolvida. | Edge Function `listing_expiration` |
| DOACAO | [🤝 ONG/B2G] | Produto convertido automaticamente de B2C para pool B2G | → ENTREGUE_ONG (ONG confirma retirada) |

### 9.3 Regras de Pagamento e Receita

| ID | Tipo | Regra |
|----|------|-------|
| RN-06 | [🏪 Comerciante B2B] [👤 PF Doador] | **Take rate de 40%** sobre o netValue em transações B2C. O vendedor recebe **60% do netValue**. O netValue é o valor bruto descontadas as taxas do Asaas. Sem mensalidade para o vendedor. |
| RN-07 | [🤝 ONG/B2G] | **Resgates B2G** (doações gratuitas do pool) têm take rate = 0% — não há transação financeira. **Vendas por ONGs** (arrecadação de fundos) seguem o take rate universal de 40% sobre o netValue. |
| RN-08 | [🛒 Consumidor B2C] | Reserva PIX expira em 15 minutos sem pagamento; produto retorna ao status DISPONIVEL |
| RN-09 | [🛒 Consumidor B2C] | [CORRIGIDO v2.0] Produto pago e não retirado em 2h (No-Show): pedido cancelado/estornado automaticamente via Asaas Refund API. Comprador recebe incremento em `no_show_count` na tabela `reputation_scores` e registro em `reputation_events`. 3 No-Shows em 30 dias resultam em bloqueio via `blocked_until = NOW() + INTERVAL '7 days'`. |
| RN-10 | [🛒 Consumidor B2C] | Asaas Score obrigatório em todas as transações; 3-DS 2.0 obrigatório acima de R$ 200 |
| RN-11 | Sistema | Saldo do vendedor só pode ser sacado quando status = DISPONIVEL no banco de dados do Conecta Mesa |
| RN-12 | Sistema | [CORRIGIDO v2.0] Estorno em pedido PENDENTE é automático via API; estorno em pedido DISPONIVEL cria registro na tabela `disputes` com `deadline_at = created_at + 48h`, `evidence_urls TEXT[]`, `resolved_by` e `asaas_refund_id` |
| RN-13 | Sistema | O estorno retorna sempre à origem do pagamento (Pix → conta Pix do comprador; cartão → fatura do comprador). A plataforma não toca no dinheiro. O split é desfeito automaticamente pelo Asaas. |

### 9.4 Taxas de Saque do Vendedor (Asaas)

| Perfil do Vendedor | Taxa de Saque via Pix |
|--------------------|----------------------|
| PF e MEI | Gratuito (ilimitado) |
| PJ e ONG | Gratuito até 30 saques/mês; R$ 2,00 por saque adicional |

> ⚠️ A Conecta Mesa cobre os R$ 12,90 de criação de subconta por vendedor aprovado. Esse custo é absorvido pela plataforma — não é repassado ao vendedor.

---

## 10. Fluxos do Sistema

### 10.1 Fluxo de Compra com PIX

| Etapa | Ação | Sistema |
|-------|------|---------|
| 1 | Consumidor toca em "Reservar" no detalhe do anúncio | Flutter App |
| 2 | App cria reserva no Supabase; produto bloqueado (status = RESERVADO) | Supabase Realtime |
| 3 | App chama Edge Function create-payment com valor e método PIX | Supabase Edge Function |
| 4 | Edge Function cria cobrança via POST /v3/payments usando ASAAS_API_KEY (secret) | Asaas API |
| 5 | Asaas retorna QR Code dinâmico + copia-e-cola com TXID único (validade 15min) | Asaas API |
| 6 | App exibe QR Code via qr_flutter + botão copia-e-cola; polling a cada 3s | Flutter App |
| 7 | Consumidor paga no banco; Asaas envia webhook PAYMENT_CONFIRMED | Asaas Webhook |
| 8 | Edge Function valida HMAC; atualiza pedido para PAGO; saldo marcado como PENDENTE no banco de dados; notificação push para comprador e vendedor | Supabase Edge Function |
| 9 | Consumidor vai ao estabelecimento e exibe QR Code de entrega (qr_flutter) | Flutter App |
| 10 | Vendedor escaneia via mobile_scanner; status → ENTREGUE; saldo → DISPONIVEL no banco de dados | Flutter App + Supabase |
| 11 | [CORRIGIDO v2.0] Registro criado em `impact_metrics` com FK para `payment_id` da transação; Dashboard de Impacto atualizado | Supabase Database (tabela `impact_metrics`) |

### 10.2 Fluxo de Cancelamento e Estorno Automático

| Etapa | Ação | Sistema |
|-------|------|---------|
| 1 | Comprador toca em "Cancelar compra" (visível apenas com status PAGO/PENDENTE) | Flutter App |
| 2 | Sistema verifica: status = PENDENTE? | Supabase Database |
| 3a | SIM → chama POST /v3/payments/{id}/refund; atualiza status para CANCELADO; notifica comprador e vendedor via push + e-mail | Asaas Refund API + Supabase |
| 3b | NÃO (status = DISPONIVEL) → [CORRIGIDO v2.0] cria registro na tabela `disputes` com `deadline_at = created_at + 48h`, `evidence_urls TEXT[]`, `resolved_by` e `asaas_refund_id` para análise pela equipe Conecta Mesa | Tabela `disputes` |
| 4 | Webhook PAYMENT_REFUNDED confirma estorno; dinheiro retorna à origem do pagamento; split desfeito automaticamente | Asaas Webhook |

**Prazos de estorno por forma de pagamento:**

| Forma de Pagamento | Destino | Prazo |
|--------------------|---------|-------|
| Pix | Conta Pix do comprador | Instantâneo |
| Boleto | Conta bancária informada | Até 10 dias úteis |
| Cartão de crédito | Crédito na fatura | Até 2 faturas seguintes |
| Cartão de débito | Conta bancária | Até 10 dias úteis |

### 10.3 Fluxo de Saque da Carteira Digital

| Etapa | Ação | Sistema |
|-------|------|---------|
| 1 | Vendedor acessa Carteira → toca em "Sacar via Pix" | Flutter App |
| 2 | Sistema verifica se há saldo com status DISPONIVEL | Supabase Database |
| 3 | Vendedor confirma chave Pix cadastrada e valor do saque | Flutter App |
| 4 | App chama Edge Function que executa POST /v3/transfers com chave Pix e valor | Asaas API |
| 5 | Transferência processada; dinheiro cai na conta do vendedor | Asaas |
| 6 | Banco de dados atualizado; notificação push confirmando o saque | Supabase + flutter_local_notifications |

### 10.4 Fluxo de Conversão Temporal Automatizada (B2C → B2G)

| Etapa | Ação | Sistema |
|-------|------|---------|
| 1 | Vendedor publica anúncio com prazo_retirada definido | Supabase Database |
| 2 | Edge Function executa a cada 60 minutos via Supabase Cron | Supabase Edge Function |
| 3 | Query: tipo = 'venda' AND status = 'DISPONIVEL' AND prazo_retirada <= NOW() + INTERVAL '4 hours' | PostgreSQL |
| 4 | Atualiza tipo_anuncio = 'doacao', comissao = 0, pool_ong = true | Supabase Database |
| 5 | Notificação push ao vendedor | flutter_local_notifications |
| 6 | Produto aparece no feed de ONGs com Selo ONG Verificada | Supabase Realtime |

---

## 11. Arquitetura Financeira (Asaas BaaS White Label)

### 11.1 Visão Geral

O Conecta Mesa utiliza o **Asaas como infraestrutura financeira (BaaS — Banking as a Service)** no modelo **White Label**. O usuário final nunca vê a marca do Asaas — toda a experiência financeira é entregue pela Conecta Mesa.

```
Conecta Mesa (conta-pai / conta raiz Asaas)
    └── Vendedor PF / PJ / ONG (subconta BaaS por vendedor aprovado)
```

O dinheiro **nunca fica armazenado no banco de dados do Conecta Mesa**. O Supabase armazena apenas uma representação do saldo (espelho). O dinheiro real fica custodiado nas subcontas do Asaas, que é uma instituição de pagamento regulada pelo Banco Central do Brasil.

### 11.2 Split de Pagamento

O split é calculado sobre o **netValue** (valor bruto descontadas as taxas do Asaas):

```
Comprador paga R$ 100,00 via Pix
        ↓
Taxa Asaas (Pix dinâmico): R$ 0,00
netValue: R$ 100,00
        ↓  split automático no evento PAYMENT_RECEIVED
Vendedor (subconta): R$ 60,00 (60% do netValue)
Conecta Mesa (conta-pai): R$ 40,00 (40% do netValue)
```

```
Comprador paga R$ 100,00 via Boleto
        ↓
Taxa Asaas (boleto): R$ 1,99
netValue: R$ 98,01
        ↓  split automático
Vendedor (subconta): R$ 58,81 (60% do netValue)
Conecta Mesa (conta-pai): R$ 39,20 (40% do netValue)
```

### 11.3 Criação de Subcontas

- Cada vendedor/doador aprovado recebe uma subconta BaaS White Label no Asaas
- Taxa de criação: **R$ 12,90 por subconta aprovada** — coberta pela Conecta Mesa (não repassada ao vendedor)
- A Conecta Mesa deve manter saldo suficiente na conta-pai para cobrir criações simultâneas
- A `apiKey` da subconta é retornada **apenas uma vez** na criação — deve ser armazenada imediatamente com segurança

### 11.4 Tipos de Subconta por Persona

| Persona | companyType Asaas | Documentos Obrigatórios |
|---------|-------------------|------------------------|
| PF | — (pessoa física) | Selfie + documento de identidade |
| MEI | `MEI` | Selfie + documento de identidade |
| PJ | `LIMITED` / `INDIVIDUAL` | Selfie + documento de identidade |
| ONG | `ASSOCIATION` | Selfie + documento + **Ata de Eleição** |

### 11.5 Controle de Liberação de Saldo

O Asaas não conhece a lógica de "entrega confirmada por QR Code" — esse controle é exclusivo do banco de dados do Conecta Mesa:

```
PAGAMENTO RECEBIDO (Asaas)
        ↓
Split automático: 60% → subconta do vendedor
Banco de dados Conecta Mesa marca: status = PENDENTE
        ↓
Vendedor NÃO pode sacar (sistema bloqueia chamada à API)
        ↓
Comprador confirma retirada via QR Code
        ↓
Banco de dados atualiza: status = DISPONIVEL
        ↓
Vendedor PODE sacar via Pix
```

### 11.6 Período de Avaliação Regulatória

Conforme Resolução Conjunta nº 16/17 do Banco Central, os primeiros 60 dias após a primeira subconta criada são período de avaliação:

- Máximo de **10 subcontas** de diferentes titulares
- Máximo de **R$ 2.000,00** emitidos em cobranças por subconta
- Após atingir qualquer limite, novas criações são bloqueadas até aprovação do Asaas

> ⚠️ Planejar o lançamento para não atingir esses limites antes da aprovação regulatória.

### 11.7 Configuração White Label

O White Label deve ser **alinhado com o gerente de contas do Asaas antes de criar qualquer subconta em produção**. Subcontas criadas sem esse alinhamento saem no formato padrão (com acesso ao painel Asaas), não no White Label.

- **Sandbox:** solicitar liberação via suporte (gratuito, sem custo)
- **Produção:** alinhar com gerente de contas antes do lançamento

### 11.8 Taxas Asaas Resumidas

| Serviço | Taxa |
|---------|------|
| Pix dinâmico (API) | Gratuito |
| Boleto bancário | R$ 1,99 por boleto pago |
| Cartão de crédito à vista | 2,99% + R$ 0,49 |
| Cartão de débito | 1,89% + R$ 0,35 |
| Criação de subconta | R$ 12,90 por subconta aprovada |
| Saque Pix (PF/MEI) | Gratuito ilimitado |
| Saque Pix (PJ/ONG) | Gratuito até 30/mês; R$ 2,00 após |
| Saque TED | R$ 5,00 por transferência |

---

## 12. Universal Bottom Navbar (Todas as Personas)

O Conecta Mesa adota um padrão de **Bottom Navbar Universal de 6 abas**, nivelando a experiência entre PF, PJ (B2B) e ONG. 

| Ícone | Aba | Comportamento |
|---|---|---|
| 🏠 | **Início** | [CORRIGIDO v2.0] Feed principal cronológico. Distância nos cards calculada no cliente via Mapbox SDK + GPS. O Mapa pode ser acessado no topo do feed. |
| 👛 | **Carteira** | Saldo disponível/pendente, histórico de repasses financeiros e opção de saque. |
| ➕ | **Anunciar** | Formulário de criação de anúncio. Bloqueado se pendente de Verificação KYC ou Sanitária. |
| 📋 | **Histórico** | Controla as reservas/pedidos. Possui um *toggle superior* para alternar entre **"Compras/Resgates"** e **"Meus Anúncios"**. |
| 🌱 | **Impacto** | Dashboard de métricas (CO₂, refeições) e o ranking "Heróis da Ponte". Exibe o impacto coletivo e individual. |
| 👤 | **Perfil** | Status KYC, Reputação, Selos, Configurações de notificações push agressivas, Suporte e Logout. |

---

## 13. Dependências Técnicas

### 13.1 Stack Principal

| Camada | Tecnologia | Tipo Servido | Responsabilidade |
|--------|------------|-------------|-----------------|
| Frontend Mobile | Flutter + Dart | [Todos] | App iOS e Android (codebase único) |
| Gerenciamento de Estado | Riverpod | [Todos] | Padrão MVVM via providers |
| Backend (BaaS) | Supabase | [Todos] | Auth, Database, Realtime, Storage, Edge Functions |
| Pagamentos | Asaas API (White Label BaaS) | [🛒 Consumidor B2C] [🏪 Comerciante B2B] | PIX, Cartão, 3-DS, Split, Webhook HMAC, Subcontas, Transferências |
| ~~OCR on-device~~ | ~~google_mlkit_text_recognition~~ | — | [CORRIGIDO v2.0] **Descartado** — validação de validade agora via DatePicker manual |
| GPS | geolocator | [Todos] | Captura lat/lng, permissões nativas — [CORRIGIDO v2.0] coordenadas usadas apenas para plotar pins no Mapbox; distância calculada no cliente, não no backend |
| Câmera | image_picker | [🏪 Comerciante B2B] [👤 PF Doador] | Acesso à câmera nativa |
| QR Code Geração | qr_flutter | [🛒 Consumidor B2C] [🏪 Comerciante B2B] | QR Code PIX e confirmação de entrega |
| QR Code Leitura | mobile_scanner | [🏪 Comerciante B2B] | Leitura do QR Code de entrega |
| Gráficos | fl_chart | [Todos] | Dashboard de Impacto |
| Notificações | flutter_local_notifications | [Todos] | Push notifications por tipo de usuário |
| Tipografia | google_fonts | [Todos] | Plus Jakarta Sans + Inter sem CDN externo |
| Design System | Flutter Material 3 + ThemeData | [Todos] | Verde #4CAF50 (primary) + Laranja #FF9800 (secondary) |
| Validação CNPJ | Brasil API | [🏪 Comerciante B2B] [🤝 ONG/B2G] | Verificação automática de CNPJ |
| Mapa | mapbox_maps_flutter (Mapbox GL) | [🛒 Consumidor B2C] [🤝 ONG/B2G] | Feed visual geolocalizado. Tier gratuito: 50k loads/mês |

### 13.2 Infraestrutura de Custo (MVP — 5.000 MAU)

| Categoria | Ferramenta | Estimativa Mensal |
|-----------|------------|-------------------|
| Backend & BaaS | Supabase Pro Plan | ~R$ 135,00 |
| Edge Functions | Incluído no Pro (2M invocações/mês) | R$ 0,00 |
| Gateway PIX | Asaas (por transação) | Variável — absorvido no take rate |
| Criação de subcontas | Asaas (R$ 12,90/subconta aprovada) | Variável — coberto pela Conecta Mesa |
| Publicação nas Lojas | Google Play (USD 25 único) + Apple (USD 99/ano) | ~R$ 550/ano |
| Mapa Mapbox | Tier Gratuito até 50k loads/mês | R$ 0,00 |
| **TOTAL MVP** | | **< R$ 500/mês** |

### 13.3 Permissões Nativas

| Permissão | Tipo | iOS | Android |
|-----------|------|-----|---------|
| Câmera | [🏪 Comerciante B2B] [👤 PF Doador] | NSCameraUsageDescription | android.permission.CAMERA |
| Galeria | [🏪 Comerciante B2B] [👤 PF Doador] | NSPhotoLibraryUsageDescription | READ_MEDIA_IMAGES (Android 13+) |
| GPS | [Todos] | NSLocationWhenInUseUsageDescription | ACCESS_FINE_LOCATION + COARSE |
| Notificações | [Todos] | Runtime via flutter_local_notifications | POST_NOTIFICATIONS (Android 13+) |

---

## 14. Timeline de Desenvolvimento

```
AGORA — Fase de Desenvolvimento (conta PF no Sandbox)
[ ] Criar conta no Sandbox → sandbox.asaas.com
[ ] Solicitar liberação do White Label no Sandbox (suporte: WhatsApp 0800 009 0037)
[ ] Desenvolver e testar todo o fluxo (subcontas, split, estorno, webhooks, carteira)
[ ] Nenhum custo nessa fase

DAQUI 2 MESES — Produção (após abertura do CNPJ)
[ ] Criar conta PJ na Asaas (produção) → asaas.com
[ ] Alinhar White Label com gerente de contas (OBRIGATÓRIO antes de criar subcontas)
[ ] Migrar chave de API Sandbox → chave de Produção
[ ] Trocar URL base: api-sandbox.asaas.com → api.asaas.com
[ ] Lançar MVP na RMR
```

> ✅ Todo o código desenvolvido no Sandbox é reaproveitado em produção. Apenas a chave de API e a URL base mudam.

### Contatos Asaas

| Canal | Contato | Horário |
|-------|---------|---------|
| **WhatsApp** | 0800 009 0037 | 24 horas |
| **E-mail geral** | contato@asaas.com.br | Seg–Sex 8h–22h / Sáb–Dom 8h–18h |
| **E-mail integrações** | integracoes@asaas.com.br | Seg–Sex 9h–18h |
| **Chat** | Painel Asaas → Menu lateral → Fale com a gente | Seg–Sex 8h–22h / Sáb–Dom 8h–18h |
| **Discord comunidade** | https://discord.gg/invite/X2kgZm69HV | Sem horário fixo |

---

## 15. Glossário

| Termo | Definição |
|-------|-----------|
| PIX Dinâmico | QR Code gerado por transação com TXID único, validade definida e valor fixo — via API Asaas |
| 3-D Secure 2.0 | Protocolo antifraude com autenticação do portador do cartão. Obrigatório acima de R$ 200 no Conecta Mesa |
| Asaas Score | Análise antifraude automática baseada em comportamento e histórico do comprador |
| BaaS | Banking as a Service — infraestrutura financeira do Asaas usada pelo Conecta Mesa para criar subcontas, processar pagamentos e executar splits sem ser uma instituição financeira |
| White Label | Modalidade BaaS onde o cliente final nunca vê a marca do Asaas — toda experiência é da Conecta Mesa |
| netValue | Valor líquido da cobrança após desconto das taxas do Asaas. Base de cálculo do split 60/40 |
| Split de Pagamento | Divisão automática do netValue: 60% subconta do vendedor / 40% conta-pai Conecta Mesa |
| Take Rate | Comissão universal da plataforma sobre **todas as transações de venda** (40% do netValue), independentemente da persona. Isento (0%) exclusivamente para **resgates de doações gratuitas** B2G, onde não há transação financeira. |
| Subconta BaaS | Conta Asaas criada para cada vendedor/doador aprovado, vinculada à conta-pai Conecta Mesa |
| Conta-pai | Conta raiz Asaas do Conecta Mesa, de onde todas as subcontas são gerenciadas |
| Flutter | Framework multiplataforma do Google. Um codebase Dart gera apps nativos iOS e Android |
| Supabase | Backend-as-a-Service open-source baseado em PostgreSQL. Auth, banco, Realtime, Storage e Edge Functions |
| Riverpod | Biblioteca de gerenciamento de estado Flutter. Padrão MVVM via providers |
| RLS | Row-Level Security — políticas de acesso por linha no PostgreSQL |
| Edge Function | Micro-serviço serverless do Supabase. Usado para create-payment, asaas-webhook, refund e conversão temporal |
| Webhook | Notificação HTTP enviada pelo Asaas quando um evento ocorre (ex: pagamento confirmado). Validado por HMAC |
| HMAC | Hash-based Message Authentication Code — validação de integridade dos webhooks do Asaas |
| ~~OCR~~ | ~~Reconhecimento Óptico de Caracteres~~ — [CORRIGIDO v2.0] **Descartado do MVP**. Validação de validade agora é manual via DatePicker |
| ~~Edge AI~~ | ~~IA processada no dispositivo do usuário~~ — [CORRIGIDO v2.0] **Descartado do MVP** junto com o OCR |
| CMV | Custo da Mercadoria Vendida — indicador recuperado ao monetizar excedentes |
| Paleta Ponte | Verde Ponte (#4CAF50) para doações/ONGs + Laranja Ponte (#FF9800) para vendas/urgência |
| B2C | Business to Consumer — transações sujeitas ao take rate de 40% |
| B2B | Business to Business — parceria com comerciantes locais |
| B2G | Business to Government/Social — **resgate de doações gratuitas** para ONGs. Take rate = 0% neste fluxo específico (sem transação financeira). Vendas por ONGs são B2C e seguem o split universal 40/60. |
| Mapbox GL | SDK Mapbox v3 para Flutter. Tier gratuito: 50.000 map loads/mês |
| Map Loads | Unidade de cobrança Mapbox: cada inicialização de MapWidget = 1 load |
| Período de Avaliação Regulatória | Período obrigatório de 60 dias após a 1ª subconta criada, com limites de 10 subcontas e R$ 2.000/subconta |

---

**Responsável**: Rafael Pimentel • Abril 2026
**Versão**: 1.1 — Revisado e consolidado com definições técnicas de infraestrutura financeira Asaas