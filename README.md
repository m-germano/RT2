# 🚀 RT2 - Calculadora CLI com TypeScript  

### 📚 Disciplina: Programação Orientada a Objetos  
### 👨‍🏫 Professor: Gerson  

## 📝 Descrição  
Este projeto é uma **Calculadora CLI** desenvolvida em **TypeScript** como parte da disciplina de **Programação Orientada a Objetos**. O objetivo é explorar conceitos da linguagem e boas práticas de desenvolvimento.  

## 🛠️ Tecnologias Utilizadas  
O projeto utiliza as seguintes tecnologias:  

<div align="left">
  <img src="https://skillicons.dev/icons?i=javascript,typescript,nodejs,vscode" height="45" />
</div>  

## ⚠️ Observações  
O código segue padrões de formatação com **ESLint** e **Prettier** para manter a consistência e qualidade.  

<div align="left">
  <img src="https://blog.kakaocdn.net/dn/saet5/btrSvzBKSmX/2QugHMvkOW2Ze3SUYzQLF0/img.png" height="180" width="600" />
</div>  

## 🎥 Preview do Projeto


https://github.com/user-attachments/assets/035794be-74d9-4095-9f0c-ad45e48edc43



## 📥 Instalação e Execução com Node + TSCompiler  

### 🔹 Clonando o repositório  
```sh
git clone https://github.com/m-germano/RT2
```
```sh
cd RT2
```

### 🔹 Instalando dependências  
```sh
npm install
```

### 🔹 Instalando os tipos do Node.js  
```sh
npm install --save-dev @types/node
```

### 🔹 Instalando o TypeScript (caso não tenha)  
Se o **TypeScript** não estiver instalado globalmente, use o seguinte comando:  

```sh
npm install -g typescript
```

> **💡 Nota:** Remova a flag `-g` se quiser instalar apenas no repositório do projeto.  

## ▶️ Executando o projeto  
Para compilar e rodar o código, utilize:  

```sh
tsc && node dist/App.js
```

## ⚡ Executando o TypeScript com Bun e CodeRunner (Opcional)  
[Bun](https://bun.sh/) é um runtime alternativo para Node.js, que pode ser utilizado para rodar **TypeScript** de forma mais rápida.  

### 🔹 Instalando o Bun  
Siga as instruções no site oficial: [https://bun.sh/](https://bun.sh/)  

### 🔹 Configurando o CodeRunner no VS Code  
Adicione o seguinte trecho ao seu arquivo de configurações (`settings.json`):  

```json
"code-runner.executorMap": {
    "typescript": "bun $fullFileName"
}
```

### 🔹 Executando  
No arquivo `App.ts`, clique no ícone de executar, no canto superior direito do **VS Code**.  
