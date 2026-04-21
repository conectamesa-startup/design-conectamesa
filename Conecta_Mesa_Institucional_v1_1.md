# CONECTA MESA — Documento Institucional (Institucional v1.1)

**Infraestrutura Digital de Redistribuição Alimentar**
Recife, Pernambuco — Brasil
Versão 1.1 | 2026

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
| Versão | 1.1 |
| Data de Criação | 19/04/2026 |
| Última Atualização | 20/04/2026 |
| Responsável pelo Documento | Matheus Alves |
| Classificação | Confidencial — Uso Interno |

**Histórico de Alterações**

| Versão | Data | Descrição da Alteração | Responsável |
|--------|------|------------------------|-------------|
| 1.0 | 19/04/2026 | Criação inicial do documento institucional | Matheus Alves |
| 1.1 | 20/04/2026 | Incorporação de identidade visual (Paleta Ponte), persona Doadora PF, sistema de selos Parceiro Ponte, dashboard de impacto com coeficientes FAO e roadmap detalhado. Stack Flutter+Supabase mantida; equivalentes Flutter adicionados para câmera e QR Code. | Matheus Alves |

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

A plataforma opera uma mecânica de conversão temporal automatizada: o produto inicia sua jornada disponível para venda B2C (com desconto substancial), e ao cruzar uma linha de tempo crítica próxima ao vencimento, converte-se automaticamente em doação para o braço B2G/ONG — maximizando o ciclo de vida do ativo alimentar em 100% de aproveitamento.

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

O modelo de monetização sustentável — take rate de 20% a 30% sobre transações B2C e assinaturas SaaS de dashboards ESG — garante que o crescimento da plataforma não dependa de subsídios públicos permanentes, diferentemente das soluções puramente filantrópicas existentes.

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

## 6. Tipos de Usuários — Mapeamento de Personas
A modelagem de experiências fluidas exige uma arquitetura de produto alicerçada na profunda compreensão antropológica, econômica e digital dos quatro atores cruciais do ecossistema de redistribuição do Conecta Mesa. As jornadas devem mitigar atritos operacionais de quem publica, suprimir o atrito emocional de quem consome e garantir a integridade transacional de quem distribui.

### Persona 1 — A Pessoa Física Doadora (Pilar B2C/B2G)
| Atributo | Descrição Analítica |
|----------|---------------------|
| Perfil Demográfico | Moradora de apartamento ou casa, realiza compras semanais e gera sobras de alimentos — frutas maduras, pães, hortifrutas. Quer evitar desperdício e ajudar vizinhos ou instituições próximas. |
| Dores Profundas | Sente-se culpada ao descartar alimentos ainda aproveitáveis, mas não conhece canais simples para redistribuí-los. Teme o esforço logístico de realizar uma doação. |
| Objetivos Primários | Publicar excedentes domésticos em poucos toques via câmera e GPS. Combinar retirada por chat. Ter visibilidade do impacto gerado por cada doação. |
| Comportamento Digital | Heavy user de WhatsApp. Adota PIX como método de pagamento principal. Responde a notificações push com contexto de urgência geolocalizado. |

### Persona 2 — O Comerciante Local (Pilar B2B)
| Atributo | Descrição Analítica |
|----------|---------------------|
| Perfil Demográfico | Gerente ou proprietário de estabelecimentos de médio a pequeno porte: padarias de bairro na Madalena, hortifrutis na Várzea, mercadinhos em Boa Viagem, permissionários em centros de abastecimento. Idade entre 35 e 55 anos. |
| Dores Profundas | A quebra operacional corrói o fluxo de caixa: o descarte de perecíveis representa prejuízo puro. Medo constante de autuações do Procon-PE por produtos vencidos dispostos acidentalmente em gôndolas. |
| Objetivos Primários | Interceptar o prejuízo e recuperar ao menos o CMV. Atrair novo fluxo orgânico de clientes via responsabilidade socioambiental. Obter o Selo Empresa Verificada e relatórios de impacto para o Selo Doador de Alimentos (Lei nº 15.224/2025). |
| Objeções à Plataforma | Desconfiança sobre complexidade tecnológica. Temor de canibalização de vendas: receio de que o cliente fiel aguarde o produto entrar na plataforma com desconto máximo. |
| Comportamento Digital | Usuário extensivo de WhatsApp Business e Instagram. Ferramentas complexas de retaguarda geram fadiga cognitiva. Necessita de interfaces utilitaristas de alto contraste e resposta em milissegundos via app nativo Flutter. |

