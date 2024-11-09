async function enviarNuevoCorreoContraseña(email, contrasena) {
  const response = await fetch("/api/enviarCorreoContraseña", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, contrasena }), 
  });

  if (response.ok) {
    console.log("Correo enviado con éxito");
  } else {
    console.error("Error al enviar el correo");
  }
}

export default enviarNuevoCorreoContraseña;
