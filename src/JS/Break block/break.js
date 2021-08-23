const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 캔버스 크기
canvas.width = 350;
canvas.height = 550;

// 기본설정
let circleX = getRendom(100, 700);
let circleY = getRendom(250, 500);
let radius = 10;
let brickColumnCount;
let totalBricks;
let lives;
const paddleHeight = 10;
const paddleWidth = 70;
let paddleX = (canvas.width-paddleWidth)/2;

// 벽돌 선언
let bricks = [];
let brickX = [];
let brickY = [];
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 4; j++) {
        bricks[i] = [];
    }
    for (let j = 0; j < 4; j++) {
        bricks[i][j] = true;
    }
}

// 공
function circle() {
    ctx.beginPath();
    ctx.arc(circleX, circleY, radius, 0, Math.PI*2); // x좌표, y좌표, 원 반지름, 그리는 방향
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath(); // 공 그리기
}

// 공 움직임
function ballDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // from x, from y, to x, to y
}


// 패들
function paddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleWidth); // from x, from y, to x, to y 좌표
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// 남은 벽돌 갯수
function drawOverBlock() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("남은 갯수: " + totalBricks, 8, 20); // text, x좌표, y좌표
}

// 남은 생명
function drawLive() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

// 랜덤 함수
function getRendom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(function() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    circle();
    paddle();
    drawBricks();
    drawOverBlock();
    drawLive();
}, 20)
    
function move(event) {
    paddleX = event.offsetX;
    console.log(paddleX);
}

canvas.addEventListener('mousemove', move);