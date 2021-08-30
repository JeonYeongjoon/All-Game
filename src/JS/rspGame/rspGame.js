const images = ["0.jpg","1.jpg","2.jpg"]
const choseImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.getElementsByClassName("AI")[0];
const exit = document.getElementsByClassName("exit")[0];

bgImage.style.backgroundImage=`url('./img/${choseImage}')`;

// 나가기 버튼
function onClickexit() {
    location.href = "file:///C:/code/js/All-Game/src/html/index.html";
}

exit.addEventListener("click", onClickexit);