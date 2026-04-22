export const VERSION = "1.1.2";
export const RELEASE_DATE = "2026-04-15";

export function saludar(nombre) {
  return "hola " + nombre + ", bienvenido a aplicacion CodeRaider";
}

export function despedir(nombre) {
  return "hasta pronto, " + nombre + "! CodeRaider";
}

export function estadoSistema() {
  return {
    estado: "activo",
    version: VERSION,
    message: "sistema CodeRaider funcionando correctamente"
  };
}

export function sumar(a, b) {
  return a + b;
}

export function healthCheck() {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    servicio: 'StreamFlow API',
    version: VERSION
  };
}

export function factorial(n) {
  if (n < 0) throw new Error("No existe factorial de numeros negativos");
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}