let nowTime = 60;
let time = document.getElementById("time");
time.innerHTML = nowTime;
setInterval(dec,1000);
function dec(){
if(nowTime==1){
nowTime=60;
}else{
nowTime=nowTime-1;
}
time.innerHTML = nowTime;
}