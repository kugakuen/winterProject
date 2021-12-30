## 作ったもの
+ 詐欺サイトを作った
+ 音が出て60秒のカウントダウンをできるようにした

## プログラム
### HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=au, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
</head>

<body>
  <audio autoplay loop src="sound.mp3"></audio>
  <div>
    お使いのデバイスがマルウェアに感染しています。<br>
    1分以内にこのソフトをインストールしてクリーンアップしてください。<br>
    <a href="https://www.youtube.com/embed/M5xKbaVXT8U?rel=0">ダウンロード出来ない場合はここをクリック</a>
  </div>
  <div id="mj"></div>
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
  padding: 0;
  margin: 0;
  font-size: 35px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url("img.jpg");
  background-size: cover;
  color: white;
  font-weight: bold;
}
#mj{
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
let mj = document.getElementById("mj");
mj.innerHTML = nowTime;
setInterval(dec, 1000);
function dec() {
  if (nowTime == 0) {
    nowTime = 60;
  } else {
    nowTime = nowTime - 1;
  }
  mj.innerHTML = nowTime;
}
```

## 自分たちで考えたもの
+ インストールを押すと怪しいページにとべるようにした
+ 背景を選んではった
+ youtubeに飛べるようにした
+ カウントダウンのフォントをかえた

## 難しかったこと
+ 文字を打つのがむずかしかった
+ サイズの調整が難しかった

## 見てほしいところ・がんばったこと
+ youtubeの変な曲に飛ばせるようようにしたから見てほしい