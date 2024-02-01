var score=0;

function scoreincrease(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}

var hitran=0;
function hitvalue(){

    hitran= Math.floor(Math.random()*10)
    document.querySelector("#hiter").textContent =hitran; 
}



function makebubble(){


    var clutter = "";

for( var i=1; i<=189; i++){
    
    var ran = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${ran}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;

}


var timer = 30;
function runtimer(){
    
   var timerint = setInterval(function(){
        if(timer>0){
            timer --;
            document.querySelector("#timerval").textContent= timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML= `<h1>Game Over</h1>`

        }
    },1000);

           //else islye lagye hai q ki second chala raha tha but print nhi dekha raha or storage bhi le raha tha isleye clearInterval laga deye else me

}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickdanum = (Number(dets.target.textContent));

    if(clickdanum === hitran){
     scoreincrease();
     hitvalue();
     makebubble()
     
    }
});



hitvalue();
runtimer();
makebubble();