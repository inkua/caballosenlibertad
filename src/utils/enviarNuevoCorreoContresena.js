const nodemailer = require("nodemailer");

async function enviarCorreoContrasena(email, contrasena) {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
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
    text: `Hola, \n\nTu nueva contraseña es: ${contrasena}\n\nPor favor, usa este link para cambiarla: [Link de Cambio de Contraseña].`,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("Correo de prueba enviado:", info.messageId);
}

module.exports = enviarCorreoContrasena;
