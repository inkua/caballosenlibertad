import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email, contrasena } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2263da2f6b8562",
      pass: "17371f92c78aad",
    },
  });

  const mailOptions = {
    from: "no-reply@tuapp.com",
    to: email,
    subject: "Bienvenido al equipo de Caballos en libertad",
    text: `Hola,\n\nTu nueva contraseña es: ${contrasena}\n\nPor favor, usa este link para cambiarla: [Link de Cambio de Contraseña].`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info.messageId);
    return NextResponse.json({ message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error al enviar el correo:", error.message, error.stack);
    return NextResponse.json(
      { error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
