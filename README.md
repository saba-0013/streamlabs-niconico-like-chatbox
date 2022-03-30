# streamlabs-niconico-like-chatbox

streamlabsのchatboxを使って、配信のコメントが右から左に流れる様にする


## 使い方

### 前準備

#### streamlabsに登録

https://streamlabs.com/ ：streamlabsに登録してchatboxを使える状態にする


#### chatbox設定の変更

streamlabs/dashboard内のchatboxページで設定を変更できる

いくつかの設定は今回使用する*nicoLike.html/css* によって反映されないので、それらを確認する

- テーマ、背景色：設定は反映されないようになっているので、defaultのままにする
- バッジ：表示されないようになっているが、一応全てチェックを外しておく
- テキスト色：自由に変えて下さい（画面上に流すことを想定しているのでdefaultが使いやすいと思う）
- フォントサイズ：自由に変えて下さい（54~60pxがおすすめ）
- 後のメッセージを非表示します：Always Show Messagesにすると長文が消えないかもしれないので、10~15sで消える様にして下さい

---

### 本営

### 1. カスタムHTML/CSSの有効化

streamlabs/dashboard内のchatboxページ下部にある「カスタムHTML/CSSを有効にします」をEnabledにして、コード編集画面を表示する


### 2. コピペ

編集画面のデフォルトコードを全て削除して、*NicoLike*フォルダ内のHTML, CSS, JSファイルをそれぞれペースト、設定を保存する

※defaultに戻したいときは、*Reset Code*を押せば戻る


### 3. 完了

chatboxページ上部のサンプルコメントが右から左へ流れていたらOK

※サンプルコメントには*message-id*がない為、出現箇所がランダムにならず一定の場所からの移動を繰り返しているので、実際の挙動はテスト配信をして確かめて調整する
