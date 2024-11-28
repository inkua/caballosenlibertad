import axios from "axios";

export async function sendEmail(email, subject, text, html) {
  try {
    const response = await axios.post("/api/correos", {
      email,
      subject,
      text,
      html,
    });
    return response.data;
  } catch (error) {
    console.error("Error al enviar el correo:", error.message);
    throw new Error(
      error.response?.data?.message || "No se pudo enviar el correo"
    );
  }
}
