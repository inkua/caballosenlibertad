"use client";
import React, { useState } from "react";
import axios from "axios";

const SendEmailTest = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  /**
   * Handle the form submission to send an email.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form event.
   *
   * @return {Promise<void>} - A promise that resolves when the email is sent.
   */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await axios.post("/api/correos", { email });
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
