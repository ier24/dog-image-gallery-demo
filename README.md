## Reactに慣れるためのチュートリアルのログ#04
TypeScriptを利用する。また、今回からCreate React Appは利用しない。

https://zenn.dev/likr/articles/6be53ca64f29aa035f07


## TypeScript導入時に打ったコマンド
```zsh
// @types/reactと@types/react-domは、ReactとReactDOMの型定義に必要。
npm i -D typescript @types/node vite @vitejs/plugin-react @types/react @types/react-dom
```
```zsh
./node_modules/.bin/tsc --init
```
```zsh
npm i react react-dom
```

## サーバー起動コマンド
viteは以下のポートでサーバーが立ち上がる。

http://localhost:5173/
```zsh
npm run dev
```