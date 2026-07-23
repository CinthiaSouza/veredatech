# Contexto atual — Produto GovTech para Câmaras Municipais

_Última atualização: 2026-07-22 · **REPLANEJAMENTO PÓS-FEEDBACK** (Fase 4 estava completa; reunião com Diego em 22/07 pediu modularização — Fase 3 reaberta para 3.5, próxima etapa é atualizar 4.3 e construir novos HTMLs) · nome final: **VeredaTech**_

## Feedback de Diego (reunião 2026-07-22) — o que muda a partir daqui
Diego (parceiro comercial) validou o conceito e elogiou a interface, mas pediu para o produto deixar de ser "um sistema de indicações" e virar plataforma modular: 5 módulos legislativos (Projeto de Lei, Indicações, Requerimentos, Moções, Emendas ao Orçamento), visão institucional (Presidente/Mesa, não só gabinete), integrações futuras, anexos, WhatsApp via canal real (adiado — só quando houver desenvolvimento de fato) e identidade visual real da Câmara de Aracaju para demonstração (fotos dos vereadores, cores/logo oficiais — pendente de assets, pedir a Diego).
Detalhe completo do feedback e priorização: `01-discovery/1.8-feedback-diego-priorizacao.md`.

## Decisão da usuária para esta rodada (2026-07-22) — continua só protótipo
Antes de tocar em qualquer tela, foi lido o Regimento Interno de Aracaju na íntegra para mapear o rito de cada um dos 5 módulos (`01-discovery/1.7-tramitacao-regimental-modulos.md`) — achado central: cada módulo tem atores, prazos e quóruns regimentalmente distintos (ex.: Indicação não tem prazo de resposta nenhum; Requerimento de Informação tem 15 dias úteis sob pena de crime de responsabilidade; Moção tem parecer da CCJ em 2 dias úteis; Projeto de Lei tem o rito mais longo, com sanção/veto).
Escopo aprovado para o replanejamento do protótipo (`03-planejamento/3.5-impacto-modulos-e-perfis.md`), **ainda sem nada funcional**:
1. Ficha da indicação ganha um badge "Origem: SAPL" (aparência de integração, sem integração real).
2. Novo módulo **Projeto de Lei**, com linha do tempo própria mostrando a tramitação normal (protocolo → leitura → distribuição a comissões → parecer → discussões → votação → sanção/veto → promulgação).
3. Novo fluxo de **cadastro de proposição com dois perfis**: "Gabinete" (vereador/assessor) protocola; "Secretaria/Presidência" (nome a confirmar com a usuária) faz a proposição tramitar (despacha a indicação ou distribui o PL às comissões) — mapeamento regimental confirmado (Art. 145-146, 159-160, 74).
WhatsApp funcional fica fora desta rodada — só entra quando o produto for desenvolvido de verdade.

## Exceção pontual (2026-07-22) — ranking de autoria só na visão institucional interna
A usuária pediu um ranking de vereadores por autoria de proposições no dashboard da Secretaria/Presidência (`04-execucao/prototipo/6.6-visao-institucional.html`), que colidia com a regra travada abaixo de "sem comparação pública entre vereadores". Decisão de meio-termo: o ranking nominal existe, mas **só nesta tela interna da Mesa** — nunca público, nunca visível aos demais gabinetes (perfil Gabinete não tem acesso a ele). A regra geral de não comparação pública continua valendo para qualquer superfície fora dessa visão institucional interna. Construído junto com um "Panorama por módulo" (distribuição de estados por tipo, filtro interativo) para o dashboard institucional deixar de ser dedicado só a indicações.

## Foco travado (decisões da usuária)
- Modelar **primeiro só o item "a"**: indicações/projetos por vereador. NÃO misturar com orçamento/finanças agora.
- Comprador: **modelo HÍBRIDO** — a Mesa Diretora compra (1 contrato institucional), o vereador/gabinete usa. A enfrentar: conflito da transparência comparativa (camadas de visão: privada gabinete / gerencial Mesa / pública).
- Alvo de mercado: **capitais e câmaras médias/grandes** (Aracaju se encaixa). Base pequena (70% das câmaras) não paga a venda.
- **Núcleo do problema TRAVADO em 2.1: Leitura A** (fechar o ciclo da indicação → prestação de contas) como núcleo + **B (geo/gestão à vista) como camada de diferenciação**.
- Requisitos 2.1: LGPD + WCAG desde o design; bootstrap sem prazo fixo; WhatsApp obrigatório no MVP; fora de cogitação: comparação pública entre vereadores e app do cidadão.

