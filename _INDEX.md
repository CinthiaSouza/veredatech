# _INDEX — Produto GovTech Câmaras Municipais

_Atualizado em: 2026-07-19 (sessão 4)_

Projeto: NOVOS PROJETOS/vereda-tech · Nome do produto: **VeredaTech** (3.1 — pendente INPI/registro.br)
Início do pipeline: 2026-07-17

## Estado
- **Fase corrente:** 4 Execução — **COMPLETA**.
- **Última sub-etapa concluída:** 4.4 fechada — as 8 estórias construídas e aprovadas (Login · Painel/dashboard estratégico · Ficha da indicação · Registrar desfecho · Requerimento de informação · Gerar balanço · Visualização do balanço · Simulação WhatsApp), mais a apresentação do produto (`04-execucao/prototipo/index.html`) reestilizada com a identidade final e linkada ao protótipo. Responsividade mobile revisada e corrigida (QA com Playwright em 320-430px), e o projeto publicado em produção: `https://cinthiasouza.github.io/veredatech/`.
- **Próxima:** Fase 05 Lançamento (posicionamento + go-to-market), ou primeiro fechar pendências herdadas (INPI/registro.br, validações de campo com Diego).

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
- [x] Apresentação das definições: `03-planejamento/apresentacao-vereda.html` (+ artifact publicado)

### 04 Execução — **FASE COMPLETA**
- [x] 4.1 `04-execucao/4.1-identidade-visual.md` (símbolo "caminho que se fecha" + wordmark Vereda/Tech + prompt de imagem)
- [x] 4.2 `04-execucao/4.2-design-system.md` (tokens cor/tipo/espaço/raio/sombra + 10 componentes base com estados; inclui CSS pronto p/ `global.css`)
- [x] 4.3 `04-execucao/4.3-epicos-estorias.md` (4 épicos, 8 estórias — Login/Painel · Ciclo da indicação · Balanço por bairro · WhatsApp simulado; jornada navegável definida)
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

## Material-fonte
`inputs/` — resumo da reunião + 2 pesquisas de mercado GovTech legislativo.
