function seeMoreClicked(event) {
    let section = event.target.parentElement;
    let contents = section.querySelectorAll('.pastisseria, .galetes, .pans, .festes');

    for (let i = 0; i < contents.length; i++) {
        let content = contents[i];

        
        if (content.style.height === '310px') {
            content.style.height = 'auto';
            event.target.textContent = 'Show Less';
        } else {
            content.style.height = '310px';
            event.target.textContent = 'See More';
        }
    }
}

window.onload = function() {
    var seeMoreButtons = document.querySelectorAll('#seeMoreButton');

    for (let i = 0; i < seeMoreButtons.length; i++) {
        let button = seeMoreButtons[i];
        
        button.addEventListener('click', seeMoreClicked);
    }
};
