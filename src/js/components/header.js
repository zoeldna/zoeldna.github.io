document.addEventListener('DOMContentLoaded', function() {
    createHeader();
});

// Erstellt die Navbar automatisch (statt fetch)
function createHeader() {
    // Erstelle das Header-Element
    const header = document.createElement('header');
    header.classList.add('navHeader');

    // Erstelle das Wrapper-Element
    const navWrapper = document.createElement('div');
    navWrapper.classList.add('navWrapper');

    // Erstelle das Container für die Navigationselemente
    const navItemContainer = document.createElement('div');
    navItemContainer.classList.add('navItemContainer');

    // Erstelle die Links für die Navigation
    const homeLink = document.createElement('a');
    homeLink.classList.add('navItem');
    homeLink.href = '/index.html';
    homeLink.textContent = 'Home';

    const aboutLink = document.createElement('a');
    aboutLink.classList.add('navItem');
    aboutLink.href = '#about';
    aboutLink.textContent = 'About me';

    const projectsLink = document.createElement('a');
    projectsLink.classList.add('navItem');
    projectsLink.href = '#projects';
    projectsLink.textContent = 'Projects';

    // Füge die Links zum Container hinzu
    navItemContainer.appendChild(homeLink);
    navItemContainer.appendChild(aboutLink);
    navItemContainer.appendChild(projectsLink);

    navWrapper.appendChild(navItemContainer);

    // Füge den Wrapper zum Header hinzu
    header.appendChild(navWrapper);

    // Füge den Header zum Element mit der ID "header-placeholder" hinzu
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.appendChild(header);
    }
}



/*
function loadHeaderNav() {
    fetch("/src/components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        });
}

loadHeaderNav()

 */