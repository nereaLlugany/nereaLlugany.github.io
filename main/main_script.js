function penjarImatge() {
    var fileInput = document.getElementById('imatge');
    var selectedFile = fileInput.files[0]; 
    if (selectedFile) {

        var reader = new FileReader();
        reader.onload = function(event) {
            var uploadedImageData = event.target.result;

            console.log('File uploaded:', uploadedImageData);
        };
        reader.readAsDataURL(selectedFile);
    } else {
        alert('No file selected');
    }
}

window.onload = function() {
    document.getElementById('penjar').addEventListener('click', penjarImatge);
};
