import { useState } from 'react';

export default function SimpleForm() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    
    alert(`El promedio es: ${(n1 + n2 + n3)/3}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nota 1"
        value={n1}
        onChange={(e) => setN1(Number(e.target.value))}
      />

      <input
        type="text"
        placeholder="Nota 2"
        value={n2}
        onChange={(e) => setN2(Number(e.target.value))}
      />

      <input
        type="text"
        placeholder="Nota 3"
        value={n3}
        onChange={(e) => setN3(Number(e.target.value))}
      />

      <button type="submit">Promedio</button>
    </form>
  );
}