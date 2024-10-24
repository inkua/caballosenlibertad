import { updateSession } from "./lib";

// renuevala el tiempo de expiracion de la sesion
export async function middleware(request) {
  return await updateSession(request);
}