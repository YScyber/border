# 境界線

このリポジトリはドロップダウンメニュー（`select`要素）を使用して、白色の二重線の下にある白色のエリア（`iframe`要素内）に各ディレクトリ内にある`index.html`ファイルの内容が表示されるようにしています。

［**選択してください**］を押下し、どれかを選択して表示させてみてください。

表示された内容は上から順に以下の通りです。

- プレビュー画面（`section`要素）
    - textarea要素内に記述されたコードの結果が表示されてます。
- HTMLコード（`textarea`要素）
    - HTMLコードが記述されています。
- CSSコード（`textarea`要素）
    - CSSコードが記述されています。
- リセットボタン（`input`要素）
    - textarea要素内に記述されているコードの変更を初期値（読み込まれた最初の状態）に戻すためのボタンです。
<br>

## 共通設定

それぞれのファイルに共通して記述されているコードがあります。

### HTML

ボーダーを表示させるためのh2要素のHTMLコードです。

```html
<h2>...</h2> <!-- "..."は"グラデーション"または"画像"と記述されています -->
```

### CSS

プレビュー画面（section要素）内の背景を`#000`（黒色）に指定しています。

```css
section {
    background-color: #000;
}
```

プレビュー画面（section要素）内にあるテキスト（h2要素）には要素内の余白を`0.5em`空けて`text-align: center;`と記述して画面中央に表示させ、色は`#fff`（白色）に指定しています。

```css
h2 {
    padding: 0.5em;
    text-align: center;
    color: #fff;
}
```

アットルールを使用して画面の幅が`699px`以下の場合、textarea要素内に記述されているコードのフォントサイズを`120%`から`100%`へと変更しています。 

```css
@media screen and (max-width: 699px) {
    textarea {
        font-size: 100%;
    }
}
```

これらのCSSの共通設定は、各ディレクトリ内にある`style.css`ファイルに記述しています。

## 予備

`border-image`プロパティが表示されなかった場合に備え、`border: 30px solid #fff;`と記述して幅が`30px`の`#fff`（白色）の境界線をあらかじめ指定しています。

```css
h2 {
    border: 30px solid #fff;
}
```
<br>

## グラデーション

### HTML

ボーダーを表示させるためのh2要素です。

```html
<h2>グラデーション</h2>
```

### CSS

`border-image-source`プロパティには左辺から`#f0f`（紫色）、`#abf`（青みかかった灰色）、`#0ff`（水色）の順番でグラデーションさせた線を表示しています。

```css
h2 {
    border-image-source: linear-gradient(90deg, #f0f, #abf, #0ff);
}
```

`border-image-slice`プロパティには省略記述で`1 0`（上下、左右）と指定して上辺と下辺だけを表示させています。

```css
h2 {
    border-image-slice: 1 0;
}
```

`border-image-width`プロパティには幅が`15px`の線を表示するように指定しています。

```css
h2 {
    border-image-width: 15px;
}
```

### 一括指定

`border-image`プロパティは一括指定することができます。

```css
h2 {
    border-image: linear-gradient(90deg, #f0f, #abf, #0ff) 1 0 / 25px;
}
```

[ソースコードの参照ページへ](gradation/index.html "gradation/index.html")
<br>

## 画像

### HTML

ボーダーを表示させるためのh2要素です。

```html
<h2>画像</h2>
```

### CSS

`border-image-source`プロパティには以下の画像を使用しています。

<img src="image/images/circle.png/" alt="境界線の画像" width="90" />

```css
h2 {
    border-image-source: url("images/circle.png");
}
```

`border-image-slice`プロパティは上下左右ともに`30`の値で画像（円の模様）をスライスせずに全体を表示させています。

```css
h2 {
    border-image-slice: 30;
}
```

`border-image-width`プロパティには上下左右ともに幅を`20px`で表示させています。

```css
h2 {
    border-image-width: 20px;
}
```

`border-image-repeat`プロパティには省略記述で`round stretch`（上下、左右）と指定をして上辺と下辺は円の模様を繰り返し、左辺と右辺は真ん中の円の模様を１つだけ縦に引き延ばしたものを表示させています。

```css
h2 {
    border-image-repeat: round stretch;
}
```

### 一括指定

`border-image`プロパティは一括指定することができます。

```css
h2 {
    border-image: url("images/circle.png") 30 / 20px round stretch;
}
```

[ソースコードの参照ページへ](image/index.html "image/index.html")
<br>

※ 日本時間 2024/12/25 に変更を加えました。
<br><br>

[完成ページへ](https://yscyber.github.io/border/ "https://yscyber.github.io/border/")
