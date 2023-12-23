function toggleOverflow(button, sectionId) {
    const section = document.getElementById(sectionId);

    button.addEventListener('click', function() {
        if (section.style.overflow === 'hidden') {
            section.style.overflow = 'visible';
            button.textContent = 'See Less';
        } else {
            section.style.overflow = 'hidden';
            button.textContent = 'See More';
        }
    });
}

window.onload = function() {
    const pastisseriaButton = document.getElementById('seeMoreCake');
    const galetesButton = document.getElementById('seeMoreBiscuit');
    const pansButton = document.getElementById('seeMoreBread');
    const festesButton = document.getElementById('seeMoreSpecial');
}
