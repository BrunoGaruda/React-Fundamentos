# Criando um projeto react do zero

## Criação inical das pastas para projeto react

npm install --global yarn

• Criar o package.json

- Informações principais do projeto
  - Dependências do projeto

• yarn init -y

- instalando react

  - Criação da pasta node_modules
  - Criação do yarn.lock

    yarn add react
    yarn add react-dom

• Criação da pasta src: alocando todo o código da aplicação
• Criação da pasta public: alocando assets ex: index, favicon, etc

## Adicionando o babel ao projeto

• Babel serve pra converter um código moderno para as versões dos navegadores mais antigos possam entender

- Instalando os pacotes
  yarn add @babel/core @babel/cli @babel/preset-env -D

- cli para habilitar o menu de ajuda em (yarn babel -h)
- core é biblioteca do babel
- preset-env extenção do babel que converte o código da melhor forma possível(automaticamente)

https://babeljs.io/

- Convertendo o arquivo index.js e criando uma pasta dist com bundle.js com o arquivo convertido
  yarn babel src/index.js --out-file dist/bundle.js

- Necessário criar um preset do react para o babel entender
  yarn add @babel/preset-react -D
