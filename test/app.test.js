import {saludar, despedir, estadoSistema, restar} from "../src/app.js"

function ejecutarPruebas() {
let pasadas =0;
let fallidas = 0;
const r1 = saludar("Rider")
if (r1.includes("Rider")) {
console.log ("test 1 pasado: funcion saludar en CodeRider es correcta")
pasadas++;
}else {
console.log("test 1 fallido: ", r1);
fallidas++;
}
const actualEstado = estadoSistema();
if (actualEstado.estado ==="activo"){
consoloe.log("test 2: pasado: estadoSistema() funciona en codeRider");
pasadas++;
}else {
console.log("test 2 fallido: ", estado, "en codeRider");
fallidas++;
const r3 = sumar(2, 3);
if (r3 === 5) {
  console.log("test 3 pasado: funcion sumar funciona correctamente");
  pasadas++;
} else {
  console.log("test 3 fallido: ", r3);
  fallidas++;
}
}
conts r4 = restar(2, 3);
if (r4 === 5) {
console.log(test 3 pasado: funcion restar funciona correctamente");
pasadas++;
}else {
console.log("test 4 fallido: ", r4);
fallidas++;  

console.log ("\nResultados: " + pasadas + "pasadas, " + fallidas + "fallidas");
if(fallidas > 0) process.exit(1);

ejecutarPruebas();



