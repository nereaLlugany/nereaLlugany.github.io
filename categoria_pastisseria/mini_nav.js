window.onload = function(){
    let toggleButton = document.querySelector('.toggle-button');
    let sidebar = document.querySelector('.sidebar');
    let closeButton = document.querySelector('.close-button');

    toggleButton.addEventListener('click', function() {
        if (sidebar.style.transform === 'translateX(-300px)') {
            sidebar.style.transform = 'translateX(-5px)';
            setTimeout(function() {
                closeButton.style.display = 'inline-block';
            }, 225);
          } else {
            sidebar.style.transform = 'translateX(-300px)';
            closeButton.style.display = 'none';
          }
    });

    closeButton.addEventListener('click', function() {
        sidebar.style.transform = 'translateX(-300px)';
        closeButton.style.display = 'none';
    });
}