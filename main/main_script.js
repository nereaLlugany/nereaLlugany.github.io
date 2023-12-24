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

    let toggleButton = document.querySelector('.toggle-button');
    let sidebar = document.querySelector('.sidebar');
    let closeButton = document.querySelector('.close-button');

    toggleButton.addEventListener('click', function() {
        if (sidebar.style.transform === 'translateX(-300px)') {
            sidebar.style.transform = 'translateX(-50px)';
            setTimeout(function() {
                closeButton.style.display = 'inline-block';
            }, 200);
          } else {
            sidebar.style.transform = 'translateX(-300px)';
            closeButton.style.display = 'none';
          }
    });

    closeButton.addEventListener('click', function() {
        sidebar.style.transform = 'translateX(-300px)';
        closeButton.style.display = 'none';
    });
    
    document.getElementById('penjar').addEventListener('click', penjarImatge);
}