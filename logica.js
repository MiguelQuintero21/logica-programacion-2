
function convertirTemperatura() {
    let celsius;
    
    while (true) {
        let entrada = prompt("Ingresa la temperatura en grados Celsius:");
        
        if (entrada === null) {
            return;
        }
        
        celsius = Number(entrada.trim());
        
        if (entrada.trim() !== "" && !isNaN(celsius)) {
            break; // Si es un número válido, salimos del bucle
        }
        
        alert("Error: Debes ingresar un valor numérico válido.");
    }

    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;

    console.log(`Grados Kelvin: ${kelvin}`);
    console.log(`Grados Fahrenheit: ${fahrenheit}`);

    alert(`Grados Kelvin: ${kelvin}\nGrados Fahrenheit: ${fahrenheit}`);
}

convertirTemperatura();