### Persona 3 — A Consumidora Sensível a Preço (Pilar B2C)
| Atributo | Descrição Analítica |
|----------|---------------------|
| Perfil Demográfico | Chefes de família, estudantes universitárias ou jovens trabalhadoras residentes em periferias consolidadas ou regiões centrais adensadas da RMR (Santo Amaro, Ibura). Inseridas na estatística de 59,9% dos domicílios vulneráveis chefiados por mulheres. |
| Dores Profundas | Orçamento exíguo frente aos preços de hortifrúti e proteínas no varejo formal, empurrando a família ao consumo de ultraprocessados calóricos baratos — com impacto direto na saúde pública e no desenvolvimento cognitivo infantil. |
| Objetivos Primários | Restaurar a dignidade alimentar e acessar insumos in natura, pães artesanais e laticínios de qualidade. Busca descontos acima de 50% para que a cesta básica dure até o encerramento do mês. |
| Objeções à Plataforma | Estigma antropológico da 'sobra'. Receio justificado de dispender esforço logístico para buscar mercadoria que apresente indícios de deterioração. |
| Comportamento Digital | Alta adoção de PIX e QR Codes. Heavy user de redes sociais, cashback e apps de delivery. Responde proativamente a notificações push geolocalizadas com gatilhos de urgência. |

### Persona 4 — A Coordenadora de Ação Social (Pilar B2G)
| Atributo | Descrição Analítica |
|----------|---------------------|
| Perfil Demográfico | Liderança comunitária e responsável operacional de Cozinhas Solidárias ou do Banco de Alimentos do Recife. Dedica-se à sustentação diária de centenas de famílias marginalizadas com recursos escassos e forte engajamento cívico. |
| Dores Profundas | Insegurança logística severa: falta previsibilidade no fornecimento diário de doações, obrigando a equipe a dispender horas buscando insumos por telefone. Sobram carboidratos vazios; faltam vegetais frescos desperdiçados no CEASA-PE por colapso do frete. |
| Objetivos Primários | Assegurar estabilidade no suprimento de biomassa nutricional para planejamento de cardápios semanais. Garantir que alimentos doados atendam padrões rigorosos de segurança microbiológica. Obter o Selo ONG Verificada. |
| Objeções à Plataforma | Rechaça soluções que exijam dispêndio financeiro para retiradas fragmentadas. Teme responsabilização sanitária por doações contaminadas na origem. |
| Comportamento Digital | Comunicação e planejamento via grupos de WhatsApp. Conectividade móvel mediana. Requer dashboard em tempo real evidenciando hotspots de doações massivas em estabelecimentos próximos para otimizar a frota de resgate. |

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
- **Marketplace Transparente:** Ficha técnica completa com macronutrientes, alérgenos e data de validade atestada por IA — eliminando a principal objeção emocional do consumidor e o principal gargalo operacional das ONGs.
- **Integração ESG Self-Service:** Qualquer pequeno empório de bairro acessa os mesmos relatórios de impacto ambiental que um hipermercado — sem necessidade de consultoria presencial.
- **Network Effect Hiperlocal:** A estratégia de crescimento por densidade geográfica em bairros selecionados da RMR cria barreiras de entrada relacionais densas antes que players globais decidam alocar capital no Nordeste.
- **Sistema de Reputação Institucional:** Sistema de selos em três níveis (Empresa Verificada, ONG Verificada, Parceiro Ponte) gera confiança institucional e incentiva recorrência, com impacto esperado de +30% na taxa de conversão.

---

## 8. Estratégias de Negócio

