document.addEventListener('DOMContentLoaded', function () {
    subtitle()
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
