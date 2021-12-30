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