# 🛠️ Node.js API - Prática e Relembrando Conceitos

Este repositório contém um pequeno projeto desenvolvido para relembrar e praticar conceitos básicos de **Node.js**, incluindo o uso de rotas, parâmetros, middlewares e manipulação de requisições e respostas.

---

## 📄 Descrição do Projeto

Este projeto utiliza **Express.js** para criar uma API simples com as seguintes funcionalidades:

- Rotas para gerenciar **produtos** e **voos**.
- Exemplos de manipulação de **parâmetros**, **query strings** e **body** em requisições.
- Middleware básico aplicado para interceptar rotas.
- Mensagem de boas-vindas para teste rápido do servidor.

---

## 🌟 Funcionalidades

### Rotas de Produtos

- `GET /produtos`: Retorna uma lista vazia de produtos.
- `POST /produtos`: Exibe os parâmetros recebidos na requisição.
- `GET /produtos/:id`: Retorna informações de um produto fictício com base no ID fornecido.

### Rotas de Voos

- `GET /voos/:from/:to`: Recebe os parâmetros de origem e destino e retorna um objeto fictício com o preço do voo.

### Rotas Gerais

- `GET /ping`: Rota simples para verificar a disponibilidade do servidor.
- `GET /`: Retorna uma mensagem básica de "Olá mundo".

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework para criação de servidores e APIs.
- **TypeScript**: Utilizado para maior segurança e organização no desenvolvimento.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado na máquina.
- Gerenciador de pacotes npm ou yarn.

### Passo a Passo

1. Clone este repositório:
   ```bash
   git clone https://github.com/HiagoSalvador/Node.js-remembering.git
