document.addEventListener('DOMContentLoaded', async function () {
    subtitle()
    const jsonData = await loadAndReturnJson()
    displayDataFromJson(jsonData)
});

function subtitle() {

    const container = document.createElement('div')
    container.classList.add('container')

    const text = document.createElement('p')
    text.classList.add('text')
    text.innerText = 'Hallo'

    container.appendChild(text)

    const placeholder = document.getElementById('placeholder')
    if (placeholder) {
        placeholder.appendChild(container)
    }
}

// fetch json beispiel

/**
 * @typedef {Object} Person
 * @property {string} name
 * @property {number} age
 */

/**
 * Lädt eine JSON-Datei und gibt ein Array von Person-Objekten zurück
 * @returns {Promise<Person[]>}
 */
async function loadAndReturnJson() {
    try {
        const response = await fetch("/src/assets/jsonContent/demo.json");
        if (!response.ok) {
            console.error(`HTTP-Fehler: ${response.status}`);
            return [];
        }
        return await response.json();
    } catch (error) {
        console.error("Fehler beim Laden oder Parsen:", error);
        return [];
    }
}


/**
 * Gibt eine Liste von Personen aus
 * @param {Person[]} dataArray
 */
function displayDataFromJson(dataArray) {
    const jDataContainer = document.getElementById("jDataContainer");

    if (!jDataContainer) {
        console.warn("jDataContainer wurde nicht gefunden.");
        return;
    }

    dataArray.forEach(item => {
        const container = document.createElement("div");
        container.classList.add("container");

        const text = document.createElement("p");
        text.classList.add("text");

        // Absicherung falls age oder name fehlen
        const name = item.name ?? "Unbekannt";
        const age = item.age ?? "n/a";
        text.innerText = `Name: ${name}, Alter: ${age}`;

        container.appendChild(text);
        jDataContainer.appendChild(container);
    });
}
