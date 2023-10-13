// Selecting DOM elements/seleccion elementos
const startBtn = document.querySelector("#startBtn"),
    endBtn = document.querySelector("#endBtn"),
    prevNext = document.querySelectorAll(".prevNext"),
    numbers = document.querySelectorAll(".link");

// setting an initial step/estableciendo un paso inicial
let currentStep = 0;

// Function to update the button states/Función para actualizar los estados de los botones.
const updateBtn =() => {
    // If the are at the last step/si están en el último pas
    if(currentStep === 4) {
        endBtn.disabled = true;
        prevNext[1].disabled = true;
    }else if(currentStep === 0){
        // If the are at the first step/Si están en el primer paso.
        startBtn.disabled = true;
        prevNext[0].disabled = true;
    }else {
        endBtn.disabled = false;
        prevNext[1].disabled = false;
        startBtn.disabled = false;
        prevNext[0].disabled = false;
    }
};

// Add event listeners to the number links/agregar detectores de eventos a los enlaces numéricos
numbers.forEach((number, numIndex) => {
    number.addEventListener("click", (e) => {
        e.preventDefault();
        // set the current step to the clicked number link/establezca el paso actual en el enlace del número en el que se hizo click
        currentStep = numIndex;
        // remove the "active" class from the previously active number link/eliminar la clase "activa" del enlace de número previamente activo
        document.querySelector(".active").classList.remove("active");
        // add the "active" class to the clicked number link/agregue la clase "activa" al enlace del número en el que se hizo click
        number.classList.add("active");
        updateBtn(); //update the button states/actualizar los estados del botón
    });
});

// Add event listeners to the "Previous" and "Next buttons"/agregue detectores de eventos a los botones "Anterior" y "Siguiente"
prevNext.forEach(button => {
    button.addEventListener("click", (e) => {
        // increment or decrement the current stepp based on the button clicked/incrementar o disminuir el paso actual según el botón en el que se hizo click
        currentStep += e.target.id === "next" ? 1 : -1;
        numbers.forEach((number, numIndex) => {
            // Toggle the "active" class on the number links based on the current step/Alternar la clase "activa" en los enlaces numéricos según el paso actual
            number.classList.toggle("active", numIndex === currentStep);
            updateBtn(); //update the button states/actualizar los estados del botón
        });
    });
});

// add event listener to the "Start" button/agregar detector de eventos al botón "Inicio"
startBtn.addEventListener("click", () => {
    // remove the "active" class from the previously active number link/eliminar la clase "activa" del enlace de número previamente activo
    document.querySelector(".active").classList.remove("active");
    // add the "active" class to the first number link/agregue la clase "activa" al primer enlace numérico
    numbers[0].classList.add("active");
    currentStep = 0;
    updateBtn(); //update the button states/actualizar los estados del botón
    endBtn.disabled = false;
    prevNext[1].disabled = false;
});

// add event listener to the "End" button/agregar detector de eventos al botón "Finalizar"
endBtn.addEventListener("click", () => {
    // remove the "active" class from the previously active number link/eliminar la clase "activa" del enlace de número previamente activo
    document.querySelector(".active").classList.remove("active");
    // add the "active" class to the last number link/agregue la clase "activa" al ultimo enlace numérico
    numbers[4].classList.add("active");
    currentStep = 4;
    updateBtn(); //update the button states/actualizar los estados del botón
    startBtn.disabled = false;
    prevNext[0].disabled = false;
});