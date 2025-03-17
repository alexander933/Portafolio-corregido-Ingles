document.addEventListener("DOMContentLoaded", function() {
    let enlaces = document.querySelectorAll(".nav-link"); // Selecciona todos los enlaces del menú

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(event) {
            event.preventDefault(); // Evita que el enlace recargue la página

            let targetClass = this.getAttribute("data-target"); // Obtiene la clase objetivo
            let targetElement = document.querySelector("." + targetClass); // Busca la sección con esa clase

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" }); // Hace scroll suave
            }
        });
    });
});