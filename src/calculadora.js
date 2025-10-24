class Calculadora {
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
            return "Error: division por cero no permitida";
        } else if (a === 0) {
            return 0
        }
        return a / b;
    }
  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b == 0)
	    throw new Error('No se puede dividir por cero');
    return a / b;
  }

    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }

    raizCuadrada(numero) {
        if (numero < 0) {
            console.log("el numero es negativo");
            console.log("Vuelva a intentarlo");
            return ""; //si es negativo el numero que no colapse y vuelva al menu 
        }
        return Math.sqrt(numero);
    }

    factorial(n) {
        if (n < 0) {
            return "Error: no se puede calcular el factorial de un número negativo";
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
    promedio(numeros) {
        //Verifica que sea un arreglo y que no este vacio
        if (!Array.isArray(numeros) || numeros.length === 0) {
            throw new Error("Debe ingresar al menos un numero");
        }
        //Convierte los elementos a numero y descarta los no validos 
        const valores = numeros.map(Number).filter(n => !Number.isNaN(n));
        //Si todos los elementos del array son invalidos
        if (valores.length === 0) throw new Error("No contiene numeros validos");
        //calculo
        const total = valores.reduce((acc, n) => acc + n, 0);
        return total / valores.length;
    }
    maximo(numeros) {
            //Verifica que sea un arreglo y que no este vacio
            if (!Array.isArray(numeros) || numeros.length === 0) {
                throw new Error("Debe ingresar al menos un numero");
            }
            //Convierte los elementos a numero y descarta los no validos 
            const valores = numeros.map(Number).filter(n => !Number.isNaN(n));
            //Si todos los elementos del array son invalidos
            if (valores.length === 0) throw new Error("No contiene numeros validos");
            //Obtencion del maximo
            return Math.max(...valores);
        }
        // Funcion de Resto
    resto(a, b) {
        if (b === 0) {
            return "Error: division por cero no permitida";
        }
        return a % b;
    }
    porcentaje(a, b) {
        if (b === 0) {
            return "Error: division por cero no permitida";
        }
        return (a / b) * 100;
    }
}

// Exportar para usar en tests
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculadora;
}

// Para usar en consola de Node.js
const calc = new Calculadora();

console.log('=== Calculadora Simple ===');
console.log('Ejemplo de uso:');
console.log('calc.sumar(5, 3):', calc.sumar(5, 3));
console.log('\nFunciones disponibles:');
console.log('- calc.sumar(a, b)');
console.log('- calc.restar(a, b)');
console.log('- calc.multiplicar(a, b)');
console.log('- calc.dividir(a, b)');
console.log('- calc.potencia(base, exponente)');
console.log('- calc.raizCuadrada(numero)');
