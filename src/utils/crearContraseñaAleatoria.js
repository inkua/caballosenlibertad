import { randomBytes } from "crypto";

function generarContrasenaSegura(longitud = 12) {
  return randomBytes(longitud).toString("base64").slice(0, longitud);
}

export default generarContrasenaSegura;
