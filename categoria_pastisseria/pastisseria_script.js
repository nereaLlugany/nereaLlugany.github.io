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

function search(listSeeMoreButtons) {
    let searchInput = document.querySelector('input[name="search"]');
    let searchTerm = searchInput.value.toLowerCase().trim();

    for (let i = 0; i < listSeeMoreButtons.length; i++) {
        let button = listSeeMoreButtons[i];
        let section = button.parentElement;
        let recipes = section.querySelectorAll('h4');

        for (let j = 0; j < recipes.length; j++) {
            let recipe = recipes[j];
            let recipeName = recipe.textContent.toLowerCase();

            if (recipeName.includes(searchTerm)) {
                section.style.display = 'block';
                break;
            } else {
                section.style.display = 'none';
            }
        }
    }
}

window.onload = function() {

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

    let seeMoreButtons = document.querySelectorAll('#seeMoreButton');
    let searchButton = document.querySelector('button[type="submit"]');
    let searchInput = document.querySelector('input[name="search"]');

    for (let i = 0; i < seeMoreButtons.length; i++) {
        let button = seeMoreButtons[i];
        button.addEventListener('click', seeMoreClicked);
    }

    searchButton.addEventListener('click', () => search(seeMoreButtons));

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            search(seeMoreButtons);
        }
    });
};
