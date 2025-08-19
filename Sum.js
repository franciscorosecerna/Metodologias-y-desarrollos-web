let input = '';

process.stdin.setEncoding('utf8');

process.stdin.on('data', chunk => {
    input += chunk;
});

process.stdin.on('end', () => {
    try {
        if (!input || input.trim().length === 0) {
            throw new Error("La entrada esta vacia.");
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
            throw new Error("La entrada debe contener al menos dos numeros validos.");
        }

        const suma = numbers.reduce((acc, val) => acc + val, 0);
        console.log(`La suma de los numeros es: ${suma}`);
    } catch (err) {
        console.error("Error:", err.message);
    }
});