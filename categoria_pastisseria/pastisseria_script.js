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

function search() {
    let searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    let searchedContainer = document.querySelector('.searched-recipies');

    let recipeTitles = document.querySelectorAll('h4');
    let matchedRecipes = [];

    for (let i = 0; i < recipeTitles.length; i++) {
        if (recipeTitles[i].textContent.trim().toLowerCase().includes(searchInput)) {
            let recipeContent = recipeTitles[i].parentElement;
            matchedRecipes.push(recipeContent);
        }
    }

    let recipeSections = document.querySelectorAll('#pastisseria_categoria, #galetes_categoria, #pans_categoria, #festes_categoria');

    if (searchInput === '') {
        alert("No heu entrat cap recepte", "");
    } else {
        for (let i = 0; i < recipeSections.length; i++) {
            recipeSections[i].style.display = 'none';
        }
        for (let i = 0; i < matchedRecipes.length; i++) {
            searchedContainer.appendChild(matchedRecipes[i]);
        }
    }  

    if (matchedRecipes.length === 0) {
        alert('No matching recipes found!');
    }
}


window.onload = function() {
    let searchButton = document.querySelector('form button');
    let searchInput = document.getElementById('searchInput');
    let seeMoreButtons = document.querySelectorAll('#seeMoreButton');

    for (let i = 0; i < seeMoreButtons.length; i++) {
        let button = seeMoreButtons[i];
        button.addEventListener('click', seeMoreClicked);
    }

    searchButton.addEventListener('click', function() {
        search()
    });

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            search();
        }
    });
};
