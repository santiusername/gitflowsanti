export const APP_NAME = "CodeRaider";
export const VERSION = "1.1.2";
export const RELEASE_DATE = "2026-04-15";

export function saludar(nombre) {
  return `Hola ${nombre}, bienvenido a ${APP_NAME}`;
}

export function despedir(nombre) {
  return `Hasta pronto, ${nombre}!`;
}

export function estadoSistema() {
  return {
    estado: "activo",
    version: VERSION,
    message: `${APP_NAME} funcionando correctamente`
  };
}

export function sumar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Los parámetros deben ser números");
  }
  return a + b;
}

export function healthCheck() {
  return {
    status: "ok",
    version: VERSION,
    releaseDate: RELEASE_DATE,
    timestamp: new Date().toISOString(),
    servicio: "StreamFlow API"
  };
}