# React-Origamid

**Projeto criado para reproduzir o treinamento da origamid, voltado para React.JS**
<h4 align="left"> 
	🚧  React.JS 🚀 Em andamento... 🚧
</h4>

## Pré-requisitos

- Instalar o `Node.js`
- Instalar no chrome `React Developer Tools`
- Plugin do Vs.Code -> `Origamid next`, `Live Server`, `Color Highlight`, `Prettier`, `ES7 React/Redux/GraphQL Snippets`
- Iniciar um pacote NPM na pasta do aplicativo, criar arquivo package.json

</br>
- Criar ambiente de desenvolvimento React.
```bash
 npx create-react-app meuapp
 ```
 - Criar public/style.css (CSS RESET) e importar em public index.html
 <link rel="stylesheet" href="%PUBLIC_URL%/style.css" />

``` CSS
 *,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --font-title: Georgia, 'Times New Roman', Times, serif;
  --font-size: 1.2rem;
  --color: #19f;
  --color-light: #adf;
  --color-dark: #018;
  --radius: 0.2rem;
}

body {
  margin: 1.5rem;
}

body,
input,
textarea,
button {
  font-size: var(--font-size);
  font-family: var(--font);
}

h1,
h2,
h3 {
  font-family: var(--font-title);
}

h1,
h2,
h3,
p,
ul {
  margin: 1rem 0;
}

ul {
  list-style: square;
}

li {
  margin-bottom: 0.5rem;
}

label {
  display: block;
  margin-bottom: 0.25rem;
}

input,
textarea {
  display: block;
  border: 1px solid #ccc;
  width: 100%;
  padding: 0.8rem;
  border-radius: var(--radius);
  background: #eee;
  transition: 0.2s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color);
  background: white;
  box-shadow: 0 0 0 3px var(--color-light);
}

button {
  cursor: pointer;
  border: none;
  border-radius: var(--radius);
  transition: 0.1s;
  background: var(--color);
  color: var(--color-dark);
  padding: 0.8rem 1.6rem;
}

button:hover,
button:focus {
  background: var(--color);
  box-shadow: 0 0 0 3px var(--color-light), 0 0 0 4px var(--color);
  outline: none;
}

button:active {
  box-shadow: 0 0 0 3px var(--color), 0 0 0 4px var(--color);
}

button:disabled {
  opacity: 0.5;
  cursor: wait;
}

hr {
  border: 2px solid black;
  margin: 2rem auto;
}
```

- Criar arquivo .vscode/settings.json

``` json
{
  "git.enabled": false,
  "files.exclude": {
    "node_modules": true,
    ".vscode": true,
    ".gitignore": true,
    "package.json": true,
    "package-lock.json": true,
    "public": true,

  }

}

```

 Ou 

```bash
 npm init -y
 ```
- Instalar o webpack, webpack-cli e webpack-dev-server
```bash
 npm install webpack webpack-cli webpack-dev-server --save-dev
 ```
- Criar arquivos mínimos
 ```
   - index.html
   - src/index.js
   ```
- Adicionar os scripts de desenvolvimento e build ao package.json
``` script
  "scripts": {
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

- Executar Script
``` script
 npm start
 npm run build
```
- Instalar React
``` script
 npm install react react-dom
```

- Instalar Babel
``` script
 npm install @babel/core @babel/preset-react babel-loader --save-dev
```

- Instalar Loaders (CSS)
``` script
 npm install style-loader css-loader --save-dev
```

- Adicionar arquivo webpack.config.js para ajustar dirname
```
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, "/"),
    },
    compress: true,
    port: 9000,
  },
};

```


## Links
- https://github.com/origamid/origamid-next-vscode



## Origamid Next - Visual Studo Code Setup

![Screenshot](https://raw.githubusercontent.com/origamid/origamid-next-vscode/master/screenshot.png)

## Instalação

1. Abrir o **Extensions** sidebar panel no VS Code. `View → Extensions`
2. Procurar por `Origamid Theme`
3. Clicar em **Install**
4. Clicar em **Reload**
5. Ir em Code > Preferences > Color Theme > **Origamid Next**

## Tipografia Recomendada

[IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)

Essa é a mesma tipografia que utilizo no site da Origamid. As itálicas são lindas e por isso não canso de usar a mesma.

## Configurações Recomendadas
```bash
Atalhos:
(ctrl+shift+p | settings.json)
(ctrl+shift+j | chrome console)
escrever no arquivo .js -> rafce para criar estrutura react
```

```
$ code --install-extension

origamid.origamid-next
dbaeumer.vscode-eslint
esbenp.prettier-vscode
naumovs.color-highlight
ritwickdey.LiveServer
octref.vetur
dsznajder.es7-react-js-snippets
```

```js
  <!-- Adicionar o React. -->
  <!-- Nota: ao fazer o deploy, substitua "development.js" por "production.min.js". -->
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

```js
{
  "editor.fontFamily": "IBM Plex Mono, Monaco, 'Courier New', monospace",
  "editor.fontSize": 14,
  "editor.lineHeight": 25,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "window.zoomLevel": 0,
  "workbench.startupEditor": "newUntitledFile",
  "workbench.activityBar.visible": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.donotVerifyTags": true,
  "explorer.confirmDragAndDrop": false,
  "diffEditor.renderSideBySide": true,
  "editor.formatOnSave": true,
  "html.autoClosingTags": false,
  "editor.autoIndent": false,
  "editor.colorDecorators": false,
  "editor.autoClosingBrackets": "always",
  "editor.autoClosingQuotes": "always",
  "files.associations": {
    "*.js": "javascriptreact"
  },
  "workbench.colorTheme": "Origamid Next",
  "workbench.iconTheme": "origamid-icons",
  "editor.minimap.renderCharacters": false,
  "breadcrumbs.enabled": true,
  "breadcrumbs.filePath": "off",
  "breadcrumbs.icons": false,
  "outline.icons": false
  "telemetry.enableCrashReporter": false,
  "telemetry.enableTelemetry": false,
  "color-highlight.markerType": "dot-before",
  "editor.renderWhitespace": "selection",
  "workbench.statusBar.visible": true,
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "explorer.sortOrder": "type",
  "window.title": "${activeEditorMedium}${separator}${rootName}",
}
```
