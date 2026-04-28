# 🤝 Guia de Contribuição — site-web

Obrigado por querer contribuir com o site da **SIF Soft**! Este documento explica tudo que você precisa saber para colaborar de forma organizada.

---

## 📋 Índice

- [Antes de Começar](#antes-de-começar)
- [Como Reportar um Bug](#como-reportar-um-bug)
- [Como Sugerir uma Melhoria](#como-sugerir-uma-melhoria)
- [Fluxo de Trabalho com Git](#fluxo-de-trabalho-com-git)
- [Convenção de Commits](#convenção-de-commits)
- [Convenção de Branches](#convenção-de-branches)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Padrões de Código](#padrões-de-código)
- [Integração com o Backend](#integração-com-o-backend)
- [Pull Request](#pull-request)

---

## Antes de Começar

1. Leia o [README.md](./README.md) e saiba como rodar o projeto localmente.
2. Verifique as [Issues abertas](../../issues) — talvez o que você quer fazer já esteja sendo discutido.
3. Para mudanças grandes, **abra uma Issue primeiro** antes de começar a codar.

---

## Como Reportar um Bug

Abra uma Issue com:

- **Título claro** (ex: `[Bug] Página de editais não carrega`)
- **Passos para reproduzir** o problema
- **Comportamento esperado** vs **comportamento atual**
- **Capturas de tela** se ajudar
- **Ambiente**: navegador, sistema operacional, versão do Node

---

## Como Sugerir uma Melhoria

Abra uma Issue com o label `enhancement` contendo:

- O **problema** que a melhoria resolve
- A **solução** que você imagina
- Exemplos visuais ou referências, se tiver

---

## Fluxo de Trabalho com Git

Seguimos o modelo **Git Flow simplificado**:

```
main          ← código estável, em produção
└── develop   ← branch de integração das features
    └── feature/nome-da-feature   ← sua contribuição
```

### Passo a passo

**1. Clone o repositório**
```bash
git clone https://github.com/<seu-usuario>/site-web.git
cd site-web
```

**2. Adicione o repositório original como remote**
```bash
git remote add upstream https://github.com/<org>/site-web.git
```

**3. Crie sua branch a partir de `develop`**
```bash
git checkout develop
git pull upstream develop
git checkout -b feature/nome-da-sua-feature
```

**4. Faça suas alterações e commite**
```bash
git add .
git commit -m "feat: adiciona listagem de postagens no blog"
```

**5. Suba sua branch**
```bash
git push origin feature/nome-da-sua-feature
```

**6. Abra um Pull Request** de `feature/sua-branch` → `develop`

---

## Convenção de Commits

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>: <descrição curta no imperativo em português>
```

| Tipo | Quando usar |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `style` | Mudanças visuais / CSS (sem lógica) |
| `refactor` | Refatoração sem mudar comportamento |
| `docs` | Documentação (README, comentários) |
| `chore` | Manutenção (dependências, config) |

**Exemplos:**
```bash
git commit -m "feat: adiciona página de editais com listagem da API"
git commit -m "fix: corrige redirecionamento após login"
git commit -m "style: ajusta espaçamento da navbar no mobile"
git commit -m "docs: atualiza tabela de integração no README"
```

---

## Convenção de Branches

| Tipo | Formato | Exemplo |
|---|---|---|
| Nova funcionalidade | `feature/nome` | `feature/pagina-editais` |
| Correção de bug | `fix/nome` | `fix/login-redirect` |
| Melhoria visual | `style/nome` | `style/navbar-mobile` |
| Documentação | `docs/nome` | `docs/atualiza-contributing` |

---

## Estrutura de Diretórios

Entenda onde cada tipo de arquivo deve ficar antes de criar algo novo:

```
src/
├── assets/
│   ├── images/      # Imagens (prefira WebP para melhor performance)
│   └── icons/       # Ícones SVG
│
├── components/
│   ├── layout/      # Navbar, Footer, Layout, PrivateRoute
│   │                # Mexer aqui afeta TODAS as páginas — cuidado!
│   └── ui/          # Componentes genéricos e reutilizáveis
│                    # Exemplos: Button, Card, Modal, Badge, Spinner
│
├── context/
│   └── AuthContext.jsx   # Gerencia token JWT e dados do usuário logado
│                         # Não duplique lógica de auth fora daqui
│
├── hooks/           # Custom hooks (ex: useFetch.js, useDebounce.js)
│
├── pages/           # Uma pasta por rota — cada pasta tem .jsx e .module.css
│   ├── home/        # Rota "/" — página inicial
│   ├── blog/        # Rota "/blog" — lista postagens, exibe comentários
│   ├── editais/     # Rota "/editais" — lista editais e processos seletivos
│   ├── login/       # Rota "/login" — formulário de autenticação
│   └── admin/       # Rota "/admin" — área protegida para gestão de conteúdo
│
├── services/
│   └── api.js       # ÚNICA fonte de requisições HTTP
│                    # Nunca use fetch() ou axios diretamente nas páginas
│
├── styles/
│   └── global.css   # Variáveis CSS e reset global
│                    # Não coloque estilos de componentes aqui
│
└── utils/           # Funções puras sem side effects
│                    # Exemplos: formatDate.js, truncateText.js
```

### Regras de ouro

- **Um arquivo por componente** — cada `.jsx` tem seu próprio `.module.css`
- **PascalCase** para componentes: `BlogCard.jsx`, `EditalItem.jsx`
- **camelCase** para hooks e utils: `useFetch.js`, `formatDate.js`
- **Toda chamada à API** passa por `src/services/api.js` — nunca direto nas páginas
- **Lógica de autenticação** fica no `AuthContext` — não duplique em outros lugares
- Mantenha arquivos com no máximo **200 linhas**; se crescer demais, quebre em componentes menores

---

## Integração com o Backend

O backend foi desenvolvido pela turma de Web II e está disponível em:
- Repositório: [ifnmg-WEB-II-Site](https://github.com/Mikemps/ifnmg-WEB-II-Site)
- API em produção: [ifnmg-web-ii-site.vercel.app](https://ifnmg-web-ii-site.vercel.app)

Ao implementar uma página que consome a API, sempre consulte o arquivo de rotas correspondente no backend:

| Página | Arquivo de rotas no backend |
|---|---|
| Blog (postagens) | `src/routes/postagemRotas.js` |
| Blog (comentários) | `src/routes/comentarioRotas.js` |
| Editais | `src/routes/editalRotas.js` |
| Login | `src/routes/loginRotas.js` |
| Admin (usuários) | `src/routes/usuarioRotas.js` |
| Admin (uploads) | `src/routes/uploadRotas.js` |

O token JWT é enviado automaticamente pelo interceptor em `src/services/api.js`. Você não precisa adicioná-lo manualmente nas requisições.

---

## Padrões de Código

- Use **CSS Modules** (`.module.css`) — nunca estilos inline
- Use as **variáveis CSS** do `global.css` para cores e fontes — sem valores fixos de cor
- Prefira **componentes funcionais** com hooks — sem class components
- Escreva o código em **português** quando for texto de interface; use **inglês** para nomes de variáveis, funções e comentários técnicos
- Rode `npm run lint` antes de abrir o PR e corrija todos os avisos

---

## Pull Request

Ao abrir um PR, informe:

- **O que foi feito** — descrição clara das mudanças
- **Por que foi feito** — problema resolvido ou feature adicionada
- **Como testar** — passos para o revisor verificar
- **Screenshots** — antes/depois se houver mudança visual

### Checklist antes de abrir o PR

- [ ] O projeto roda localmente sem erros (`npm run dev`)
- [ ] O build funciona (`npm run build`)
- [ ] O lint passa sem erros (`npm run lint`)
- [ ] Os commits seguem a convenção
- [ ] A branch aponta para `develop`, não para `main`
- [ ] A documentação foi atualizada se necessário

---

Dúvidas? Abre uma Issue ou fala com o time da SIF Soft. 🚀
