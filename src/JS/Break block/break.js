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

let game = false;
let death = false;

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

// 랜덤 함수
function getRendom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

// 벽돌
function brick() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 4; j++) {
            brickX[i] = i * 185 + 10;
            brickY[j] = j * 50 + 10;
            if (!bricks[i][j]) { // 점수
                totalBricks++;
                if (num == 32) { // 블럭을 다 맞췄을때
                    let input = confirm("축하드립니다!!!\n다시 시작하겠습니까?");
                    if (input) {
                        location.reload();
                    }
                    death = true;
                    game = false;
                }
            } else {
                num = 0;
            }
            if (bricks[i][j]) { // 줄에 따른 벽돌 색
                switch (j) { 
                    case 0:
                        ctx.fillStyle = "gray";
                        break;
                    case 1:
                        ctx.fillStyle = "black";
                        break;
                    case 2:
                        ctx.fillStyle = "rgb(0,0,128)";
                        break;
                }
                ctx.fillRect(brickX[i], brickY[j], 175, 40);
            }
        }
    }
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

setInterval(function() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    circle();
    paddle();
    drawOverBlock();
    drawLive();
    brick();
}, 20)
    
function move(event) {
    paddleX = event.offsetX;
}

canvas.addEventListener('mousemove', move);