function penjarImatge() {
    let input = document.getElementById('imatge');
    let galeria = document.getElementById('galeria');

    if (input.files && input.files[0]) {
        let imagePath = URL.createObjectURL(input.files[0]);
        let newImage = new Image();
        newImage.src = imagePath; 
        galeria.appendChild(newImage);
    } else {
        alert('No file selected');
    }
}

window.onload = function() {
    document.getElementById("penjar").addEventListener("click", penjarImatge);
}
