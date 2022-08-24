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

## Adicionando o Webpack ao projeto

• Webpack serve pra importar outros arquivos de tipos de imagens e pré-processadores ex:.sass, convertendo em arquivos legíveis para o browser

yarn add webpack webpack-cli / depois webpack-dev-server -D

webpack.config.js

- É passado o caminho, checagem de arquivos e a exclusão do node_modules e o babel-loader(integração entre babel e webpack)
  yarn add babel-loader -D
- Testando o webpack

yarn webpack

## Criando a estrutura do ReactJs

• Dentro do index.html teremos apenas uma div com id root

(yarn webpack) será utilizado para testar o render criado em index.jsx(root para o index.html)

- No babel.config.js foi adicionado a config: runtime: 'automatic', para evitar imports do react nos arquivos jsx.
- <App /> foi adicionado ao primeiro parâmetro do render

• plugin para auxiliar na automatização do bundle na aplicação

yarn add html-webpack-plugin -D

• servidor de desenvolvimento para automatizar a produção

yarn add webpack-dev-server -D

yarn webpack serve

• Search maps forma de conseguir vizualizar o código original utilizando o bundle, ex: no inspecionar as linhas são diferentes ao encontrar um erro.

• Dentro de webpack.config.js
devtool: 'eval-source-map',
