# CONECTA MESA — Documento Institucional (Institucional v1.2)

**Infraestrutura Digital de Redistribuição Alimentar**
Recife, Pernambuco — Brasil
Versão 1.2 | 2026

⚠️ **CONFIDENCIAL — Uso Interno Exclusivo**

## Sumário
1. [Controle de Documento](#controle-de-documento)
2. [Tipo de Negócio](#1-tipo-de-negócio)
3. [Nome do Projeto e Proposta de Valor](#2-nome-do-projeto-e-proposta-de-valor)
4. [Impacto Social, Econômico e Ambiental](#3-impacto-social-econômico-e-ambiental)
5. [Análise de Mercado](#4-análise-de-mercado)
6. [Validação do Problema e da Solução](#5-validação-do-problema-e-da-solução)
7. [Tipos de Usuários — Mapeamento de Personas](#6-tipos-de-usuários--mapeamento-de-personas)
8. [Pontos Fortes e Diferenciais Competitivos](#7-pontos-fortes-e-diferenciais-competitivos)
9. [Estratégias de Negócio](#8-estratégias-de-negócio)
10. [Estratégias de Marketing e Crescimento](#9-estratégias-de-marketing-e-crescimento)
11. [Valores e Cultura da Empresa](#10-valores-e-cultura-da-empresa)
12. [Uso de Inteligência Artificial no Produto](#11-uso-de-inteligência-artificial-no-produto)
13. [Padrões Arquiteturais e Decisões Técnicas](#12-padrões-arquiteturais-e-decisões-técnicas)
14. [Sistema de Reputação Institucional — Selo Parceiro Ponte](#13-sistema-de-reputação-institucional--selo-parceiro-ponte)
15. [Roadmap — Próximos Passos](#14-roadmap--próximos-passos)
16. [Visão Estratégica](#15-visão-estratégica)

---

## Controle de Documento

**Classificação**
Confidencial – Uso Interno Exclusivo. Este documento contém informações estratégicas proprietárias do projeto Conecta Mesa e não deve ser reproduzido, distribuído ou divulgado a terceiros sem autorização formal dos responsáveis.

**Informações de Versionamento**

| Campo | Informação |
|-------|------------|
| Versão | 1.2 |
| Data de Criação | 19/04/2026 |
| Última Atualização | 22/04/2026 |
| Responsável pelo Documento | Matheus Alves |
| Classificação | Confidencial — Uso Interno |

**Histórico de Alterações**

| Versão | Data | Descrição da Alteração | Responsável |
|--------|------|------------------------|-------------|
| 1.0 | 19/04/2026 | Criação inicial do documento institucional | Matheus Alves |
| 1.1 | 20/04/2026 | Incorporação de identidade visual (Paleta Ponte), persona Doadora PF, sistema de selos Parceiro Ponte, dashboard de impacto com coeficientes FAO e roadmap detalhado. Stack Flutter+Supabase mantida; equivalentes Flutter adicionados para câmera e QR Code. | Matheus Alves |
| 1.2 | 22/04/2026 | Correção do take rate (40/60), tipografia (Plus Jakarta Sans + Inter), push notifications (flutter_local_notifications), custo de subcontas Asaas e instrução de configuração White Label no Sandbox. | Matheus Alves |

---

## 1. Tipo de Negócio
Classificação Principal: FoodTech
O Conecta Mesa insere-se na categoria de FoodTech com arquitetura de receita e impacto tripartite, operando simultaneamente nos modelos B2C, B2B e B2G. Esta estrutura híbrida é o que diferencia a plataforma de iniciativas puramente assistencialistas ou de marketplaces de desconto convencionais.

### Modelo B2C — Business to Consumer
O motor transacional primário da plataforma. Consumidores finais — em especial famílias de baixa e média renda na Região Metropolitana do Recife — acessam o marketplace para adquirir alimentos excedentes com descontos substanciais (acima de 50%). A relação direta com o consumidor gera o fluxo de caixa operacional via comissão (take rate) e alimenta os indicadores de impacto ambiental e social que sustentam os pilares B2B e B2G.

### Modelo B2B — Business to Business
Parceria estrutural com o varejo local: padarias, hortifrutis, supermercados regionais e permissionários de centros de abastecimento. O Conecta Mesa oferece a esses estabelecimentos uma ferramenta de gestão de excedentes que converte prejuízo operacional (descarte de perecíveis) em recuperação de Custo da Mercadoria Vendida (CMV) e em ativo de reputação corporativa. O pilar B2B também abrange dashboards ESG e relatórios analíticos de impacto ambiental oferecidos em modelo SaaS para redes atacadistas e corporações que precisam documentar compensações de CO₂ para fins de governança e obtenção do Selo Doador de Alimentos (Lei nº 15.224/2025).

### Modelo B2G — Business to Government
Integração estratégica com equipamentos públicos: Cozinhas Comunitárias do Estado de Pernambuco, Banco de Alimentos do Recife e entidades da sociedade civil cadastradas. O fluxo B2G operacionaliza o módulo de doações, onde produtos que não foram vendidos no canal B2C dentro de um prazo crítico são automaticamente redirecionados ao pool de doações assistenciais. Esta vertente é isenta de comissionamento para as ONGs e cozinhas solidárias, pois seu papel é gerar volume de impacto ambiental mensurável que retroalimenta comercialmente o pilar B2B analítico.

---

## 2. Nome do Projeto e Proposta de Valor

### 2.1 Nome do Projeto
CONECTA MESA
Infraestrutura Digital de Redistribuição Alimentar

### 2.2 O Problema Estrutural
A insegurança alimentar contemporânea no Brasil não deriva da ausência física de comida, mas de uma profunda assimetria informacional aliada à falência dos canais logísticos de distribuição. Esta é uma falha de mercado estrutural — e não uma falha de produção.

| Dimensão do Problema | Dado Quantitativo |
|----------------------|-------------------|
| Domicílios em insegurança alimentar no Nordeste | ~38% do total nacional |
| Pernambuco no ranking nacional de insegurança | 5º pior estado da federação |
| Domicílios com algum nível de privação alimentar em PE | ~35,3% |
| Alimentos desperdiçados no varejo, serviços e domicílios no Brasil | ~19% do total disponível |
| Desperdício domiciliar médio por família brasileira | 353g/dia \| 128,8 kg/ano |

### 2.3 A Solução Proposta
O Conecta Mesa é uma plataforma digital multiplataforma (iOS e Android) que conecta comerciantes locais com excedente alimentar a consumidores finais e organizações sociais em tempo real, por meio de um marketplace geolocalizado, transparente e inteligente — onde o usuário sabe exatamente o que está adquirindo, ao contrário dos modelos opacos de 'sacola surpresa' existentes no mercado.

A plataforma opera uma mecânica de conversão temporal automatizada: a **"Mágica B2C → B2G"**. O produto inicia sua jornada disponível para venda B2C. O campo `pickup_deadline` (prazo limite) atua como motor logístico: se o produto não for comprado até 4 horas antes deste prazo, uma Edge Function o converte automaticamente em doação, acionando a flag `pool_ong` para dar prioridade às ONGs. Faltando 2 horas, são disparadas Notificações Push Agressivas para os usuários próximos ("Salve esta refeição antes que acabe!"), gamificando o resgate e maximizando o ciclo de vida do ativo em 100%.

### 2.4 Diferencial Estratégico
O Conecta Mesa não é um aplicativo de delivery reverso nem uma plataforma de cupons. É uma Infraestrutura Digital de Redistribuição Alimentar (Digital Public Infrastructure) que atua na interseção entre o atrito econômico do varejo, a demanda reprimida por alimentos acessíveis e as obrigações legais e ESG das empresas — criando valor simultâneo para três atores que, hoje, operam desconectados.

- Marketplace transparente com ficha nutricional completa — sem opacidade de 'sacola surpresa'
- Modelo híbrido único: venda com desconto + doação assistencial no mesmo fluxo de software
- Integração nativa com políticas públicas e legislação de doação (Lei nº 15.224/2025)
- Gamificação de impacto com métricas reais de CO₂ evitado e kg de comida salvos
- Dashboard ESG automatizado para compliance corporativo e obtenção do Selo Doador de Alimentos
- Sistema de reputação institucional (Selo Parceiro Ponte) com três níveis de verificação progressiva

---

## 3. Impacto Social, Econômico e Ambiental

### 3.1 Impacto Social
A insegurança alimentar em Pernambuco recai desproporcionalmente sobre as populações periféricas: 59,9% dos lares em situação de vulnerabilidade são chefiados por mulheres e 70% por indivíduos pretos ou pardos. A privação de alimentos in natura empurra essas famílias ao consumo de ultraprocessados calóricos de baixo custo, desencadeando epidemias silenciosas de obesidade, hipertensão e comprometimento cognitivo infantil — que, por sua vez, oneram o Sistema Único de Saúde.

A redução expressiva da insegurança alimentar grave verificada entre 2022 e 2024 — de 1,7 milhão para cerca de 450 mil indivíduos em situação de miséria alimentar aguda — não decorreu de reajuste orgânico de mercado, mas de maciças injeções de capital governamental via programas como o 'Pernambuco Sem Fome' (R$ 469,5 milhões em LOA) e 225 Cozinhas Comunitárias. Esta altíssima dependência de equipamentos públicos atesta que as cadeias de distribuição comercial da RMR não estão democratizando o acesso ao alimento de forma sustentável.

O Conecta Mesa atua sobre a causa-raiz: não a produção insuficiente, mas a distribuição ineficiente. Ao reduzir o custo de acesso a alimentos de qualidade para populações vulneráveis, a plataforma contribui diretamente para a restauração da dignidade alimentar e para a melhoria dos indicadores de saúde pública.

### 3.2 Impacto Econômico
Para o comerciante local, o Conecta Mesa transforma o descarte — contabilizado como lixo e prejuízo puro — em recuperação de CMV (Custo da Mercadoria Vendida). Plataformas análogas no Brasil já demonstraram a viabilidade desse modelo: em 2025, um player nacional impediu que parceiros descartassem mais de R$ 31 milhões em ativos de varejo.

Para o ecossistema regional, a redistribuição de excedentes alimentares via tecnologia representa uma correção de falha de mercado com impacto macroeconômico: redução de perdas na cadeia de abastecimento, geração de fluxo adicional para o pequeno varejo e diminuição da pressão inflacionária sobre a cesta básica das famílias vulneráveis.

O modelo de monetização sustentável — take rate de 40% sobre o netValue (valor líquido após taxas Asaas), sendo 60% repassado ao vendedor, sobre transações B2C e assinaturas SaaS de dashboards ESG — garante que o crescimento da plataforma não dependa de subsídios públicos permanentes, diferentemente das soluções puramente filantrópicas existentes.

### 3.3 Impacto Ambiental
A destruição de matéria orgânica em aterros sanitários responde por 8% a 10% das emissões globais de metano — um gás de efeito estufa com potencial de aquecimento 25 vezes superior ao CO₂ no horizonte de um século. Cada quilograma de alimento resgatado e consumido representa uma emissão evitada contabilizável, mensurada pelo coeficiente de referência FAO de 2,5 kg de CO₂-equivalente por kg de alimento.

O software do Conecta Mesa gera, automaticamente, relatórios de impacto ambiental formatados para auditorias corporativas: CO₂ equivalente evitado, quilogramas de alimento salvos e número de refeições redistribuídas. Esses relatórios são essenciais para empresas que buscam o Selo Doador de Alimentos (Lei nº 15.224/2025) e para investidores ancorados em fundos ESG.

O Banco de Alimentos do Recife — equipamento da Prefeitura — arrecadou e distribuiu 64 toneladas de alimentos ao longo de 2024, servindo 33 instituições sociais e 18 cozinhas solidárias. Este volume, embora meritoriamente positivo, é ínfimo comparado às milhares de toneladas desperdiçadas anualmente na RMR — o que evidencia a ausência de uma rede digital capilarizada capaz de interceptar perdas em escala comercial significativa. O Conecta Mesa se propõe a ser essa rede.

---

## 4. Análise de Mercado

### 4.1 Mercado Primário: Recife e Região Metropolitana
A Região Metropolitana do Recife (RMR) concentra o mercado primário de validação e expansão inicial do Conecta Mesa. A escolha é estratégica: trata-se de um dos maiores centros urbanos do Nordeste, com alta densidade populacional, tecido comercial varejista capilarizado (padarias de bairro, hortifrutis, mercadinhos, feiras livres e centros de abastecimento como o CEASA-PE) e indicadores críticos de insegurança alimentar que justificam a urgência da solução.

O polo de fruticultura irrigada do Vale do São Francisco e o cinturão verde do Agreste pernambucano descartam diariamente toneladas de alimentos com alto valor biológico — devido a rigorosos padrões estéticos, falhas na gestão de estoques e estrangulamento da malha logística — sem que esses insumos alcancem as populações periféricas da RMR.

### 4.2 Mercado Secundário: Estado de Pernambuco
Pernambuco figura como o quinto pior estado da federação no ranking nacional de segurança alimentar. A extensão da plataforma ao interior do estado, após consolidação da RMR, representa um mercado de expansão natural, dado o déficit estrutural de distribuição que afeta municípios do Sertão, Agreste e Zona da Mata.

### 4.3 Mercado Terciário: Brasil
Em âmbito nacional, o Brasil encerrou 2024 com 6,48 milhões de pessoas em situação de insegurança alimentar grave — queda de 23,5% ante 2023, mas ainda indicador de vulnerabilidade crônica. O Nordeste concentra cerca de 38% de todos os domicílios em situação de insegurança alimentar do país. O mercado endereçável total (TAM) para plataformas de redistribuição alimentar no Brasil é de dimensão considerável e ainda substancialmente não atendido por soluções digitais de qualidade.

### 4.4 Falhas Estruturais de Mercado Identificadas
A análise do ecossistema agroalimentar regional revela três falhas estruturais interdependentes que nenhum player atual endereça de forma integrada:
- **Assimetria de Distribuição:** A comida existe em abundância relativa; os canais de distribuição comercial da RMR não estão democratizando o acesso ao alimento de forma sustentável.
- **Dependência de Políticas Públicas:** A redução da insegurança alimentar depende de injeções massivas de capital governamental, não de mecanismos de mercado sustentáveis — tornando o sistema frágil a ciclos eleitorais e cortes orçamentários.
- **Ineficiência Logística da Última Milha:** A obsolescência da matriz de transporte rodoviário rompe a cadeia do frio. A arquitetura analógica dos bancos de alimentos existentes (contatos telefônicos, planilhas isoladas) impede a intercepção de perecíveis de curtíssima duração.

---

## 5. Validação do Problema e da Solução

### 5.1 Certezas: Evidências Comprovadas
A validação de mercado do Conecta Mesa apoia-se em dados empíricos que eliminam a necessidade de provar a existência de mercado — a engenharia deve focar na otimização da oferta, não na criação de demanda:
- A coexistência de 35,3% dos domicílios pernambucanos em insegurança alimentar com o descarte de 19% dos alimentos disponíveis configura um paradoxo de mercado irrefutável.
- Plataformas análogas no Brasil já demonstraram aderência do mercado varejista: um player nacional vendeu mais de 40.000 sacolas diariamente em 14 estados, gerando mais de R$ 31 milhões em receita incremental para parceiros em 2025.
- O arcabouço legal foi consolidado: a Lei nº 15.224/2025 assegura que doadores respondem civilmente apenas mediante dolo, cria o Selo Doador de Alimentos como incentivo ESG e estabelece que a doação não configura relação de consumo.

### 5.2 Hipóteses em Validação
O MVP do Conecta Mesa deve ser estruturado para validar empiricamente as seguintes hipóteses estratégicas:
- **Superação do Estigma Cultural:** A população recifense vulnerável priorizará o custo-benefício de alimentos próximos ao vencimento frente ao estigma antropológico da 'sobra', especialmente em cenário de inflação persistente.
- **Digitalização do Pequeno Varejo:** Pequenos comerciantes, feirantes e gerentes de panificadoras possuem maturidade digital mínima para integrar a publicação de inventário excedente em suas rotinas operacionais — especialmente com interfaces de 1-click baseadas em câmera e IA.
- **Eficácia da Gamificação:** Elementos de design comportamental (badges de impacto ambiental, leaderboards, conversão de pontos em cupons tangíveis) gerarão engajamento recorrente, evitando que o app seja utilizado apenas ocasionalmente.

### 5.3 Falhas das Soluções Atuais
- **Opacidade do Modelo 'Sacola Surpresa':** Aliena consumidores com restrições alimentares e impede o planejamento nutricional de ONGs, que necessitam de previsibilidade de insumos.
- **Foco Exclusivo em B2C ou B2G:** Os players existentes ou monetizam via consumidor final (sem integração filantrópica profunda) ou operam exclusivamente no modelo de doação (sem motor financeiro sustentável).
- **Ausência de Escala Hiperlocal no Nordeste:** O maior marketplace global do setor ainda não opera oficialmente no Brasil e seu modelo foi desenvolvido para mercados europeus, sem contemplar as assimetrias severas de insegurança alimentar estrutural e a necessidade de interações B2G intrínsecas ao tecido socioeconômico brasileiro.
- **Operação Predominantemente Analógica:** Bancos de Alimentos e iniciativas filantrópicas dependem de contatos telefônicos e planilhas isoladas, impedindo a interceptação de perecíveis de curtíssima duração.

---

## Fluxo Oficial do Produto (Substitui Tipos de Usuários)

## 👥 Personas

| Persona | Pode Comprar | Pode Vender | Pode Doar |
|---|---|---|---|
| **PF** (Pessoa Física) | ✅ | ✅ | ✅ |
| **PJ** (Pessoa Jurídica) | ✅ | ✅ | ✅ |
| **ONG** | ✅ | ✅ | ✅ |

---

## 📋 Cadastro (KYC e Compliance)

**Pessoa Física**
- [CORRIGIDO v2.0] Fluxo de cadastro padrão, com KYC progressivo (`kyc_level INT` em `personal`: 1=Compra, 2=Vende, Doa e Saca). Documentos armazenados na tabela `kyc_documents` com `reviewed_by`, `reviewed_at` e `asaas_feedback` — fonte da verdade do KYC. Campo `kyc_reminder_sent_at` em `personal` evita spam de notificação de KYC incompleto.

**Pessoa Jurídica (B2B)**
- Fluxo de cadastro padrão integrado à Brasil API para **inferência automática de segmento e CNAE** (barreira contra cadastros falsos).
- [CORRIGIDO v2.0] Exige aceite e assinatura digital do **Termo de Responsabilidade Sanitária**, registrado na tabela `sanitary_terms` como registro auditável (`term_version`, `agreed_at`, `ip_address`, `device_info`) — não como booleano em `business`. Subconta Asaas rastreada via `asaas_account_status` enum (NOT_CREATED \| PENDING \| APPROVED \| REJECTED) e `asaas_regulatory_until TIMESTAMP` (período regulatório Bacen de 60 dias).

**ONG**
- Mesmo fluxo do PJ, com validação de CNAE correspondente a organizações da sociedade civil.
- Diferenciada por uma opção: *"Sou uma ONG"*.
- Internamente cadastrada como `companyType: "ASSOCIATION"` na API do Asaas.
- [CORRIGIDO v2.0] Também exige assinatura do **Termo de Responsabilidade Sanitária**, registrado na tabela `sanitary_terms`.

> ⚠️ **Atenção técnica:** ONGs exigem documentação adicional no onboarding da subconta Asaas (Ata de Eleição), além dos documentos padrão (selfie + documento de identidade).

---

## 🔄 Fluxo de Compra (todas as personas)

1. Usuário navega pelo **feed** ou pelo **mapa** e encontra um anúncio
2. Seleciona o anúncio desejado, faz a **reserva** e realiza o **pagamento**
3. Após o pagamento, acessa o **chat** da plataforma para combinar a retirada com o vendedor
4. No momento da retirada, o comprador apresenta um **QR Code ou código da reserva**
5. O vendedor **escaneia o QR Code** ou **digita o código** na plataforma
6. Confirmada a retirada → o valor muda de **"pendente"** para **"disponível"** na carteira do vendedor
7. O comprador pode **avaliar** o vendedor e o alimento — [CORRIGIDO v2.0] avaliação registrada na tabela `reviews` (rating 1-5 estrelas + comentário opcional, `payment_id UNIQUE` — uma avaliação por pedido)

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
| `REFUNDED` | [CORRIGIDO v2.0] Estorno concluído via Asaas Refund API |
| `EXPIRADO` | [CORRIGIDO v2.0] `pickup_deadline` venceu sem ação — Edge Function marca o anúncio como EXPIRADO automaticamente |

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
[CORRIGIDO v2.0] Sistema cria registro na tabela `disputes` com `deadline_at = created_at + 48h`, `evidence_urls TEXT[]`, `resolved_by` e `asaas_refund_id`
        ↓
Equipe Conecta Mesa analisa (chat, fotos, avaliações)
        ↓
Disputa procedente?
  SIM → Estorno via painel ou API (com `asaas_refund_id` preenchido)
  NÃO → Registro encerrado com justificativa enviada ao comprador
```

### Regras de No-Show e Gamificação Inversa

Para garantir o compromisso de resgate:
- Existe uma janela de **2 horas** após o `pickup_deadline`.
- Se a retirada não for confirmada, o pedido é estornado integralmente de forma automática.
- Para desincentivar o mau uso, a conta que causou o "No-Show" recebe penalidade: [CORRIGIDO v2.0] incremento em `no_show_count` (ou `abusive_cancel_count` se cancelamento abusivo) na tabela `reputation_scores`, com registro auditável em `reputation_events` (`points_delta`, `reason` enum: `no_show` | `abusive_cancellation` | `other`). Além dos contadores, `reputation_scores` mantém `points INTEGER` (lifetime, default 100) e `points_this_month INTEGER` (base do ranking mensal “Heróis da Ponte”, resetado no 1º dia do mês via Edge Function). Snapshots mensais gravados em `reputation_monthly_snapshots` (`year_month`, `points`, `rank`) antes do reset.
- **3 ocorrências** em um período de 30 dias resultam em [CORRIGIDO v2.0] bloqueio via `blocked_until = NOW() + INTERVAL '7 days'` na tabela `reputation_scores`. `last_strike_at` rastreia a data da última penalidade.

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

## 🗂️ Universal Bottom Navbar (Todas as Personas)

O Conecta Mesa adota um padrão de **Bottom Navbar Universal de 6 abas**, nivelando a experiência entre PF, PJ (B2B) e ONG. Isso simplifica a navegação e a documentação.

| Ícone | Aba | Comportamento |
|---|---|---|
| 🏠 | **Início** | [CORRIGIDO v2.0] Feed principal cronológico. Distância nos cards calculada no cliente via Mapbox SDK + GPS. O Mapa pode ser acessado no topo do feed. |
| 👛 | **Carteira** | Saldo disponível/pendente, histórico de repasses financeiros e opção de saque. |
| ➕ | **Anunciar** | Formulário de criação de anúncio. Bloqueado se pendente de Verificação KYC ou Sanitária. |
| 📋 | **Histórico** | Controla as reservas/pedidos. Possui um *toggle superior* para alternar entre **"Compras/Resgates"** e **"Meus Anúncios"**. |
| 🌱 | **Impacto** | Dashboard de métricas (CO₂, refeições) e o ranking "Heróis da Ponte". Exibe o impacto coletivo e individual. |
| 👤 | **Perfil** | Status KYC, Reputação, Selos, Configurações de notificações push agressivas, Suporte e Logout. |

---

## 7. Pontos Fortes e Diferenciais Competitivos

### 7.1 Análise Competitiva do Ecossistema
O ecossistema de redistribuição alimentar é composto por players com focos distintos e lacunas exploráveis. O Conecta Mesa ganha de forma decisiva na sua arquitetura híbrida de monetização e impacto — a interseção do modelo transacional B2C com a profundidade ESG B2B/B2G — que nenhum competidor atual contempla de forma integrada.

| Player | Ponto Forte | Lacuna Explorável pelo Conecta Mesa |
|--------|-------------|-------------------------------------|
| Food To Save (BR) | Mais de 40.000 sacolas/dia em 14 estados. R$ 31M em receita incremental para parceiros em 2025. | Modelo de 'Sacola Surpresa' opaco, sem ficha nutricional. Menor integração B2G/ONG. |
| Too Good To Go (Global) | 130M usuários, +500M refeições salvas. Tecnologia madura e alto poder de capitalização. | Não opera no Brasil. Modelo pasteurizado para mercados europeus, sem interações B2G estruturais. |
| Infinineat (BR) | Dashboard ESG preditivo potente. R$ 56,8M em economias atestadas para grandes redes. | Zero canal B2C. Atende apenas corporações com metas ESG robustas; ignora o pequeno varejo. |
| Fome de Tudo (Recife) | Pioneirismo local. Conexão com WFP-ONU. +50 toneladas distribuídas. | Modelo exclusivamente filantrópico, sem motor financeiro interno (take rate B2C). |
| Bancos de Alimentos | Maior malha logística filantrópica nacional. Confiança institucional inabalável. | Operação predominantemente analógica. Impossibilidade de interceptar perecíveis de curta duração. |

### 7.2 Vantagem Competitiva Defensável
O fosso competitivo (moat) do Conecta Mesa é construído sobre parcerias B2G e B2B locais profundas — não sobre volume de capital ou escala de marketing. A integração como operador tecnológico oficial das 225 Cozinhas Comunitárias do Estado de Pernambuco e do Banco de Alimentos do Recife garante uma barreira de entrada legal e relacional quase intransponível para entrantes puramente comerciais.

- **Modelo Híbrido Único:** Redistribuição comercial e doação assistencial dentro do mesmo fluxo unificado de software — solucionando simultaneamente a dor do comerciante e a exigência de responsabilidade social corporativa.
- **Marketplace Transparente:** Ficha técnica completa com macronutrientes, alérgenos e data de validade — eliminando a principal objeção emocional do consumidor e o principal gargalo operacional das ONGs.
- **Integração ESG Self-Service:** Qualquer pequeno empório de bairro acessa os mesmos relatórios de impacto ambiental que um hipermercado — sem necessidade de consultoria presencial.
- **Network Effect Hiperlocal:** A estratégia de crescimento por densidade geográfica em bairros selecionados da RMR cria barreiras de entrada relacionais densas antes que players globais decidam alocar capital no Nordeste.
- **Sistema de Reputação Institucional:** Sistema de selos em três níveis (Empresa Verificada, ONG Verificada, Parceiro Ponte) gera confiança institucional e incentiva recorrência, com impacto esperado de +30% na taxa de conversão.

---

## 8. Estratégias de Negócio

### 8.1 Modelo de Receita
- **Pilar Principal — Take Rate Transacional B2C (Regra Universal e Inegociável):** O split de pagamentos é aplicado a **todas as transações financeiras de venda** processadas via Asaas, sem exceção de persona. A divisão é sempre **40% para a Conecta Mesa / 60% para o vendedor**, calculada sobre o **netValue** (valor bruto após desconto das taxas do Asaas). Uma padaria, uma ONG arrecadando fundos ou uma Pessoa Física anunciando excedente doméstico — qualquer ator que realizar uma **venda** paga exatamente os mesmos 40%. Não existe isenção de take rate para vendas, independentemente da persona ou da finalidade social declarada. A plataforma não imputa mensalidade ao vendedor; o mecanismo de Split da API Asaas aparta o percentual da plataforma automaticamente na confirmação do pagamento, eliminando reconciliação manual de caixa.
- **Pilar Secundário — SaaS Analytics e Dashboard ESG B2B:** Pacotes corporativos de acesso a Dashboards de Impacto Premium para redes atacadistas e corporações pressionadas por metas ESG. O software gera automaticamente a matriz técnica de emissão de CO₂ equivalente mitigado — viabilizando relatórios para investidores em fundos sustentáveis e obtenção do Selo Doador de Alimentos e de isenções tributárias estaduais (ICMS) em Pernambuco.
- **Pilar Social — Módulo de Resgate B2G Subsidiado:** ONGs e cozinhas solidárias não pagam take rate exclusivamente quando **resgatam doações gratuitas** — alimentos que não foram vendidos no canal B2C e foram automaticamente redirecionados ao pool B2G. A isenção existe porque não há transação financeira no resgate da doação: o campo `comissao` é zero e nenhum split é configurado no Asaas. **Se uma ONG utilizar a plataforma para vender um produto** (arrecadação de fundos, por exemplo), ela pagará os 40% da plataforma exatamente como uma padaria pagaria. A flag `is_ong` nunca altera as regras financeiras de vendas — apenas qualifica a instituição para o Selo ONG Verificada, isenção de CNPJ comercial (exigindo Ata de Eleição para o Asaas) e acesso ao mapa de doações gratuitas. A vertente B2G é isenta por design estratégico: os resgates assistenciais geram volume de mitigação ambiental mensurável que retroalimenta comercialmente o pilar SaaS ESG B2B.

### 8.2 Estratégia Go-to-Market: Crescimento Hiperlocal
A implantação de um marketplace multilateral sofre endemicamente da fricção clássica do 'Ovo e da Galinha': sem oferta de comerciantes, consumidores abandonam; sem consumidores, comerciantes não publicam. A solução é o crescimento por densidade geográfica — não por expansão territorial ampla.

**Fase 1 — Capitalização da Oferta (B2B/B2G)**
- Seleção de bairros-âncora de alta densidade na RMR: zonas com misto de residências populares e corredores comerciais intensos (ex: Boa Viagem, Casa Amarela).
- Atuação tática em campo com sindicatos de panificadoras, associações atacadistas do CEASA-PE e pequenos varejistas.
- Utilização da Lei nº 15.224/2025 como argumento de venda: o Conecta Mesa converte o compliance legal em ativo de reputação.
- Estabelecimento como orquestrador logístico oficial do Banco de Alimentos da Prefeitura do Recife — injetando métricas e tração comunitária desde o lançamento.

**Fase 2 — Expansão Regional e Nacional**
Após validação dos unit economics na RMR, a escalabilidade da arquitetura tecnológica (Flutter multiplataforma + Supabase serverless) permite expansão com custo marginal baixo para outros municípios pernambucanos, demais estados do Nordeste e, subsequentemente, para o mercado nacional.

---

## 9. Estratégias de Marketing e Crescimento

### 9.1 Tração da Demanda B2C — Campanhas e Gatilhos Sociais
- **Conteúdo Viral em Redes Sociais (TikTok / Reels):** A temática de combate ao desperdício alimentar gera atenção orgânica massiva nas redes. A estratégia de conteúdo documenta narrativas reais e altamente compartilháveis: 'O que compramos com R$ 15,00 no app em Boa Viagem?', 'Como esses vegetais resgatados impediram montanhas de lixo tóxico nos aterros de Pernambuco?'. A humanização da cadeia amplifica o alcance orgânico sem despesas proporcionais com propaganda comercial tradicional.
- **Narrativas Sociais — Fome vs. Desperdício:** O paradoxo entre insegurança alimentar e descarte massivo é intrinsecamente mobilizador. Campanhas que evidenciam dados concretos combinadas com histórias pessoais reais dos usuários criam vínculo emocional duradouro e impulsionam o crescimento viral orgânico.

### 9.2 Retenção e Engajamento — Gamificação com Impacto
O sistema de gamificação do Conecta Mesa transcende recompensas virtuais: cada transação gera métricas tangíveis de impacto ('Você evitou a emissão de 2,3 kg de CO₂ e salvou 800g de comida!'), convertíveis em cupons substanciais e prêmios nos fornecedores parceiros. Além disso, a reputação centralizada afeta o status de todos na rede.
- **Ranking Heróis da Ponte:** [CORRIGIDO v2.0] Competição mensal de resgatadores (gamificação) baseada em `points_this_month` na tabela `reputation_scores`. Snapshots mensais gravados em `reputation_monthly_snapshots` para ranking histórico. 1º Ouro, 2º Prata, 3º Bronze no painel de Impacto.
- **Selo "Resgatador Veloz":** Concedido a usuários que respondem aos alertas de Push Agressivos nos minutos finais antes da perda do produto, salvando refeições na "Mágica B2C → B2G".
- **Desafio 'Cidadão Zero Desperdício':** Acúmulo de selos ambientais por ciclos de compra, convertíveis em benefícios tangíveis — fidelizando o consumo circular.
- **Notificações Push por Urgência Geolocalizada:** Alertas contextuais baseados em proximidade e escassez ('Restam apenas 3 unidades de pão artesanal a 400m de você!') com alta taxa de conversão.
- **Pontuação de Reputação (Tabela `reputation_scores`):** Penalidades por atraso (No-Show) reduzem o ranking da conta. Comportamentos proativos aumentam o status.

---

## 10. Valores e Cultura da Empresa
Os valores do Conecta Mesa não são declarações decorativas — são princípios operacionais que se manifestam em cada decisão de produto, em cada parceria e em cada linha de código.

| Valor | Manifestação Operacional |
|-------|--------------------------|
| Sustentabilidade | Cada transação é uma emissão de CO₂ evitada. Os relatórios de impacto ambiental automatizados não são opcionais — são funcionalidade core do produto. |
| Impacto Social | O módulo B2G não é acessório — é a razão de existir da plataforma. ONGs e cozinhas solidárias são tratadas como parceiros estratégicos, não como receptores passivos. |
| Eficiência Econômica | O Conecta Mesa recusa o modelo puramente filantrópico dependente de doadores. A sustentabilidade financeira da plataforma é condição para a sustentabilidade do impacto. |
| Transparência | A opacidade da 'sacola surpresa' foi conscientemente rejeitada. O usuário sabe exatamente o que compra, com ficha técnica completa, macronutrientes e data de validade informada pelo vendedor. |
| Inclusão Alimentar | A interface foi desenhada para populações com baixa renda e maturidade digital variável. Acessibilidade não é conformidade regulatória — é valor fundamental. |
| Confiança Institucional | O sistema de selos de verificação (Empresa Verificada, ONG Verificada, Parceiro Ponte) materializa o compromisso com integridade, priorizando parceiros com histórico comprovado de impacto recorrente. |

---

## 11. Uso de Inteligência Artificial no Produto
A Inteligência Artificial no Conecta Mesa é aplicada de forma estratégica em matchmaking e otimização logística. ~~A validação de validade por OCR/Edge AI foi descartada no MVP~~ — a data de validade é inserida manualmente pelo vendedor via DatePicker e validada por comparação com `DateTime.now()`.

### ~~11.1 Validação de Alimentos por OCR + Machine Learning (Edge AI)~~
[CORRIGIDO v2.0] **Descartado do MVP.** O fluxo de cadastro de produtos utiliza inserção manual da data de validade via DatePicker nativo do Flutter. Se a data inserida for pretérita (`DateTime.now()` vs data do campo), a publicação é bloqueada com alerta visual vermelho: "Produto vencido — publicação bloqueada." A foto do produto continua obrigatória (via `image_picker`), mas não é mais processada por IA para leitura de datas. A dependência `google_mlkit_text_recognition` e a tabela `ocr_validation_logs` foram removidas do escopo.

### 11.2 Matchmaking de Oferta e Demanda
[CORRIGIDO v2.0] O algoritmo de matchmaking conecta, em tempo real, o excedente disponível ao perfil de demanda mais adequado — considerando histórico de consumo, restrições alimentares e urgência temporal do produto. A geolocalização é capturada via plugin geolocator e a distância entre usuário e anúncio é calculada no cliente via Mapbox SDK + GPS do celular (não no backend). Para ONGs, o sistema identifica automaticamente hotspots de doações massivas centralizadas em estabelecimentos próximos, otimizando a rota de resgate.

A conversão temporal automatizada é uma aplicação específica de matchmaking: ao cruzar uma linha de tempo crítica de proximidade ao vencimento, o produto é automaticamente redirecionado do canal de venda B2C para o pool de doações B2G — sem intervenção humana.

### 11.3 Otimização Logística
[CORRIGIDO v2.0] O sistema de geolocalização em tempo real (via plugin geolocator no Flutter) captura as coordenadas `lat`/`lng` de cada anúncio para plotagem de pins no Mapbox. A distância entre usuário e estabelecimento é calculada no cliente via Mapbox SDK + GPS do celular (não no backend), garantindo que, a qualquer momento, o usuário visualize ofertas disponíveis num raio caminhavel. Isso mitiga tanto o risco logístico (custo de deslocamento) quanto o risco de retenção (abandono por baixa densidade de ofertas).

---

## 12. Padrões Arquiteturais e Decisões Técnicas
O desenvolvimento de um produto digital que cruza simultaneamente operações financeiras dinâmicas (PIX API), geolocalização em tempo real e sincronização de filas para múltiplos atores demanda escolhas arquiteturais de excelência. A combinação Flutter + Supabase fornece uma solução escalável, moderna e economicamente eficiente para um cenário de MVP dimensionado para até 5.000 usuários iniciais, com elasticidade sistêmica para escala nacional.

### 12.1 Arquitetura Mobile — Flutter
Flutter é o framework de desenvolvimento multiplataforma do Google. Um único código-base em Dart gera aplicativos nativos para iOS e Android simultaneamente, sem perda de performance ou experiência de usuário. Para o Conecta Mesa, isso significa velocidade de entrega acelerada, consistência visual entre plataformas e redução de custo de engenharia — fatores críticos em uma startup early-stage.

### 12.2 Padrão Arquitetural — MVVM
O Conecta Mesa adota o padrão MVVM (Model-View-ViewModel) para organização do código frontend, com gerenciamento de estado via Riverpod:

| Camada | Responsabilidade |
|--------|------------------|
| Model (Modelo) | Dados e regras de negócio — ex: estrutura de uma transação, validação de produto. |
| View (Interface) | O que o usuário vê e toca — telas, widgets, botões, formulários, animações Flutter. |
| ViewModel | Intermediário que conecta dados às telas (via Riverpod providers), sem que uma conheça os detalhes da outra. |

Esta separação de responsabilidades facilita a manutenção, os testes automatizados e a evolução independente de cada camada — permitindo que a equipe de design altere interfaces sem afetar regras de negócio, e vice-versa.

### 12.3 Organização de Código — Feature-First
O código é organizado por funcionalidades de negócio (features), não por tipo de arquivo. Cada feature (marketplace, pagamento, usuário, doação, gamificação) contém todos os seus arquivos de interface (widgets), lógica (providers/viewmodels) e dados (repositórios/models) em um único diretório independente. Isso facilita a localização de código, a divisão de trabalho entre times e a adição de novas funcionalidades sem impactar as existentes.

### 12.4 Identidade Visual — Design System Ponte
A identidade visual da plataforma é definida pela Paleta Ponte, implementada via ThemeData e ColorScheme do Flutter Material 3, e reflete os dois eixos estratégicos do produto:

| Token | Valor (HEX) | Uso no Flutter |
|-------|-------------|----------------|
| Verde Ponte (primary) | #4CAF50 | Doações, ONGs, CTAs primários, ícones de sucesso |
| Laranja Ponte (secondary) | #FF9800 | Vendas, urgência, badges de oferta, empresas verificadas |
| Background | #FFFFFF | Fundo principal (Scaffold background) |
| Surface | #F5F5F5 | Cards, fundos secundários (Card widget) |
| Foreground | #333333 | Texto principal (TextTheme bodyLarge) |
| Muted | #737373 | Texto secundário (TextTheme bodySmall) |

A tipografia adota Plus Jakarta Sans (500 – 800) para títulos e botões e Inter (400 – 700) para corpo de texto, ambas disponíveis via pacote google_fonts do Flutter. Border-radius de 16px em cards e inputs; formato pill (BorderRadius.circular(9999)) em badges e chips. Alvos de toque mínimos de 48px em conformidade com as diretrizes de acessibilidade do Material Design.

### 12.5 Backend — Supabase + PostgreSQL
PostgreSQL é o banco de dados principal do Conecta Mesa. Gerencia entidades estritamente relacionais: Lojas, Usuários, Produtos, Transações, Repasses e Entidades Assistenciais. As restrições de integridade do PostgreSQL asseguram que saldos não sejam corrompidos em alta concorrência. O Row Level Security (RLS) — regras configuradas nativamente no banco — impede que qualquer cliente force acesso aos dados transacionais de concorrentes. A tabela user_roles é mantida separada de profiles, com enum (admin / pf / empresa / ong), para evitar privilege escalation.

O Supabase Realtime, via PostgreSQL Changes acoplado a conexões WebSocket persistentes com o cliente supabase_flutter, atualiza os painéis de todos os usuários instantaneamente — quando uma ONG confirma uma reserva, todos os usuários visualizando o mesmo item veem o status mudar para 'Esgotado' imediatamente, erradicando pedidos duplicados e overselling. O Supabase Storage orquestra o armazenamento escalável com CDN para o tráfego de imagens fotográficas enviadas pelos comerciantes. As Edge Functions são micro-serviços serverless para gatilhos críticos: invocação segura da API de pagamentos Asaas e processamento de cronogramas de expiração de produtos.

### 12.6 Integrações Fundamentais

| Integração / Plugin Flutter | Função Estratégica |
|-----------------------------|--------------------|
| PIX (via Asaas Gateway) | Pagamento instantâneo com QR Code dinâmico e copia-e-cola. Split automático entre plataforma e estabelecimento. Antifraude Asaas Score + 3-DS 2.0 obrigatório acima de R$ 200. Webhook HMAC para confirmação. |
| qr_flutter (QR Code nativo) | Geração e exibição de QR Code dinâmico no app Flutter para handshake de entrega. O consumidor exibe o código, o lojista escaneia via mobile_scanner, a transação muda para 'Entregue' e o repasse é liquidado — eliminando chargebacks. |
| geolocator (GPS) | Captura de latitude/longitude com alta precisão. Permissões nativas: NSLocationWhenInUseUsageDescription (iOS) e ACCESS_FINE_LOCATION (Android). Ranqueamento de estabelecimentos por proximidade e base para notificações push contextuais. |
| image_picker (Câmera) | Acesso à câmera nativa iOS e Android para captura da foto do produto. Permissões: NSCameraUsageDescription (iOS) e CAMERA (Android). |
| ~~google_mlkit_text_recognition (OCR)~~ | [CORRIGIDO v2.0] **Descartado do MVP.** Validação de data de validade agora é manual via DatePicker. |
| supabase_flutter (BaaS) | Cliente oficial Flutter para autenticação, banco de dados (PostgreSQL), Realtime, Storage e Edge Functions do Supabase. |
| google_fonts | Tipografia Plus Jakarta Sans e Inter carregadas via pacote oficial Flutter, sem dependência de CDN externo. |
| flutter_local_notifications + supabase | Push notifications nativas para alertas de urgência geolocalizada, confirmações de pagamento e atualizações de chat. Substitui OneSignal via Capacitor, incompatível com Flutter. |

### 12.7 Custos de Infraestrutura (MVP — 5.000 MAU)
O custo de sustentação de cloud e infraestrutura para tracionar até 5.000 usuários ativos mensais opera abaixo de R$ 500/mês — transformando o Conecta Mesa em uma operação de excepcional fluidez financeira na fase de validação.

| Categoria | Ferramenta | Estimativa Mensal |
|-----------|------------|-------------------|
| Backend & BaaS | Supabase Pro Plan | ~R$ 135,00 (~USD 25) |
| Edge Functions / Serverless | Supabase Edge Functions | Incluso no Pro (2M invocações/mês) |
| Gateway de Pagamentos PIX | Asaas (custo variável por transação) | R$ 0,99 – R$ 1,99 por PIX (absorvido no take rate) |
| Criação de Subcontas | Asaas (R$ 12,90 por subconta aprovada) | Variável — coberto pela Conecta Mesa |
| Publicação nas Lojas | Google Play + Apple Developer | USD 25 (único) + USD 99/ano |
| APIs de Mapas / GPS | Google Maps API (GCP) | Coberto pelo crédito gratuito de USD 200/mês |

---

## 13. Sistema de Reputação Institucional — Selo Parceiro Ponte
[CORRIGIDO v2.0] O Selo Parceiro Ponte é o sistema de reputação do Conecta Mesa para empresas e ONGs, exibido em cards do feed, no detalhe do anúncio e no perfil do parceiro. Implementado como widget reutilizável no Flutter (VerifiedBadge), opera em três níveis progressivos que incentivam tanto a adesão inicial quanto a recorrência de impacto. Solicitações de verificação são persistidas na tabela `verification_requests` com `level_requested` (VERIFIED \| PARCEIRO_PONTE), `document_urls TEXT[]`, `status` enum (PENDING → UNDER_REVIEW → APPROVED \| REJECTED), `reviewed_by`, `reviewed_at` e `rejection_reason`. Separado de `kyc_documents`: KYC = identidade, `verification_requests` = reputação institucional.

### 13.1 Níveis de Verificação

| Nível | Cor (Paleta Ponte) | Critério de Elegibilidade |
|-------|--------------------|---------------------------|
| Empresa Verificada | Laranja Ponte (#FF9800) | CNPJ ativo + comprovante de atividade comercial. Validação via Brasil API + aprovação manual. |
| ONG Verificada | Verde Ponte (#4CAF50) | CNPJ de associação + estatuto social + comprovante de atuação. Validação via Brasil API + aprovação manual. |
| Parceiro Ponte | Gradiente Verde → Laranja | Verificação concluída + 6 meses de doação recorrente comprovada na plataforma. |

### 13.2 Benefícios do Selo
- Destaque visual no feed com badge colorido ao lado do nome da instituição (widget VerifiedBadge reutilizável).
- Badge na tela de detalhe do anúncio — impacto esperado de +30% na taxa de conversão.
- Relatório mensal de impacto enviado por e-mail com métricas auditáveis de CO₂ evitado e kg redistribuídos.
- Direito de uso do selo digital em redes sociais e site próprio — ativo de reputação corporativa.
- Prioridade no atendimento ao usuário e no suporte da plataforma.

---

## 14. Roadmap — Próximos Passos

### 14.1 Curto Prazo — Backend Real
- Ativar Supabase para autenticação real (e-mail/senha).
- Persistir listagens no PostgreSQL com tabelas listings, profiles, user_roles, messages e payments.
- Storage bucket para fotos de produtos com RLS por proprietário.
- Edge functions para Asaas: create-payment, asaas-webhook e refund com validação HMAC.
- Configuração BaaS White Label no Sandbox (self-service): Não requer contato com suporte. Acesse: Menu do usuário → Minha conta → Configurações → Sandbox. Habilite BaaS White Label e Autoaprovação de subcontas filhas na mesma tela. (Confirmado pelo suporte Asaas em 22/04/2026.)
- Validação automatizada de CNPJ via Brasil API + fluxo manual de aprovação do Selo Parceiro Ponte.
- [CORRIGIDO v2.0] Mapa interativo no Feed (Mapbox) usando GPS dos anúncios (`lat`/`lng` numéricos em `listings`) e cálculo de distância no cliente via Mapbox SDK + GPS do celular.
- Push notifications nativas via flutter_local_notifications (Supabase não possui push nativo). Canais: chat, confirmação de pagamento, liberação de saldo na carteira e alertas de urgência geolocalizada.

### 14.2 Médio Prazo
- ~~Sistema de avaliações pós-retirada (estrelas + comentário)~~ — [CORRIGIDO v2.0] **Já implementado no banco v2.0** via tabela `reviews` (rating 1-5, comment, `payment_id UNIQUE`). Integração UI pendente.
- Painel administrativo Flutter Web para gestão do Selo Parceiro Ponte e moderação de conteúdo.

### 14.3 Longo Prazo
- Relatório PDF mensal de impacto gerado automaticamente e enviado por e-mail às instituições verificadas.
- Integração com sistemas de gestão de ONGs (PIPA, APAC) e API pública para parceiros (redes de padarias, supermercados).
- Programa de gamificação ampliado com badges, ranking de doadores e recompensas tangíveis.
- Consolidação como operador tecnológico oficial de redistribuição alimentar de Pernambuco — integração plena às 225 Cozinhas Comunitárias do Estado, Banco de Alimentos do Recife e CEASA-PE.

---

## 15. Visão Estratégica
O Conecta Mesa firma-se intrinsecamente como uma autêntica Infraestrutura Digital de Redistribuição Alimentar (Digital Public Infrastructure) — não como um intermediário monopolista, mas como o leito do rio e o barqueiro da cadeia sustentável.

A arquitetura e concepção do Conecta Mesa transcendem dramaticamente a de um aplicativo de delivery reverso ou de cupons de desconto. O cenário evidenciado pela interseção entre privação nutricional aguda e descarte criminoso diário de alimentos demonstra que a carência alimentar contemporânea não é mais produzida nos campos rurais — é produzida na escuridão dos fluxos da última milha e na ausência de conectividade digital entre quem tem excedente e quem tem necessidade.

### 15.1 Impacto Integrado em Três Dimensões

| Dimensão | Manifestação no Conecta Mesa |
|----------|------------------------------|
| Econômica | Converte prejuízo operacional do varejo em recuperação de CMV. Gera fluxo de caixa para o pequeno comerciante. Reduz pressão inflacionária sobre a cesta básica das famílias vulneráveis. Sustenta-se via take rate transacional e SaaS ESG — sem dependência de subsídios. |
| Social | Democratiza o acesso a alimentos de qualidade para populações periféricas. Restaura dignidade alimentar. Garante previsibilidade de suprimento nutricional para cozinhas solidárias. Reduz o consumo de ultraprocessados e seus impactos em saúde pública. |
| Ambiental | Gera métricas auditáveis de CO₂ evitado por transação (coeficiente FAO: 2,5 kg CO₂-eq/kg de alimento). Reduz volume de matéria orgânica em aterros. Viabiliza a obtenção do Selo Doador de Alimentos (Lei nº 15.224/2025) e isenções tributárias estaduais para parceiros B2B. |

### 15.2 Posicionamento de Longo Prazo
O Conecta Mesa empodera com ferramentas os agentes desarticulados do ecossistema alimentar local: oferece mecanismo sem fricções ao feirante oprimido por lucros encolhidos, resgate financeiro à jovem estudante subnutrida e providência confiável de suprimento à coordenadora engajada das zonas castigadas da periferia.

Ao aliar resgate financeiro diário imediato, engajamento comunitário pulsante e segurança jurídica comprovada pela Lei nº 15.224/2025, a plataforma não apenas converte lixo orgânico invisível no mais vibrante insumo cívico da capital — consolida com sucesso um pilar estratégico de longo prazo do FoodTech moderno focado em economia circular na era dos dados.

O objetivo de médio prazo é tornar-se o operador tecnológico oficial de redistribuição alimentar de Pernambuco — consolidando a integração com as 225 Cozinhas Comunitárias do Estado, o Banco de Alimentos do Recife e as associações atacadistas do CEASA-PE — criando barreiras de entrada legais e relacionais que transcendem a competição puramente comercial.

---
**Responsável**: Matheus Alves • Abril 2026
