const rsp = ["가위","바위","보"]
const chosersp = rsp[Math.floor(Math.random() * rsp.length)];
const boardAi = document.getElementsByClassName("boardAi")[0];
const boardUser = document.getElementsByClassName("boardUser")[0];
const randombtn = document.getElementsByClassName("randombtn")[0];

const exit = document.getElementsByClassName("exit")[0];

const rockbtn = document.getElementById("rock");
const scissorbtn = document.getElementById("scissor"); 
const paperbtn = document.getElementById("paper");

function rock() {
    boardUser.innerText = "바위";
}

function scissor() {
    boardUser.innerText = "가위";
}

function paper() {
    boardUser.innerText = "보";
}

function rspRandom(event) {
    event.preventDefault();
    console.log("1");
    boardAi.innerText = "가위 바위 보!";
}

// 나가기 버튼
function onClickexit() {
    location.href = "file:///C:/code/js/All-Game/src/html/index.html";
}

randombtn.addEventListener("click", rspRandom);
exit.addEventListener("click", onClickexit);
rockbtn.addEventListener("click", rock);
scissorbtn.addEventListener("click", scissor);
paperbtn.addEventListener("click", paper);