### 8.1 Modelo de Receita
- **Pilar Principal — Take Rate Transacional B2C:** Comissão por venda (take rate) calculada no espectro competitivo de 20% a 30% sobre o total pago pelo consumidor por cada reserva de produto no aplicativo. A plataforma não imputa taxas de mensalidade às pequenas padarias e hortifrutis na fase de adesão, dissolvendo o atrito primordial de entrada no B2B. O mecanismo de Split de Pagamentos da API Asaas aparta automaticamente o percentual da plataforma e direciona o restante à carteira digital do estabelecimento, eliminando reconciliação manual de caixa.
- **Pilar Secundário — SaaS Analytics e Dashboard ESG B2B:** Pacotes corporativos de acesso a Dashboards de Impacto Premium para redes atacadistas e corporações pressionadas por metas ESG. O software gera automaticamente a matriz técnica de emissão de CO₂ equivalente mitigado — viabilizando relatórios para investidores em fundos sustentáveis e obtenção do Selo Doador de Alimentos e de isenções tributárias estaduais (ICMS) em Pernambuco.
- **Pilar Social — Módulo B2G Subsidiado:** ONGs e cozinhas solidárias operam sem comissionamento na plataforma. Esta vertente é isenta por design estratégico: os resresgates assistenciais na base B2G são as engrenagens silenciosas que impulsionam o volume da mitigação ambiental nos painéis ESG — que, por sua vez, alavancam a receita auferida na cobrança do acesso analítico dos atacadistas B2B.

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
O sistema de gamificação do Conecta Mesa transcende recompensas virtuais: cada transação gera métricas tangíveis de impacto ('Você evitou a emissão de 2,3 kg de CO₂ e salvou 800g de comida!'), convertíveis em cupons substanciais e prêmios nos fornecedores parceiros.
- **Desafio 'Cidadão Zero Desperdício':** Acúmulo de selos ambientais por ciclos de compra, convertíveis em benefícios tangíveis — fidelizando o consumo circular.
- **Leaderboard Comunitário:** Rankings de estabelecimentos e bairros por volume de alimentos salvos — criando competição saudável e visibilidade para os melhores parceiros B2B.
- **Notificações Push por Urgência Geolocalizada:** Alertas contextuais baseados em proximidade e escassez ('Restam apenas 3 unidades de pão artesanal a 400m de você!') com alta taxa de conversão.
- **Dashboard B2B de Impacto Mensal:** O estabelecimento enxerga sua volumetria de ativos recuperados (CMV salvo), emissões mitigadas e rastreabilidade digital completa.

---

## 10. Valores e Cultura da Empresa
Os valores do Conecta Mesa não são declarações decorativas — são princípios operacionais que se manifestam em cada decisão de produto, em cada parceria e em cada linha de código.

| Valor | Manifestação Operacional |
|-------|--------------------------|
| Sustentabilidade | Cada transação é uma emissão de CO₂ evitada. Os relatórios de impacto ambiental automatizados não são opcionais — são funcionalidade core do produto. |
| Impacto Social | O módulo B2G não é acessório — é a razão de existir da plataforma. ONGs e cozinhas solidárias são tratadas como parceiros estratégicos, não como receptores passivos. |
| Eficiência Econômica | O Conecta Mesa recusa o modelo puramente filantrópico dependente de doadores. A sustentabilidade financeira da plataforma é condição para a sustentabilidade do impacto. |
| Transparência | A opacidade da 'sacola surpresa' foi conscientemente rejeitada. O usuário sabe exatamente o que compra, com ficha técnica completa, macronutrientes e data de validade atestada por IA. |
| Inclusão Alimentar | A interface foi desenhada para populações com baixa renda e maturidade digital variável. Acessibilidade não é conformidade regulatória — é valor fundamental. |
| Confiança Institucional | O sistema de selos de verificação (Empresa Verificada, ONG Verificada, Parceiro Ponte) materializa o compromisso com integridade, priorizando parceiros com histórico comprovado de impacto recorrente. |

---

