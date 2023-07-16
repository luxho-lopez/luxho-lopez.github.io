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

// Funcion que aplica las animaciones de habilidades
function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("bootstrap");
        habilidades[3].classList.add("tailwind");
        habilidades[4].classList.add("react");
        habilidades[5].classList.add("php");
        habilidades[6].classList.add("mysql");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajoequipo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("proyectmanagement");
    }
}

// Detectar scrolling para aplicar animacipon
window.onscroll = function () {
    efectoHabilidades();
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