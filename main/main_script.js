function penjarImatge() {
    let inputImage = document.getElementById("imatge").files[0];
    let galeria = galleryContainer = document.querySelector("#galeria .imatges_galeria");
    console.log(inputImage);
    alert(imagePath);

    if (inputImage) {
        console.log("hiiiiiiiiii");
        let newImage = new Image();
        newImage.src = URL.createObjectURL(inputImage);
        galleryContainer.appendChild(newImage);
    } else {
        alert('No file selected');
    }
}

window.onload = function() {
    document.getElementById("penjar").addEventListener("click", penjarImatge);
}
