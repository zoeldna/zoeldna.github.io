document.addEventListener("DOMContentLoaded", async () => {

    const contentData = await loadAndReturnJson()
    heroContent(contentData)
})

/**
 * @typedef {Object} Content
 * @property {string} content1
 * @property {string} content2
 */

/**
 * Lädt eine JSON-Datei
 * @returns {Promise<Content[]>}
 */
async function loadAndReturnJson() {
    try {
        const response = await fetch("/src/assets/jsonContent/indexContent.json");
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
 *
 * @param {Content[]} contentData
 */
function heroContent(contentData) {
    const heroTextElements = document.getElementById("heroTextElements");
    //const heroButtons = document.getElementById("heroButtons");

    if (!heroTextElements /* || !heroButtons*/) {
        console.warn("error :: index.js :: heroTextElements || heroButtons not found");
        return;
    }

    // Text Container
    const textContainer = document.createElement("div");
    textContainer.classList.add("heroTextContainer");

    const titleElement = document.createElement("h1");
    titleElement.classList.add("titleElement");

    const subtitleElement = document.createElement("p");
    subtitleElement.classList.add("subtitleElement");

    const title = contentData.at(0).content1;
    const subtitle = contentData.at(0).content2;

    titleElement.innerText = title;
    subtitleElement.innerText = subtitle;

    textContainer.appendChild(titleElement);
    textContainer.appendChild(subtitleElement);

    /*
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("heroButtons");

    const heroBtn1 = document.createElement("button");
    heroBtn1.classList.add("heroBtn1");

    const heroBtn2 = document.createElement("button");
    heroBtn2.classList.add("heroBtn2");

    const btnContent1 = contentData.at(1).content1;
    const btnContent2 = contentData.at(1).content2;

    heroBtn1.innerText = btnContent1;
    heroBtn2.innerText = btnContent2;

    buttonsContainer.appendChild(heroBtn1);
    buttonsContainer.appendChild(heroBtn2);

     */

    heroTextElements.appendChild(textContainer);
    //heroButtons.appendChild(buttonsContainer);
}
