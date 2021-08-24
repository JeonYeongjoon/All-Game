const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 캔버스 크기
canvas.width = 350;
canvas.height = 550;

// 기본설정
let circleX = getRendom(100, 700);
let circleY = getRendom(250, 500);
let radius = 10;
let speed = 0.005;
let speedX = 5;
let speedY = 5;
let playerX = 175;
let playerY = 525;
let totalBricks;

let game = false;
let death = false;

const paddleHeight = 10;
const paddleWidth = 70;

let paddleX = (canvas.width-paddleWidth)/2;

// 벽돌 선언
let bricks = [];
let brickX = [];
let brickY = [];
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 5; j++) {
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
    ctx.beginPath(); // 공 그리기
    ctx.arc(circleX, circleY, radius, 0, Math.PI*2); // x좌표, y좌표, 원 반지름, 그리는 방향
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath(); 

    if (game && !death) { 
        if (circleX - radius < 0 || circleX + radius > canvas.width) { 
            speedX *= -1;
        }
        if (circleY - radius < 0) {
            speedY *= -1;
        } // 벽에 튕겼을 때
        if (circleY + radius > playerY && circleX + radius > playerX && circleX - radius < playerX + 125){
            speedY *= -1;
        }
        // 벽돌에 튕겼을 때
        for (let i = 0; i < 2; i++) { 
            for (let j = 0; j < 5; j++) {
                if (circleY - radius < j * 50 + 50 && circleY + radius > j * 50 + 10 && circleX + radius > i * 185 + 10 && circleX - radius < i * 185 + 185) {
                    if (circleY - 10 < j * 50 + 50 && circleY - 10 > j * 50 + 10) {
                        if (bricks[i][j]) {
                            speedX *= -1;
                            circleX += speedX;
                        }
                    }                   
                    if (bricks[i][j]) {
                        speedY *= -1;
                        circleY += speedY;
                    } 
                    bricks[i][j] = false;
                }
            }
        } // 공이 벽돌에 튕겼을 때
        if (circleY + radius > canvas.height) {
            if (!death) { // 다시 시작
                alert("죽었습니다");
                location.reload;
            } // 죽었을 때
            death = true;
            game = flase;
            circleY = canvas.height - radius;
        } 
    }
    if (!death) {
        circleY += speedY;
        circleX += speedX;
        if (speedX > 0) {
            speedX += speed;
        }
        else {
            speedX -= speed;
        }
        if (speedY > 0) {
            speed += speed;
        }
        else {
            speedY -= speed;
        }
    }
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
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 5; j++) {
            brickX[i] = i * 185;
            brickY[j] = j * 50 + 30;
            if (!bricks[i][j]) { // 점수
                totalBricks;
                if (totalBricks == 6) { // 블럭을 다 맞췄을때
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
                ctx.fillRect(brickX[i], brickY[j], 160, 40);
            }
        }
    }
}

// 남은 벽돌 갯수
function drawOverBlock() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("남은 벽돌 갯수: " + totalBricks, 8, 20); // text, x좌표, y좌표
}

// 게임 시작
/*
function start() {
    if (!game && !death) {
        game = true;
        switch (getRendom(1, 2)) { // 처음 공 방향 랜덤
            case 1:
                speedX *= 1;
                speedY *= 1;
                break;
            case 2:
                speedX *= -1;
                speedY *= 1;
                break;
        }
    }
}
*/

setInterval(function() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    circle();
    paddle();
    drawOverBlock();
    brick();
}, 20)
    
function move(event) {
    paddleX = event.offsetX;
}

canvas.addEventListener('mousemove', move);
canvas.addEventListener('click', start);