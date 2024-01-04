let menuVisible = false;

// Funcion para ocultar o mostrar el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // Oculta el menu, despues de seleccionar una seccion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}







// Proyectos
const resultado_proyecto = document.querySelector('#proyectos');

document.addEventListener('DOMContentLoaded', () => {
    mostrarProyectos(proyectos);
});

function mostrarProyectos(proyectos) {
    proyectos.forEach(proyecto => {
        const { id, title, image, description, github } = proyecto;

        const proyectoHTML = document.createElement('div');
        proyectoHTML.classList.add('proyecto');
        proyectoHTML.innerHTML = `
            
            <img src="${image}" alt="${title}">
            <div class="overlay">
                <h3>${title}</h3>
                <p>${description}</p>
                <a href="${github}" target="_blank">Código Fuente</a>
            </div>

        `;
        resultado_proyecto.appendChild(proyectoHTML);
    });
};