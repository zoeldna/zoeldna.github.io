document.addEventListener("DOMContentLoaded", async () => {
    document.body.classList.add("fade-in");

    index_header()
    stack_pyramid()
    hero()
    call_to_action()

    const btn = document.querySelector(".call_to_action_btn");
    btn.addEventListener("click", () => {
        // Klasse hinzufügen um Fade-Out zu starten
        document.getElementById("section_container").classList.add("fade-out");
        document.body.classList.add("fade-out");

        // Nach der Animation navigieren (500ms)
        setTimeout(() => {
            window.location.href = "/projects"; // Zielseite anpassen
        }, 500);
    });

})

function index_header() {

    const header_container = document.getElementById("header")
    header_container.classList.add("header_container")

    // logo_container
    const logo_container = document.getElementById("header_logo")
    logo_container.classList.add("header_logo")

    const logo_text = document.createElement("p")
    logo_text.innerText = "zoeldna"
    logo_text.classList.add("logo_text")
    logo_container.appendChild(logo_text)


    // nav_items_container
    const nav_item_container = document.getElementById("header_nav_buttons")
    nav_item_container.classList.add("header_nav_buttons")

    // ggf. noch nav btns rein machen....

    header_container.appendChild(logo_container)

}

function stack_pyramid() {

    const sc = document.getElementById("section_container")

    const stack_container = document.getElementById("stack_pyramid")
    stack_container.classList.add("stack_pyramid")

    const ios_text = document.createElement("p")
    ios_text.innerText = "IOS"
    ios_text.classList.add("ios_text")

    const android_text = document.createElement("p")
    android_text.innerText = "ANDROID"
    android_text.classList.add("android_text")

    const backend_text = document.createElement("p")
    backend_text.innerText = "WEB-BACKEND"
    backend_text.classList.add("backend_text")


    stack_container.appendChild(ios_text)
    stack_container.appendChild(android_text)
    stack_container.appendChild(backend_text)

    sc.appendChild(stack_container)
}

function hero() {

    const sc = document.getElementById("section_container")

    const hero_container = document.getElementById("hero_container")
    hero_container.classList.add("hero_container")

    const hero_title = document.createElement("h1")
    hero_title.classList.add("hero_title")
    hero_title.innerText = "AUTODIDACT"

    const hero_subtitle = document.createElement("p")
    hero_subtitle.classList.add("hero_subtitle")
    hero_subtitle.innerText = "Designing mobile apps and backend systems. Independently, deliberately."

    hero_container.appendChild(hero_title)
    hero_container.appendChild(hero_subtitle)

    sc.appendChild(hero_container)
}

function call_to_action() {

    const sc = document.getElementById("section_container")

    const container = document.getElementById("call_to_action")
    container.classList.add("call_to_action")

    const btn = document.createElement("button")
    btn.classList.add("call_to_action_btn")
    btn.innerText = "PROJECTS"

    container.appendChild(btn)
    sc.appendChild(container)
}
