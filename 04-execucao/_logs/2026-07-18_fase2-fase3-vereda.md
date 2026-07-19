# Log de Conversa — Fases 2 e 3 do pipeline: estratégia, planejamento e apresentação (VEREDA)
_Data: 2026-07-18_
_Projeto: Pessoais_
_Domínio: NOVOS PROJETOS/vereda-tech (pipeline-produto)_

## Resumo da sessão
Fechamento das duas dívidas técnicas do Discovery (Regimento Interno de Aracaju + API de dados abertos), Fase 2 completa (2.1–2.5), Fase 3 quase completa (3.1, 3.3, 3.4 — 3.2 pulada por decisão da usuária), nome de trabalho **VEREDA** adotado e apresentação HTML das definições do produto gerada e publicada.

## O que foi feito
1. **1.6 (pesquisa complementar)** — Regimento Interno de Aracaju (Resolução 12/2022, Arts. 159-161) lido na íntegra: rito da indicação é despacho simples do Presidente, **sem prazo regimental de resposta**; API de dados abertos **não existe** (SAPL legado Zope, sem REST — única via é scraping); **nenhuma fonte tem campo de bairro/geolocalização**.
2. **2.1 Requisitos** — núcleo travado (Leitura A + geo como camada); LGPD + WCAG desde o design; bootstrap sem prazo; WhatsApp obrigatório; fora: comparação pública e app do cidadão.
3. **2.2 Brainstorming** — 2 insights estruturantes: (a) o dado de resposta não existe em nenhuma base → o produto CRIA o dado (fosso proprietário + de-risking do scraping); (b) o requerimento de informação (15 dias + sanção) é o "dente" regimental da cobrança. Convergência em 6 camadas: ingestão → ciclo → pressão → prova → território → instituição.
4. **2.3 Golden Circle** — "Nenhum pedido de morador morre no silêncio."
5. **2.4 Business case** — com pesquisa em fontes reais: teto de dispensa 2026 = R$ 65.492/ano (Decreto 12.807/2025); contratos reais no PNCP (Recife R$ 66,6 mil/mês na mesma categoria; câmaras pequenas de SE pagam R$ 6-9 mil/mês). Preço Aracaju: **R$ 4.900/mês**. Break-even com 1 cliente.
6. **2.5 Lean Canvas** — fecha a Fase 2.
7. **3.1 Naming** — 5 candidatos verificados na web; **VEREDA** escolhido (pendente INPI classes 9/42 + registro.br; fallback: Protocola). Rastro/Desfecho/Retorna descartados por colisão direta.
8. **3.3 Roadmap/backlog** — horizontes H0 (fundação/scraper) → H1 (MVP piloto) → H2 (venda institucional) → H3 (replicabilidade); backlog de 15 itens.
9. **3.4 MVP** — = H0+H1, piloto de 2-3 gabinetes 60-90 dias; regras de corte; métricas de sucesso.
10. **Apresentação** — HTML publicado como artifact (https://claude.ai/code/artifact/e4515a35-8fb5-4e37-b044-174faced73fa) e salvo em `03-planejamento/apresentacao-vereda.html`. Revisões pedidas: sem nomes da equipe, sem travessões, meta charset utf-8.

## Decisões tomadas
| Decisão | Contexto / Motivo |
|---|---|
| Núcleo = Leitura A (fechar o ciclo), geo = camada | Usuária confirmou a recomendação do analista da 1.4 |
| LGPD + WCAG desde o design | B2G exige; mais barato que retrofit |
| Bootstrap, sem prazo fixo, equipe atual | Sem capital externo; MVP dimensionado para 3 sócios |
| WhatsApp obrigatório no MVP; nenhuma outra integração além do scraping SAPL | Canal onde o assessor vive; único caminho de dado |
| Fora do MVP por princípio: comparação pública entre vereadores e app do cidadão | Risco político + foco |
| Preço Aracaju R$ 4.900/mês | Sob o teto de dispensa de licitação; case 1 compra prova social, não margem |
| Nome de trabalho: **VEREDA** | Melhor candidato verificado; condicionado a INPI/registro.br |
| 3.2 (cores/estilo) PULADA | Decisão da usuária; retomar antes da 4.1 |

## Pendências geradas
- [ ] **INPI (classes 9/42) + registro.br** para o nome Vereda (fallback: Protocola).
- [ ] **3.2 cores/estilo** — pré-requisito da Fase 4; usuária deve mandar referências para moodboard.
- [ ] Validar a dor com o lado institucional de Aracaju (Mesa/secretaria) via Diego (herdada).
- [ ] Confirmar os 2-3 gabinetes do piloto via Diego.
- [ ] Exemplo real de indicação (Diego ia levantar — herdada).
- [ ] Confirmar rótulos do dropdown "Tipo da Matéria" no SAPL e conteúdo de `/apidata` (lacunas da 1.6).

## Arquivos criados ou atualizados nesta sessão
- `01-discovery/1.6-regimento-e-dados-abertos.md` (novo)
- `02-estrategia/2.1-requisitos-restricoes.md` · `2.2-brainstorming-solucoes.md` · `2.3-golden-circle.md` · `2.4-business-case.md` · `2.5-lean-canvas.md` (novos)
- `03-planejamento/3.1-naming.md` · `3.3-roadmap-backlog.md` · `3.4-mvp.md` (novos)
- `03-planejamento/apresentacao-vereda.html` (novo; espelho do artifact publicado)
- `00-contexto/contexto-atual.md` e `_INDEX.md` (atualizados)

## Próximos passos
- Apresentar as definições aos sócios usando a apresentação.
- Rodar a **3.2 (cores/estilo)** — usuária envia referências visuais → paleta + direção aprovadas.
- Resolver INPI/registro.br do nome.
- Então abrir a **Fase 4 — Execução** (4.1 identidade visual).