## 11. Uso de Inteligência Artificial no Produto
A Inteligência Artificial no Conecta Mesa não é um diferencial de marketing — é infraestrutura de confiança e eficiência operacional. Os três eixos de aplicação são interdependentes e críticos para a viabilidade do modelo de negócio.

### 11.1 Validação de Alimentos por OCR + Machine Learning (Edge AI)
O fluxo de cadastro de produtos não permite inserção manual cega de datas de validade para itens industrializados. O comerciante é forçado pela UX a capturar, via câmera nativa do dispositivo, o carimbo oficial de lote e validade na embalagem. A captura é realizada pelo plugin image_picker (Flutter), que acessa a câmera nativa em iOS e Android sem dependências externas ao ecossistema Flutter.

O sistema utiliza a biblioteca Google ML Kit (google_mlkit_text_recognition) — embarcada diretamente no aplicativo Flutter — para processar a extração de texto no próprio dispositivo (Edge Computing), sem necessidade de envio ao servidor. Se o algoritmo identificar uma data pretérita, o envio ao banco de dados é instantaneamente bloqueado, alertando o vendedor sobre a irregularidade sanitária. Esta camada é o principal mecanismo de prevenção de fraudes e passivos legais da plataforma.

### 11.2 Matchmaking de Oferta e Demanda
O algoritmo de matchmaking conecta, em tempo real, o excedente disponível ao perfil de demanda mais próximo — considerando geolocalização (via plugin geolocator com alta precisão), histórico de consumo, restrições alimentares e urgência temporal do produto. Para ONGs, o sistema identifica automaticamente hotspots de doações massivas centralizadas em estabelecimentos próximos, otimizando a rota de resgate.

A conversão temporal automatizada é uma aplicação específica de matchmaking: ao cruzar uma linha de tempo crítica de proximidade ao vencimento, o produto é automaticamente redirecionado do canal de venda B2C para o pool de doações B2G — sem intervenção humana.

### 11.3 Otimização Logística
O sistema de geolocalização em tempo real (via plugin geolocator no Flutter) ranqueia estabelecimentos por proximidade ao usuário, garantindo que, a qualquer momento, haja oferta disponível num raio caminhável de até 2 quilômetros. Isso mitiga tanto o risco logístico (custo de deslocamento) quanto o risco de retenção (abandono por baixa densidade de ofertas).

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

A tipografia adota Montserrat (500 – 800) para títulos e botões e Nunito (400 – 700) para corpo de texto, ambas disponíveis via pacote google_fonts do Flutter. Border-radius de 16px em cards e inputs; formato pill (BorderRadius.circular(9999)) em badges e chips. Alvos de toque mínimos de 48px em conformidade com as diretrizes de acessibilidade do Material Design.

### 12.5 Backend — Supabase + PostgreSQL
PostgreSQL é o banco de dados principal do Conecta Mesa. Gerencia entidades estritamente relacionais: Lojas, Usuários, Produtos, Transações, Repasses e Entidades Assistenciais. As restrições de integridade do PostgreSQL asseguram que saldos não sejam corrompidos em alta concorrência. O Row Level Security (RLS) — regras configuradas nativamente no banco — impede que qualquer cliente force acesso aos dados transacionais de concorrentes. A tabela user_roles é mantida separada de profiles, com enum (admin / pf / empresa / ong), para evitar privilege escalation.

O Supabase Realtime, via PostgreSQL Changes acoplado a conexões WebSocket persistentes com o cliente supabase_flutter, atualiza os painéis de todos os usuários instantaneamente — quando uma ONG confirma uma reserva, todos os usuários visualizando o mesmo item veem o status mudar para 'Esgotado' imediatamente, erradicando pedidos duplicados e overselling. O Supabase Storage orquestra o armazenamento escalável com CDN para o tráfego de imagens fotográficas enviadas pelos comerciantes. As Edge Functions são micro-serviços serverless para gatilhos críticos: invocação segura da API de pagamentos Asaas e processamento de cronogramas de expiração de produtos.

### 12.6 Integrações Fundamentais

