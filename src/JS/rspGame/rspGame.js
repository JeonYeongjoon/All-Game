const images = ["0.jpg","1.jpg","2.jpg"]
const choseImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.getElementsByClassName("AI")[0];

bgImage.style.backgroundImage=`url('./img/${choseImage}')`;

