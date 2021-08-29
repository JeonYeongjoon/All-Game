const exit = document.getElementsByClassName("exit")[0];
const board = document.getElementsByClassName("board")[0];
const clickrandom = document.getElementsByClassName("printrandom")[0];

// random함수 최소,최대 값 정해주기
const min = 0;
const max = 100;
const randomNum = Math.random() * 100;
const randomNumFloor = Math.floor(randomNum);

function onClickexit() {
    location.href = "file:///C:/code/js/All-Game/src/html/index.html";
}

function print() {
    console.log(randomNumFloor);
    board.innerText = randomNumFloor;
}

clickrandom.addEventListener('click', print);
exit.addEventListener('click', onClickexit);