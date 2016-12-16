var y=10;var v=0;var g=1.622;var a=g;var dt=0.016683;var timer;var timerFuel;var fuel=100;var fuelMin=0;var alturaMax=70;window.onload=function(){document.getElementById("showm").onclick=function(){document.getElementsByClassName("c")[0].style.display="block";stop()}
document.getElementById("hidem").onclick=function(){document.getElementsByClassName("c")[0].style.display="none";start()}
document.onclick=function(){if(a==g){motorOn()}else{motorOff()}}
document.onkeydown=motorOn;document.onkeyup=motorOff;start()}
function start(){timer=setInterval(function(){moverNave()},dt*1000)}
function stop(){clearInterval(timer)}
function moverNave(){v+=a*dt*3;document.getElementById("velocidad").innerHTML=v.toFixed(2);y+=v*dt;document.getElementById("altura").innerHTML=(alturaMax-y).toFixed(2);document.getElementById("fuel").innerHTML=fuel;if(y<=alturaMax){document.getElementById("nave").style.top=y+"%"}else{if(fuel<0||v>=5||y<=0){document.getElementById('rocketoff').src="img/explosion2.gif";setTimeout(function(){gameOver()},2000)}else{alert("HAS ATERRIZADO A UNA VELOCIDAD DE: "+v.toFixed(2)+" m/s");document.getElementById('win').style.display="block"}
stop()}}
function restarFuel(){if(fuel>fuelMin){fuel-=1}}
function motorOn(){a=-g;if(timerFuel==null)
timerFuel=setInterval(function(){restarFuel()},100);if(y<=alturaMax)
document.getElementById('rocketoff').src="img/navemodific2.png"}
function motorOff(){a=g;clearInterval(timerFuel);timerFuel=null;if(y<=alturaMax)
document.getElementById('rocketoff').src="img/navemodific.png"}
function actualizarAltura(){fuel-=1;document.getElementById("fuel").innerHTML=fuel}
function gameOver(){if(v<5){document.getElementById('win').src="img/final.jpg"}}
