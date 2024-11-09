import { createTransport } from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, contrasena } = req.body;

    const transporter = createTransport({
      host: process.env.SMTP_HOST || "sandbox.smtp.mailtrap.io",
      port: Number(process.env.SMTP_PORT) || 2525,
      auth: {
        user: process.env.SMTP_USER || "2263da2f6b8562",
        pass: process.env.SMTP_PASS || "17371f92c78aad",
      },
    });

    const mailOptions = {
      from: "no-reply@tuapp.com",
      to: email,
      subject: "Bienvenido al equipo de Caballos en libertad",
      text: `Hola, \n\nTu nueva contraseña es: ${contrasena}\n\nPor favor, usa este link para cambiarla: [Link de Cambio de Contraseña].`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Correo enviado:", info.messageId);
      res.status(200).json({ message: "Correo enviado con éxito" });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      res.status(500).json({ error: "Error al enviar el correo" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
