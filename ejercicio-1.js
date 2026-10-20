//Ejercicio 1: Calculadora de IMC y FizzBuzz
//Ejecutar con: node ejercicio-1.js

//VALIDACIÓN (compartida por A y B)

//Un valor está vacío si es undefined, null o texto vacío.
//Se revisa antes de convertir porque Number("") da 0.
const estaVacio = (valor) =>
  valor === undefined || valor === null || valor === "";

//A. CALCULADORA DE IMC

//Valida peso o altura.
//Devuelve un mensaje de error, o "" si el valor es válido.
function validarMedida(valor, nombre) {
  let error = "";
  if (estaVacio(valor)) {
    error = `${nombre} no tiene valor (vacío).`;
  } else if (Number.isNaN(Number(valor))) {
    error = `${nombre} "${valor}" no es un número.`;
  } else if (Number(valor) <= 0) {
    error = `${nombre} debe ser mayor que 0 (recibido: ${valor}).`;
  }
  return error;
}

//peso en kg, altura en metros
function calcularIMC(peso, altura) {
  return peso / altura ** 2;
}

function clasificarIMC(imc) {
  if (imc < 18.5) {
    return "Bajo peso";
  } else if (imc < 25) {
    return "Normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obesidad";
  }
}

function probarIMC(peso, altura) {
  console.log(`probarIMC("${peso}", "${altura}")`);

  const errorPeso = validarMedida(peso, "El peso");
  const errorAltura = validarMedida(altura, "La altura");

  if (errorPeso !== "") {
    console.error(`  Error: ${errorPeso}`);
  }
  if (errorAltura !== "") {
    console.error(`  Error: ${errorAltura}`);
  }

  if (errorPeso === "" && errorAltura === "") {
    const imc = calcularIMC(Number(peso), Number(altura));
    console.log(`  IMC: ${imc}`);
    console.log(`  Clasificación: ${clasificarIMC(imc)}`);
  }
}

//B. FIZZBUZZ

//Devuelve un mensaje de error, o "" si n es un entero mayor que 0.
function validarN(valor) {
  let error = "";
  if (estaVacio(valor)) {
    error = "n no tiene valor (vacío).";
  } else if (Number.isNaN(Number(valor))) {
    error = `n = "${valor}" no es un número (NaN).`;
  } else if (Number(valor) < 0) {
    error = `n = ${valor} es negativo.`;
  } else if (Number(valor) === 0) {
    error = "n no puede ser 0.";
  } else if (Number(valor) % 1 !== 0) {
    error = `n = ${valor} tiene decimales; debe ser un entero.`;
  }
  return error;
}

function fizzBuzz(n) {
  const resultado = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultado.push("FizzBuzz");
    } else if (i % 3 === 0) {
      resultado.push("Fizz");
    } else if (i % 5 === 0) {
      resultado.push("Buzz");
    } else {
      resultado.push(i);
    }
  }
  return resultado;
}

function probarFizzBuzz(valor) {
  console.log(`probarFizzBuzz("${valor}")`);

  const error = validarN(valor);
  if (error === "") {
    console.log(fizzBuzz(Number(valor)));
  } else {
    console.error(`  Error: ${error}`);
  }
}

//PRUEBAS

//A. Calculadora de IMC
const casosIMC = [
  { peso: 50, altura: 1.75 },
  { peso: 70, altura: 1.75 },
  { peso: 85, altura: 1.75 },
  { peso: 110, altura: 1.75 },
  { peso: "", altura: 1.70 },
  { peso: "abc", altura: 1.70 },
  { peso: 70, altura: 0 },
  { peso: -60, altura: 1.65 },
];

console.log("---A. CALCULADORA DE IMC---\n");
for (const caso of casosIMC) {
  probarIMC(caso.peso, caso.altura);
}

//B. FizzBuzz
const casosFizzBuzz = [15, "", "hola", -5, 0, 7.5, 30, 60];

console.log("\n---B. FIZZBUZZ---\n");
for (const caso of casosFizzBuzz) {
  probarFizzBuzz(caso);
}
