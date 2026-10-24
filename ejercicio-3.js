//Ejercicio 3: Métodos de arreglos
//Ejecutar con: node ejercicio-3.js
//Restricción: sin for ni while, solo métodos de arreglos.

//DATOS

//Cada tarea tiene los campos del formulario "Nueva tarea" de nuestro proyecto UniTasks
//(titulo, descripcion, materia, fechaEntrega, horaEntrega) y si está completada.
//NOTA: "horasEstimadas" no existe en el proyecto UniTasks.
//Se agregó solo para este ejercicio, porque el proyecto no tiene ningún
//campo numérico y el ejercicio pide calcular el total y el promedio de uno.
const datos = [
  {
    id: 1,
    titulo: "Ejercicio #5 - Flex y Grid",
    descripcion: "Digital: Moodle",
    materia: "Programación Web",
    fechaEntrega: "10/10/26",
    horaEntrega: "23:59",
    completada: true,
    horasEstimadas: 3,
  },
  {
    id: 2,
    titulo: "Diseño en Figma",
    descripcion: "Sobre la propuesta del proyecto: Digital: Figma",
    materia: "Diseño de Interfaces de Usuario",
    fechaEntrega: "12/10/26",
    horaEntrega: "23:59",
    completada: true,
    horasEstimadas: 3,
  },
  {
    id: 3,
    titulo: "Ejercicio #6 - Sitio responsivo",
    descripcion: "Digital: Moodle",
    materia: "Programación Web",
    fechaEntrega: "13/10/26",
    horaEntrega: "11:30",
    completada: true,
    horasEstimadas: 4,
  },
  {
    id: 4,
    titulo: "Práctica - Unidifusión, difusión y multidifusión",
    descripcion: "Digital: Packet Tracer",
    materia: "Redes I",
    fechaEntrega: "13/10/26",
    horaEntrega: "23:59",
    completada: true,
    horasEstimadas: 3,
  },
  {
    id: 5,
    titulo: "Ejercicio 1 - Unidad IV",
    descripcion: "Digital: En Clase",
    materia: "Ingeniería de Software I",
    fechaEntrega: "23/10/26",
    horaEntrega: "10:00",
    completada: true,
    horasEstimadas: 2,
  },
];

//Se guardan los títulos en su orden actual para compararlos al final.
const titulosAntes = datos.map(({ titulo }) => titulo);

//1. LISTA FILTRADA

//Tareas de Programación Web, como el filtro por materia de la app.
const filtrados = datos.filter(
  ({ materia }) => materia === "Programación Web"
);

//2. TOTAL

//Suma de las horas estimadas de todas las tareas.
const total = datos.reduce(
  (acc, { horasEstimadas }) => acc + horasEstimadas,
  0
);

//3. PROMEDIO

//Promedio de horas estimadas, redondeado a 2 decimales.
const promedio = Number((total / datos.length).toFixed(2));

//4. LISTA ORDENADA

//Tareas ordenadas de más a menos horas estimadas.
//sort muta el arreglo, por eso primero se copia con [...datos].
const ordenados = [...datos].sort(
  (a, b) => b.horasEstimadas - a.horasEstimadas
);

//BÚSQUEDA

//find devuelve undefined si ninguna tarea cumple.
//?. evita el error al leer "titulo" de undefined; ?? da un texto en su lugar.
const tareaBaseDatos = datos.find(
  ({ materia }) => materia === "Base de Datos II"
);
const tituloBaseDatos = tareaBaseDatos?.titulo ?? "Sin tareas de esa materia";

//RESULTADOS

console.log("---1. LISTA FILTRADA: TAREAS DE PROGRAMACIÓN WEB---\n");
console.log(filtrados);

console.log("\n---2. TOTAL DE HORAS ESTIMADAS---\n");
console.log(`${total} horas`);

console.log("\n---3. PROMEDIO DE HORAS ESTIMADAS---\n");
console.log(`${promedio} horas por tarea`);

console.log("\n---4. LISTA ORDENADA: DE MAYOR A MENOR HORAS ESTIMADAS---\n");
console.log(ordenados);

console.log("\n---BÚSQUEDA: TAREA DE BASE DE DATOS II---\n");
console.log(tituloBaseDatos);

//Impresión de la plantilla del ejercicio.
console.log("\n---RESUMEN---\n");
console.log({ filtrados, total, promedio, ordenados });

//VERIFICACIÓN: EL ARREGLO ORIGINAL NO CAMBIÓ

const titulosDespues = datos.map(({ titulo }) => titulo);

console.log("\n---VERIFICACIÓN DEL ARREGLO ORIGINAL---\n");

console.log("Prueba 1: sort no cambió el orden de las tareas originales.");
console.log("Los títulos deben salir en el mismo orden antes y después.\n");
console.log("Títulos antes:  ", titulosAntes);
console.log("Títulos después:", titulosDespues);

console.log("\nPrueba 2: el arreglo original completo, para revisarlo a la vista.");
console.log("Deben salir las 5 tareas con id del 1 al 5 y sus datos sin cambios.\n");
console.log(datos);
