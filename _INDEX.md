# _INDEX — Produto GovTech Câmaras Municipais

_Atualizado em: 2026-07-22 (sessão 5)_

Projeto: NOVOS PROJETOS/vereda-tech · Nome do produto: **VeredaTech** (3.1 — pendente INPI/registro.br)
Início do pipeline: 2026-07-17

## Estado
- **Fase corrente:** 3 Planejamento — **reaberta** (retrabalho pós-feedback), com Fase 4 Execução a receber novos épicos em seguida.
- **Gatilho:** reunião de apresentação do protótipo a Diego em 2026-07-22 (`reunioes/`). Feedback: conceito e interface validados, mas produto precisa virar plataforma modular (5 módulos legislativos), com visão institucional, integrações futuras, anexos, WhatsApp real (fora de escopo por ora) e identidade visual real da Câmara para demo. Ver `01-discovery/1.8-feedback-diego-priorizacao.md` (priorização) e `01-discovery/1.7-tramitacao-regimental-modulos.md` (rito regimental dos 5 módulos, pré-requisito lido na íntegra do Regimento Interno de Aracaju antes de qualquer alteração de produto).
- **Replanejamento aprovado pela usuária (2026-07-22):** `03-planejamento/3.5-impacto-modulos-e-perfis.md` — plano de impacto (ainda só protótipo, nada funcional) para: (1) badge "Origem: SAPL" na ficha de indicação; (2) módulo Projeto de Lei com linha do tempo de tramitação normal; (3) cadastro de proposição com dois perfis — Gabinete (protocola) e Secretaria/Presidência (faz tramitar/despacha/distribui a comissão), fiel ao rito dos Art. 145-146, 159-160, 74 do Regimento. WhatsApp funcional explicitamente adiado para quando houver desenvolvimento real.
- **Próxima:** `4.3-epicos-estorias.md` já revisado (2026-07-22) com os 6 épicos/14 estórias. Falta construir os HTMLs em `04-execucao/prototipo/` — sugestão de ordem no próprio documento (seletor de perfil no login → cadastro Gabinete → fila de tramitação → módulo Projeto de Lei → leitor de texto/download → badge de tipo no painel/mapa).

## Artefatos por fase

### 00 Contexto
- [x] `00-contexto/contexto-atual.md`

### 01 Discovery
- [x] 1.1 `01-discovery/1.1-hipotese-problema.md`
- [x] 1.2 `01-discovery/1.2-pesquisa-mercado.md`
- [x] 1.3 `01-discovery/1.3-clippings-validacao.md`
- [x] 1.4 `01-discovery/1.4-problema-real.md`
- [x] 1.5 `01-discovery/1.5-persona.md`
- [x] 1.6 `01-discovery/1.6-regimento-e-dados-abertos.md` (pesquisa complementar: Regimento Interno + API dados abertos)
- [x] 1.7 `01-discovery/1.7-tramitacao-regimental-modulos.md` (rito completo dos 5 módulos pedidos por Diego: Projeto de Lei, Indicações, Requerimentos, Moções, Emendas ao Orçamento — artigos citados)
- [x] 1.8 `01-discovery/1.8-feedback-diego-priorizacao.md` (priorização P0-P3 do feedback da reunião de 2026-07-22)

### 02 Estratégia & Visão
- [x] 2.1 `02-estrategia/2.1-requisitos-restricoes.md`
- [x] 2.2 `02-estrategia/2.2-brainstorming-solucoes.md` (convergência: ciclo como núcleo + escalonamento regimental como "dente" + balanço por bairro como demo)
- [x] 2.3 `02-estrategia/2.3-golden-circle.md` ("Nenhum pedido de morador morre no silêncio")
- [x] 2.4 `02-estrategia/2.4-business-case.md` (R$ 4.900/mês sob teto de dispensa; contratos reais PNCP como base; riscos + métricas de piloto)
- [x] 2.5 `02-estrategia/2.5-lean-canvas.md` — **FASE 2 COMPLETA**

### 03 Planejamento
- [x] 3.1 `03-planejamento/3.1-naming.md` — **VeredaTech** (nome final; pendente INPI/registro.br; fallback: Protocola)
- [x] 3.2 `03-planejamento/3.2-cores-estilo.md` — **APROVADO**: base neutra + pílulas + CTA preto; acento Verde-vereda `#1E5F4E` (+ `preview-direcao-visual.html`)
- [x] 3.3 `03-planejamento/3.3-roadmap-backlog.md` (horizontes H0-H4 + backlog 15 itens)
- [x] 3.4 `03-planejamento/3.4-mvp.md` (MVP = H0+H1, piloto 2-3 gabinetes)
- [x] 3.5 `03-planejamento/3.5-impacto-modulos-e-perfis.md` (replanejamento pós-feedback Diego: módulo PL, badge SAPL, cadastro com 2 perfis — protótipo, sem funcional)
- [x] Apresentação das definições: `03-planejamento/apresentacao-vereda.html` (+ artifact publicado)

