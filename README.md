# 🖥️ SIF Soft — Site Institucional (Frontend)

> Frontend do site institucional da **SIF Soft**, empresa júnior de Sistemas de Informação do **IFNMG Campus Salinas**.
> Construído com **React + Vite**, consome a API REST desenvolvida pela turma de Web II.
>
> 🔗 **Backend:** [ifnmg-WEB-II-Site](https://github.com/Mikemps/ifnmg-WEB-II-Site)
> 🌐 **API em produção:** [ifnmg-web-ii-site.vercel.app](https://ifnmg-web-ii-site.vercel.app)

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Como Executar](#como-executar)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Integração com o Backend](#integração-com-o-backend)
- [Como Contribuir](#como-contribuir)

---

## Sobre o Projeto

A SIF Soft é a empresa júnior do curso de Bacharelado em Sistemas de Informação do IFNMG Campus Salinas. Este repositório contém o **frontend** do site institucional, responsável por:

- Apresentar informações sobre a empresa, seus projetos e formas de contato
- Exibir o blog com eventos, conquistas e atividades da empresa
- Listar editais de processos seletivos e vagas de estágio
- Permitir o gerenciamento de conteúdo por usuários autenticados (área admin)

---

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev/) | 18 | Biblioteca de UI |
| [Vite](https://vitejs.dev/) | 5 | Bundler e servidor de desenvolvimento |
| [React Router DOM](https://reactrouter.com/) | 6 | Roteamento entre páginas |
| [Axios](https://axios-http.com/) | 1.7 | Requisições HTTP para a API backend |
| CSS Modules | — | Estilização escopada por componente |

---

## Estrutura de Diretórios

A estrutura foi definida com base nas rotas da API backend (`src/routes/`):

```
site-web/
├── public/                        # Arquivos estáticos (favicon, etc.)
├── src/
│   ├── assets/
│   │   ├── images/                # Imagens do site
│   │   └── icons/                 # Ícones SVG
│   │
│   ├── components/
│   │   ├── layout/                # Componentes estruturais presentes em todas as páginas
│   │   │   ├── Layout.jsx         # Wrapper com Navbar + Outlet + Footer
│   │   │   ├── Navbar.jsx         # Barra de navegação com links e botão de login/logout
│   │   │   ├── Footer.jsx         # Rodapé
│   │   │   └── PrivateRoute.jsx   # Proteção de rotas autenticadas (JWT)
│   │   └── ui/                    # Componentes reutilizáveis (Button, Card, Modal...)
│   │
│   ├── context/
│   │   └── AuthContext.jsx        # Contexto de autenticação — armazena token JWT e dados do usuário
│   │
│   ├── hooks/                     # Custom hooks reutilizáveis (ex: useFetch, useAuth)
│   │
│   ├── pages/                     # Uma pasta por rota do site
│   │   ├── home/                  # Página inicial — rota "/"
│   │   ├── blog/                  # Blog de postagens — rota "/blog" → consome postagemRotas + comentarioRotas
│   │   ├── editais/               # Editais e processos seletivos — rota "/editais" → consome editalRotas
│   │   ├── login/                 # Autenticação — rota "/login" → consome loginRotas
│   │   └── admin/                 # Painel admin (protegido) — rota "/admin" → consome usuarioRotas + uploadRotas
│   │
│   ├── services/
│   │   └── api.js                 # Instância do Axios configurada com baseURL e interceptor de JWT
│   │
│   ├── styles/
│   │   └── global.css             # Variáveis CSS globais (cores, fontes) e reset
│   │
│   ├── utils/                     # Funções utilitárias puras (formatadores, helpers)
│   │
│   ├── App.jsx                    # Componente raiz com definição de todas as rotas
│   └── main.jsx                   # Entry point da aplicação React
│
├── .env.example                   # Variáveis de ambiente necessárias (copie para .env)
├── .eslintrc.json                 # Configuração do ESLint
├── .gitignore
├── index.html                     # HTML base do Vite
├── package.json
├── vite.config.js
├── README.md
└── CONTRIBUTING.md
```

---

## Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) **v18 ou superior**
- [npm](https://www.npmjs.com/) **v9 ou superior** (já vem com o Node)
- Git instalado

### Passo a passo

**1. Clone o repositório**
```bash
git clone https://github.com/<seu-usuario>/site-web.git
cd site-web
```

**2. Instale as dependências**
```bash
npm install
```

**3. Configure as variáveis de ambiente**
```bash
cp .env.example .env
```
Edite o `.env` conforme necessário (veja a seção abaixo).

**4. Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173). As alterações aparecem automaticamente sem recarregar a página.

> 💡 Para o site funcionar completamente, o backend também precisa estar rodando.
> Consulte o [README do backend](https://github.com/Mikemps/ifnmg-WEB-II-Site) para instruções.

---

## Variáveis de Ambiente

Copie `.env.example` para `.env` e preencha:

| Variável | Descrição | Valor padrão |
|---|---|---|
| `VITE_API_URL` | URL base da API backend | `http://localhost:3000` |

Em produção, use a URL da API hospedada: `https://ifnmg-web-ii-site.vercel.app`

> ⚠️ Nunca suba o arquivo `.env` para o repositório. Ele já está no `.gitignore`.

---

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Verifica o código com ESLint |

---

## Integração com o Backend

O frontend consome a API REST do backend. Cada página se conecta a uma ou mais rotas:

| Página | Rota no site | Rotas da API consumidas |
|---|---|---|
| Home | `/` | — |
| Blog | `/blog` | `postagemRotas`, `comentarioRotas` |
| Editais | `/editais` | `editalRotas` |
| Login | `/login` | `loginRotas` |
| Admin | `/admin` | `usuarioRotas`, `uploadRotas`, `postagemRotas`, `editalRotas` |

Toda comunicação com a API passa pelo arquivo `src/services/api.js`, que já inclui o token JWT automaticamente em cada requisição autenticada.

---

## Como Contribuir

Consulte o arquivo [CONTRIBUTING.md](./CONTRIBUTING.md) para o guia completo.
