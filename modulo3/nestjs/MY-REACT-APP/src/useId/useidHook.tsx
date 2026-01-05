import { useId } from 'react';

// Componente que muestra dos IDs únicos generados con useId
export default function UseIdHook() {
  const id = useId();
  const id2 = useId();

  return (
    <div id={id}>
      Elemento único
      <div id={id2}>Elemento único 2</div>
    </div>
  );
}