### 04 Execução — **FASE COMPLETA**
- [x] 4.1 `04-execucao/4.1-identidade-visual.md` (símbolo "caminho que se fecha" + wordmark Vereda/Tech + prompt de imagem)
- [x] 4.2 `04-execucao/4.2-design-system.md` (tokens cor/tipo/espaço/raio/sombra + 10 componentes base com estados; inclui CSS pronto p/ `global.css`)
- [~] 4.3 `04-execucao/4.3-epicos-estorias.md` — **revisado 3x em 2026-07-22, escopo fechado**: 6 épicos, 17 estórias, com **garantia dos 5 módulos** (Projeto de Lei · Indicação ao Executivo · Requerimento · Moção · Emenda ao Orçamento) — matriz de cobertura na seção 0.7. Épico 6 = framework dos 5 módulos parametrizados (seletor de módulo, lista, ficha por rito, cadastro, fila de tramitação) + Emenda ao Orçamento com tratamento especial (acessória ao PLOA, com validações regimentais) + **6.6 visão institucional agregada da Mesa confirmada para esta rodada** (KPIs + mapa de todos os 26 gabinetes, sem ranking). Perfil "Secretaria/Presidência" confirmado como nome de trabalho. Investigação de impacto na seção 0: mapa território-only (nem toda proposição tem bairro), "desfecho" só p/ Indicação/Requerimento, PL/Moção/Emenda usam "Atualizar tramitação", badge de tipo novo no design system, leitor de texto integral (modal + ícone download sem função). **HTML ainda não construído — próxima sessão começa a construção.**
- [x] 4.4 fluxos HTML — **8/8 estórias construídas e aprovadas** em `04-execucao/prototipo/`:
  - `1.1-login.html` · `1.2-painel.html` (dashboard estratégico: hero + filtros + KPIs + mapa de calor real de Aracaju + Inteligência Vereda + silêncio por secretaria)
  - `2.1-ficha.html` (linha do tempo) · `2.2-desfecho.html` · `2.3-requerimento.html`
  - `3.1-gerar-balanco.html` · `3.2-visualizacao-balanco.html` (recorte "últimos 30 dias")
  - `4.1-whatsapp.html` (simulação dos 3 gatilhos de retenção)
  - `index.html` (apresentação do produto, identidade final aplicada, linka para o protótipo a partir do login; renomeada de `apresentacao.html` para servir como raiz do GitHub Pages)
- ⚠️ Requisito da usuária (2026-07-18) para 4.3/4.4, cumprido: plano organizado **só front-end**, sem nada funcional (sem persistência/banco) — protótipo navegável em HTML puro, CSS em pasta de assets própria, todas as telas linkadas entre si para simular o produto navegando.
- Ajuste de sistema (2026-07-19): corpo das telas sempre claro (cinza, não branco puro), header/menu sempre escuro — dark mode automático removido do `global.css`.
- Ajuste de responsividade (2026-07-19): correções mobile no protótipo e na apresentação (legibilidade do wordmark no login, empilhamento do callout de alerta, dica de scroll nas tabelas). Projeto publicado em `github.com/CinthiaSouza/veredatech`, com GitHub Pages servindo `04-execucao/prototipo/` via GitHub Actions.

### 05 Lançamento
- [ ] 5.1 posicionamento + notícia de sucesso · 5.2 go-to-market

## Log de sessões recentes
| Data | Tema | Log |
|---|---|---|
| 2026-07-17 | Fase 1 Discovery completa (1.1–1.5); premissa "sem sistema" derrubada, comprador híbrido travado | `04-execucao/_logs/2026-07-17_discovery-monitor-camara.md` |
| 2026-07-18 | 1.6 (Regimento + dados abertos), Fase 2 completa, Fase 3 (3.1/3.3/3.4, 3.2 pulada), nome VEREDA, apresentação HTML | `04-execucao/_logs/2026-07-18_fase2-fase3-vereda.md` |
| 2026-07-18 | 3.2 cores aprovada, nome final VeredaTech, Fase 4 (4.1-4.3 escritos) + 4.4 iniciada (global.css, 1.1 Login aprovada, 1.2 Painel pendente) | `04-execucao/_logs/2026-07-18_fase4-execucao-veredatech.md` |
| 2026-07-19 | Fase 4 fechada: 8/8 estórias construídas, 1.2 virou dashboard estratégico com mapa de calor real, apresentação reestilizada e linkada ao protótipo, projeto migrado para `NOVOS PROJETOS/vereda-tech/` | `04-execucao/_logs/2026-07-19_fase4-fechamento-e-migracao.md` |
| 2026-07-19 | QA de responsividade mobile (3 bugs corrigidos: legibilidade login, callout empilhado, wordmark/trilha do hero), rename `apresentacao.html`→`index.html`, projeto publicado em `github.com/CinthiaSouza/veredatech` com GitHub Pages via Actions | `04-execucao/_logs/2026-07-19_responsividade-e-publicacao-github-pages.md` |
| 2026-07-22 | Feedback de Diego lido e priorizado (1.8); Regimento Interno de Aracaju lido na íntegra para tramitação dos 5 módulos (1.7); replanejamento do protótipo em 2 rodadas (3.5 + 4.3 revisado 3x) garantindo que os 5 módulos (PL, Indicação, Requerimento, Moção, Emenda ao Orçamento) sejam demonstráveis, incluindo visão institucional da Mesa (6.6). Ainda sem HTML alterado; próxima sessão constrói os 17 estórias do 4.3. | `04-execucao/_logs/2026-07-22_feedback-diego-regimento-replanejamento.md` |

## Material-fonte
`inputs/` — resumo da reunião + 2 pesquisas de mercado GovTech legislativo.
`reunioes/` — resumo executivo e transcrição da reunião de apresentação do protótipo a Diego (2026-07-22).
