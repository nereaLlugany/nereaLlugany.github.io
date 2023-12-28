function penjarImatge(event) {
    event.preventDefault();
    let fileInput = document.getElementById('imatge').files[0];

    if (fileInput) {
        reader = new FileReader();
        reader.onload = function (event) {
            let newImage = document.createElement('img');
            newImage.src = event.target.result;

            let galleryImages = document.querySelectorAll('.imatges_galeria img');

            let imageSources = [];

            galleryImages.forEach(image => {
                imageSources.push(image.src);
            });

            imageSources.push(event.target.result);

            let gallery = document.querySelector('.imatges_galeria');
            gallery.innerHTML = '';

            imageSources.forEach(src => {
                let imgElement = document.createElement('img');
                imgElement.src = src;
                gallery.appendChild(imgElement);
            });
        };
        reader.readAsDataURL(fileInput);
    }
}

window.onload = function () {
    document.getElementById('penjar').addEventListener('click', penjarImatge);
}
