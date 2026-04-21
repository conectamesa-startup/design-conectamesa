# CONECTA MESA — PRD (Product Requirements Document)

**Infraestrutura Digital de Redistribuição Alimentar**
Recife, Pernambuco — Brasil
Versão 1.0 | 2026

⚠️ **CONFIDENCIAL — Uso Interno Exclusivo**

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
11. [Dependências Técnicas](#11-dependências-técnicas)
12. [Glossário](#12-glossário)

---

## Legenda — Tipos de Usuário da Plataforma
Em todo este documento, cada história, requisito, fluxo e módulo é identificado pelo tipo de usuário ao qual se aplica, conforme os ícones e rótulos abaixo:

| Rótulo | Tipo de Usuário | Descrição |
|--------|-----------------|-----------|
| [ 👤 PF Doador] | Pessoa Física Doadora (PF Doador) | Usuário individual que doa excedentes domésticos via câmera e GPS |
| [ 🛒 Consumidor B2C] | Consumidor Final (B2C) | Pessoa que compra alimentos com desconto no feed geolocalizado |
| [ 🏪 Comerciante B2B] | Comerciante Local (B2B) | Padaria, hortifruti, mercadinho, permissionário CEASA-PE |
| [ 🤝 ONG/B2G] | ONG / Cozinha Solidária (B2G) | Entidades sociais que recebem doações; isentas de comissão |
| [ ⚙️ Admin] | Administrador Interno | Equipe do Conecta Mesa para moderação, selos e painel admin |
| [Todos os usuários] | Todos os usuários | Funcionalidade compartilhada entre dois ou mais perfis |

---

## 1. Visão Geral do Produto

### 1.1 Descrição do Conecta Mesa
O Conecta Mesa é uma plataforma FoodTech mobile-first (iOS e Android) que opera como Infraestrutura Digital de Redistribuição Alimentar. A plataforma conecta comerciantes locais com excedente alimentar — padarias, hortifrutis, supermercados regionais e permissionários de centros de abastecimento — a consumidores finais e organizações sociais em tempo real, por meio de um marketplace geolocalizado, transparente e inteligente.

Diferentemente dos modelos opacos de "sacola surpresa" existentes no mercado, o Conecta Mesa exibe ficha técnica completa de cada produto: macronutrientes, alérgenos, data de validade atestada por IA e localização precisa. A plataforma opera uma mecânica de conversão temporal automatizada: produtos que não foram vendidos no canal B2C dentro de um prazo crítico são automaticamente redirecionados ao pool de doações para ONGs e Cozinhas Comunitárias parceiras — maximizando o aproveitamento do ciclo de vida de 100% dos ativos alimentares cadastrados.

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

| Ator / Tipo | Proposta de Valor |
|-------------|-------------------|
| [ 🛒 Consumidor B2C] Consumidor Final | Acesso a alimentos de qualidade com descontos acima de 50%, com transparência total (ficha nutricional e validade) |
| [ 🏪 Comerciante B2B] Comerciante Local | Conversão de prejuízo operacional (descarte de perecíveis) em recuperação de CMV, reputação corporativa e acesso ao Selo Doador de Alimentos (Lei nº 15.224/2025) |
| [ 🤝 ONG/B2G] ONG / Cozinha Solidária | Fonte estável e gratuita de alimentos com ficha nutricional, permitindo planejamento de cardápios — sem a imprevisibilidade dos modelos analógicos atuais |
| [ 👤 PF Doador] Doador PF | Canal simples, via câmera e GPS, para redistribuir excedentes domésticos e medir o impacto social de cada doação |

---

## 2. Objetivos do MVP

### 2.1 O que o MVP deve validar
- Superação do Estigma Cultural: a população recifense vulnerável priorizará o custo-benefício de alimentos próximos ao vencimento frente ao estigma da "sobra", especialmente em cenário de inflação persistente.
- Digitalização do Pequeno Varejo: pequenos comerciantes, feirantes e gerentes de panificadoras possuem maturidade digital mínima para integrar a publicação de inventário excedente em suas rotinas operacionais via interfaces de câmera e IA.
- Eficácia da Gamificação: elementos de design comportamental (métricas de impacto ambiental, badges, leaderboards) gerarão engajamento recorrente além do uso ocasional.
- Viabilidade da Conversão Temporal Automatizada: o mecanismo de redirecionamento automático B2C → B2G funciona como alavanca de maximização de aproveitamento sem intervenção humana.
- Product-Market Fit Hiperlocal: densidade de oferta e demanda suficiente em bairros-âncora da RMR antes de expansão.

### 2.2 Métricas de Sucesso do MVP (KPIs Iniciais)

| Métrica | Meta (90 dias) | Instrumento de Medição |
|---------|----------------|------------------------|
| Parceiros B2B onboardados (comerciantes) | 30 estabelecimentos | Painel admin |
| Usuários registrados ativos — MAU (todos os perfis) | 500 usuários | Supabase Analytics |
| Transações B2C completadas por semana | 150 transações/semana | Tabela payments |
| Quilogramas de alimento redistribuídos (B2C + B2G) | 500 kg/mês | Dashboard de Impacto |
| Taxa de conversão do feed para pedido (B2C) | >8% | Funil de eventos |
| NPS inicial (comerciantes B2B) | >40 | Formulário in-app |
| ONGs / Cozinhas cadastradas (B2G) | 10 entidades | Painel admin |

---

## 3. Escopo do MVP

### 3.1 In Scope — O que será construído no MVP

| ID | Funcionalidade | Tipo de Usuário | Observação |
|----|----------------|-----------------|------------|
| F01 | Autenticação: cadastro e login via e-mail e senha (sem Google/OAuth) | [Todos os usuários] | Supabase Auth |
| F02 | Cadastro de Pessoa Física (CPF, nome, telefone, senha) | [ 👤 PF Doador] [ 🛒 Consumidor B2C] | PF Doador e Comprador |
| F03 | Cadastro de Pessoa Jurídica com seleção de segmento (mercado, padaria, ONG, etc.) | [ 🏪 Comerciante B2B] [ 🤝 ONG/B2G] | PJ Empresa e ONG |
| F04 | Feed geolocalizado de anúncios com busca textual e filtros por categoria, tipo (venda/doação) e distância | [ 🛒 Consumidor B2C] [ 🤝 ONG/B2G] | GPS via geolocator |
| F05 | Detalhe do anúncio: foto, descrição, macronutrientes, alérgenos, validade, GPS, chips e CTA de reserva/checkout | [ 🛒 Consumidor B2C] [ 🤝 ONG/B2G] | Ficha técnica completa |
| F06 | Publicação de anúncio: captura de foto via câmera nativa, GPS automático, formulário de descrição e valor | [ 🏪 Comerciante B2B] [ 👤 PF Doador] | image_picker + geolocator |
| F07 | Validação de validade por OCR: leitura da data de validade da embalagem via câmera, bloqueando publicação de produto vencido | [ 🏪 Comerciante B2B] [ 👤 PF Doador] | google_mlkit_text_recognition |
| F08 | Conversão temporal automatizada: produto não vendido próximo ao vencimento é redirecionado automaticamente ao pool de doações B2G | [ 🏪 Comerciante B2B] (sistema) | Edge Function Supabase |
| F09 | Chat assíncrono entre doador/vendedor e interessado para combinação de retirada | [Todos os usuários] | Supabase Realtime |
| F10 | Pagamento via PIX dinâmico (QR Code + copia-e-cola) | [ 🛒 Consumidor B2C] | Asaas API |
| F11 | Pagamento via cartão de crédito com 3-D Secure 2.0 e antifraude Asaas Score | [ 🛒 Consumidor B2C] | Obrigatório acima de R$ 200 |
| F12 | Webhook de confirmação de pagamento com validação HMAC (Asaas) | [ 🏪 Comerciante B2B] (sistema) | Edge Function asaas-webhook |
| F13 | QR Code de confirmação de entrega: consumidor exibe código, lojista escaneia via mobile_scanner para confirmar entrega e liberar repasse | [ 🛒 Consumidor B2C] [ 🏪 Comerciante B2B] | qr_flutter + mobile_scanner |
| F14 | Dashboard de Impacto: CO₂ evitado, kg resgatados, refeições criadas, valor salvo | [Todos os usuários] | Coeficientes FAO 2013 |
| F15 | Gráfico de evolução semanal de resgates (8 semanas) | [Todos os usuários] | fl_chart |
| F16 | Sistema de Selos Parceiro Ponte: Empresa Verificada, ONG Verificada e Parceiro Ponte | [ 🏪 Comerciante B2B] [ 🤝 ONG/B2G] | Widget VerifiedBadge reutilizável |
| F17 | Solicitação de verificação institucional (CNPJ + documentos) | [ 🏪 Comerciante B2B] [ 🤝 ONG/B2G] | Validação via Brasil API + aprovação manual |
| F18 | Navegação nativa Flutter com Bottom Navigation Bar (4 abas: Início, Impacto, Anunciar, Conta) | [Todos os usuários] | Material 3 |
| F19 | Push notifications nativas para chat, confirmação de pagamento e alertas de urgência geolocalizada | [Todos os usuários] | flutter_local_notifications |
| F20 | Perfil do usuário com histórico de transações e impacto individual | [Todos os usuários] | Supabase Database |
| F21 | Mapa interativo com pins dinâmicos de anúncios via Mapbox GL Flutter, atualizado em tempo real (Supabase Realtime). Tap no pin abre detalhe do anúncio. | [ 🛒 Consumidor B2C] [ 🤝 ONG/B2G] | mapbox_maps_flutter + Supabase Realtime |
| F22 | Heatmap de hotspots de doações por bairro no mapa, atualizado em tempo real, com filtro exclusivo para doações — para planejamento de coleta pelas ONGs. | [ 🤝 ONG/B2G] | Mapbox GL Heatmap Layer + Supabase Realtime |
| F23 | Monitoramento do tier gratuito Mapbox (50k loads/mês) com alerta automático ao atingir 80% do limite e fallback gracioso para feed em lista se limite for atingido. | [Todos os usuários] | Mapbox Token Usage API + Flutter conditional render |

### 3.2 Out of Scope — O que NÃO será construído no MVP

| Funcionalidade Excluída | Justificativa |
|-------------------------|---------------|
| Login com Google (Google Sign-In / OAuth) | Aumenta dependências externas; autenticação por e-mail e senha é suficiente para o MVP e garante controle total |
| Login via telefone + OTP (SMS/WhatsApp) | Custo variável de SMS; complexidade adicional desnecessária para MVP |
| Sistema de avaliações pós-retirada (estrelas + comentários) | Funcionalidade de reputação expandida prevista no médio prazo |
| Painel Administrativo Flutter Web | Moderação manual via Supabase Studio no MVP; painel dedicado no médio prazo |
| Relatórios PDF mensais automáticos | Dashboard de impacto cobre o MVP; exportação PDF é funcionalidade de longo prazo |
| Integração com sistemas de ONGs (PIPA, APAC) | Integrações externas de longo prazo, após validação do produto |
| API pública para parceiros (supermercados, redes) | Longo prazo, após consolidação do modelo na RMR |
| Programa de gamificação com leaderboard e cupons tangíveis | Gamificação básica de impacto inclusa; programa completo é médio prazo |
| Internacionalização (ES, EN) | Produto focado em PT-BR para validação no Nordeste |

---

## 4. Personas

### Persona 1 — A Pessoa Física Doadora
Tipo de usuário: [ 👤 PF Doador]

| Atributo | Descrição |
|----------|-----------|
| Perfil | Moradora de apartamento ou casa, realiza compras semanais e gera sobras de alimentos (frutas maduras, pães, hortifrutas). Quer evitar desperdício e ajudar vizinhos ou instituições próximas. |
| Dores | Sente culpa ao descartar alimentos ainda aproveitáveis, mas não conhece canais simples para redistribuí-los. Teme o esforço logístico de uma doação formal. |
| Objetivos | Publicar excedentes domésticos em poucos toques via câmera e GPS. Combinar retirada via chat. Visualizar o impacto gerado por cada doação. |
| Comportamento Digital | Heavy user de WhatsApp. Adota PIX como método de pagamento principal. Responde a notificações push com contexto de urgência geolocalizado. |

### Persona 2 — O Comerciante Local (Pilar B2B)
Tipo de usuário: [ 🏪 Comerciante B2B]

| Atributo | Descrição |
|----------|-----------|
| Perfil | Gerente ou proprietário de padaria de bairro, hortifruti, mercadinho ou permissionário do CEASA-PE. Idade entre 35 e 55 anos, usuário extensivo de WhatsApp Business e Instagram. |
| Dores | A quebra operacional corrói o fluxo de caixa: o descarte de perecíveis representa prejuízo puro. Medo constante de autuações do Procon-PE por produtos vencidos em gôndola. |
| Objetivos | Recuperar CMV via venda com desconto. Atrair novo fluxo de clientes via responsabilidade socioambiental. Obter o Selo Empresa Verificada e relatórios de impacto para o Selo Doador de Alimentos (Lei nº 15.224/2025). |
| Objeções | Desconfiança sobre complexidade tecnológica. Temor de canibalização de vendas. Ferramentas complexas de retaguarda geram fadiga cognitiva. |

### Persona 3 — A Consumidora Sensível a Preço (Pilar B2C)
Tipo de usuário: [ 🛒 Consumidor B2C]

| Atributo | Descrição |
|----------|-----------|
| Perfil | Chefes de família, estudantes universitárias ou jovens trabalhadoras residentes em periferias da RMR (Santo Amaro, Ibura). 59,9% dos domicílios vulneráveis são chefiados por mulheres. |
| Dores | Orçamento exíguo frente aos preços de hortifrúti e proteínas, empurrando a família ao consumo de ultraprocessados calóricos baratos — com impacto na saúde pública e desenvolvimento cognitivo infantil. |
| Objetivos | Acessar insumos in natura, pães artesanais e laticínios de qualidade com descontos acima de 50%. Restaurar a dignidade alimentar familiar. |
| Objeções | Estigma antropológico da "sobra". Receio de dispender esforço logístico para buscar mercadoria deteriorada. |

### Persona 4 — A Coordenadora de Ação Social (Pilar B2G)
Tipo de usuário: [ 🤝 ONG/B2G]

| Atributo | Descrição |
|----------|-----------|
| Perfil | Liderança comunitária e responsável operacional de Cozinhas Solidárias ou do Banco de Alimentos do Recife. Sustenta centenas de famílias com recursos escassos. |
| Dores | Insegurança logística severa: falta previsibilidade no fornecimento diário de doações, obrigando a equipe a dispender horas buscando insumos por telefone. Sobram carboidratos; faltam vegetais frescos. |
| Objetivos | Assegurar estabilidade no suprimento para planejamento de cardápios semanais. Obter Selo ONG Verificada. Acessar dashboard em tempo real de hotspots de doações próximas. |
| Objeções | Rechaça soluções que exijam dispêndio financeiro para retiradas fragmentadas. Teme responsabilização sanitária por doações contaminadas na origem. |

---

## 5. Jornadas do Usuário

### 5.1 Jornada do Vendedor / Doador

**[ 🏪 Comerciante B2B] Comerciante Local**
1. Usuário abre o app e faz login com e-mail e senha.
2. Toca na aba "Anunciar" na Bottom Navigation Bar.
3. Seleciona câmera nativa para capturar foto do produto.
4. Sistema aciona OCR para ler data de validade da embalagem. Se vencido, bloqueia o envio com alerta.
5. Localização GPS é capturada automaticamente via geolocator.
6. Usuário preenche: nome, descrição, macronutrientes, alérgenos, quantidade (kg), preço ou tipo "Doação".
7. Define o prazo limite de retirada (gatilho da conversão temporal automatizada).
8. Toca em "Publicar" → anúncio aparece no feed geolocalizado em tempo real.
9. Ao receber interesse, conversa pelo chat assíncrono para combinar retirada.
10. Após retirada, lojista escaneia o QR Code do consumidor via mobile_scanner → status muda para "Entregue" → repasse liquidado.

**[ 👤 PF Doador] Pessoa Física Doadora**
1. Usuário abre o app e faz login com e-mail e senha.
2. Toca na aba "Anunciar" na Bottom Navigation Bar.
3. Captura foto via câmera nativa do item doméstico excedente.
4. OCR lê data de validade. Se vencido, bloqueia com alerta.
5. GPS capturado automaticamente.
6. Preenche: nome, descrição, quantidade. Seleciona tipo "Doação".
7. Toca em "Publicar" → anúncio aparece no feed como doação.
8. Combina retirada via chat assíncrono com interessado ou ONG.
9. Confirma entrega via QR Code. Dashboard de Impacto atualizado com kg salvos e CO₂ evitado.

### 5.2 Jornada do Consumidor Final (B2C)

**[ 🛒 Consumidor B2C] Consumidor Final**
1. Usuário abre o app e faz login com e-mail e senha.
2. Feed exibe anúncios ordenados por proximidade GPS, com filtros por categoria e tipo (venda/doação).
3. Usuário toca no card de um produto → vê detalhe completo: foto, ficha técnica, validade, localização e desconto.
4. Toca em "Reservar" → seleciona método de pagamento (PIX ou Cartão).
5. Para PIX: QR Code dinâmico exibido com copia-e-cola. Para Cartão: formulário com 3-DS 2.0.
6. Pagamento confirmado via webhook Asaas → status do pedido atualizado em tempo real via Supabase Realtime.
7. Consumidor vai até o estabelecimento, exibe QR Code de entrega no app.
8. Lojista escaneia o código → entrega confirmada → repasse automático via split de pagamentos Asaas.
9. Dashboard de Impacto do usuário é atualizado com CO₂ evitado e kg salvos.

### 5.3 Jornada da ONG / Cozinha Solidária (B2G)

**[ 🤝 ONG/B2G] ONG / Cozinha Solidária**
1. Coordenadora faz cadastro PJ com segmento "ONG" e solicita Selo ONG Verificada (CNPJ + estatuto).
2. Após aprovação do selo, acessa feed filtrado por anúncios de Doação.
3. Visualiza hotspots de doações massivas em estabelecimentos próximos no feed.
4. Entra no detalhe do anúncio e inicia chat com o doador para combinar retirada.
5. Produto reservado gratuitamente (sem comissionamento B2G).
6. Coordenadora retira o produto e confirma via QR Code no app.
7. Métricas de impacto (CO₂, kg, refeições) são agregadas ao Dashboard de Impacto da plataforma.
8. ONG recebe relatório mensal de impacto por e-mail (após ativação do Parceiro Ponte).

---

## 6. Histórias de Usuário

### Módulo: Autenticação
| ID | Tipo de Usuário | História | Critérios de Aceitação | Prioridade |
|----|-----------------|----------|------------------------|------------|
| US-01 | [Todos os usuários] | Como novo usuário, eu quero me cadastrar com nome, e-mail, CPF (ou CNPJ), telefone e senha, para que eu possa acessar a plataforma de forma segura. | Campos obrigatórios validados. CPF/CNPJ validado por algoritmo. Senha com mínimo de 8 caracteres. Confirmação de e-mail enviada. | 🔴 Alta |
| US-02 | [Todos os usuários] | Como usuário cadastrado, eu quero fazer login com e-mail e senha, para que eu possa acessar minha conta. | Login validado contra Supabase Auth. Sessão persistida. Token JWT renovado automaticamente. Mensagem de erro clara em caso de falha. | 🔴 Alta |
| US-03 | [Todos os usuários] | Como usuário que esqueceu a senha, eu quero solicitar redefinição via e-mail, para que eu não perca acesso à conta. | Link de redefinição enviado em até 60 segundos. Link expira em 24h. Nova senha salva com hash bcrypt. | 🟡 Média |
| US-04 | [ 🏪 Comerciante B2B] [ 🤝 ONG/B2G] | Como empresa ou ONG, eu quero escolher entre cadastro PF e PJ, para que minha conta reflita corretamente meu perfil. | Cards comparativos PF vs PJ na tela de escolha. Formulário PJ com CNPJ, razão social e segmento. Enum user_roles salvo em tabela separada. | 🔴 Alta |

### Módulo: Marketplace (Feed e Anúncios)
| ID | Tipo de Usuário | História | Critérios de Aceitação | Prioridade |
|----|-----------------|----------|------------------------|------------|
| US-05 | [ 🛒 Consumidor B2C] [ 🤝 ONG/B2G] | Como consumidor ou ONG, eu quero ver um feed de anúncios ordenado por proximidade GPS, para que eu encontre alimentos disponíveis perto de mim. | Anúncios ordenados por distância via Haversine. Permissão de localização solicitada explicitamente. Fallback para cidade do cadastro se GPS negado. | 🔴 Alta |
| US-06 | [ 🛒 Consumidor B2C] [ 🤝 ONG/B2G] | Como consumidor, eu quero filtrar o feed por categoria (padaria, hortifruti, etc.) e tipo (venda/doação), para que eu encontre exatamente o que preciso. | Chips de filtro visíveis no topo do feed. Filtros combinados funcionam corretamente. Estado dos filtros persiste na sessão. | 🔴 Alta |
| US-07 | [ 🛒 Consumidor B2C] [ 🤝 ONG/B2G] | Como consumidor, eu quero ver a ficha técnica completa do produto (macronutrientes, alérgenos, validade, localização), para que eu tome uma decisão informada. | Tela de detalhe exibe todos os campos obrigatórios. Selo Parceiro Ponte visível ao lado do nome. Botão de CTA sticky no rodapé. | 🔴 Alta |
| US-08 | [ 🏪 Comerciante B2B] [ 👤 PF Doador] | Como vendedor/doador, eu quero publicar um anúncio via câmera com GPS automático, para que o processo seja rápido e não interrompa minha operação. | Câmera nativa abre via image_picker. GPS capturado em até 5 segundos. Formulário não ultrapassa 3 telas. Publicação em menos de 60 segundos. | 🔴 Alta |
| US-09 | [ 🏪 Comerciante B2B] [ 👤 PF Doador] | Como vendedor, eu quero que o sistema bloqueie automaticamente a publicação de produto com data de validade vencida, para que minha loja não incorra em riscos sanitários. | OCR lê data da embalagem em tempo real. Bloqueio imediato com mensagem de alerta se data for pretérita. Log de tentativa salvo para auditoria. | 🔴 Alta |
| US-10 | Sistema ([ 🏪 Comerciante B2B] trigger) | Como plataforma, eu quero converter automaticamente produtos não vendidos próximos ao vencimento em doações B2G, para que o desperdício seja minimizado. | Edge Function verifica deadlines a cada hora. Produto convertido para "Doação" 4 horas antes do prazo. Vendedor notificado. Produto aparece no feed de ONGs. | 🔴 Alta |

### Módulo: Mapa Interativo Dinâmico (Mapbox GL — MVP)
> ✅ Este módulo integra o escopo do MVP. As funcionalidades de mapa são de curto prazo e fazem parte da entrega inicial da plataforma.

| ID | Tipo de Usuário | História | Critérios de Aceitação | Prioridade |
|----|-----------------|----------|------------------------|------------|
| US-MAP01 | [ 🛒 Consumidor B2C] [ 🤝 ONG/B2G] | Como consumidor ou ONG, eu quero visualizar um mapa interativo com os anúncios próximos plotados como pins, para que eu compreenda geograficamente a distribuição da oferta. | Mapa Mapbox GL carregado via mapbox_maps_flutter. Pins dinâmicos atualizados via Supabase Realtime. Tap no pin abre sheet de detalhe do anúncio. Tier gratuito Mapbox (50k loads/mês) monitorado; alerta em 80% do limite. | 🔴 Alta |
| US-MAP02 | [ 🤝 ONG/B2G] | Como coordenadora de ONG, eu quero visualizar hotspots de doações por bairro no mapa, para que eu planeje rotas de coleta de forma eficiente. | Heatmap por densidade de doações renderizado no Mapbox. Filtro de tipo exclusivo para doações. Atualização em tempo real via Supabase Realtime. | 🔴 Alta |
| US-MAP03 | [ 🏪 Comerciante B2B] | Como comerciante, eu quero ver no mapa a densidade de consumidores próximos ao meu estabelecimento, para que eu calibre o preço e volume dos anúncios. | Raio de 2 km ao redor do pin do comerciante. Indicador de demanda (alto/médio/baixo) baseado em buscas recentes. Dados anonimizados e agregados. | 🟡 Média |

### Módulo: Pagamento (PIX + Cartão)
| ID | Tipo de Usuário | História | Critérios de Aceitação | Prioridade |
|----|-----------------|----------|------------------------|------------|
| US-11 | [ 🛒 Consumidor B2C] | Como consumidor, eu quero pagar via PIX com QR Code dinâmico, para que a transação seja rápida e segura. | QR Code gerado em menos de 3 segundos. Copia-e-cola disponível. Polling de status a cada 3s. Tela de confirmação exibida em até 5s após pagamento. | 🔴 Alta |
| US-12 | [ 🛒 Consumidor B2C] | Como consumidor, eu quero pagar via cartão de crédito com autenticação 3-DS 2.0, para que minha transação seja protegida contra fraude. | 3-DS 2.0 obrigatório acima de R$ 200. Antifraude Asaas Score aplicado em todas as transações. Dados do cartão nunca trafegam pelo servidor do Conecta Mesa. | 🔴 Alta |
| US-13 | Sistema (webhook) | Como plataforma, eu quero receber webhook de confirmação de pagamento com validação HMAC, para garantir integridade das transações. | Assinatura HMAC validada antes de processar o evento. Status do pedido atualizado automaticamente. Notificação push enviada ao comprador e ao vendedor. | 🔴 Alta |
| US-14 | [ 🛒 Consumidor B2C] [ 🏪 Comerciante B2B] | Como consumidor, eu quero confirmar a entrega exibindo um QR Code no app, para que o repasse ao lojista seja automático e eu elimine riscos de chargeback. | QR Code único por pedido gerado pelo qr_flutter. Lojista escaneia via mobile_scanner. Status muda para "Entregue". Split de pagamento Asaas liquidado automaticamente. | 🔴 Alta |

### Módulo: Chat e Comunicação
| ID | Tipo de Usuário | História | Critérios de Aceitação | Prioridade |
|----|-----------------|----------|------------------------|------------|
| US-15 | [Todos os usuários] | Como interessado em um anúncio, eu quero enviar mensagem ao doador/vendedor diretamente pelo app, para combinar horário e local de retirada sem sair da plataforma. | Chat com Supabase Realtime. Novas mensagens aparecem em tempo real sem reload. Notificação push ao receber nova mensagem. Histórico persistido. | 🔴 Alta |
| US-16 | [ 🛒 Consumidor B2C] [ 🤝 ONG/B2G] | Como usuário, eu quero receber notificações push de alerta quando houver produto disponível em até 2 km de mim, para que eu não perca ofertas urgentes. | Notificação com nome do produto, distância e tempo restante. Toque na notificação abre detalhe do anúncio. Usuário pode configurar raio de alerta nas preferências. | 🟡 Média |

### Módulo: Dashboard de Impacto
| ID | Tipo de Usuário | História | Critérios de Aceitação | Prioridade |
|----|-----------------|----------|------------------------|------------|
| US-17 | [Todos os usuários] | Como usuário, eu quero ver meu impacto individual (CO₂ evitado, kg salvos, refeições criadas, valor preservado), para que eu sinta motivação para continuar participando. | 4 cards de KPI atualizados em tempo real. Coeficientes: CO₂ = 2,5 kg/kg (FAO 2013), Refeições = 1,2/kg (WRAP UK), Valor = R$ 9,50/kg. Layout responsivo. | 🔴 Alta |
| US-18 | [Todos os usuários] | Como usuário, eu quero ver gráfico semanal de evolução de resgates, para que eu acompanhe o crescimento do meu impacto ao longo do tempo. | Gráfico de barras com 8 semanas via fl_chart. Hover interativo com tooltip. Cores Verde Ponte (valor atual) e Laranja Ponte (valor anterior). | 🟡 Média |

### Módulo: Selos e Verificação Institucional
| ID | Tipo de Usuário | História | Critérios de Aceitação | Prioridade |
|----|-----------------|----------|------------------------|------------|
| US-19 | [ 🏪 Comerciante B2B] [ 🤝 ONG/B2G] | Como empresa ou ONG, eu quero solicitar verificação institucional enviando CNPJ e documentos, para que eu obtenha o Selo Parceiro Ponte e ganhe credibilidade na plataforma. | Formulário de solicitação com upload de documentos. CNPJ validado via Brasil API. Status da solicitação visível no perfil. Notificação de aprovação/rejeição. | 🟡 Média |
| US-20 | [ 🛒 Consumidor B2C] [ 🤝 ONG/B2G] | Como usuário do feed, eu quero identificar visualmente parceiros verificados por selos coloridos nos cards de anúncio, para que eu decida com maior confiança. | Widget VerifiedBadge exibido em card e tela de detalhe. Empresa Verificada: Laranja (#FF9800). ONG Verificada: Verde (#4CAF50). Parceiro Ponte: gradiente verde→laranja. | 🔴 Alta |

---

## 7. Requisitos Funcionais

### Módulo RF-01: Autenticação e Perfis
| ID | Tipo de Usuário | Requisito | Impl. Técnica | Status |
|----|-----------------|-----------|---------------|--------|
| RF-01.1 | [Todos os usuários] | Cadastro PF: nome, e-mail, CPF, telefone, senha, aceite de termos e política de privacidade | Supabase Auth + tabela profiles | ✅ MVP |
| RF-01.2 | [ 🏪 Comerciante B2B] [ 🤝 ONG/B2G] | Cadastro PJ: razão social, CNPJ, segmento, nome do responsável, e-mail, telefone | Tabela profiles + segmento enum | ✅ MVP |
| RF-01.3 | [Todos os usuários] | Login com e-mail e senha — sem OAuth, sem Google Sign-In, sem login social, sem OTP por SMS | Supabase Auth signInWithPassword | ✅ MVP |
| RF-01.4 | [Todos os usuários] | Recuperação de senha via e-mail | Supabase Auth resetPasswordForEmail | ✅ MVP |
| RF-01.5 | [ ⚙️ Admin] | Tabela user_roles separada de profiles com enum (admin \| pf \| empresa \| ong) para evitar privilege escalation | PostgreSQL + RLS | ✅ MVP |
| RF-01.6 | [ ⚙️ Admin] | RLS habilitado em todas as tabelas Supabase, garantindo acesso apenas aos dados próprios do usuário autenticado | Supabase RLS Policies | ✅ MVP |

### Módulo RF-02: Marketplace e Anúncios
| ID | Tipo de Usuário | Requisito | Impl. Técnica | Status |
|----|-----------------|-----------|---------------|--------|
| RF-02.1 | [ 🛒 Consumidor B2C] [ 🤝 ONG/B2G] | Feed de anúncios com busca textual, filtros por categoria, tipo (venda/doação) e ordenação por proximidade GPS | Supabase Database + geolocator | ✅ MVP |
| RF-02.2 | [ 🛒 Consumidor B2C] [ 🤝 ONG/B2G] | Card de anúncio exibindo: foto, nome do produto, desconto, distância, tempo restante e selo de verificação | Flutter Widget | ✅ MVP |
| RF-02.3 | [ 🛒 Consumidor B2C] [ 🤝 ONG/B2G] | Tela de detalhe com: foto em alta resolução, descrição, macronutrientes, alérgenos, data de validade, coordenadas GPS, chips de categoria e CTA sticky | Flutter Screen | ✅ MVP |
| RF-02.4 | [ 🏪 Comerciante B2B] [ 👤 PF Doador] | Publicação de anúncio: captura de foto via câmera nativa (image_picker), GPS automático (geolocator), formulário com peso (kg), preço ou marcação como Doação e prazo de retirada | image_picker + geolocator | ✅ MVP |
| RF-02.5 | [ 🏪 Comerciante B2B] [ 👤 PF Doador] | Validação de validade por OCR na câmera (google_mlkit_text_recognition), bloqueando publicação se data for pretérita, processamento on-device (Edge AI) | google_mlkit_text_recognition | ✅ MVP |
| RF-02.6 | Sistema (cron) | Conversão temporal automatizada: Edge Function verifica produtos a cada hora; 4h antes do prazo, converte de venda B2C para doação B2G e notifica o vendedor | Supabase Edge Function + scheduled | ✅ MVP |
| RF-02.7 | [Todos os usuários] | Supabase Realtime: atualização instantânea de disponibilidade no feed de todos os usuários ao confirmar reserva (elimina overselling) | Supabase Realtime WebSocket | ✅ MVP |
| RF-02.8 | [ 🏪 Comerciante B2B] [ 👤 PF Doador] | Storage de fotos dos produtos com CDN Supabase, RLS por proprietário do anúncio | Supabase Storage | ✅ MVP |

### Módulo RF-02B: Mapa Interativo Dinâmico com Mapbox (MVP)
> ✅ Integra o escopo do MVP. Arquitetura de camadas dinâmicas implementada desde o início, sem necessidade de reescrita futura.

| ID | Tipo de Usuário | Requisito | Impl. Técnica | Status |
|----|-----------------|-----------|---------------|--------|
| RF-MAP.1 | [ 🛒 Consumidor B2C] [ 🤝 ONG/B2G] | Mapa interativo com pins de anúncios renderizados dinamicamente via mapbox_maps_flutter (substitui visualização exclusiva por lista no feed) | mapbox_maps_flutter + Supabase Realtime | ✅ MVP |
| RF-MAP.2 | [ 🤝 ONG/B2G] | Heatmap de hotspots de doações por bairro, atualizado em tempo real via Supabase Realtime | Mapbox GL Heatmap Layer + Realtime | ✅ MVP |
| RF-MAP.3 | [Todos os usuários] | Tier gratuito do Mapbox (50.000 map loads/mês) monitorado via Mapbox Usage Dashboard; alerta automático interno ao atingir 80% do limite mensal | Mapbox Token Usage API + Supabase Alert | ✅ MVP |
| RF-MAP.4 | [Todos os usuários] | Fallback gracioso: se limite do tier gratuito for atingido no mês, mapa é ocultado e feed em lista é exibido automaticamente até o reset do ciclo | Flutter conditional render | ✅ MVP |
| RF-MAP.5 | [ ⚙️ Admin] | Implementação com arquitetura de camadas dinâmicas: layers de pins, heatmap e raio de busca adicionados/removidos em runtime sem rebuild do widget (padrão similar ao módulo de notificações dinâmicas) | Mapbox Style Layers API | ✅ MVP |

### Módulo RF-03: Pagamento (Asaas)
| ID | Tipo de Usuário | Requisito | Impl. Técnica | Status |
|----|-----------------|-----------|---------------|--------|
| RF-03.1 | [ 🛒 Consumidor B2C] | Pagamento via PIX dinâmico: QR Code gerado por transação com TXID único, payload copia-e-cola e polling de status a cada 3 segundos | Asaas POST /v3/payments + qr_flutter | ✅ MVP |
| RF-03.2 | [ 🛒 Consumidor B2C] | Pagamento via cartão de crédito com 3-D Secure 2.0; Asaas Score antifraude obrigatório em todas as transações; 3-DS 2.0 obrigatório para transações acima de R$ 200 | Asaas Cartão + 3-DS | ✅ MVP |
| RF-03.3 | Sistema | Edge Function create-payment: autentica com ASAAS_API_KEY (secret), cria cobrança PIX ou cartão via POST /v3/payments, retorna QR ou link 3-DS ao frontend | Supabase Edge Function | ✅ MVP |
| RF-03.4 | Sistema | Edge Function asaas-webhook: valida assinatura HMAC, processa eventos PAYMENT_CONFIRMED, PAYMENT_RECEIVED, PAYMENT_OVERDUE e atualiza status do pedido no banco | Supabase Edge Function | ✅ MVP |
| RF-03.5 | [ 🏪 Comerciante B2B] | Split de pagamentos Asaas: comissão da plataforma (20% – 30% take rate) separada automaticamente do repasse ao estabelecimento na liquidação | Asaas Split API | ✅ MVP |
| RF-03.6 | [ 🛒 Consumidor B2C] [ 🏪 Comerciante B2B] | QR Code de confirmação de entrega: gerado pelo qr_flutter para o consumidor, escaneado pelo lojista via mobile_scanner; confirma entrega e dispara liquidação do repasse | qr_flutter + mobile_scanner | ✅ MVP |
| RF-03.7 | Sistema | Estorno via POST /v3/payments/{id}/refund em caso de pedido não retirado dentro do prazo (cancelamento automático após 2h sem confirmação de entrega) | Asaas Refund API | ✅ MVP |

### Módulo RF-04: Chat e Notificações
| ID | Tipo de Usuário | Requisito | Impl. Técnica | Status |
|----|-----------------|-----------|---------------|--------|
| RF-04.1 | [Todos os usuários] | Chat assíncrono por anúncio entre doador/vendedor e interessado, com histórico persistido e mensagens em tempo real | Supabase Realtime + tabela messages | ✅ MVP |
| RF-04.2 | [Todos os usuários] | Push notifications dinâmicas nativas para: nova mensagem no chat, confirmação de pagamento, alerta de produto próximo (raio configurável pelo usuário), produto convertido para doação. Canal de notificação renderizado dinamicamente por tipo de usuário: alertas de reserva para B2B/PF Doador; alertas de oferta para B2C/B2G. | flutter_local_notifications + Supabase | ✅ MVP |

### Módulo RF-05: Dashboard de Impacto
| ID | Tipo de Usuário | Requisito | Impl. Técnica | Status |
|----|-----------------|-----------|---------------|--------|
| RF-05.1 | [Todos os usuários] | 4 cards de KPI: CO₂ evitado (2,5 kg/kg — FAO 2013), kg resgatados, refeições criadas (1,2/kg — WRAP UK), valor salvo (R$ 9,50/kg — ajustável) | Coeficientes em constants.dart | ✅ MVP |
| RF-05.2 | [Todos os usuários] | Gráfico de barras interativo com evolução semanal de 8 semanas (Verde Ponte → Laranja Ponte no hover) | fl_chart | ✅ MVP |
| RF-05.3 | [Todos os usuários] | Card de impacto individual do usuário com gradiente Verde Ponte mostrando métricas pessoais acumuladas | Flutter Widget | ✅ MVP |
| RF-05.4 | [ 🏪 Comerciante B2B] [ 🤝 ONG/B2G] | Card promocional do Selo Parceiro Ponte com CTA para solicitação de verificação (visível apenas para perfis PJ não verificados) | Flutter Widget | ✅ MVP |

### Módulo RF-06: Selos Parceiro Ponte
| ID | Tipo de Usuário | Requisito | Impl. Técnica | Status |
|----|-----------------|-----------|---------------|--------|
| RF-06.1 | [ 🛒 Consumidor B2C] [ 🤝 ONG/B2G] | Widget VerifiedBadge reutilizável em 3 níveis: Empresa Verificada (Laranja #FF9800), ONG Verificada (Verde #4CAF50), Parceiro Ponte (gradiente verde→laranja) | Flutter Widget | ✅ MVP |
| RF-06.2 | [ 🏪 Comerciante B2B] [ 🤝 ONG/B2G] | Formulário de solicitação de verificação com upload de CNPJ + documentos; validação automática via Brasil API; aprovação manual pelo admin | Supabase Storage + Brasil API | ✅ MVP |
| RF-06.3 | [ ⚙️ Admin] | Critérios de elegibilidade: Empresa Verificada = CNPJ ativo + comprovante; ONG Verificada = CNPJ de associação + estatuto + comprovante; Parceiro Ponte = verificação + 6 meses de doação recorrente | Tabela verification_requests | ✅ MVP |

---

## 8. Requisitos Não Funcionais

### 8.1 Performance
| Requisito | Meta | Instrumento |
|-----------|------|-------------|
| Tempo de resposta do feed geolocalizado ([ 🛒 Consumidor B2C] [ 🤝 ONG/B2G]) | < 2s em 4G | Flutter DevTools |
| Tempo de abertura do app — cold start (todos os perfis) | < 3s em dispositivo mid-range | Flutter DevTools |
| Geração do QR Code PIX ([ 🛒 Consumidor B2C]) | < 3s | Monitoring Asaas |
| Latência de mensagens no chat ([Todos os usuários]) | < 500ms (Realtime) | Supabase Dashboard |
| OCR de data de validade on-device ([ 🏪 Comerciante B2B] [ 👤 PF Doador]) | < 2s | Flutter profiler |
| Tamanho do bundle Flutter (todos os perfis) | < 20 MB (APK/IPA) | Build output |
| Imagens: lazy loading + compressão 80% (todos os perfis) | Sem layout shift | Supabase CDN |
| Carregamento do mapa Mapbox ([ 🛒 Consumidor B2C] [ 🤝 ONG/B2G]) | < 3s em 4G | Mapbox Monitor |

### 8.2 Segurança
- Autenticação exclusiva por e-mail e senha via Supabase Auth (sem Google/OAuth/OTP SMS) — reduz superfície de ataque e dependências externas.
- Row-Level Security (RLS) habilitado em todas as tabelas PostgreSQL: usuários só acessam seus próprios dados.
- Tabela user_roles separada de profiles com enum (admin \| pf \| empresa \| ong) — prevenção de privilege escalation.
- ASAAS_API_KEY armazenada como variável de ambiente secreta na Edge Function; cartão nunca trafega pelo servidor do Conecta Mesa (PCI-compliant).
- Webhook validado por assinatura HMAC antes de qualquer processamento — prevenção de replay attacks.
- 3-D Secure 2.0 obrigatório em transações acima de R$ 200. Asaas Score em todas as transações.
- Supabase Storage com RLS por proprietário do anúncio para fotos de produtos.
- Dados sensíveis (CPF, CNPJ) armazenados com criptografia at-rest no PostgreSQL.
- Token Mapbox: armazenado como variável de ambiente, com restrições de domínio configuradas no painel Mapbox para evitar uso não autorizado.

### 8.3 Usabilidade
- Alvos de toque de no mínimo 48px (botões, chips, links) em conformidade com Material Design 3.
- Bottom Navigation Bar fixa com 4 abas: Início, Impacto, Anunciar, Conta.
- CTAs sticky nas telas de ação (detalhe do anúncio, checkout, publicação).
- Formulário de publicação de anúncio não ultrapassa 3 telas — redução de fricção operacional para o comerciante ([ 🏪 Comerciante B2B]).
- Tipografia: Montserrat (500 – 800) para títulos e botões; Nunito (400 – 700) para corpo — carregadas via google_fonts sem dependência de CDN.
- Border-radius de 16px em cards e inputs; formato pill (BorderRadius.circular(9999)) em badges e chips.
- Interfaces de alto contraste para maturidade digital variável do público-alvo (periferias da RMR).

### 8.4 Acessibilidade
- Contraste mínimo AA: texto escuro (#333333) em fundo branco; texto branco em Verde Ponte (#4CAF50).
- Semantics do Flutter configuradas em todos os widgets interativos (equivalente a aria-label).
- Suporte a Dynamic Type (tamanhos de fonte acessíveis do sistema operacional) via textScaleFactor.
- Feedback háptico em ações críticas (confirmação de pagamento, erro de OCR).
- Navegação por gestos preservada para usuários com dificuldades motoras.

### 8.5 Escalabilidade
- Infraestrutura Supabase Pro Plan dimensionada para até 5.000 MAU com custo abaixo de R$ 500/mês na fase de validação.
- Arquitetura serverless com Edge Functions (2M invocações/mês incluídas no Supabase Pro).
- Supabase Realtime com PostgreSQL Changes + WebSocket persistente suporta atualizações instantâneas em escala.
- Flutter multiplataforma (iOS + Android) a partir de um único codebase Dart — redução de custo de engenharia para expansão.
- CDN Supabase Storage para imagens fotográficas dos comerciantes com escalabilidade elástica.
- Mapa Mapbox: tier gratuito (50k loads/mês) cobre o período de validação do MVP. Upgrade para tier pago somente quando o volume de usuários ativos ultrapassar consistentemente 30k loads/mês.

---

## 9. Regras de Negócio

### 9.1 Publicação e Validade de Produtos
| ID | Tipo de Usuário | Regra | Ação do Sistema |
|----|-----------------|-------|-----------------|
| RN-01 | [ 🏪 Comerciante B2B] [ 👤 PF Doador] | Produto com data de validade vencida (verificada por OCR on-device) NÃO pode ser publicado | Bloqueio imediato na tela de publicação + mensagem de alerta + log de tentativa no banco |
| RN-02 | Sistema ([ 🏪 Comerciante B2B] trigger) | Produto não vendido atingindo a linha de tempo crítica (4h antes do prazo de retirada) é convertido automaticamente para "Doação" | Edge Function agendada verifica a cada hora; atualiza tipo_anuncio = 'doacao' e notifica vendedor e ONGs parceiras |
| RN-03 | [ 🤝 ONG/B2G] | ONGs com Selo ONG Verificada têm acesso ao pool de doações convertidas automaticamente — sem comissionamento (take rate = 0%) | Filtro de feed por tipo = 'doacao' liberado para perfis ong; campo comissao = 0 na transação B2G |
| RN-04 | [ 🏪 Comerciante B2B] [ 👤 PF Doador] | Foto do produto é OBRIGATÓRIA para publicação. Anúncio sem foto é rejeitado. | Validação no formulário Flutter antes de enviar ao Supabase. Campo foto_url NOT NULL no banco. |
| RN-05 | [ 🏪 Comerciante B2B] [ 👤 PF Doador] | GPS é OBRIGATÓRIO para publicação. Se permissão negada, exibe alerta e bloqueia publicação. | geolocator verifica permissão antes de habilitar botão de publicação. Fallback: solicitar permissão novamente. |
| RN-MAP01 | Sistema ([Todos os usuários]) | Uso do Mapbox GL monitorado contra o limite de 50.000 map loads/mês do tier gratuito. Ao atingir 80% do limite, alerta interno disparado. | Mapbox Token Usage API consultada diariamente. Alerta via Supabase Edge Function para e-mail da equipe de produto. |

### 9.2 Estados do Pedido
| Estado | Tipo de Usuário Afetado | Descrição | Transição |
|--------|-------------------------|-----------|-----------|
| DISPONIVEL | [Todos os usuários] | Anúncio publicado e disponível no feed | → RESERVADO (reserva confirmada) |
| RESERVADO | [ 🛒 Consumidor B2C] [ 🏪 Comerciante B2B] | Consumidor reservou; aguardando pagamento | → PAGO (webhook PAYMENT_CONFIRMED) → DISPONIVEL (pagamento expirado / não realizado em 15 min) |
| PAGO | [ 🛒 Consumidor B2C] [ 🏪 Comerciante B2B] | Pagamento confirmado pelo webhook Asaas | → ENTREGUE (QR Code escaneado pelo lojista) → CANCELADO + REEMBOLSO (não retirado em 2h) |
| ENTREGUE | [ 🛒 Consumidor B2C] [ 🏪 Comerciante B2B] | Consumidor retirou; QR Code confirmado; repasse liquidado | Estado final (sucesso) |
| CANCELADO | [ 🛒 Consumidor B2C] [ 🏪 Comerciante B2B] | Pedido não retirado no prazo, pagamento expirado ou estorno solicitado | → Asaas POST /v3/payments/{id}/refund automático |
| DOACAO | [ 🤝 ONG/B2G] | Produto convertido automaticamente do canal B2C para pool de doações B2G | → ENTREGUE_ONG (ONG confirma retirada) |

### 9.3 Regras de Pagamento e Take Rate
| ID | Tipo de Usuário | Regra |
|----|-----------------|-------|
| RN-06 | [ 🛒 Consumidor B2C] [ 🏪 Comerciante B2B] | Take rate de 20% a 30% sobre o valor pago pelo consumidor em transações B2C (sem mensalidade para o comerciante na fase de adesão) |
| RN-07 | [ 🤝 ONG/B2G] | Transações B2G (ONGs e Cozinhas Solidárias com Selo ONG Verificada) têm take rate = 0% — isento por design estratégico |
| RN-08 | [ 🛒 Consumidor B2C] | Reserva PIX expira em 15 minutos sem pagamento; produto retorna ao status DISPONIVEL automaticamente |
| RN-09 | [ 🛒 Consumidor B2C] [ 🏪 Comerciante B2B] | Produto pago e não retirado em 2 horas após confirmação de pagamento: pedido cancelado e estorno automático iniciado via Asaas Refund API |
| RN-10 | [ 🛒 Consumidor B2C] | Antifraude obrigatório: Asaas Score em todas as transações; 3-DS 2.0 obrigatório para transações acima de R$ 200 |

---

## 10. Fluxos do Sistema

### 10.1 Fluxo de Compra com PIX — [ 🛒 Consumidor B2C]
| Etapa | Ação | Sistema Responsável |
|-------|------|---------------------|
| 1 | Consumidor visualiza detalhe do anúncio e toca em "Reservar" | Flutter App ([ 🛒 Consumidor B2C]) |
| 2 | App cria reserva no Supabase e bloqueia o produto para outros usuários (status = RESERVADO) | Supabase Realtime |
| 3 | App chama Edge Function create-payment com valor, método PIX e dados do pedido | Supabase Edge Function |
| 4 | Edge Function autenticada cria cobrança via POST /v3/payments na Asaas usando ASAAS_API_KEY (secret) | Asaas API |
| 5 | Asaas retorna QR Code dinâmico + payload copia-e-cola com TXID único e validade de 15 minutos | Asaas API |
| 6 | App exibe QR Code via qr_flutter + botão copia-e-cola. Inicia polling de status a cada 3 segundos | Flutter App + Asaas |
| 7 | Consumidor realiza o pagamento PIX no banco. Asaas envia webhook PAYMENT_CONFIRMED | Asaas Webhook |
| 8 | Edge Function valida assinatura HMAC, atualiza status do pedido para PAGO e dispara notificação push para consumidor e vendedor | Supabase Edge Function |
| 9 | Consumidor vai ao estabelecimento e exibe QR Code de entrega gerado pelo qr_flutter | Flutter App ([ 🛒 Consumidor B2C]) |
| 10 | Vendedor escaneia QR Code via mobile_scanner. App atualiza status para ENTREGUE e dispara split de pagamento Asaas | Flutter App ([ 🏪 Comerciante B2B]) + Asaas Split |
| 11 | Dashboard de Impacto do consumidor é atualizado com CO₂ evitado e kg salvos referentes à transação | Supabase Database |

### 10.2 Fluxo de Conversão Temporal Automatizada (B2C → B2G)
| Etapa | Ação | Sistema Responsável |
|-------|------|---------------------|
| 1 | Vendedor publica anúncio com prazo_retirada (datetime) definido | Supabase Database ([ 🏪 Comerciante B2B]) |
| 2 | Edge Function de verificação executa a cada 60 minutos via Supabase Cron | Supabase Edge Function |
| 3 | Query busca produtos com: tipo = 'venda' AND status = 'DISPONIVEL' AND prazo_retirada <= NOW() + INTERVAL '4 hours' | Supabase PostgreSQL |
| 4 | Para cada produto encontrado: atualiza tipo_anuncio = 'doacao', comissao = 0, pool_ong = true | Supabase Database |
| 5 | Push notification enviada ao vendedor: "Seu produto [X] foi convertido para doação e está disponível para ONGs parceiras" | flutter_local_notifications ([ 🏪 Comerciante B2B]) |
| 6 | Feed das ONGs com Selo ONG Verificada exibe o produto automaticamente na seção "Doações Recentes" | Supabase Realtime ([ 🤝 ONG/B2G]) |

---

## 11. Dependências Técnicas

### 11.1 Stack Principal
| Camada | Tecnologia | Tipo de Usuário Servido | Responsabilidade |
|--------|------------|-------------------------|------------------|
| Frontend Mobile | Flutter + Dart | [Todos os usuários] | App iOS e Android (codebase único) |
| Gerenciamento de Estado | Riverpod | [Todos os usuários] | Padrão MVVM — ViewModel via providers |
| Backend (BaaS) | Supabase | [Todos os usuários] | Auth, Database (PostgreSQL), Realtime, Storage, Edge Functions |
| Pagamentos | Asaas API | [ 🛒 Consumidor B2C] [ 🏪 Comerciante B2B] | PIX dinâmico, Cartão, 3-DS 2.0, Split, Webhook HMAC, Antifraude |
| OCR on-device | google_mlkit_text_recognition | [ 🏪 Comerciante B2B] [ 👤 PF Doador] | Validação de validade na embalagem (Edge AI, sem servidor) |
| GPS / Localização | geolocator | [Todos os usuários] | Captura lat/lng com alta precisão, permissões nativas iOS e Android |
| Câmera | image_picker | [ 🏪 Comerciante B2B] [ 👤 PF Doador] | Acesso à câmera nativa iOS e Android |
| QR Code Geração | qr_flutter | [ 🛒 Consumidor B2C] [ 🏪 Comerciante B2B] | QR Code de pagamento PIX e confirmação de entrega |
| QR Code Leitura | mobile_scanner | [ 🏪 Comerciante B2B] | Leitura do QR Code de entrega pelo lojista |
| Gráficos | fl_chart | [Todos os usuários] | Dashboard de Impacto: gráfico de barras semanal |
| Notificações | flutter_local_notifications | [Todos os usuários] | Push notifications nativas dinâmicas por tipo de usuário (substitui OneSignal — incompatível com Flutter) |
| Tipografia | google_fonts | [Todos os usuários] | Montserrat + Nunito sem dependência de CDN externo |
| Design System | Flutter Material 3 + ThemeData | [Todos os usuários] | Paleta Ponte: Verde #4CAF50 (primary) + Laranja #FF9800 (secondary) |
| Validação CNPJ | Brasil API (brasilapi.com.br) | [ 🏪 Comerciante B2B] [ 🤝 ONG/B2G] | Validação automatizada de CNPJ para selos de verificação |
| Mapa Interativo | mapbox_maps_flutter (Mapbox GL) | [ 🛒 Consumidor B2C] [ 🤝 ONG/B2G] | Feed visual geolocalizado com pins dinâmicos. Tier gratuito: 50k loads/mês. iOS e Android sem instabilidades do SDK legado. |

### 11.2 Infraestrutura de Custo (MVP — 5.000 MAU)
| Categoria | Ferramenta | Tipo de Usuário Servido | Estimativa Mensal |
|-----------|------------|-------------------------|-------------------|
| Backend & BaaS | Supabase Pro Plan | [Todos os usuários] | ~R$ 135,00 (~USD 25) |
| Edge Functions | Supabase Edge Functions | [Todos os usuários] | Incluso no Pro (2M invocações/mês) |
| Gateway PIX | Asaas (variável por transação) | [ 🛒 Consumidor B2C] | R$ 0,99 – R$ 1,99 por PIX (absorvido no take rate) |
| Publicação nas Lojas | Google Play + Apple Developer | [Todos os usuários] | USD 25 (único) + USD 99/ano |
| APIs de GPS/Mapas | Google Maps API (GCP) | [Todos os usuários] | Coberto pelo crédito gratuito de USD 200/mês |
| Mapa Mapbox | Mapbox GL — Tier Gratuito | [ 🛒 Consumidor B2C] [ 🤝 ONG/B2G] | R$ 0/mês até 50.000 map loads/mês. Monitorado mensalmente. Upgrade somente após validação de crescimento. |
| TOTAL MVP | — | — | < R$ 500/mês |

### 11.3 Permissões Nativas Requeridas
| Permissão | Tipo de Usuário | iOS (Info.plist) | Android (AndroidManifest) |
|-----------|-----------------|------------------|---------------------------|
| Câmera | [ 🏪 Comerciante B2B] [ 👤 PF Doador] | NSCameraUsageDescription | android.permission.CAMERA |
| Galeria de Fotos | [ 🏪 Comerciante B2B] [ 👤 PF Doador] | NSPhotoLibraryUsageDescription | READ_MEDIA_IMAGES (Android 13+) |
| Localização GPS | [Todos os usuários] | NSLocationWhenInUseUsageDescription | ACCESS_FINE_LOCATION + ACCESS_COARSE_LOCATION |
| Notificações Push | [Todos os usuários] | Solicitada em runtime via flutter_local_notifications | POST_NOTIFICATIONS (Android 13+) |

---

## 12. Glossário

| Termo | Definição |
|-------|-----------|
| PIX Dinâmico | QR Code de pagamento PIX gerado por transação, com TXID único, validade definida e valor fixo — gerado pela API Asaas. |
| 3-D Secure 2.0 | Protocolo antifraude que adiciona autenticação do portador do cartão no checkout (token SMS, biometria). Obrigatório acima de R$ 200 no Conecta Mesa. |
| Asaas Score | Análise antifraude automática da Asaas baseada em comportamento e histórico de pagamentos do comprador. |
| Flutter | Framework de desenvolvimento multiplataforma do Google. Um único código-base Dart gera aplicativos nativos para iOS e Android. |
| Supabase | Backend-as-a-Service open-source baseado em PostgreSQL. Provê autenticação, banco de dados, Realtime, Storage e Edge Functions. |
| Riverpod | Biblioteca de gerenciamento de estado para Flutter. Usada no padrão MVVM do Conecta Mesa via providers. |
| RLS | Row-Level Security — políticas de acesso por linha no PostgreSQL, garantindo que cada usuário acesse apenas seus próprios dados. |
| Edge Function | Micro-serviço serverless hospedado no Supabase, executado na borda (baixa latência). Usado para create-payment, asaas-webhook, refund e conversão temporal. |
| Webhook | Notificação HTTP enviada por um serviço externo (Asaas) quando um evento ocorre (ex: pagamento confirmado). Validado por assinatura HMAC. |
| HMAC | Hash-based Message Authentication Code — mecanismo de validação de integridade e autenticidade dos webhooks enviados pela Asaas. |
| Take Rate | Percentual de comissão da plataforma sobre transações B2C (20% – 30%). Isento (0%) em transações B2G para ONGs. |
| CMV | Custo da Mercadoria Vendida — indicador financeiro que o Conecta Mesa ajuda o comerciante a recuperar ao monetizar excedentes em vez de descartá-los. |
| Split de Pagamento | Mecanismo da API Asaas que separa automaticamente a comissão da plataforma do repasse ao estabelecimento na liquidação da transação. |
| OCR | Reconhecimento Óptico de Caracteres — tecnologia usada pelo Google ML Kit para ler datas de validade nas embalagens on-device. |
| Edge AI | Processamento de inteligência artificial diretamente no dispositivo do usuário (sem envio ao servidor). Usado para o OCR de validade via google_mlkit_text_recognition. |
| Paleta Ponte | Identidade visual do Conecta Mesa: Verde Ponte (#4CAF50) para doações/ONGs/CTAs primários + Laranja Ponte (#FF9800) para vendas/urgência/empresas. |
| B2C | Business to Consumer — modelo de transações entre a plataforma/comerciante e consumidores finais, sujeito ao take rate. |
| B2B | Business to Business — modelo de parceria com comerciantes locais e corporações para gestão de excedentes e dashboards ESG. |
| B2G | Business to Government/Social — modelo de doações para ONGs, Cozinhas Comunitárias e Banco de Alimentos. Isento de comissionamento. |
| Mapbox GL / mapbox_maps_flutter | SDK oficial Mapbox v3 para Flutter. Integrado no MVP com suporte estável a iOS e Android. Tier gratuito: 50.000 map loads/mês. |
| Map Loads / Tile Loads | Unidade de cobrança do Mapbox: cada inicialização de um MapWidget conta como 1 map load. Monitorado mensalmente para controle de custo dentro do tier gratuito. |
| Notificações Dinâmicas | Sistema de push notifications renderizado condicionalmente por tipo de usuário: canais distintos para Vendedor/Doador (alertas de reserva) e Comprador/ONG (alertas de oferta próxima). |

---
**Responsável**: Rafael Pimentel • Abril 2026
