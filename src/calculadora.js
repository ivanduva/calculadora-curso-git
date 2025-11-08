class Calculadora {
  constructor() {
    this._historial = [];
    const ignorar = new Set(['getHistorial', 'limpiarHistorial', 'constructor']);
    const self = this;
    return new Proxy(this, {
      get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function' && !ignorar.has(prop)) {
          return (...args) => {
            const resultado = value.apply(target, args);
            try {
              self._historial.push({
                timestamp: new Date().toISOString(),
                operacion: String(prop),
                argumentos: args,
                resultado: resultado,
              });
            } catch (_) {}
            return resultado;
          };
        }
        return value;
      }
    });
  }

  getHistorial() {
    return this._historial.slice();
  }

  limpiarHistorial() {
    this._historial.length = 0;
  }

  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b === 0) {
      return "Error";
    }
    return parseFloat((a / b).toFixed(3));
  }

  potencia(base, exponente) {
    return parseFloat((base ** exponente).toFixed(3));
  }

  raizCuadrada(numero) {
    if (numero < 0) {
      return "Error numero negativo: no es posible sacar raiz cuadrada";
    }
    return parseFloat(Math.sqrt(numero).toFixed(3));
  }

  resto(a, b) {
    if (b === 0) return "Error";
    return a % b;
  }

  logaritmoNatural(numero) {
    if (numero <= 0) return "Error";

    return parseFloat(Math.log(numero).toFixed(3));
  }

  logaritmoBase10(numero) {
    if (numero <= 0) return "Error";

    return parseFloat(Math.log10(numero).toFixed(3));
  }

  porcentaje(a, b) {
    if (b === 0) return "Error";
    return (a / b) * 100;
  }
// funcion agregada para punto 2 (PR) -ReynaldoI
  maximo(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return "Error";
    return Math.max(...arr);
  }

  factorial(n){
    if (n<0){
      return "Error: no existe factorial negativo";
    }
    //para el caso base cuando vale -> 0
    if (n ===0){
      return 1;
    }
    //variable
    let resultado = 1;

    for (let i=1; i <=n; i++){
      resultado *= i;
    }
    //mostramos el resultado
    return resultado;
  }

  promedio(arr) {
    // Validaciones básicas (mismo criterio que maximo)
    if (!Array.isArray(arr) || arr.length === 0) return "Error";

    // Convertimos a números y validamos que no haya NaN/infinitos
    const nums = arr.map(Number);
    if (nums.some(n => !Number.isFinite(n))) return "Error";

    const suma = nums.reduce((acc, n) => acc + n, 0);
    return parseFloat((suma / nums.length).toFixed(3));
  }
}

// Exportar para usar en tests
if (typeof module !== "undefined" && module.exports) {
  module.exports = Calculadora;
}

// Para usar en consola de Node.js
const calc = new Calculadora();

console.log("=== Calculadora Simple ===");
console.log("Ejemplo de uso:");
console.log("calc.sumar(5, 3):", calc.sumar(5, 3));
console.log("calc.restar(10, 4):", calc.restar(10, 4));
console.log("calc.multiplicar(6, 7):", calc.multiplicar(6, 7));
console.log("calc.dividir(15, 4):", calc.dividir(15, 4));
console.log("calc.potencia(2, 8):", calc.potencia(2, 8));
console.log("calc.raizCuadrada(81):", calc.raizCuadrada(81));//ejemplo agregado->Ariel Rojas
console.log("calc.resto(17, 5):", calc.resto(17, 5));
console.log("calc.logaritmoNatural(10):", calc.logaritmoNatural(10));
console.log("calc.logaritmoBase10(1000):",calc.logaritmoBase10(1000));
console.log("calc.porcentaje(50, 200):",calc.porcentaje(50, 200)+" %");
console.log("calc.maximo([3, 7, 2, 9, 5]):",calc.maximo([3, 7, 2, 9, 5]));
console.log("calc.factorial(5):", calc.factorial(5)); //ejemplo agregado->Ariel Rojas
//------------------------------------------------------------------
console.log("\nFunciones disponibles:");
console.log("- calc.sumar(a, b)");
console.log("- calc.restar(a, b)");
console.log("- calc.multiplicar(a, b)");
console.log("- calc.dividir(a, b)");
console.log("- calc.potencia(base, exponente)");
console.log("- calc.raizCuadrada(numero)");
console.log("- calc.resto(a, b)");
console.log("- calc.logaritmoNatural(numero)");
console.log("- calc.logaritmoBase10(numero)");
console.log("- calc.porcentaje(a, b)");
console.log("- calc.maximo(arr)");
console.log("- calc.promedio(arr)");