function penjarImatge() {
    const input = document.getElementById('imatge');
    const imagePath = input.value; // Get the file path

    if (imagePath) {
        const newImage = new Image();
        newImage.src = imagePath; 

        // Add the new image to the gallery
        const galeria = document.getElementById('galeria');
        galeria.appendChild(newImage);
    } else {
        alert('No file selected');
    }
}

window.onload = function() {
   document.getElementById("penjar").addEventListener("click", () => penjarImatge);
}
