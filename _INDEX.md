# _INDEX — Produto GovTech Câmaras Municipais

_Atualizado em: 2026-07-29 (sessão 8)_

Projeto: NOVOS PROJETOS/vereda-tech · Nome do produto: **VeredaTech** (3.1 — pendente INPI/registro.br)
Início do pipeline: 2026-07-17

## Estado
- **Fase corrente:** 4 Execução — **modularização construída e publicada**. O protótipo deixou de ser "sistema de indicações" e virou plataforma modular navegável nos 2 perfis (Gabinete e Secretaria/Presidência), servida no GitHub Pages.
- **Construído em 2026-07-22 (sessão 6):** todos os HTMLs do 4.3 revisado (Épicos 5 e 6) + páginas dedicadas do perfil Secretaria com quantitativo por vereador/comissão (`6.2-*-mesa.html`, `6.7-ploa-mesa.html`), nav de módulos com contadores e profile-aware, subtipos de PL (Art. 138 §1º) diferenciados, leitor de texto integral, troca rápida de perfil. Commit `e988b08` publicado.
- **Sessão 7 (2026-07-23):** criada a **apresentação v2** (`index.html`) reposicionando o produto de "sistema de indicações" para **plataforma modular de gestão legislativa** (5 módulos + 2 perfis), pronta para distribuição externa — oculta preço/plano/pendências e remove menção ao repositório. Versão anterior preservada como `index-v1.html` (uso interno, link discreto), também limpa. Commits `c54f8c4` + `1f71c48` publicados. **Pergunta nº1 resolvida: transcrição bruta fica só local (não publicada).**
- **⚠️ Restam 3 das 4 perguntas** em `memory/veredatech-perguntar-proxima-sessao.md`: (2) números mock (Gabinete 52 / Casa 1.240); (3) ranking de autoria como exceção interna da Mesa; (4) páginas -mesa agregadas sem drill-down. A nº1 (transcrição) foi decidida em 2026-07-23.
- **Decisão travada:** ranking nominal de autoria só no dashboard interno da Mesa (6.6) — regra "sem comparação pública" (2.2/2.4) segue valendo fora dela.
- **Sessão 8 (2026-07-29):** integrado o protocolo administrativo interno da Câmara de Aracaju (UnDoc, SAPL, Procuradoria, Comissão Temática) — pesquisa em `01-discovery/1.9-protocolos-administrativos-internos.md` (deixa explícito que é arranjo específico de Aracaju, a tratar como configurável por Câmara-cliente no sistema real). Linha do tempo de Indicação (`2.1-ficha.html`) e de Projeto de Lei (`6.3-ficha-pl.html`, 7 fichas) ganhou os novos estados administrativos; fila de tramitação (`6.5-fila-tramitacao.html`) nomeia a CCJ explicitamente. Emenda a entidades (Título de Utilidade Pública) fica de fora por enquanto — fonte incompleta. Verificado visualmente com Playwright (screenshots + sem erros de console).
- **Sessão 9 (2026-07-29):** criada a **versão com identidade visual da Câmara de Aracaju** em `04-execucao/prototipo-aracaju/` (cópia independente — `04-execucao/prototipo/` segue com a identidade VeredaTech intacta). Paleta do tema oficial "Azul" do site (`#3259a7`/`#4882c9`/`#1875d2`); header, hero, painel do login e botões primários deixaram de ser preto e passaram aos azuis abertos da Casa; brasão oficial como selo nas 25 telas. Tipografia e layout preservados. Commit `0c8ed21`. Depois: nova tela **6.8 Parlamentares** (perfil Secretaria/Presidência) com os **26 vereadores reais** da 44ª Legislatura — nomes, partidos e fotos oficiais — e quantidade de proposições por parlamentar; base compartilhada `styles/vereadores.js` reescrita (era amostra de 10 nomes fictícios) e link "Parlamentares" na nav das 6 telas da Mesa.
- **⚠️ Dado sensível:** em `prototipo-aracaju`, nomes/partidos/fotos são **reais**, mas as **contagens de proposições são simuladas** (somam de propósito os agregados já usados: 780 IND · 210 PL · 140 REQ · 65 MOÇ · 45 EMO = 1.240). Aviso explícito na tela 6.8 e nas notas do ranking. Antes de qualquer uso externo, trocar por dados do SAPL.
- **⚠️ Decisão a confirmar:** o perfil Gabinete segue com a vereadora **fictícia Simone Rocha** — deliberadamente não atribuí a jornada de indicações inventadas a um parlamentar real nomeado. Se Diego preferir realismo total, é uma troca de uma linha.
- **Push confirmado:** commit `d37976e` (protocolo administrativo Aracaju) já está publicado em `origin/main` (rodado manualmente pela usuária após o bloqueio do classificador de permissões na sessão de 2026-07-29).

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
- [x] 1.9 `01-discovery/1.9-protocolos-administrativos-internos.md` (protocolo administrativo interno de Aracaju — UnDoc/SAPL/Procuradoria/Comissão Temática; explicitamente contexto de uma Câmara, não regra regimental)

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

- [x] 4.5 `04-execucao/prototipo-aracaju/` — **versão white-label para a Câmara de Aracaju**: mesma estrutura do 4.4 com a paleta oficial da Casa + brasão, mais a tela `6.8-parlamentares.html` (26 vereadores reais, contagens simuladas). Serve como prova de que a plataforma se adapta à identidade de cada Câmara-cliente.

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
| 2026-07-22 | Construção completa dos HTMLs do 4.3 (Épicos 5 e 6); páginas dedicadas do perfil Secretaria com quantitativo por vereador/comissão (`6.2-*-mesa`, `6.7-ploa-mesa`); nav de módulos com contadores + profile-aware; subtipos de PL diferenciados; leitor de texto integral; troca rápida de perfil; upload de anexo. Revisão de consistência/design. Commit `e988b08` publicado no GitHub Pages. Transcrição bruta da reunião deixada de fora do push (repo público) — a confirmar. | `04-execucao/_logs/2026-07-22_construcao-modulos-perfil-secretaria-publicacao.md` |
| 2026-07-23 | Apresentação v2 (`index.html`): reposicionada como plataforma modular (5 módulos + 2 perfis) para distribuição externa — ocultadas seções de preço/plano/pendências e removida menção ao repositório. Versão anterior preservada e limpa como `index-v1.html` (uso interno, link discreto). Transcrição bruta confirmada como local-only (pergunta nº1 das 4 resolvida). Commits `c54f8c4` + `1f71c48` publicados no GitHub Pages. | `04-execucao/_logs/2026-07-23_apresentacao-v2-modular-e-v1-interna.md` |
| 2026-07-29 | Protocolo administrativo interno de Aracaju (UnDoc/SAPL/Procuradoria/Comissão Temática) pesquisado (1.9) e integrado à linha do tempo de Indicação e Projeto de Lei + fila de tramitação, com nota explícita de que é contexto de uma Câmara (configurável no sistema real). Emenda a entidades deixada de fora (fonte incompleta). Verificado visualmente com Playwright. Commit `d37976e` criado e publicado em `origin/main` (push manual). | `04-execucao/_logs/2026-07-29_protocolo-administrativo-aracaju-e-integracao.md` |

## Material-fonte
`inputs/` — resumo da reunião + 2 pesquisas de mercado GovTech legislativo.
`reunioes/` — resumo executivo e transcrição da reunião de apresentação do protótipo a Diego (2026-07-22).
