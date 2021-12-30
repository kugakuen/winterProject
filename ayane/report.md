## やったこと
詐欺サイトを、作った。

作った物は、ネットから拾って来た危なそうな背景や、効果音。URLを押すと、YouTubeに飛べるようにしたりした。

## プログラム

### HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
</head>

<body>
  <audio autoplay loop src="sound.mp3"></audio>
  <div>
      お使いのデバイスがマルウェアに感染しています。<br>
      1分以内にこのソフトをインストールして、クリーンアップしてください。<br>
      <a href="https://www.youtube.com/embed/hc08LP69lVM?rel=0">ダウンロードできない場合はここをクリック</a>
  </div>
  <div id="time"></div>
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
    font-size: 40px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: url("img.bmp");
    background-position: center center;
    background-size: cover;
    color: #000;
    font-weight: bold;
}

#time{
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
    background-color: #000;
    color: #fff;
}

a{
    margin: 40px 0;
    color: #000;
}
```

### Javascript

```javascript
let nowTime = 60;
let time = document.getElementById("time");
time.innerHTML = nowTime;
setInterval(dec, 1000);
function dec(){
if(nowTime == 1){
    nowTime = 60;
}else{
    nowTime = nowTime - 1;
}
    time.innerHTML = nowTime;
}
```

## 感想・頑張ったことなど
あんまり、PCに、触れたこと等あんまりなかったので、入力や、読めない所が多かった気がする。

是非、URLを、クリックしてみてください！ダウンロードボタン押さなくても良いので、是非URLだけはクリックしてってください！！
