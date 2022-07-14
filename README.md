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
- Adicionar arquivo webpack.config.js para ajustar dirname
```
const path = require("path");

module.exports = {
  //
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
