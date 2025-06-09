import React, { useState } from "react";

const PopupForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Zapisano: ${name}, ${email}`);
    onClose();
  };

  return (
    <div className="popup" style={{ display: "flex" }}>
      <form onSubmit={handleSubmit}>
        <h3>Formularz zapisu</h3>
        <input type="text" placeholder="Imię i nazwisko" required value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Adres e-mail" required value={email} onChange={e => setEmail(e.target.value)} />
        <button type="submit">✔️ Zapisz się</button>
        <button type="button" onClick={onClose}>Anuluj</button>
      </form>
    </div>
  );
};

export default PopupForm;
