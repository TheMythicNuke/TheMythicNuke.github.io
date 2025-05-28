
const images = [
    `by.jpg`,
    `stad.jpg`
];

let currentIndex = 0

function changeImage() {
    const slideshow = document.getElementById(`slideshow`);
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.src = images[currentIndex];
}

setInterval(changeImage, 8000)