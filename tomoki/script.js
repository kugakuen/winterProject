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