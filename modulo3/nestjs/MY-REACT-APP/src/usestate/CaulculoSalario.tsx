import { useState } from 'react';

export default function SalarioSemanal() {
  const [horas, setHoras] = useState('');
  const [tarifa, setTarifa] = useState('');
  const [salario, setSalario] = useState<number | null>(null);

  const calcular = () => {
    setSalario(Number(horas) * Number(tarifa));
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Horas trabajadas"
        value={horas}
        onChange={e => setHoras(e.target.value)}
      />

      <br />

      <input
        type="number"
        placeholder="Tarifa por hora"
        value={tarifa}
        onChange={e => setTarifa(e.target.value)}
      />

      <br />

      
      <button onClick={calcular}>
        Calcular
      </button>

      {salario !== null && <p>Salario: {salario}</p>}
    </div>
  );
}
