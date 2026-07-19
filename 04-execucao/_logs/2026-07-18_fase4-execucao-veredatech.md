# Log de Conversa — Fase 3 (fechamento) e Fase 4 Execução: identidade, design system, épicos e protótipo HTML (VeredaTech)
_Data: 2026-07-18_
_Projeto: Pessoais_
_Domínio: NOVOS PROJETOS/vereda-tech (pipeline-produto)_

## Resumo da sessão
Fechamento da Fase 3 (3.2 cores aprovada), nome final travado como **VeredaTech**, e Fase 4 Execução avançada: 4.1 identidade visual, 4.2 design system e 4.3 épicos/estórias escritos; 4.4 iniciada com `global.css` e as duas primeiras telas do protótipo HTML navegável (1.1 Login aprovada, 1.2 Painel apresentada e aguardando aprovação).

## O que foi feito
1. **3.2 Cores/estilo (portão de aprovação)** — apresentado preview interativo (artifact) com 3 opções de acento sobre a referência visual enviada pela usuária (mobile app clean, pílulas, CTA preto). **Aprovada a opção A: Verde-vereda `#1E5F4E`.** Artefato `3.2-cores-estilo.md` fechado com paleta completa, regras de estilo e racional da escolha. Fase 3 completa.
2. **Nome final: VeredaTech** — usuária decidiu fechar com esse nome (adiciona sufixo "Tech" ao "Vereda" da 3.1). Atualizado em `3.1-naming.md` (seção "Decisão final") e `_INDEX.md`.
3. **4.1 Identidade visual** — direção de arte (símbolo "traço único que se fecha como um check" = trilha + ciclo fechado) + wordmark Vereda/Tech + prompt de imagem pronto para IA de imagem, com 3 variações pedidas.
4. **4.2 Design system** — bloco de instruções pronto para colar no Claude Design (tokens cor/tipo/espaçamento/raio/sombra, 10 componentes base com estados) + bloco espelho em CSS puro (custom properties), já pensado para virar o `global.css` do protótipo.
5. **4.3 Épicos e estórias** — **requisito explícito da usuária registrado no topo do documento: escopo só front-end, sem persistência/banco, tudo mockado.** 4 épicos, 8 estórias com critérios de aceite (Acesso/Painel · Ciclo da indicação · Balanço por bairro · WhatsApp simulado) + jornada de navegação sugerida para a 4.4.
6. **4.4 Protótipo HTML — iniciado:**
   - `prototipo/styles/global.css` criado com todos os tokens e componentes da 4.2.
   - **1.1 Login** construída com tratamento editorial (split-screen, traço da marca se desenhando ao vivo em SVG, dado real ancorando a cena) — **aprovada pela usuária** após 2 correções de contraste.
   - **1.2 Painel do gabinete** construída (resumo em barra segmentada por estado + lista de indicações ordenada por urgência, linkando para a próxima estória) — **apresentada, aguardando aprovação** (sessão encerrada antes da resposta).
7. **Bug de contraste corrigido na raiz (não só no sintoma):** o token `--ink` inverte no dark mode (fica claro), mas estava sendo usado tanto como "cor de texto adaptável" quanto como "cor de fundo fixa" em dois lugares — o painel escuro do login (texto branco sumindo em fundo que virava branco) e o botão primário `.btn-primary` (texto branco fixo sobre fundo que virava claro). Corrigido com: cores literais fixas no painel editorial do login (não usa mais `var(--ink)`) e um novo token `--on-ink` (cor de texto sobre botão primário) que inverte corretamente junto com o tema.

## Decisões tomadas
| Decisão | Contexto / Motivo |
|---|---|
| Acento de marca: Verde-vereda `#1E5F4E` | Opção A do preview; vira também a cor do estado "respondida" — fechar o ciclo é a cor da marca |
| Nome final: **VeredaTech** | Decisão da usuária nesta sessão; substitui "VEREDA" solo em toda a documentação daqui em diante |
| 4.3/4.4 = só front-end, sem funcional | Exigência explícita da usuária: quer navegar/simular o produto sem banco de dados; HTML puro, CSS em pasta de assets própria, telas linkadas |
| `--on-ink` como token dedicado de contraste do botão primário | Correção estrutural após bug reportado pela usuária — evita repetir o erro em toda futura tela que usar `.btn-primary` |

## Pendências geradas
- [ ] **Aprovação da 1.2 — Painel do gabinete** (apresentada, não confirmada).
- [ ] Construir **2.1 Ficha da indicação** (linha do tempo) — próxima estória da jornada.
- [ ] INPI (classes 9/42) + registro.br para "VeredaTech" (herdada, nome mudou de Vereda → VeredaTech, refazer/confirmar checagem).
- [ ] Rodar o prompt de imagem da 4.1 numa IA de imagem (herdada).
- [ ] Validações via Diego (lado institucional, gabinetes do piloto, exemplo real de indicação) — herdadas, ainda abertas.

## Arquivos criados ou atualizados nesta sessão
- `03-planejamento/3.2-cores-estilo.md` (novo) · `03-planejamento/preview-direcao-visual.html` (novo, espelho do artifact)
- `03-planejamento/3.1-naming.md` (atualizado — decisão final VeredaTech)
- `04-execucao/4.1-identidade-visual.md` (novo)
- `04-execucao/4.2-design-system.md` (novo)
- `04-execucao/4.3-epicos-estorias.md` (novo)
- `04-execucao/prototipo/styles/global.css` (novo)
- `04-execucao/prototipo/1.1-login.html` (novo — aprovado)
- `04-execucao/prototipo/1.2-painel.html` (novo — aguardando aprovação)
- `_INDEX.md` e `00-contexto/contexto-atual.md` (atualizados ao longo da sessão)

## Próximos passos
- Confirmar a aprovação da **1.2 Painel do gabinete**.
- Construir **2.1 Ficha da indicação** (linha do tempo), depois 2.2 (registrar desfecho) e 2.3 (requerimento), seguindo a ordem da 4.3.
- Depois: Épico 3 (balanço por bairro) e Épico 4 (WhatsApp simulado) — fecham a 4.4 e a Fase 4.
