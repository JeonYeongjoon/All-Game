const rsp = ["가위", "바위", "보"];
const boardAi = document.getElementsByClassName("boardAi")[0];
const boardUser = document.getElementsByClassName("boardUser")[0];
const randombtn = document.getElementsByClassName("randombtn")[0];
const resetbtn = document.getElementsByClassName("reset")[0];

const exit = document.getElementsByClassName("exit")[0];

const rockbtn = document.getElementById("rock");
const scissorbtn = document.getElementById("scissor");
const paperbtn = document.getElementById("paper");

let printrsp = randomValue(rsp);

function randomValue(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function rock() {
  console.log(printrsp);
  boardUser.innerText = "바위";

  if (printrsp == "가위") {
    boardAi.innerText = "승리";
  } else if (printrsp == "바위") {
    boardAi.innerText = "비김";
  } else boardAi.innerText = "패배";
}

function scissor() {
  console.log(printrsp);
  boardUser.innerText = "가위";

  if (printrsp == "가위") {
    boardAi.innerText = "비김";
  } else if (printrsp == "바위") {
    boardAi.innerText = "패배";
  } else boardAi.innerText = "승리";
}

function paper() {
  console.log(printrsp);
  boardUser.innerText = "보";

  if (printrsp == "가위") {
    boardAi.innerText = "패배";
  } else if (printrsp == "바위") {
    boardAi.innerText = "승리";
  } else boardAi.innerText = "비김";
}

function rspRandom() {
  boardAi.innerText = "가위 바위 보!";
  console.log(printrsp);
}

function reset() {
  location.reload();
}

// 나가기 버튼
function onClickexit() {
  location.href = "file:///C:/code/GameWorld/src/html/index.html";
}

randombtn.addEventListener("click", rspRandom);
exit.addEventListener("click", onClickexit);
rockbtn.addEventListener("click", rock);
scissorbtn.addEventListener("click", scissor);
paperbtn.addEventListener("click", paper);
resetbtn.addEventListener("click", reset);
