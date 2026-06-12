# TechJobs Brasil

> Conectando talentos de tecnologia às melhores oportunidades.

Uma aplicação web desenvolvida com **React + Vite** para listar profissionais de tecnologia em cards interativos, com busca, filtros por área, favoritos, resumo de dados e perfil expansível.

---

## Badges






\

---

##  Demonstração

> Área reservada para materiais visuais do projeto.

* 📸 Screenshot da tela inicial
* 🎞️ GIF demonstrando busca, filtros e favoritos
* 🌐 Link do deploy: `em breve`

---

## 📖 Sobre o Projeto

O **TechJobs Brasil** é um catálogo de profissionais de tecnologia criado para praticar fundamentos essenciais do React, como componentes, props, estado, eventos, renderização de listas, filtros, ordenação e renderização condicional.

A aplicação permite visualizar profissionais cadastrados, pesquisar por nome ou habilidade, filtrar por área, marcar favoritos e abrir uma pequena bio individual.

---

##  Principais Funcionalidades

* Listagem de profissionais em cards
* Busca por nome ou habilidade
* Filtro por área profissional
* Filtro especial de favoritos
* Sistema de favoritar/desfavoritar profissionais
* Bio expansível em cada card
* Contador de profissionais encontrados
* Resumo com total de profissionais, áreas e favoritos
* Botão para limpar filtros
* Ordenação alfabética dos resultados
* Layout responsivo para telas menores

---

##  Tecnologias Utilizadas

| Tecnologia | Uso no projeto                      |
| ---------- | ----------------------------------- |
| React      | Construção da interface             |
| Vite       | Ambiente de desenvolvimento e build |
| JavaScript | Lógica da aplicação                 |
| CSS        | Estilização e responsividade        |
| HTML       | Estrutura base da interface         |
| ESLint     | Padronização e análise do código    |

---

##  Arquitetura do Projeto

```bash
TechJobs-_Brasil/
├── DOCUMENTACAO_TECHJOBS_BRASIL.txt
└── techjobs-brasil/
    ├── package.json
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── data/
    │   │   └── profissionais.js
    │   └── components/
    │       ├── Cabecalho.jsx
    │       ├── Resumo.jsx
    │       ├── CampoBusca.jsx
    │       ├── FiltroArea.jsx
    │       ├── ListaProfissionais.jsx
    │       ├── CardProfissional.jsx
    │       └── Rodape.jsx
```

### Fluxo da aplicação

O arquivo `App.jsx` centraliza os estados principais da aplicação:

* área selecionada;
* texto digitado na busca;
* lista de favoritos.

A partir desses estados, a aplicação filtra, ordena e renderiza os profissionais por meio de componentes menores e reutilizáveis.

### Organização do código

* `data/profissionais.js`: armazena os dados dos profissionais.
* `components/`: contém os blocos visuais da interface.
* `App.jsx`: controla a lógica principal.
* `App.css`: concentra os estilos, layout dos cards, filtros, resumo e responsividade.

---

##  Instalação

Clone o repositório:

```bash
git clone https://github.com/Jorgeelric/TechJobs-_Brasil.git
```

Acesse a pasta do projeto:

```bash
cd TechJobs-_Brasil/techjobs-brasil
```

Instale as dependências:

```bash
npm install
```

---

##  Como Executar

Para rodar o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

Para executar o lint:

```bash
npm run lint
```

---

##  Roadmap

* [ ] Adicionar deploy online
* [ ] Criar README com screenshots reais
* [ ] Adicionar persistência dos favoritos no `localStorage`
* [ ] Criar página individual de perfil
* [ ] Adicionar filtro por cidade
* [ ] Adicionar filtro por empresa
* [ ] Melhorar acessibilidade dos componentes
* [ ] Criar testes automatizados
* [ ] Adicionar licença ao repositório
* [ ] Criar arquivo `.env.example`, caso futuramente utilize APIs externas

---

##  Contribuição

Contribuições são bem-vindas.

Para contribuir:

```bash
# Faça um fork do projeto

# Crie uma branch
git checkout -b feature/minha-melhoria

# Faça o commit
git commit -m "feat: adiciona minha melhoria"

# Envie para o GitHub
git push origin feature/minha-melhoria
```

Depois, abra um Pull Request descrevendo claramente o que foi alterado.

---

## Autor

Desenvolvido por **Jorge Galdino**.

* GitHub: [@Jorgeelric](https://github.com/Jorgeelric)

---

##  Licença

Este projeto ainda não possui uma licença definida.

Recomenda-se adicionar uma licença open source, como **MIT**, caso o objetivo seja permitir uso, estudo, modificação e distribuição do código.

---

##  Apoie o Projeto

Se este projeto te ajudou ou chamou sua atenção, considere deixar uma estrela no repositório.
