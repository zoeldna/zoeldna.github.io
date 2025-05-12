
function loadHeaderNav() {
    fetch("/src/components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        });
}

loadHeaderNav()