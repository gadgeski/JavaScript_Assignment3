目的：今後 TypeScript や React にスケールする為の準備段階
使用技術： JavaScript/CSS/HTML

これは、ユーザーが名前を入力し、その名前を画面に表示するためのシンプルなウェブページです。HTML がページの構造を作り、CSS が見た目を整え、JavaScript が名前の入力と表示の機能を追加しています。

<h1>HTML（ページの構造）</h1>
HTML は、ウェブページの骨組みを定義します。このコードは以下の要素で構成されています。

<h3>!DOCTYPE html</h3>: この文書がHTML5であることを宣言しています。

<h3>html lang="ja"</h3>>: ページの言語が日本語であることを示します。

<h3>head</h3>>: ページのメタ情報（目に見えない情報）が含まれます。

<h3>meta charset="UTF-8"</h3>: 文字エンコーディングをUTF-8に設定し、文字化けを防ぎます。

<h3>meta name="viewport" content="width=device-width, initial-scale=1.0"</h3>: 異なるデバイスでの表示を最適化するための設定です。

<h3>title</h3>: ブラウザのタブに表示されるページのタイトルです。

<h3>link rel="stylesheet" href="style.css"</h3>: style.cssというファイルからデザイン（CSS）を読み込みます。

<h3>body</h3>>: ページに表示されるすべてのコンテンツが含まれます。

<h3>div class="box"</h3>: 「入力された内容を表示」というテキストを持つボックスです。後述のCSSで特別な見た目が与えられます。

<h3>br<h3>: 改行を行いコンテンツを読みやすくするタグです。

<h3>div class="input-form"</h3>: 入力フォームを囲むためのコンテナです。

<h3>label for="nameInput"</h3>: nameInput という ID を持つ入力欄と関連付けられたラベルです。ユーザーに名前の入力を促します。

<h3>input type="text" id="nameInput" placeholder="あなたの名前"</h3>: テキスト入力欄です。ユーザーが名前を入力する場所で、nameInput という ID を持っています。「あなたの名前」というプレースホルダーテキストが表示されます。

<h3>button id="submitButton"</h3>: クリックできるボタンです。submitButton という ID を持っています。

<h3>p id="displayArea"</h3>: 入力された名前が表示される段落です。最初は「ここに表示されます。」というテキストが表示され、displayAreaというIDを持っています。

<h3>script src="script.js"</h3>: script.jsというファイルからJavaScriptコードを読み込みます。これにより、ページに動的な機能が追加されます。

<h1>CSS（ページの見た目）</h1>
CSSは、HTML要素の見た目を定義します。このコードは以下のスタイルを設定しています。

<h3>body: </h3>
ページ全体のスタイルです。

- 背景画像を配置し、画面全体に広がるように設定しています。
- フォントは Arial などの一般的なフォントを使用し、テキストは中央揃えにしています。
- 上部に 50 ピクセルの余白を設けています。

<h3>.input-form: </h3>
入力フォームのコンテナのスタイルです。
  - 下部に 30 ピクセルの余白があり、細い枠線、パディング（内側の余白）が設定されています。
  - インラインブロック要素として表示され、軽い影と角の丸みがあります。

<h3>label: </h3>
ラベル（「名前を入力してください:」）のスタイルです。

- ブロック要素として表示され、下部に 10 ピクセルの余白があります。
- 太字で、色は濃い灰色です。

<h3>input[type="text"]: </h3>
テキスト入力欄のスタイルです。

- パディング（内側の余白）、フォントサイズ、細い枠線、角の丸みが設定されています。
- 幅は 200 ピクセルで、右側に 10 ピクセルの余白があります。

<h3>button: </h3>
ボタン（「表示」）のスタイルです。

- パディング（内側の余白）、フォントサイズが設定されています。
- カーソルを合わせるとポインターになり、背景色は黄色、文字色は濃い灰色です。
- 枠線はなく、角が丸くなっています。

<h3>button:hover: </h3>
ボタンにマウスカーソルが重なったときのスタイルです。
  - 背景色が少し暗い黄色に変わります。

<h3>#displayArea: </h3>
名前が表示されるエリアのスタイルです。
  - フォントサイズは 20 ピクセル、文字色は青色です。
  - 太字で、上部に 20 ピクセルの余白があります。

<h3>.box: </h3>
「入力された内容を表示」というテキストを持つボックスのスタイルです。
  - 幅 720 ピクセル、高さ 480 ピクセルで、ページの中央に配置されます。
  - テキストは中央に配置され、文字色は薄い紫色で、フォントサイズは 32 ピクセル、太字です。
  - このボックスには、ホバー（マウスが重なる）したときにアニメーションする特別な枠線が擬似要素（::before, ::after）を使って追加されています。
  - ホバーすると、背景が半透明になり、ぼかし効果が適用され、角が丸くなります。

<h1>JavaScript（ページの機能）</h1>
JavaScriptは、ユーザーの操作に応じてページを動的に変更する機能を提供します。

- const nameInput = document.getElementById("nameInput");: nameInput という ID を持つ HTML 要素（テキスト入力欄）を取得し、nameInput という定数に格納します。

- const submitButton = document.getElementById("submitButton");: submitButton という ID を持つ HTML 要素（ボタン）を取得し、submitButton という定数に格納します。

- const displayArea = document.getElementById("displayArea");: displayArea という ID を持つ HTML 要素（名前が表示される段落）を取得し、displayArea という定数に格納します。

- submitButton.addEventListener("click", () => { ... });: submitButton（ボタン）がクリックされたときに実行される処理を定義しています。

  - const enteredName = nameInput.value;: nameInput（テキスト入力欄）に入力された値を取得し、enteredName という定数に格納します。

  - if (enteredName) { ... } else { ... }: enteredName（入力された名前）が存在するかどうかを確認します。

    - if (enteredName): もし enteredName に何か値が入力されていれば（空でなければ）、以下の処理が実行されます。

      - displayArea.textContent = こんにちは、${enteredName}さん！;: displayArea（名前が表示される段落）のテキスト内容を「こんにちは、[入力された名前]さん！」に更新します。

    - else: もし enteredName が空であれば、以下の処理が実行されます。

      - displayArea.textContent = "何か入力してください。";: displayArea のテキスト内容を「何か入力してください。」に更新します。

<h1>【まとめ】</h1>
このウェブページは、HTMLで基本的な構造を作り、CSSで魅力的な見た目を与え、JavaScriptでユーザーが入力した名前を表示するというシンプルなインタラクティブ機能を提供しています。
