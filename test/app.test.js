import { saludar, despedir, estadoSistema, sumar, factorial } from "../src/app.js";

function ejecutarPruebas() {
  let pasadas = 0;
  let fallidas = 0;
  let total = 4;

  console.log("\nINICIANDO TESTS\n");

  console.log("[1/4] saludar");
  const r1 = saludar("Rider");
  if (r1.includes("Rider")) {
    console.log("OK");
    pasadas++;
  } else {
    console.log("FAIL");
    fallidas++;
  }

  console.log("[2/4] estadoSistema");
  const actualEstado = estadoSistema();
  if (actualEstado.estado === "activo") {
    console.log("OK");
    pasadas++;
  } else {
    console.log("FAIL");
    fallidas++;
  }

  console.log("[3/4] sumar");
  const r3 = sumar(2, 3);
  if (r3 === 5) {
    console.log("OK");
    pasadas++;
  } else {
    console.log("FAIL");
    fallidas++;
  }

  console.log("[4/4] factorial");
  const r4 = factorial(5);
  if (r4 === 120) {
    console.log("OK");
    pasadas++;
  } else {
    console.log("FAIL");
    fallidas++;
  }

  console.log("\nRESULTADOS:");
  console.log("pasadas:", pasadas);
  console.log("fallidas:", fallidas);
  console.log("total:", total);
  console.log("porcentaje:", (pasadas / total) * 100 + "%");

  if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();