| Integração / Plugin Flutter | Função Estratégica |
|-----------------------------|--------------------|
| PIX (via Asaas Gateway) | Pagamento instantâneo com QR Code dinâmico e copia-e-cola. Split automático entre plataforma e estabelecimento. Antifraude Asaas Score + 3-DS 2.0 obrigatório acima de R$ 200. Webhook HMAC para confirmação. |
| qr_flutter (QR Code nativo) | Geração e exibição de QR Code dinâmico no app Flutter para handshake de entrega. O consumidor exibe o código, o lojista escaneia via mobile_scanner, a transação muda para 'Entregue' e o repasse é liquidado — eliminando chargebacks. |
| geolocator (GPS) | Captura de latitude/longitude com alta precisão. Permissões nativas: NSLocationWhenInUseUsageDescription (iOS) e ACCESS_FINE_LOCATION (Android). Ranqueamento de estabelecimentos por proximidade e base para notificações push contextuais. |
| image_picker (Câmera) | Acesso à câmera nativa iOS e Android para captura da embalagem do produto. Retorno de imagem para processamento OCR on-device. Permissões: NSCameraUsageDescription (iOS) e CAMERA (Android). |
| google_mlkit_text_recognition (OCR) | Reconhecimento óptico de caracteres nas embalagens para validação de datas de validade no próprio dispositivo (Edge AI), antes da publicação no servidor. |
| supabase_flutter (BaaS) | Cliente oficial Flutter para autenticação, banco de dados (PostgreSQL), Realtime, Storage e Edge Functions do Supabase. |
| google_fonts | Tipografia Montserrat e Nunito carregadas via pacote oficial Flutter, sem dependência de CDN externo. |
| flutter_local_notifications + supabase | Push notifications nativas para alertas de urgência geolocalizada, confirmações de pagamento e atualizações de chat. Substitui OneSignal via Capacitor, incompatível com Flutter. |

### 12.7 Custos de Infraestrutura (MVP — 5.000 MAU)
O custo de sustentação de cloud e infraestrutura para tracionar até 5.000 usuários ativos mensais opera abaixo de R$ 500/mês — transformando o Conecta Mesa em uma operação de excepcional fluidez financeira na fase de validação.

| Categoria | Ferramenta | Estimativa Mensal |
|-----------|------------|-------------------|
| Backend & BaaS | Supabase Pro Plan | ~R$ 135,00 (~USD 25) |
| Edge Functions / Serverless | Supabase Edge Functions | Incluso no Pro (2M invocações/mês) |
| Gateway de Pagamentos PIX | Asaas (custo variável por transação) | R$ 0,99 – R$ 1,99 por PIX (absorvido no take rate) |
| Publicação nas Lojas | Google Play + Apple Developer | USD 25 (único) + USD 99/ano |
| APIs de Mapas / GPS | Google Maps API (GCP) | Coberto pelo crédito gratuito de USD 200/mês |

---

## 13. Sistema de Reputação Institucional — Selo Parceiro Ponte
O Selo Parceiro Ponte é o sistema de reputação do Conecta Mesa para empresas e ONGs, exibido em cards do feed, no detalhe do anúncio e no perfil do parceiro. Implementado como widget reutilizável no Flutter (VerifiedBadge), opera em três níveis progressivos que incentivam tanto a adesão inicial quanto a recorrência de impacto.

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
- Validação automatizada de CNPJ via Brasil API + fluxo manual de aprovação do Selo Parceiro Ponte.
- Mapa interativo no Feed (Mapbox) usando GPS dos anúncios e cálculo de distância real via Haversine.
- Push notifications nativas via (VERIFICAR SE O SUPABASE TEM ISSO) para chat, confirmação de pagamento e alertas de urgência.

### 14.2 Médio Prazo
- Push notifications nativas via (VERIFICAR SE O SUPABASE TEM ISSO) para chat, confirmação de pagamento e alertas de urgência.
- Sistema de avaliações pós-retirada (estrelas + comentário) para reforço do sistema de reputação.
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
