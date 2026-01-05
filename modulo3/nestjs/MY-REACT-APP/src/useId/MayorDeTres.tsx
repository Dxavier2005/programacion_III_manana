import { useState } from 'react';

export default function MayorDeTres() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');
  const [mayor, setMayor] = useState<number | null>(null);

  const calcularMayor = () => {
    setMayor(Math.max(Number(n1), Number(n2), Number(n3)));
  };

  return (
    <div>
      <h2>Mayor de tres numeros </h2>

      <input
        type="number"
        placeholder="Número 1"
        value={n1}
        onChange={e => setN1(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Número 2"
        value={n2}
        onChange={e => setN2(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Número 3"
        value={n3}
        onChange={e => setN3(e.target.value)}
      />
      <br />

      <button onClick={calcularMayor}>
        Calcular mayor
      </button>

      {mayor !== null && (
        <p> El numero mayor es: <b>{mayor}</b></p>
      )}
    </div>
  );
}
