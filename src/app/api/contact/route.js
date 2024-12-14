import { mailOptions, transporter } from "../email";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    await transporter.sendMail({
      ...mailOptions,
      subject: "Formulario de contacto",
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <div style="background-color: #00638C; color: white; text-align: center; padding: 20px;">
        <h1 style="margin: 0; font-size: 24px;">Nuevo Mensaje de Contacto</h1>
      </div>
      <div style="padding: 20px; background-color: #f9f9f9;">
        <p style="font-size: 18px; color: #333; margin-bottom: 10px;"><strong>Nombre:</strong> ${name}</p>
        <p style="font-size: 18px; color: #333; margin-bottom: 10px;"><strong>Teléfono:</strong> ${phone}</p>
        <p style="font-size: 18px; color: #333; margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #00638C; text-decoration: none;">${email}</a></p>
        <p style="font-size: 18px; color: #333; margin-bottom: 10px;"><strong>Mensaje:</strong></p>
        <p style="font-size: 16px; color: #555; background-color: #fff; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">${message}</p>
      </div>
      <div style="background-color: #00638C; color: white; text-align: center; padding: 10px;">
        <p style="margin: 0; font-size: 14px;">Este mensaje fue enviado desde el formulario de contacto de tu página web.</p>
      </div>
    </div>`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: "Error al enviar el correo" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
