

//Complejidad Cuadrática 𝑂(𝑛2)

function findMissingNumberQuadratic(arr, n) {
    for (let i = 1; i <= n; i++) {
        if (!arr.includes(i)) {
            return i;
        }
    }
}

// Ejemplo de uso
const arr1 = [1, 2, 4, 6, 3, 7, 8];
const n1 = 8;
console.log("numero faltante con complejidad cuadratica "+findMissingNumberQuadratic(arr1, n1));  // Salida: 5


//Complejidad Logarítmica 𝑂(𝑛 log𝑛)  

function findMissingNumberLogarithmic(arr, n) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return n;  // Si el último número falta
}

// Ejemplo de uso
const arr2 = [1, 2, 4, 6, 3, 7, 8];
const n2 = 8;
console.log("numero faltante con complejidad Logaritmica "+findMissingNumberLogarithmic(arr2, n2));  // Salida: 5


function findMissingNumberLinear(arr, n) {
    const totalSum = n * (n + 1) / 2;
    const arrSum = arr.reduce((acc, val) => acc + val, 0);
    return totalSum - arrSum;
}

//Complejidad Lineal 𝑂(𝑛)

// Ejemplo de uso
const arr3 = [1, 2, 4, 6, 3, 7, 8];
const n3 = 8;
console.log("numero faltante con complejidad Lineal "+findMissingNumberLinear(arr3, n3));  // Salida: 5
