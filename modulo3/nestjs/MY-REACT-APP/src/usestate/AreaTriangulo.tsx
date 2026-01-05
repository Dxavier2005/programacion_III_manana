import { useState } from 'react';

export default function AreaTriangulo() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState<number | null>(null);

  const calcularArea = () => {
    const baseNum = parseFloat(base);
    const alturaNum = parseFloat(altura);
    if (baseNum > 0 && alturaNum > 0) {
      setArea((baseNum * alturaNum) / 2);
    } else {
      alert('Ingresa valores válidos');
    }
  };

  return (
    <div>
      <h3>Calcular el area de un triangulo</h3>

      <input
        type="number"
        placeholder="Base"
        value={base}
        onChange={e => setBase(e.target.value)}
      /><br />

      <input
        type="number"
        placeholder="Altura"
        value={altura}
        onChange={e => setAltura(e.target.value)}
      /><br />

      <button onClick={calcularArea}>
        Calcular área
      </button>

      {area !== null && (
        <p> El área del triángulo es: <b>{area}</b></p>
      )}
    </div>
  );
}
