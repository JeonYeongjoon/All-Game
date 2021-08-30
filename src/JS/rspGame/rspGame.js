const images = ["0.jpg","1.jpg","2.jpg"]
const choseImage = images[Math.floor(Math.random() * images.length)];
const board = document.getElementsByClassName("boardAi")[0];
const randombtn = document.getElementsByClassName("randombtn")[0];
const exit = document.getElementsByClassName("exit")[0];

function rspRandom(event) {
    event.preventDefault();
    console.log("1");
    board.innerText = "가위 바위 보!";
}

// 나가기 버튼
function onClickexit() {
    location.href = "file:///C:/code/js/All-Game/src/html/index.html";
}

randombtn.addEventListener("click", rspRandom);
exit.addEventListener("click", onClickexit);