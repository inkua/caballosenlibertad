"use client";
import React, { useState } from "react";

import { sendEmail } from "../services/emailSender.service";

const SendEmailTest = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const subject = "Prueba de Correo";
  const text = "Este es un mensaje de prueba.";
  const html = "<p>Este es un mensaje de prueba.</p>";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const response = await sendEmail(email, subject, text);
      setMessage("Correo enviado con éxito");
    } catch (error) {
      setMessage("Error al enviar el correo");
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <h1>Enviar Email de Prueba</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={isSending}>
          {isSending ? "Enviando..." : "Enviar"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SendEmailTest;
