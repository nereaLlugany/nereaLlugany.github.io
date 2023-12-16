function penjarImatge() {
    let imgInput = document.getElementById("imatge");
    if (imgInput.length > 0){
        let fitxer = input.files[0];
        let formData = new FormData();
        formData.append('image', file);
    }

}

window.onload = function() {
   document.getElementById("penjar").addEventListener("click", () => penjarImatge);
}
