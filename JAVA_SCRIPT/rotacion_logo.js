// Obtener el elemento por su ID
var logoElement = document.getElementById("logo");

// Inicializar el ángulo de rotación
var angle = 360;

// Función para rotar el elemento
function rotateElement() {
    // Incrementar el ángulo de rotación
    angle += 1;
    // Aplicar la rotación al elemento
    logoElement.style.transform = "rotate(" + angle + "deg)";
}

// Llamar a la función rotateElement() cada 50 milisegundos para crear una animación suave
setInterval(rotateElement, 50);
