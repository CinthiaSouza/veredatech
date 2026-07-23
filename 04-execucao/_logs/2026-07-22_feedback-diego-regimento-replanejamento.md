# Log de Conversa — Feedback de Diego, tramitação regimental e replanejamento do protótipo
_Data: 2026-07-22_
_Projeto: NOVOS PROJETOS/vereda-tech_
_Domínio: 01-discovery + 03-planejamento + 04-execucao (pipeline-produto)_

## Resumo da sessão
Leitura do feedback de Diego sobre o protótipo apresentado, leitura integral do Regimento Interno de Aracaju para mapear o rito dos 5 módulos legislativos pedidos (Projeto de Lei, Indicações, Requerimentos, Moções, Emendas ao Orçamento), e replanejamento completo dos épicos/estórias do protótipo para garantir que os 5 tipos sejam demonstráveis — nenhum HTML foi alterado, só planejamento.

## O que foi feito
1. **Leitura do material de reunião** (`reunioes/`): resumo executivo e transcrição da apresentação do protótipo a Diego (22/07). Conceito e interface validados; pedido central: transformar o produto em plataforma modular (5 tipos legislativos), com visão institucional, integrações futuras, anexos, WhatsApp real (adiado) e identidade visual real da Câmara para demo.
2. **`01-discovery/1.7-tramitacao-regimental-modulos.md`**: leitura integral do Regimento Interno de Aracaju (Resolução nº 12/2022, 86 páginas, PDF extraído via PyMuPDF) para documentar rito, prazos, quóruns e atores de cada um dos 5 módulos, com artigos citados. Achados-chave: só Indicação tem bairro como atributo regimental (Art. 159 §2º); Requerimento de Informação tem prazo de 15 dias úteis sob pena de crime de responsabilidade (Art. 238) — único com sanção legal; Moção tem rito curto (parecer CCJ em 2 dias úteis, Art. 158); Projeto de Lei tem o rito mais longo (comissões, 2 discussões, sanção/veto); Emenda ao Orçamento é acessória ao PLOA (Art. 169), não autônoma, com validações fechadas de admissibilidade (Art. 221 §4º). Regra de contagem de prazos also documentada (Art. 252).
3. **`01-discovery/1.8-feedback-diego-priorizacao.md`**: priorização P0-P3 do feedback — modularização e visão institucional como P1 (mudança estrutural), anexos/WhatsApp/identidade visual como P2, integrações reais e portfólio de outros produtos como P3 (fora de escopo).
4. **`03-planejamento/3.5-impacto-modulos-e-perfis.md`**: primeira rodada de planejamento de impacto (badge "Origem: SAPL", módulo PL com tramitação normal, cadastro com 2 perfis — Gabinete protocola, Secretaria/Presidência tramita — mapeado contra os Art. 145-146/159-160/74 do Regimento).
5. **Revisão de `04-execucao/4.3-epicos-estorias.md`** (3 iterações na mesma sessão):
   - 1ª revisão: incorporou o replanejamento do 3.5, mas cobria só Indicação + Projeto de Lei como módulos ativos, deixando Requerimento sem cadastro/módulo próprio e Moção/Emenda ao Orçamento como "em breve".
   - **Correção pedida pela usuária**: garantir que os 5 módulos (não só 2) sejam efetivamente demonstráveis no protótipo. Reescrita do Épico 6 como framework parametrizado (1 seletor de módulo + 1 padrão de lista + 1 template de ficha + 1 cadastro + 1 fila de tramitação, instanciados 5×), com tratamento especial para Emenda ao Orçamento (acessória ao PLOA, com validações regimentais como argumento de venda) e matriz de cobertura (seção 0.7) como contrato de garantia.
   - **2ª correção pedida pela usuária**: incluir nesta rodada a estória 6.6 (visão institucional agregada da Mesa/Presidente — KPIs e mapa de todos os 26 gabinetes, sem ranking), que havia sido deixada como "reservada"/a confirmar.
   - Também documentado como achado lateral: bug do protótipo atual em que os 3 itens de "Requer ação agora" no painel linkam para a mesma ficha estática (conteúdo incorreto para 2 deles) — a corrigir na construção.

## Decisões tomadas
| Decisão | Contexto / Motivo |
|---|---|
| WhatsApp funcional fica fora desta rodada | Usuária confirmou: só entra quando houver desenvolvimento real do produto; protótipo continua só simulado (estória 4.1 inalterada) |
| Os 5 módulos devem ser navegáveis e demonstráveis, nenhum "em breve" | Usuária rejeitou a primeira versão que só cobria 2 de 5 tipos; exigiu garantia explícita — resolvido com matriz de cobertura (0.7) e Épico 6 reescrito como framework parametrizado |
| Emenda ao Orçamento tratada como módulo acessório ao PLOA, não solto | Regimentalmente correto (Art. 169) — evita modelar errado um tipo que não é uma proposição autônoma |
| Estória 6.6 (visão institucional agregada da Mesa) entra nesta rodada | Confirmado pela usuária; reforça o argumento comercial "quem compra é a Câmara" (item B do feedback de Diego) |
| Nome do segundo perfil mantido como "Secretaria/Presidência" (sugestão da IA) | Usuária aceitou a sugestão sem alteração |
| Mapa de calor continua território-only (não soma todos os tipos por bairro) | Achado regimental: só Indicação (e eventualmente Requerimento) tem bairro como atributo; PL/Moção/Emenda são atos institucionais sem recorte territorial — forçar todos no mapa seria regimentalmente incorreto |
| Continua sem nada funcional (só front-end) | Reafirmação da decisão de 2026-07-18; cadastro, tramitação, download etc. são todos mock |

## Pendências geradas
- [ ] Construir os HTMLs das 17 estórias revisadas/novas do 4.3 em `04-execucao/prototipo/` — próxima sessão.
- [ ] Corrigir o bug de links da "Requer ação agora" (1.2) apontando todos para a mesma ficha estática.
- [ ] Pedir a Diego os assets de identidade visual real da Câmara de Aracaju (fotos, cores/logo oficiais) — herdada de 1.8, ainda sem ação.
- [ ] INPI (classes 9/42) + registro.br para "VeredaTech" — herdada de sessões anteriores.
- [ ] Validações via Diego (gabinetes do piloto, exemplo real de indicação) — herdada, ainda aberta.

## Arquivos criados ou atualizados nesta sessão
- `01-discovery/1.7-tramitacao-regimental-modulos.md` (novo)
- `01-discovery/1.8-feedback-diego-priorizacao.md` (novo)
- `03-planejamento/3.5-impacto-modulos-e-perfis.md` (novo)
- `04-execucao/4.3-epicos-estorias.md` (revisado 3× — 6 épicos, 17 estórias, matriz de cobertura dos 5 módulos)
- `00-contexto/contexto-atual.md` (atualizado com o estado do replanejamento)
- `_INDEX.md` (atualizado — fase 3 reaberta, novos artefatos referenciados, estado do 4.3 refletido)

## Próximos passos
- Começar a construção dos HTMLs seguindo a ordem sugerida no `4.3` (jornada navegável): seletor de perfil no login → cadastro (Gabinete) → fila de tramitação (Secretaria/Presidência) → os 5 módulos (lista + ficha) → leitor de texto/download → visão institucional da Mesa (6.6) → badge de tipo e ajustes no painel/mapa.
- Retomar com a usuária: "Seguimos construindo os HTMLs dos épicos revisados do 4.3?"
