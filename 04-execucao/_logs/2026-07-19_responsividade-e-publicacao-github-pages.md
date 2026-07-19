# Log de Conversa — Responsividade mobile e publicação no GitHub Pages
_Data: 2026-07-19_
_Projeto: NOVOS PROJETOS/vereda-tech_
_Domínio: 04-execucao (pipeline-produto)_

## Resumo da sessão
QA de responsividade em todas as 9 telas do protótipo (Playwright, viewports 320-430px), correção de 3 bugs mobile encontrados, e publicação de todo o projeto no repositório GitHub `CinthiaSouza/veredatech` com GitHub Pages servindo a pasta do protótipo via GitHub Actions.

## O que foi feito
1. **QA de responsividade:** testadas as 9 telas do protótipo (`1.1-login` a `4.1-whatsapp` + apresentação) em 320/344/375/390/412/430px com screenshots e checagem de overflow horizontal via Playwright headless.
2. **Bug corrigido — login:** o "Tech" do wordmark ficava quase invisível no fundo claro do formulário (`--header-muted`, cor pensada só para o header escuro); adicionado override `.login-brand .brand-word span{color:var(--muted)}`.
3. **Bug corrigido — requerimento (2.3):** `.callout-danger` virava duas colunas apertadas em mobile (`flex-direction:row` sem breakpoint); adicionado `@media (max-width:560px){flex-direction:column}`.
4. **Bug corrigido — apresentação (hero):** o wordmark "VeredaTech" estourava o container em telas ≤390px (mascarado pelo `overflow:hidden` do hero, então invisível em screenshots comprimidos); `clamp(44px,8vw,76px)` trocado por `clamp(28px,10vw,76px)`. A trilha animada (rótulos "Pedido/Protocolo/Resposta/Conta prestada") colapsava sem espaçamento em telas estreitas; adicionado `flex-wrap` + `gap` + `white-space:nowrap` nos labels.
5. **Melhoria — tabelas da apresentação:** adicionada dica textual "↔ Arraste a tabela para o lado" (visível só ≤640px) nas duas tabelas que exigem scroll horizontal em mobile.
6. **Rename para GitHub Pages:** `apresentacao.html` → `04-execucao/prototipo/index.html` (nenhum link interno apontava para o arquivo, rename seguro).
7. **Publicação no GitHub:** `git init` na pasta `vereda-tech/` (repo próprio, independente do vault), commit inicial com todo o conteúdo do pipeline (00 a 05) + protótipo, push para `https://github.com/CinthiaSouza/veredatech`.
8. **GitHub Pages via Actions:** GitHub Pages nativo só publica raiz ou `/docs`, não uma subpasta arbitrária — criado `.github/workflows/pages.yml` que publica `04-execucao/prototipo/` a cada push (via `upload-pages-artifact` + `deploy-pages`). Repositório precisou virar público (Pages grátis não funciona em repo privado) — decisão confirmada com a usuária antes de mudar a visibilidade.
9. Deploy verificado no ar em `https://cinthiasouza.github.io/veredatech/`, incluindo push de correção pós-deploy com as fixes de responsividade.

## Decisões tomadas
| Decisão | Contexto / Motivo |
|---|---|
| Repositório `veredatech` tornado público | GitHub Pages grátis exige repo público; usuária escolheu essa opção entre as alternativas (manter privado + plano pago, ou hospedar em outro serviço) |
| Publicação da pasta `prototipo/` via GitHub Actions, não Pages nativo | GitHub Pages nativo só aceita raiz do repo ou `/docs`; Actions permite manter a estrutura completa do pipeline no repo e publicar só o protótipo |
| `apresentacao.html` renomeado para `index.html` | Necessário para servir como raiz do site no GitHub Pages |

## Pendências geradas
- [ ] INPI (classes 9/42) + registro.br para "VeredaTech" (herdada de sessões anteriores).
- [ ] Rodar o prompt de imagem da 4.1-identidade-visual numa IA de imagem (herdada).
- [ ] Validações via Diego (gabinetes do piloto, exemplo real de indicação) — herdadas, ainda abertas.
- [ ] Nenhuma pendência nova bloqueante desta sessão — responsividade e publicação concluídas e verificadas no ar.

## Arquivos criados ou atualizados nesta sessão
- `04-execucao/prototipo/styles/global.css` (fix legibilidade wordmark login; `.callout-danger` empilha em mobile)
- `04-execucao/prototipo/apresentacao.html` → renomeado para `04-execucao/prototipo/index.html` (fix wordmark hero + trilha animada; dica de scroll nas tabelas)
- `.gitignore`, `.github/workflows/pages.yml` (novos, na raiz do projeto)
- `_INDEX.md` (registro do rename e da publicação)
- Repositório GitHub `CinthiaSouza/veredatech` criado/populado (novo remoto `origin`)

## Próximos passos
- Fase 4 e a publicação do protótipo estão completas e verificadas. Retomar a Fase 05 Lançamento (posicionamento + go-to-market) ou fechar as pendências herdadas (INPI, validações com Diego) antes de avançar.
- Link para compartilhar/vender: `https://cinthiasouza.github.io/veredatech/`.
