import { useState } from 'react';

export default function PromedioTresNotasForm() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [promedio, setPromedio] = useState<number | null>(null);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const n3 = parseFloat(nota3);

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
      const prom = (n1 + n2 + n3) / 3;
      setPromedio(prom);
    } else {
      alert('Por favor ingresa números válidos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Nota 1"
        value={nota1}
        onChange={(e) => setNota1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Nota 2"
        value={nota2}
        onChange={(e) => setNota2(e.target.value)}
      />
      <input
        type="number"
        placeholder="Nota 3"
        value={nota3}
        onChange={(e) => setNota3(e.target.value)}
      />
      <button type="submit">Calcular Promedio</button>
      {promedio !== null && (
        <div>
          <p>Promedio: <strong>{promedio.toFixed(2)}</strong></p>
          {promedio >= 3 ? (
            <p style={{ color: 'green' }}>✓ Aprobado</p>
          ) : (
            <p style={{ color: 'red' }}>✗ Reprobado</p>
          )}
        </div>
      )}
    </form>
  );
}
