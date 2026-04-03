# &lt;Apollo/&gt; — Gerador de QR Code

Aplicação web para geração de QR Codes a partir de qualquer URL. Desenvolvida para praticar o consumo de APIs externas com Axios em um ambiente React + TypeScript.

---

## 🔗 Demo

> Insira a URL, clique em **Gerar QR Code** e faça o download da imagem em PNG.

---

## 🚀 Tecnologias

- [React](https://react.dev/) — biblioteca para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática
- [Vite](https://vitejs.dev/) — bundler e servidor de desenvolvimento
- [Axios](https://axios-http.com/) — cliente HTTP para consumo da API
- [Tailwind CSS](https://tailwindcss.com/) — estilização utilitária
- [React Icons](https://react-icons.github.io/react-icons/) — ícones
- [QR Server API](https://goqr.me/api/) — geração dos QR Codes (gratuita, sem autenticação)

---

## 📁 Estrutura do projeto

```
src/
├── Pages/
│   └── Home.tsx          # Página principal com o formulário e exibição do QR Code
├── Services/
│   └── api.ts            # Configuração do Axios e chamada à API
├── Types/
│   └── qr.ts             # Interfaces TypeScript
├── App.tsx
└── main.tsx
```

---

## ⚙️ Como rodar localmente

**Pré-requisitos:** Node.js instalado.

```bash
# Clone o repositório
git clone https://github.com/z1Apollo/qr-generator.git

# Acesse a pasta
cd qr-generator

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## 🌐 API utilizada

[api.qrserver.com](https://goqr.me/api/) — gratuita, sem necessidade de cadastro ou chave de API.

Formato da requisição:

```
GET https://api.qrserver.com/v1/create-qr-code/?data={URL}&size=600x600&format=png
```

---

## 📌 Funcionalidades

- Geração de QR Code a partir de qualquer URL
- Tamanho fixo de 600×600px para alta qualidade
- Download da imagem em PNG
- QR Code padrão exibido antes da geração
- Feedback visual de carregamento e erro
- Layout totalmente responsivo

---

## 📄 Licença

Este projeto está sob a licença MIT.
