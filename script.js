var scr =0;
var num = 0;
var timer = 60;


function addscore(){
    scr++;
    document.querySelector("#score").textContent = scr;
}

function makeBubble(){
    var bubble ="";

for(var i=1; i<=102;i++){
     num = Math.floor(Math.random()*10)
    bubble += `<div class="bubble">${num}</div>`;
}
document.querySelector("#pbot").innerHTML = bubble;
}


function runtimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbot").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}

function hit(){
    num = Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent = num; 
}


document.querySelector("#pbot").addEventListener("click",function (det){
    
    var clickednum = Number(det.target.textContent);
    if(clickednum === num){
        addscore();
        makeBubble();
        hit();
    }
    // console.log(clickednum);
});


hit();
runtimer();
makeBubble();