function rollDice() {
var randomnumber1 = Math.floor(Math.random()* 6) +1;
var randomdiceimage = "images/dice" + randomnumber1 + ".png" ;
var img1= document.querySelectorAll("img")[0].setAttribute("src" , randomdiceimage);
 
var randomnumber2 = Math.floor(Math.random()* 6) +1;
var randomimagesource2 = "images/dice" + randomnumber2 + ".png" ;
document.querySelectorAll("img")[1].setAttribute("src" ,randomimagesource2 );

if (randomnumber1 > randomnumber2 ){
    document.querySelector("h1").innerHTML = " Victory: Player 1";

}
else if (randomnumber1< randomnumber2) {
    document.querySelector("h1").innerHTML = " Victory: Player 2";
     
}
else if (randomnumber1  == randomnumber2 ){
    document.querySelector("h1").innerHTML = "draw";
}
}
