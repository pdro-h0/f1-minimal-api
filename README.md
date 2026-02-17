# Minimal F1 API | DIO

Neste projeto, foi desenvolvida uma API simples para fornecer dados sobre equipes e pilotos da Fórmula 1. O desenvolvimento foi realizado utilizando TypeScript com Node.js e o framework Fastify.

<table>
    <tr>
        <td>
            <b>Objetivo:</b>
            <p>Criar uma API RESTful que oferece endpoints para consultar informações sobre as equipes e pilotos da temporada de Fórmula 1, demonstrando o uso de Fastify para a construção de servidores web rápidos e eficientes.</p>
        </td>
    </tr>
</table>

---

## 🚀 Funcionalidades Principais

A API oferece os seguintes endpoints para consulta:

<table style="border-collapse: collapse; width: 100%; max-width: 900px;">
    <tr >
        <td style="border: 1px solid #ccc; padding: 15px; text-align: center; font-weight: bold;">
            🏎️ Listar Equipes
        </td>
        <td style="border: 1px solid #ccc; padding: 15px;">
            Retorna uma lista completa das equipes da Fórmula 1, incluindo nome e base de operações.
        </td>
    </tr>
    <tr >
        <td style="border: 1px solid #ccc; padding: 15px; text-align: center; font-weight: bold;">
            👨‍🚀 Listar Pilotos
        </td>
        <td style="border: 1px solid #ccc; padding: 15px;">
            Retorna uma lista de pilotos da Fórmula 1, com informações sobre nome e equipe.
        </td>
    </tr>
    <tr >
        <td style="border: 1px solid #ccc; padding: 15px; text-align: center; font-weight: bold;">
            🆔 Buscar Piloto por ID
        </td>
        <td style="border: 1px solid #ccc; padding: 15px;">
            Retorna os detalhes de um piloto específico com base no ID fornecido.
        </td>
    </tr>
</table>

---

## ⚙️ Endpoints Disponíveis

O servidor expõe os seguintes endpoints:

### 1. `GET /team`
- **Descrição:** Retorna uma lista de todas as equipes.
- **Output:** Um array de objetos, onde cada objeto representa uma equipe.
```json
[
  { "id": 1, "name": "McLaren", "base": "Working, United Kingdom" },
  { "id": 2, "name": "Mercedes", "base": "Brackley, United Kingdom" }
]
```

### 2. `GET /drivers`
- **Descrição:** Retorna uma lista de todos os pilotos.
- **Output:** Um array de objetos, onde cada objeto representa um piloto.
```json
[
  { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" },
  { "id": 2, "name": "Lewis Hamilton", "team": "Ferrari" }
]
```

### 3. `GET /drivers/:id`
- **Descrição:** Busca um piloto pelo seu ID.
- **Input (Parâmetro de URL):** O `id` do piloto.
- **Output:** O objeto do piloto correspondente ou uma mensagem de erro 404 se não for encontrado.
```json
{
  "driver": { "id": 2, "name": "Lewis Hamilton", "team": "Ferrari" }
}
```

---

## 📦 Estrutura do Projeto

```
formula1/
├── src/
│   └── server.ts       # Ponto de entrada da aplicação e configuração do servidor
├── .gitignore
├── api.http            # Arquivo para testar os endpoints da API
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

- **TypeScript** - Tipagem estática para JavaScript
- **Node.js** - Runtime JavaScript
- **Fastify** - Framework web para Node.js, focado em performance
- **@fastify/cors** - Plugin para habilitar CORS no Fastify
- **tsx** - Executor TypeScript para desenvolvimento rápido

---

## 📋 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/pdro-h0/f1-minimal-api 
```

### 2. Navegue até o diretório do projeto

```bash
cd formula1
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute em modo desenvolvimento

```bash
npm run dev
```

Após executar o comando, o servidor iniciará na porta `3333`. Você pode usar um cliente de API como o Postman, Insomnia ou a extensão REST Client do VS Code com o arquivo `api.http` para testar os endpoints.

---

## ✨ Recursos Especiais

- ✅ API simples e clara para dados da F1.
- ✅ Código moderno com TypeScript e Fastify.
- ✅ Configuração de CORS para permitir acesso de diferentes origens.
- ✅ Inclui um arquivo `api.http` para facilitar os testes dos endpoints.

---

Desenvolvido como desafio educacional da **DIO** - Digital Innovation One
