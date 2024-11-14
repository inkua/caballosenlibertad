import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email } = await request.json();

  const contrasena = Math.random().toString(36).slice(2);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
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
