const Game1 = document.getElementsByClassName("Game1")[0];
const Game2 = document.getElementsByClassName("Game2")[0];
const Game3 = document.getElementsByClassName("Game3")[0];

function clickGame1() {
    location.href = "./BreakBlock.html";
}

function clickGame2() {
    location.href = "./rspGame.html";
}



Game1.addEventListener("click", clickGame1);
Game2.addEventListener("click", clickGame2);
Game3.addEventListener("click", clickGame3);