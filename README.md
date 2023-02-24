# Takpedia

## What's this?

このリポジトリは特攻の拓総合サイト[拓ペディア](https://bukko.me/)のソースコードを管理するものです。

## How to develop and buiold

### Prerequisite

当サイトは[Astro](https://astro.build)を用いて開発されており、Node.js v16.x以降が必要です。最も簡単な方法はVSCodeと[Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)を利用することですが、VSCode以外のエディタ、Dockerを使わずに別の方法でContributeしたい場合はあなたのローカルマシンにNode.jsをインストールしてください。

そして初回には下記のコマンドを実行してください。

```shell
$ npm install       <--- Astroを含むページビルドに必要なライブラリをインストールします
$ npm run build     <--- schemaをTypeScriptの型にコンパイルするために必要なようです
```

### Run on your local

```shell
$ npm run dev
```

http://localhost:3000/ で確認できます。

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
├── astro.config.mjs
├── public
├── src
│   ├── components      ...各種ページで使われているUIパーツ定義
│   ├── content         ...コンテンツの内容を記述するmdx
│   ├── env.d.ts
│   ├── layouts         ...全体の枠の定義
│   ├── pages           ...各種ページ定義（ただし具体的な内容は content）
│   ├── schemas         ...各種コンテンツのスキーマ定義
│   └── style
├── tailwind.config.cjs
└── tsconfig.json
```
### content collection
Astro 2.0から採用された[Content Collections](https://docs.astro.build/ja/guides/content-collections/)をめちゃめちゃ活用しています。

```
./src/
├── content
│   ├── config.ts           <--content collectionの定義
│   ├── famousQuotes
│   ├── orgs
│   :      :
│   └── teams               <--各種content(*.mdxファイル)が格納される
├── pages
│   ├── orgs
│   ├── people
│   ├── quotes
│   :       :
│   └── teams
│         ├── index.astro   <--一覧ページ
│         └── [slug].astro  <--詳細ページ
└── schemas
    ├── famousQuote.ts
    ├── orgs.ts
    :      :
    └── team.ts             <--Zodを使ったスキーマ定義の実体
```

その結果としてpages以下のページはほとんどの場合、
* index.astro
* [slug].astro
の2つだけで、それらのページがビルド過程にcontent以下の*.mdxファイルを当てはめてページを生成しています。

それによって、ほとんどのケースではJavaScriptやAstroを理解することなく、 **content以下の.mdxファイルにMarkdownを書くだけ** でコンテンツの追加、修正が可能となっています。

### style
基本的に[tailwind.css](https://tailwindcss.com/)を利用しています。故に各所のclassを大量に付けていくスタイルです。

Markdown部分についてはやってられないので[GitHub由来のMarkdown用CSS](src/style/markdown.css)を拝借しています。

### pages
多くのページは[MDX](https://docs.astro.build/ja/guides/markdown-content/)（拡張マークダウン）書式を使っています。これはサイトに埋め込む画像に著作権表記をしたいためです。


## Contributes

「！？」と思われた方、「ダボがぁ　半チクこいてんじゃねぇゾ！！」と思われた方、是非PullRequestをください！
