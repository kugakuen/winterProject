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