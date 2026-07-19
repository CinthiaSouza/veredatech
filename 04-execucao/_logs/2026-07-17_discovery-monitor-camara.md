# Log de Conversa — Discovery do produto de monitoramento de indicações (Câmaras Municipais)
_Data: 2026-07-17_
_Projeto: Pessoais_
_Domínio: NOVOS PROJETOS/vereda-tech (pipeline-produto)_

## Resumo da sessão
Leitura crítica dos inputs (reunião Diego×Danilo + 2 pesquisas GovTech), scaffold do pipeline-produto e conclusão da **Fase 1 — Discovery inteira (1.1 a 1.5)** para o produto de monitoramento de indicações de vereadores, tendo Aracaju/SE como primeiro case.

## O que foi feito
1. Li e analisei os 4 inputs (resumo da reunião + 2 mapeamentos de mercado; `transcript_groq.txt` estava vazio).
2. Montei o scaffold do pipeline (00-contexto…05-lancamento, prototipo/) + `_INDEX.md` + `contexto-atual.md`.
3. 1.1 Hipótese — pesquisa de campo derrubou a premissa "Aracaju não tem sistema" (usa SAPL/Interlegis, portal e API de dados abertos). Reposicionado: gap é inteligência/gestão, não tramitação.
4. 1.2 Mercado — TAM 5.570 câmaras, mas 70% pequenas; SAPL grátis deprime o teto de preço; alvo viável = capitais/médias.
5. 1.3 Clippings — dor real e verbalizada = ciclo da indicação quebra no "Executivo não responde"; a solução geo/gestão-à-vista NÃO foi pedida por ninguém (é aposta nossa).
6. 1.4 Problema real — duas leituras lado a lado (A: fechar o ciclo/prestação de contas; B: geo/gestão à vista), decisão de núcleo adiada; comprador travado.
7. 1.5 Personas — assessor Rafael (uso diário), vereadora Simone (dor política), Presidente da Mesa (comprador), com prompts de imagem.

## Decisões tomadas
| Decisão | Contexto / Motivo |
|---|---|
| Produto vive em Pessoais, scaffold na própria pasta camaras-municipais | Já continha os inputs; mantém tudo coeso |
| Modelar só o item "a" (indicações), sem misturar orçamento/finanças | Foco; orçamento fica para depois |
| Comprador = modelo HÍBRIDO (Mesa compra, vereador usa) | Dor aguda é do vereador, mas cheque é institucional |
| Alvo de mercado = capitais/médias, não a base da pirâmide | 70% das câmaras são pequenas, sem orçamento, com SAPL grátis |
| Núcleo do problema A vs B: EM ABERTO | Usuária preferiu ver as duas leituras escritas antes de decidir |
| Nome do produto adiado para 3.1 | Trabalho: "monitor-camara" |

## Pendências geradas
- [ ] Decidir o núcleo do problema: Leitura A (fechar o ciclo) vs. B (geo/gestão à vista). Recomendação registrada: A núcleo + B camada.
- [ ] Ler o Regimento Interno de Aracaju (rito/prazos exatos da indicação) — vira requisito na 2.1.
- [ ] Descobrir o que a API de dados abertos de Aracaju expõe (indicação + status + localização?) — decisivo para viabilidade; 2.1.
- [ ] Validar a dor com o lado institucional de Aracaju (Mesa/secretaria legislativa), idealmente via Diego.
- [ ] Aguardar o exemplo real (anonimizado) de submissão de indicação que Diego ia levantar.

## Arquivos criados ou atualizados nesta sessão
- `00-contexto/contexto-atual.md` (criado/atualizado)
- `_INDEX.md` (criado/atualizado)
- `01-discovery/1.1-hipotese-problema.md`
- `01-discovery/1.2-pesquisa-mercado.md`
- `01-discovery/1.3-clippings-validacao.md`
- `01-discovery/1.4-problema-real.md`
- `01-discovery/1.5-persona.md`
- `04-execucao/_logs/2026-07-17_discovery-monitor-camara.md` (este)

## Próximos passos
- Retomar na **Fase 2.1 — Requisitos**, atacando primeiro as duas dívidas técnicas (Regimento Interno + API de dados abertos) e traduzindo o Discovery em requisitos.
- Antes/durante 2.1, cravar o núcleo A vs B.
