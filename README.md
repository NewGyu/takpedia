# Takpedia

## What's this?

このリポジトリは特攻の拓総合サイト[拓ペディア](https://takpedia.pages.dev/)のソースコードを管理するものです。

## How to develop and buiold

### Prerequisite

当サイトは[Astro](https://astro.build)を用いて開発されており、Node.js v16.xが必要です。

最も簡単な方法はVSCodeと[Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)を利用することです。

他のエディタ、Dockerを使いたくない場合にはローカルにNode.jsをインストールしてください。

### Run on your local

```shell
$ npm run dev
```

### Build
```shell
$ npm run build
```

上記のコマンドによって`./dist`ディレクトリが生成され、すべての成果物はそのディレクトリ内に生成されます。

### Publish
当サイトは[CloudFlare Pages](https://www.cloudflare.com/ja-jp/products/pages/)を利用しており、`mainブランチ`の変更を検知して自動的にpublishされます。


## Project Structure

概ね以下のディレクトリ構造になっています。

```
.
├── public
├── src
│   ├── codes           ...Astro依存しない独立したロジック
│   ├── components
│   │   ├── Global      ...グローバルヘッダなど
│   │   ├── Team        ...族関係のページの部品
│   │   └── People      ...登場人部関係のページの部品
│   ├── layouts         ...全体レイアウト
│   ├── pages
│   │   ├── teams       ...族関係のページ
│   │   └── people      ...登場人部関係のページ
│   └── style
└── test
```

### style
基本的に[tailwind.css](https://tailwindcss.com/)を利用しています。故に各所のclassを大量に付けていくスタイルです。

Markdown部分についてはやってられないので[GitHub由来のMarkdown用CSS](src/style/markdown.css)を拝借しています。

### pages
多くのページは[MDX](https://docs.astro.build/ja/guides/markdown-content/)（拡張マークダウン）書式を使っています。これはサイトに埋め込む画像に著作権表記をしたいためです。


## Contributes

「！？」と思われた方、「ダボがぁ　半チクこいてんじゃねぇゾ！！」と思われた方、是非PullRequestをください！
