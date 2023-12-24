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
    let searchQuery = document.getElementById('searchInput').value.toLowerCase();
    let recipes = document.querySelectorAll('.pastisseria h4, .galetes h4, .pans h4, .festes h4');
    let recipeSections = document.querySelectorAll('.pastisseria, .galetes, .pans, .festes');
    let categoryTitles = document.querySelectorAll('section>h2');

    if (searchQuery === '') {
        alert("No has introduit ninguna recepta")
    } else {
        for (let i = 0; i < recipes.length; i++) {
            let recipe = recipes[i];
            let recipeTitle = recipe.textContent.toLowerCase();
            let categoryTitle = recipe.parentElement.parentElement.parentElement.querySelector('h2');
            let content = recipe.parentElement;

            if (recipeTitle.includes(searchQuery)) {
                content.style.display = 'block';
                recipeSections[i].style.display = 'block'; 
                categoryTitle.style.display = 'block';
                for (let j = 0; j < listSeeMoreButtons.length; j++){
                    listSeeMoreButtons[j].style.display = 'none';
                }
                
            } else {
                alert("No s'ha pogut trobar nunguna recepte amb el nom: " + recipeTitle);
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
    let searchForm = document.querySelector('form');
    let searchInput = searchForm.querySelector('input[name="search"]');
    let searchButton = searchForm.querySelector('form>button');

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