## Estratégia consolidada na Fase 2 (ver 02-estrategia/)
- **Produto em 6 camadas** (2.2): ingestão (scraping SAPL como adaptador trocável) → ciclo (registro de desfecho <10s — CRIA o dado de resposta que não existe em nenhuma base = fosso proprietário) → pressão (alerta de silêncio + minuta de requerimento de informação em 1 clique, o "dente" regimental: 15 dias com sanção) → prova (balanço de mandato por bairro — a demo que vende) → território (geo via LLM da ementa) → instituição (visão da Mesa agregada, sem ranking).
- **Golden Circle** (2.3): "Nenhum pedido de morador morre no silêncio." Cobrança aponta para fora (Executivo), nunca para dentro da Casa.
- **Preço** (2.4): Aracaju R$ 4.900/mês — sob o teto de dispensa de licitação (R$ 65.492/ano, Decreto 12.807/2025). Contratos reais no PNCP validam a faixa (câmaras pequenas de SE pagam R$ 6-9 mil/mês; Recife paga R$ 66 mil/mês na mesma categoria). Break-even com 1 cliente.
- **Sequência comercial**: piloto gratuito 60-90 dias com 2-3 gabinetes perfil "Simone" (via Diego) → prova social intra-Casa → contrato com a Mesa. Métrica nº 1 do piloto: ≥60% das indicações com desfecho registrado (a aposta comportamental do Rafael — se falhar, o produto vira vitamina).

## Planejamento consolidado na Fase 3 (ver 03-planejamento/)
- **Nome:** VeredaTech (pendente INPI classes 9/42 + registro.br; fallback: Protocola).
- **Visual (3.2, aprovado):** clean/leve/moderno — fundo névoa `#EFEEEA`, cartões brancos, tudo em pílula, CTA preto `#1A1B1E`, acento **Verde-vereda `#1E5F4E`** (= cor do estado "respondida"); âmbar = silêncio, vermelho só para prazo vencido (proibido como marca). Tipografia: Schibsted Grotesk + Inter.
- **Roadmap:** H0 fundação/scraper → H1 MVP piloto → H2 venda institucional → H3 replicabilidade. **MVP = H0+H1**, piloto 2-3 gabinetes 60-90 dias.

## Em uma frase
Camada de **gestão à vista e inteligência** sobre as indicações dos vereadores da Câmara de Aracaju — o dado já existe no SAPL, mas hoje é cego (preso em PDF/tela de banco de dados, sem visão consolidada, sem território, sem acompanhamento de resposta).

## ⚠️ Premissa corrigida (não é "primeiro sistema")
Aracaju USA SAPL (Interlegis), tem portal de transparência e API de dados abertos. O gap não é tramitação — é **gestão gerencial/estratégica e visualização**. Ver `01-discovery/1.1-hipotese-problema.md`.

## Números-chave (Aracaju)
- **26 vereadores** (mandato 2025-2028; mudança da Lei Orgânica já valeu na eleição de 2024). 12 reeleitos, só 4 mulheres. Presidente Ricardo Vasconcelos (discurso pró-transparência, Selo Diamante TCE; tecnologia não é bandeira dele).
- 2023: 3.930 proposições, **2.398 indicações (61%)** — indicação é o maior volume.
- Indicação não vincula o Executivo; rito simples; ~30 dias resposta (não confirmado p/ Aracaju).
- TCE/SE tem selo de transparência mas não exige indicações → oportunidade.
- Sergipe: 75 municípios (teto expansão estadual).
- Domínio: `aracaju.se.leg.br` (Câmara) ≠ `transparencia.aracaju.se.gov.br` (Prefeitura).

## Origem
Reunião entre Diego (comercial/relacionamento político) e Danilo (técnico/produto). Diego tem contato dentro da Câmara de Aracaju. A dor #1 e mais importante: a Câmara **não possui sistema** para monitorar (a) indicações/projetos por vereador e (b) orçamento/finanças da própria Casa. Volume estimado: ~26 vereadores × ~10 projetos/trimestre ≈ 260 proposições/período, controladas em papel.

## Sócios e papéis
- **Danilo** — capital técnico/produto. Já construiu painel de emendas estaduais (via plataforma Target, integrado ao GESP/SE) e metodologia de dev acelerado com IA.
- **Diego** — relacionamento comercial/político (contatos em Aracaju, Sergipe, e senadores).
- **Cinthia (usuária deste pipeline)** — UX/design, prototipação de alta fidelidade.

## Hipótese de produto (da reunião)
- Começar pela **parte interna** (gestão à vista) antes de abrir ao público, para evitar atrito político.
- Feature "matadora": gestão à vista **georreferenciada** — mapa por indicação/bairro, popover com detalhes (parlamentar, status, valor).
- Múltiplas visões: Câmara como um todo · por parlamentar (mapa de calor de atuação, útil p/ reeleição) · por região.
- Módulo futuro: app do cidadão que registra demanda → triagem → vira indicação parlamentar.
- Sem integração com sistema legado exigida nesse 1º momento (Câmara "não tem sistema").

