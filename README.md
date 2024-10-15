## 境界線

このリポジトリではJavaScriptでDOM操作を行っています。１つ目のtextarea要素にはHTMLのコードが、２つ目のtextarea要素にはCSSのコードがすでに入力されており、最上部にあるプレビュー画面（section要素）にその結果が出力されています。コードは自分でも書き換えることができ、元に戻す際には一番下にある【**リセット**】ボタンをクリックすると最初の画面に戻ります。

iframe要素の内容は上から順に以下の通りとなります。

### 共通設定
- プレビュー画面（section要素）内の背景を`黒色`に設定しています。
- テキスト（h2要素）には要素内の余白を`0.5em`空けて画面中央に配置し、色は`白色`に設定しています。

```css
section.preview {
    background-color: #000;
}

h2 {
    padding: 0.5em;
    text-align: center;
    color: #fff;
}
```

### グラデーション

`border-image-source`プロパティ（繰り返し線形グラデーション）/<br>
`border-image-slice`プロパティ（上下左右）/<br>
`border-image-width`プロパティ（上下 左右）

```css
h2 {
    border: 30px solid #fff;
    border-image: repeating-linear-gradient(-45deg, #eee, #ff9 7px, #777 35px)
                  30 /
                  30px 15px;
}
```

### 画像

以下の画像を使っています。

<img src="image/images/circle.png/" alt="境界線の画像" width="90" />

`border-image-source`プロパティ（画像のURL）/<br>
`border-image-slice`プロパティ（上下左右）/<br>
`border-image-width`プロパティ（上下左右）`border-image-repeat`プロパティ（繰り返して並べる）

```css
h2 {
    border: 30px solid #fff;
    border-image: url("images/circle.png") 
                  30 /
                  30px round;
}
```
<br>

※ 日本時間 2024/10/15 にリファクタリングしました。<br><br>

[完成ページへ](https://yscyber.github.io/border/ "https://yscyber.github.io/border/")
