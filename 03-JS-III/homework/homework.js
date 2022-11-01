// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var suma = numeros.reduce(function(a, b) {
      return a + b;
    });
    return suma;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  let resultado = [];
  for(let num of array) {
    if(num % 2 === 0) {
      resultado.push(num);
    }
  }
  return resultado;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  const arraySquared = array.map(num => Math.pow(num, 2)) 
  return arraySquared
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  return array.reduce((acc, va) => acc + va);
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  let contador = 0;
  while (num >= 1) {
    ++contador;
    num /= 10;
  }
  return contador;
}

  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
