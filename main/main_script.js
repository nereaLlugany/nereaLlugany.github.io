function penjarImatge() {
    let imgInput = document.getElementById("imatge");
    if (imgInput.length > 0){
        let fitxer = input.files[0];
        let formData = new FormData();
        reader.onload = function (e) {
            let newImg = document.createElement('img');
            newImg.src = e.target.result;
            let galeria = document.querySelector('.imatges_galeria');
            reader.readAsDataURL(file)
        }
    }

}

window.onload = function() {
   document.getElementById("penjar").addEventListener("click", () => penjarImatge);
}
