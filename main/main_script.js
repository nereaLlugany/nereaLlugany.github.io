function penjarImatge() {
    let llistaLinks = document.getElementsByTagName("img");
    let galeria = document.getElementById("imgGaleria");
    let input = document.getElementById("imatge");

    if (input.files.length > 0) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function () {
            // Create a new image element
            const newImage = document.createElement("img");

            // Set the src attribute of the image to the data URL
            newImage.src = reader.result;

            // Append the new image to the gallery
            galeria.appendChild(newImage);
        };
    }

}

window.onload = function() {
   document.getElementById("penjar").addEventListener("click", () => penjarImatge);
}
