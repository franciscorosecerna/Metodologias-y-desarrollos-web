const fs = require('fs');

try {
    const input = fs.readFileSync('input.txt', 'utf8');
    
    if (!input || input.trim().length === 0) {
        throw new Error("El archivo esta vacio.");
    }

    const numbers = input
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .map(line => {
            const n = Number(line);
            return isNaN(n) ? null : n;
        })
        .filter(n => n !== null);

    if (numbers.length < 2) {
        throw new Error("El archivo debe contener al menos dos numeros validos.");
    }

    const suma = numbers.reduce((acc, val) => acc + val, 0);
    fs.writeFileSync('output.txt', `La suma de los numeros es: ${suma}`);
    console.log(`La suma (${suma}) fue guardada en output.txt.`);

} 
catch (err) {
    console.error("Error:", err.message);
}