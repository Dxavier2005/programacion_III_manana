import { useState } from 'react';

export default function AreaTriangulo() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState<number | null>(null);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const b = parseFloat(base);
    const h = parseFloat(altura);

    if (!isNaN(b) && !isNaN(h) && b > 0 && h > 0) {
      const areaCalculada = (b * h) / 2;
      setArea(areaCalculada);
    } else {
      alert('Por favor ingresa valores válidos mayores a 0');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Base"
        value={base}
        onChange={(e) => setBase(e.target.value)}
      />
      <input
        type="number"
        placeholder="Altura"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <button type="submit">Calcular Área</button>
      {area !== null && (
        <div>
          <p>Área del triángulo: <strong>{area.toFixed(2)}</strong> unidades²</p>
        </div>
      )}
    </form>
  );
}
