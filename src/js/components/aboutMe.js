document.addEventListener('DOMContentLoaded', function () {
    subtitle()
});

function subtitle() {
    const container = document.createElement('div');
    container.classList.add('subContainer');

    const h2 = document.createElement('p');
    h2.classList.add('subHeading');

    container.appendChild(h2);

    const idContainer = document.getElementById('subPlacementContainer');
    console.log(idContainer); // Prüfen, ob der Container gefunden wird

    if (idContainer) {
        idContainer.appendChild(container);
    } else {
        console.log("Element 'subPlacementContainer' nicht gefunden");
    }
}
