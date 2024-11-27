var randomDiceNumber1 = Math.floor(Math.random()*6)+1;
var imageNumber1 = "images/dice"+randomDiceNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", imageNumber1);

var randomDiceNumber2 = Math.floor(Math.random()*6)+1;
var imageNumber2 = "images/dice"+randomDiceNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", imageNumber2);

if(randomDiceNumber1>randomDiceNumber2){
    document.querySelector("h1").innerHTML="Player 1 Won!";
} else if(randomDiceNumber1<randomDiceNumber2){
    document.querySelector("h1").innerHTML="Player 2 Won!";
}else{
    document.querySelector("h1").innerHTML="Game Drawn!";
}