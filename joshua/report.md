## 作ったもの

+ 詐欺サイト
+ 60秒のカウントダウン
+ ダウンロードボタン

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
    <audio autoplay loop src="sound.mp3"></audio>
    <div>
        お使いのデバイスがマルウェアに感染しています。<br>
        1分以内にこのソフトをインストールしてクリーンアップしてください。<br>
        <a href="https://youtube.com/embed/M5xKbaVXT8U?rel=0">ダウンロード出来ない場合はここをクリックしてください。</a>
    </div>

    <div id="timer"></div>
    <a href="error/index.html">
        <input type="button" value="ダウンロード">
    </a>

    <script src="script.js"></script>
</body>

</html>
```

### CSS

```css
@charset "UTF-8";

@font-face {
	font-family: 'Digital';
	src: url(digital-7.ttf);
}

body{
    margin: 0;
    padding: 0;
   
    font-size: 35px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: url("img.jpeg");
    background-size: cover;
    color: white;
    font-weight: bold;
}
#timer{
    font-family: 'Digital';
    font-size: 120px;
}
input{
    font-size: 30px;
    padding: 15px;
    border-radius: 20px;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
}

a{
    color: #fff;
}

```

### Javascript
```javascript
let nowTime = 60;
let timer = document.getElementById("timer");
timer.innerHTML = nowTime;
setInterval(dec, 1000);
function dec() {
    if (nowTime == 0) {
        nowTime = 60;
    } else {
        nowTime = nowTime - 1;
    }
    timer.innerHTML = nowTime;
}
```

## 自分たちで考えたもの

+ 音を鳴らした
+ URLを貼った
+ 選んだ背景を付けた
+ カウントダウンのフォントをかえた
+ ダウンロードボタンをクリックするとブ+ ルースクリーンに飛ぶようにした

## 難しかった事

+ カウントダウン
+ 変数

## 見てほしい＆頑張ったところ

+ ダウンロードボタンをクリックするとブルースクリーンに飛ぶ事
+ ダウンロードボタンのデザイン

## 感想

+ これを見た人は結構ビビると思う
+ この三日間みんなもお疲れ様！