import { useState } from 'react';

export default function SimpleForm() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();    
    alert(`El resultado es: ${num1 + num2}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />

      <input
        type="text"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />

      <button type="submit">Sumar</button>
    </form>
  );
}