## Escopo dos 3 projetos discutidos (este pipeline trata só do #1)
1. **Câmara de Vereadores (prioridade 1)** — ESTE PRODUTO.
2. Assembleia Legislativa / emendas estaduais (produto distinto; ativo Target reaproveitável; integra no futuro).
3. Portfólio turismo/Maceió (sem urgência).

## Leitura crítica do analista (pontos de atenção já mapeados)
- **Validar a premissa "nenhum sistema":** SAPL (Interlegis/Senado) é gratuito e adotado em capitais. Aracaju provavelmente tem *tramitação*, mas não *gestão/monitoramento gerencial e orçamentário*. Posicionar como **camada de inteligência**, não "primeiro sistema".
- **Pedido #2 (orçamento/finanças da Câmara) é o gap das pesquisas** — dominado por ERPs contábeis (Betha, IPM, Elotech), exige integração contábil e prestação ao TCE-SE. Metade do pedido está descoberta.
- **Distinguir indicação ≠ projeto de lei ≠ emenda impositiva.** MVP mais defensável: indicações + emendas impositivas georreferenciadas, sem competir na tramitação regimental completa (mercado maduro).
- **Mapa de calor já existe:** ZOI/Fortaleza. Diferencial real = produtizar em SaaS replicável, não ineditismo.
- **Risco político > risco técnico:** expor atuação por vereador é explosivo dentro da Casa. Arquitetura de permissões é decisão comercial.
- **Dois compradores com incentivos opostos:** institucional (Mesa Diretora, 1 licença, ticket maior) vs. CRM de mandato (gabinete, pulverizado, território do Conecta Gabinete). Entrada recomendada: institucional.
- **Gatilho de compra mais forte:** compliance/TCE (ADPF 854, selo de transparência, medo de glosa) > dashboard bonito.
- **Fosso competitivo latente:** conectar emenda estadual (ativo Danilo) → obra municipal no mesmo mapa. Ninguém faz.

## Concorrentes mapeados (ver inputs/)
Legiflow (Govsys, IA), Legisoft (Virtualiza), 2DW Tecnologia, SAPL/SPL (Interlegis), Betha, Legisla Fácil (JP Minato), Conecta Gabinete (CRM mandato). Benchmarks: ZOI/Fortaleza (inteligência espacial), Colab (zeladoria cidadã), painéis de emendas (TCEs/prefeituras).

## Material-fonte
- `inputs/resumo_transcript_groq.md` — resumo da reunião Diego×Danilo.
- `inputs/Mapeamento GovTech Câmaras Municipais.md` — mapeamento de adoção/implementação.
- `inputs/Levantamento de Clientes e Cases das Soluções GovTech Legislativas.md` — matriz competitiva + gaps + benchmarks.
- `inputs/transcript_groq.txt` — **VAZIO** (transcrição bruta não salva).

## Lacunas a fechar
1. ~~O que Aracaju realmente tem hoje (tramitação? portal? contábil?)~~ — **fechado em 1.6**: SAPL legado (Zope, sem API REST), portal de transparência da Câmara (Plone) só expõe parlamentares, portal da Prefeitura só expõe dados fiscais.
2. Fluxo real de uma indicação/projeto (exemplo anonimizado — Diego ia levantar; ainda não recebido).
3. Como funciona orçamento/finanças da Câmara especificamente.
4. ~~Regimento Interno da Câmara de Aracaju~~ — **fechado em 1.6**: rito e prazos das indicações lidos na íntegra (Resolução nº 12/2022, Arts. 159-161). Regras TCE-SE seguem em aberto.
5. Transcrição bruta (arquivo vazio).

## ⚠️ Achados críticos de 1.6 (impactam a viabilidade técnica e o núcleo A vs B)
- **Não existe API de dados abertos usável.** SAPL de Aracaju é geração legada (Zope/Plone, sem REST) — a única via de dados é scraping de HTML. Isso é um requisito técnico e um risco a declarar em 2.1, não um simples fetch de API.
- **Não existe campo de bairro/geolocalização em nenhuma fonte.** A feature geo teria que inferir localização do texto livre da ementa (NLP) ou depender de cadastro manual pelo gabinete — não vem pronta de nenhuma base pública.
- **O Regimento não define prazo de resposta do Executivo à indicação.** Essa ausência de SLA é, na prática, o próprio furo que sustenta a Leitura A (fechar o ciclo indicação→resposta) — o produto pode se posicionar como quem cria/monitora esse SLA, sem alegar que é exigência regimental.
- Indicação pode ser dirigida a qualquer um dos 3 poderes, não só ao Executivo municipal — se o produto restringir a Executivo, é recorte de produto, não limite regimental.
- Ver detalhamento completo em `01-discovery/1.6-regimento-e-dados-abertos.md`.
