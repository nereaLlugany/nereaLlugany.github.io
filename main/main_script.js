function penjarImatge() {
    let input = document.getElementById('imatge');
    let galeria = document.getElementById('galeria');
    let imagePath = input.value; 
    alert(imagePath);

    if (imagePath) {
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
