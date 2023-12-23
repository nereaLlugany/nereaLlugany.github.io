function clickBotoSeeMore(buttonClass, sectionId) {
    let buttons = document.querySelectorAll(buttonClass);
    let container = document.getElementById(containerId);

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (section.style.overflow === 'hidden') {
                section.style.overflow = 'visible';
                button.textContent = 'See Less';
            } else {
                section.style.overflow = 'hidden';
                button.textContent = 'See More';
            }
        });
    });
}

window.onload = function() {
    clickBotoSeeMore('.cake', 'pastisseria');
    clickBotoSeeMore('.biscuit', 'galetes');
    clickBotoSeeMore('.bread', 'pans');
    clickBotoSeeMore('.special', 'festes');
};
