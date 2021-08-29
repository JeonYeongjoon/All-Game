const exit = document.getElementsByClassName("exit")[0];
const bord = document.getElementsByClassName("bord")[0];
const clickrandom = document.getElementsByClassName("printrandom")[0];

// random함수 최소,최대 값 정해주기
const min = 0;
const max = 100;
let num = getRandom();

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onClickexit() {
    location.href = "file:///C:/code/js/All-Game/src/html/index.html";
}

function print() {
    console.log(num);
    bord.innerText = "숫자가 출력되었습니다.";
}

clickrandom.addEventListener('click', print);
exit.addEventListener('click', onClickexit);