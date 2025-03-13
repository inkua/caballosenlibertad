import { getAdminByEmail } from "@/DAO/admins.db";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const secretKey = process.env.TOKEN_SECRET;
const key = new TextEncoder().encode(secretKey);

//creacion del JWT
export async function encrypt(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(key);
}

//verifica el token y lo desencripta
export async function decrypt(input) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

// Get token from session
export async function getToken() {
  try {
    const token = request.cookies.get("session")?.value;
    if (token) {
      return token
    }
    return false
  } catch (e) {
    console.error("couldn't get Token - lib", e)
    return false
  }
}


// Validate token
export async function validateToken(token) {
  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"],
    });

    if (!payload) {
      return false
    }
    return true

  } catch (e) {
    console.error("Invalid token", e)
    return false
  }
}

export async function login(user) {

  // creacion de sesion
  const expires = new Date(Date.now() + 60 * 60 * 1000);
  const session = await encrypt({ user, expires });

  // guardo la sesion en una cookie
  cookies().set("session", session, { expires, httpOnly: true });
}

export async function logout() {
  cookies().set("session", "", { expires: new Date(0) });
}


export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresco la sesión para que no expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 60 * 60 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}

export async function validateAdmin() {
  try {
    const session = await getSession()
    const admin = await getAdminByEmail(session.user.email)
    return admin
  } catch (e) {
    console.error('Error validateAdmin - lib: ', e);
    return false
  }
}

export async function isRootAdmin(token) {
  try {
    const data = await decrypt(token)
    if (!data) { return false }

    const admin = await getAdminByEmail(data.user.email)
    if (!admin) { return false }

    if (admin.type !== "root") { return false }

    return true
  } catch (e) {
    console.error('Error validateAdmin - lib: ', e);
    return false
  }
}
