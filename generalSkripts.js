
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

// här liger produkt skaparen

function ProduktCreate() {
    const contentDiv = document.getElementById(`conten`);

    const textElement = document.createElement(`p`);
    textElement.textContent = `mkalkfjllasmkldsnnlkasnajksa`;

    const imgElement = document.createElement(`img`);
    imgElement.src = `TrasahZon-Logo.jpg`;
    imgElement.alt = `djasdsodjopasfjafoj`

    contentDiv.appendChild(imgElement);
    contentDiv.appendChild(textElement);

}

//