function func()
{
var n = Math.floor((Math.random()*6)+1);
var nm = "dice"+n+".png"; 
document.querySelector(".lk").setAttribute("src",nm);



var k = Math.floor((Math.random()*6)+1);

var kl = "dice"+k+".png";
document.querySelector(".hj").setAttribute("src",kl);

if(n===k){
    document.querySelector("h1").innerHTML = "Tie";
}
if(n > k){
    document.querySelector("h1").innerHTML = "player 1 wins";
}
if(n<k){
    document.querySelector("h1").innerHTML = "player 2 wins";
}
}


