document.addEventListener("DOMContentLoaded", async () => {

    container_go_ios()
    container_swift()
    container_main_content()
    container_navigation_android_kotlin()
})

function container_go_ios() {

    // container
    const container = document.getElementById("container_go_ios")
    container.classList.add("container_go_ios")

    const container_go = document.createElement("div")
    container_go.classList.add("container_go")

    const container_ios = document.createElement("div")
    container_ios.classList.add("container_ios")

    const container_zoeldna = document.createElement("div")

    // elements container_go
    const go_text = document.createElement("p")
    go_text.classList.add("go_text")
    go_text.innerText = "Go"

    // elements container_go
    const zoeldna_text = document.createElement("p")
    zoeldna_text.classList.add("zoeldna_text")
    zoeldna_text.innerText = "zoeldna"


    // elements container_ios
    const ios_text = document.createElement("p")
    ios_text.classList.add("ios_text")
    ios_text.innerText = "iOS"

    // add elements to container_go
    container_go.appendChild(go_text)

    container_zoeldna.appendChild(zoeldna_text)

    // add elements to container_ios
    container_ios.appendChild(ios_text)

    // add subcontainer to main container
    container.appendChild(container_go)
    container.appendChild(container_zoeldna)
    container.appendChild(container_ios)
}

function container_swift() {

    const container = document.getElementById("container_swift")
    container.classList.add("container_swift")

    const container_swift = document.createElement("container_swift")
    container_swift.classList.add("container_swift")

    const swift_text = document.createElement("p")
    swift_text.classList.add("swift_text")
    swift_text.innerText = "Swift"


    container_swift.appendChild(swift_text)
    container.appendChild(container_swift)
}

function container_main_content() {
    const container = document.getElementById("container_main_content");
    container.classList.add("container_main_content");

    const container_title_subtitle = document.createElement("div");
    container_title_subtitle.classList.add("container_title_subtitle");

    // elements container_title_subtitle
    const hero_title = document.createElement("h1");
    hero_title.classList.add("hero_text");

    // text splitten, erstes Wort in <span> packen
    const fullText = "Autodidact by choice";
    const firstSpaceIndex = fullText.indexOf(' ');
    if (firstSpaceIndex === -1) {
        // falls nur ein Wort
        hero_title.innerHTML = `<span class="highlight_box">${fullText}</span>`;
    } else {
        const firstWord = fullText.substring(0, firstSpaceIndex);
        const restText = fullText.substring(firstSpaceIndex + 1);
        hero_title.innerHTML = `<span class="highlight_box">${firstWord}</span> ${restText}`;
    }

    const hero_subtitle = document.createElement("p");
    hero_subtitle.classList.add("hero_subtitle");
    hero_subtitle.innerText = "Designing mobile apps and backend systems — independently, deliberately.";

    container_title_subtitle.appendChild(hero_title);
    container_title_subtitle.appendChild(hero_subtitle);

    container.appendChild(container_title_subtitle);
}


function container_navigation_android_kotlin() {

    const container = document.getElementById("container_navigation_android_kotlin")
    container.classList.add("container_navigation_android_kotlin")


    const container_navigation = document.createElement("container_navigation")
    container_navigation.classList.add("container_navigation")

    const container_android_kotlin = document.createElement("container_android_kotlin")
    container_android_kotlin.classList.add("container_android_kotlin")

    // elements container_navigation
    const projects_link = document.createElement("a")
    projects_link.classList.add("projects_link")
    projects_link.innerText = "Projects"


    const about_me_link = document.createElement("a")
    about_me_link.classList.add("about_me_link")
    about_me_link.innerText = "About Me"


    // elements container_android_kotlin
    const android_text = document.createElement("p")
    android_text.classList.add("android_text")
    android_text.innerText = "Android"

    const kotlin_text = document.createElement("p")
    kotlin_text.classList.add("kotlin_text")
    kotlin_text.innerText = "Kotlin"


    container_navigation.appendChild(projects_link)
    container_navigation.appendChild(about_me_link)

    container_android_kotlin.appendChild(kotlin_text)
    container_android_kotlin.appendChild(android_text)


    container.appendChild(container_navigation)
    container.appendChild(container_android_kotlin)

}