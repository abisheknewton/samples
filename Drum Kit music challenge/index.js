
var len = document.querySelectorAll(".drum").length;

for(var i=0;i<len;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttonInnerHtml = this.innerHTML;
        sound(buttonInnerHtml);
    }
    )
}
$("h1").css("color","red");
console.log($("button").innerHTML);
function sound(key){
    switch (key) {
        case "w":
            var snd1 = new Audio("sounds/tom-2.mp3");
            snd1.play();
            break;

        case "a":
            var snd1 = new Audio("sounds/tom-2.mp3");
            snd1.play();
            break;

        case "s":
            var snd2 = new Audio("sounds/tom-3.mp3");
            snd2.play();
            break;

        case "d":
            var snd3 = new Audio("sounds/tom-4.mp3");
            snd3.play();
            break;

        case "j":
            var snd1 = new Audio("sounds/tom-2.mp3");
            snd1.play();
            break;

        case "k":
            var snd1 = new Audio("sounds/tom-2.mp3");
            snd1.play();
            break;

        case "l":
            var snd1 = new Audio("sounds/tom-2.mp3");
            snd1.play();
            break;  
        
        default:console.log(key);
            break;
    }
}
document.addEventListener("keypress",function(event){
   var kname = event.key;
   sound(kname);
});
