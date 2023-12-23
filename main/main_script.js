function penjarImatge() {
    let input = document.getElementById('imatge');
    let fileList = input.files;

    if (fileList.length > 0) {
        let imageList = document.getElementById('galeria');
        let newImage = document.createElement('img');
        newImage.src = URL.createObjectURL(fileList[0]); 

        imageList.appendChild(newImage);
    } else {
        alert('No file selected');
    }
}

window.onload = function() {
    document.getElementById("penjar").addEventListener("click", penjarImatge);
}
