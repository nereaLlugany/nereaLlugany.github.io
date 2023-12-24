function penjarImatge() {
    let filePath = document.getElementById('imatge').value;

    let newImage = document.createElement('img');
    newImage.src = filePath;

    let galleryImages = document.querySelectorAll('.imatges_galeria img');

    let imageSources = [];

    galleryImages.forEach(image => {
        imageSources.push(image.src);
    });

    imageSources.push(filePath);

    let gallery = document.querySelector('.imatges_galeria');
    gallery.innerHTML = '';

    imageSources.forEach(src => {
        let imgElement = document.createElement('img');
        imgElement.src = src;
        gallery.appendChild(imgElement);
    });
}

window.onload = function() {
    document.getElementById('penjar').addEventListener('click', penjarImatge);
}