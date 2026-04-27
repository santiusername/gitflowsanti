import { saludar, despedir, estadoSistema, sumar } from "../src/app.js";

function ejecutarPruebas() {
  let pasadas = 0;
  let fallidas = 0;

  const r1 = saludar("Rider");
  if (r1.includes("Rider")) {
    console.log("✔ test 1: saludar");
    pasadas++;
  } else {
    console.log("❌ test 1:", r1);
    fallidas++;
  }

  const estado = estadoSistema();
  if (estado.estado === "activo") {
    console.log("✔ test 2: estadoSistema");
    pasadas++;
  } else {
    console.log("❌ test 2:", estado);
    fallidas++;
  }

  const r3 = sumar(2, 3);
  if (r3 === 5) {
    console.log("✔ test 3: sumar");
    pasadas++;
  } else {
    console.log("❌ test 3:", r3);
    fallidas++;
  }

  const r4 = despedir("Rider");
  if (r4.includes("Rider")) {
    console.log("✔ test 4: despedir");
    pasadas++;
  } else {
    console.log("❌ test 4:", r4);
    fallidas++;
  }

  console.log(`\nResultados: ${pasadas} pasadas, ${fallidas} fallidas`);
  if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();