const gallery = document.querySelector('.gallery');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const images = [
    { src: "raissa.jpg", name: "João" },
    { src: "https://via.placeholder.com/300x200?text=Foto+2", name: "Maria" },
    { src: "https://via.placeholder.com/300x200?text=Foto+3", name: "Pedro" },
    { src: "https://via.placeholder.com/300x200?text=Foto+4", name: "Ana" },
    { src: "https://via.placeholder.com/300x200?text=Foto+5", name: "Carlos" }
];

let currentImageIndex = 0;

function displayImage() {
    gallery.innerHTML = ''; // Limpa a galeria

    const img = document.createElement('img');
    img.src = images[currentImageIndex].src;
    img.alt = `Foto ${currentImageIndex + 1}`;

    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = images[currentImageIndex].name;

    gallery.appendChild(img);
    gallery.appendChild(name);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    displayImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    displayImage();
}

// Inicializa a galeria
displayImage();

// Adiciona eventos aos botões
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);























const gallery = document.querySelector('.gallery');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const images = [
    { src: "https://via.placeholder.com/300x200?text=Foto+1", name: "João" },
    { src: "https://via.placeholder.com/300x200?text=Foto+2", name: "Maria" },
    { src: "https://via.placeholder.com/300x200?text=Foto+3", name: "Pedro" },
    { src: "https://via.placeholder.com/300x200?text=Foto+4", name: "Ana" },
    { src: "https://via.placeholder.com/300x200?text=Foto+5", name: "Carlos" }
];

let currentImageIndex = 0;

function displayImage() {
    gallery.innerHTML = ''; // Limpa a galeria

    const img = document.createElement('raissa.jpg');
    img.src = images[currentImageIndex].src;
    img.alt = `Foto ${currentImageIndex + 1}`;

    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = images[currentImageIndex].name;

    gallery.appendChild(img);
    gallery.appendChild(name);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    displayImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    displayImage();
}

// Inicializa a galeria
displayImage();

// Adiciona eventos aos botões
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);