## やったこと
プログラムで、偽感染画面とコンピューターウイルスもどきを作った。
偽警告画面にはｄｌリンク、パスワード認証画面、あと時間制限機能を作った。
パスワード認証は、正解のやつ(和歌山県のソビエト島の写真が表示される。パスワード；トロッキー(ピッケルで暗殺された人)と間違えた時で違う画面(ロシア帝国に退化(？)する)に行くようにした。
(BGMがソ連国歌なのだが大丈夫だろうか？)
また、時間切れになると崩壊する。(制限時間がソビエト建国から崩壊までの年という謎のこだわり)
## プログラム

### HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <audio autoplay loop src="Sov_Old.mp3"></audio>

    <div id="pagecontent">
        <div>
            お使いのソビエトが西側のウイルスに感染しています。<br>
            １分以内にこのスターリンをインストールしてクリーンアップしてください。<br>
            <a href="#" onclick="myinput()">
                ダウンロードできない場合はこ↑こ↓を押して下さい。
            </a>

        </div>
        <div>
            <a href="mal.exe" download="GFG">
                <button type="button">こ↑こ↓を押して人民の敵を粛清</button>
            </a>
        </div>
        <div id="count"></div>
    </div>
    <script src="script.js"></script>
</body>

</html>
```

### CSS

```css
@charset "UTF-8";
@font-face {
    font-family:NikkyouSans-mLKax;
    src: url(NikkyouSans-mLKax.ttf);
}
body{
    margin: 0;
    padding: 0;
    font-size: 45px;
    font-family:NikkyouSans-mLKax;
    width: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-image: url("iiin.png");
    background-size: 100%;
    color: white;
} 
```

### Javascript

```javascript
let nowtaime = 69;

let count = document.getElementById("count");
count.innerHTML = nowtaime;

let pagecontent = document.getElementById("pagecontent");

setInterval(dec, 1000);
function dec() {
  if (nowtaime == 0) {
    pagecontent.innerHTML = "<h1>お使いのソビエトは崩壊しました...</h1>";
    // changePic(index.png);
  } else {
    nowtaime = nowtaime - 1;
  }
  console.log(nowtaime);
  count.innerHTML = nowtaime;
}
function changePic() {
  document.body.style.backgroundImage = "url('index.png')";
}
function myinput() {
  let user = prompt("トロッキー");
  if (user == "トロッキー") {
    document.body.style.backgroundImage = "url('seikou.jpg')";
    pagecontent.innerHTML = "<h1>永遠のソビエト島</h1>";
  } else {
    document.body.style.backgroundImage = "url('rosia_.jpg')";
    pagecontent.innerHTML = "<h1>ツアーリよ永遠に</h1>";
  }
}
```

## 感想・頑張ったことなど
はじめてのこうゆうの(語彙力)をやったので
とても新鮮だった。
英語をよむのが苦戦した。
