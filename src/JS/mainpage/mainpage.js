const Game1 = document.getElementsByClassName("Game1")[0];
const Game2 = document.getElementsByClassName("Game2")[0];
const Game3 = document.getElementsByClassName("Game3")[0];
const Game4 = document.getElementsByClassName("Game4")[0];
const Game5 = document.getElementsByClassName("Game5")[0];

function clickGame1() {
    location.href = "./BreakBlock.html";
}

function clickGame2() {
    location.href = "./DinoJump.html";
}

function clickGame3() {
    location.href = "";
}

function clickGame4() {
    location.href = "";
}

function clickGame5() {
    location.href = "";
}


Game1.addEventListener("click", clickGame1);
Game2.addEventListener("click", clickGame2);
Game3.addEventListener("click", clickGame3);
Game4.addEventListener("click", clickGame4);
Game5.addEventListener("click", clickGame5);