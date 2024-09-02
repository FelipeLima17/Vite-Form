import "./form.css";
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [ownerName, setOwnerName] = useState('');
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ownerName || !petName || !petAge) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    const formData = { ownerName, petName, petAge };
    onSubmit(formData);
    setOwnerName('');
    setPetName('');
    setPetAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome do Proprietário:
        <input
          type="text"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
        />
      </label>
      <label>
        Nome do Animal:
        <input
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
      </label>
      <label>
        Idade do Animal:
        <input
          type="number"
          value={petAge}
          onChange={(e) => setPetAge(e.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
