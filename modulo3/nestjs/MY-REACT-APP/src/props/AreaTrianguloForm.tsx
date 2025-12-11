import { useState } from 'react';

export default function AreaTrianguloForm(props: any) {
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");
  const [area, setArea] = useState<number | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const baseValue = parseFloat(base);
    const alturaValue = parseFloat(altura);    
    
    const areaCalculada = (baseValue * alturaValue) / 2;
    setArea(areaCalculada);
    props.onAreaCalculada(areaCalculada);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Base del triángulo:
        <input 
          type="number" 
          value={base} 
          onChange={(e) => setBase(e.target.value)} 
        />
      </label><br />
      
      <label>
        Altura del triángulo:
        <input 
          type="number" 
          value={altura} 
          onChange={(e) => setAltura(e.target.value)} 
        />
      </label><br />
      
      <button type="submit">Calcular área</button>

      {area !== null && (
        <div>El área del triángulo es: {area}</div>
      )}
    </form>
  );
}