import { version } from "react";

export function saludar(nombre){
  return "hola " + nombre + ", bienvenido a aplicacion CodeRaider";
}

export function despedir(nombre){
  return "hasta pronto, " + nombre + "!CodeRider";
}

export function estadoSistema(){
  return {
    estado: "activo",
    version:"1.0.0",
    message: "sistema CodeRaider funcionando correctamente"
  };
}

export function sumar(a, b) {
  return a + b;
}

export function healthCheck() {
  return  {
    status: 'ok',
    timestamp: new Date().toISOString(),
    servicio: 'StreamFlow API',  
    version: '1.0.0'
  };
}

// ✅ factorial fuera y exportado
export function factorial(n) {
  if (n < 0) return "No existe";
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
  //hola
}