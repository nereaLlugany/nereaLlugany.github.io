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
        for (let i = 0; i < recipeSections.length; i++) {
            recipeSections[i].style.display = 'none';
            listSeeMoreButtons[i].style.display = 'none';
        }
    } else {
        for (let i = 0; i < recipes.length; i++) {
            let recipe = recipes[i];
            let recipeTitle = recipe.textContent.toLowerCase();
            let content = recipe.parentElement;

            if (recipeTitle.includes(searchQuery)) {
                content.style.display = 'block';
                categoryTitle.style.display = 'block';
            } else {
                content.style.display = 'none';
                categoryTitle.style.display = 'none';
                
                for (let k = 0; k < listSeeMoreButtons.length; k++) {
                   listSeeMoreButtons[k].style.display = 'none';
                }
            }
        }
    }

}

window.onload = function() {
    let seeMoreButtons = document.querySelectorAll('#seeMoreButton');
    let searchForm = document.querySelector('form');
    let searchInput = searchForm.querySelector('input[name="search"]');
    let searchButton = searchForm.querySelector('button');

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
