const album = document.querySelector('.album');

// Array com os nomes das imagens (substitua pelos seus nomes)
const fotos = [
    'foto1.jpg',
    'foto2.jpg',
    'foto3.jpg',
    // Adicione mais nomes de imagens aqui
];

// Cria as fotos no álbum
fotos.forEach(foto => {
    const fotoElement = document.createElement('div');
    fotoElement.classList.add('foto');

    const imgElement = document.createElement('img');
    imgElement.src = `imagens/${foto}`;
    imgElement.alt = `Foto ${foto}`;

    const piscaPiscaElement = document.createElement('div');
    piscaPiscaElement.classList.add('pisca-pisca');

    fotoElement.appendChild(imgElement);
    fotoElement.appendChild(piscaPiscaElement);
    album.appendChild(fotoElement);
});