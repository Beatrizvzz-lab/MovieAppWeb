# 🎬 MovieApp — Front-end

O **MovieApp** é uma aplicação web construída com **React**, **Tailwind CSS** e **Vite**, que permite explorar um catálogo de filmes, realizar buscas por título, e visualizar detalhes completos de cada filme. Inspirado no visual de plataformas como a Globoplay, o app tem um design cinematográfico escuro, responsivo e com foco em experiência do usuário.

---

## 🚀 Tecnologias Utilizadas

- **React** — Biblioteca principal para construção da interface.
- **Vite** — Ferramenta de build e desenvolvimento super rápida.
- **TypeScript** — Tipagem estática para maior robustez.
- **Tailwind CSS** — Framework utilitário para estilização rápida e customizável.
- **Radix UI** — Componentes acessíveis e de baixo nível.
- **Axios** — Cliente HTTP para comunicação com o back-end.

---

## 📁 Estrutura de Pastas

src/
├── components/ # Componentes reutilizáveis (UI, MovieCard, SearchBar, etc)
│ └── ui/ # Componentes visuais como Button, Card, Input, etc.
├── hooks/ # Hooks customizados para chamadas à API
├── interfaces/ # Tipos TypeScript dos dados (Movie, MovieDetail)
├── lib/ # Axios config e utilidades globais
├── pages/ # Páginas principais (Index, MovieDetails, NotFound)
├── styles/ # Arquivo de estilos globais e design system
└── main.tsx # Ponto de entrada da aplicação


---

## 🌐 Funcionalidades

- [x] Listagem de filmes com layout em grid
- [x] Barra de pesquisa com filtro por título, tipo e ano
- [x] Página de detalhes com sinopse, elenco, produção, prêmios e avaliações
- [x] Mensagens de erro para filmes não encontrados
- [x] Página 404 customizada
- [x] Layout responsivo e tema escuro com tokens customizados
- [x] Placeholder para imagens quebradas
- [x] UX polida com animações e transições suaves

---

## 🧪 Como rodar o projeto localmente

### Pré-requisitos

- Node.js v18+
- Yarn ou npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/movie-app-web.git

# Acesse a pasta
cd movie-app-web

# Instale as dependências
yarn install
# ou
npm install
```
Variáveis de ambiente
Crie um arquivo .env na raiz com a seguinte variável:

```
VITE_BASE_URL=http://localhost:3002
```
Rodando o projeto:

```
yarn dev
# ou
npm run dev
```

📌 To-do/Futuras melhorias
 
 Paginação ou scroll infinito
 - Sistema de favoritos com persistência local
 - Filtros por gênero, nota e idioma
 - Adicionar loading skeletons
 - Testes unitários com React Testing Library
