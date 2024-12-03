//Testing de los ejercicios POO
//Ejercicio 1
// --- Funciones constructoras ---

import { Tarea } from "./helpers/ejercicio";

const tarea1=new Tarea("Aprender Javascript");
const tarea2=new Tarea("Aprender React");
tarea1.info();
tarea1.toggleCompletada();
tarea1.info();
tarea2.info();


//----Clases----

const tarea1Clases=new Tarea("Aprender Javascript clases");
const tarea2Clases=new Tarea("Aprender React clases");
tarea1.info();
tarea1.toggleCompletada();
tarea1.info();
tarea2.info();