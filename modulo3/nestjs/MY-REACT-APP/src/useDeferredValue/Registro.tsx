import { useState, useDeferredValue } from 'react';

export default function Registro() {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [password, setPassword] = useState('');
  const [enviado, setEnviado] = useState(false);

  
  const emailD = useDeferredValue(email);
  const nombreD = useDeferredValue(nombre);
  const apellidoD = useDeferredValue(apellido);
  const passwordD = useDeferredValue(password);

  const emailValido = emailD.includes('@') && emailD.includes('.');
  const formularioValido =
    emailValido && nombreD !== '' && apellidoD !== '' && passwordD !== '';

  const enviar = () => {
    if (formularioValido) {
      setEnviado(true);
    }
  };

  return (
    <>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <p style={{ color: emailValido ? 'lightgreen' : 'salmon' }}>
        {emailD === '' ? 'Esperando...' : emailValido ? 'Email válido' : 'Email inválido'}
      </p>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
      />

      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={e => setApellido(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <br />

      <button onClick={enviar} disabled={!formularioValido}>
        Enviar
      </button>

      {enviado && (
        <p style={{ color: 'green' }}>Registro exitoso</p>
      )}
    </>
  );
}
