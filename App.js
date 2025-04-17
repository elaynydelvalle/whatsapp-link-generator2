import React, { useState } from "react";

export default function App() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("Olá! Gostaria de mais informações.");
  const [link, setLink] = useState("");

  const generateLink = () => {
    const trimmedPhone = phone.replace(/\D/g, "");
    if (trimmedPhone.length < 10) {
      alert("Digite um número válido com DDD.");
      return;
    }
    const encodedMessage = encodeURIComponent(message);
    const generatedLink = `https://wa.me/${trimmedPhone}?text=${encodedMessage}`;
    setLink(generatedLink);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    alert("Link copiado!");
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>Gerador de Link do WhatsApp</h2>
      <input
        type="text"
        placeholder="Digite o número com DDD"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />
      <textarea
        placeholder="Digite a mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />
      <button onClick={generateLink} style={{ padding: 10, width: "100%" }}>
        Gerar Link Grátis
      </button>
      {link && (
        <div style={{ marginTop: 20 }}>
          <input
            type="text"
            value={link}
            readOnly
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />
          <button onClick={copyToClipboard} style={{ padding: 10, width: "100%" }}>
            Copiar Link
          </button>
        </div>
      )}
    </div>
  );
}