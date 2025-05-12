
const images = [
    `sowpis2.jpg`,
    `sowpis4.jpg`,
    `sowpis3.jpg`,
    `sowpis1S.jpg`
];

let currentIndex = 0

function changeImage() {
    const slideshow = document.getElementById(`slideshow`);
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.src = images[currentIndex];
}

setInterval(changeImage, 3000)