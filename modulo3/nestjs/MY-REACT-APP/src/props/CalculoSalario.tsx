import { useState } from "react";

// Calcula salario semanal con horas y tarifa
export default function CalculoSalario() {
  const [horas, setHoras] = useState(0);
  const [tarifa, setTarifa] = useState(0);
  const salario = horas * tarifa;

  return (
    <div>
      <label>
        Horas:
        <input
          type="number"
          value={horas}
          onChange={(e) => setHoras(Number(e.target.value))}
          min={0}
        />
      </label>
      <br />
      <label>
        Tarifa por hora:
        <input
          type="number"
          value={tarifa}
          onChange={(e) => setTarifa(Number(e.target.value))}
          min={0}
        />
      </label>
      <br />
      <p>Salario semanal: <strong>{salario.toFixed(2)}</strong></p>
    </div>
  );
}
