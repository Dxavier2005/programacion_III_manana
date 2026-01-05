/*
import "./App.css";
import LoginWhitlimit from "./usestate/LoginWhitlimit";
import AreaTriangulo from "./usestate/AreaTriangulo";
import CalculoSalario from "./props/CalculoSalario";
import UseIdHook from "./useId/useidHook";


function App() {
  return (
    <div className="App">
      <h1>Demo useState</h1>

      <LoginWhitlimit />

      <section>
        <h2>Área de un triángulo</h2>
        <AreaTriangulo />
      </section>

      <section>
        <h2>Salario semanal</h2>
        <CalculoSalario />
      </section>

      <section>
        <h2>ID único</h2>
        <UseIdHook />
      </section>
    </div>
  );
}

export default App; */


import UseIdHook from "./useId/useidHook";
import LoginCampos from "./useId/LoginCampos";
import MayorDeTres from "./useId/MayorDeTres";
import { BuscadorUseTransition } from "./useTransition/buscadorUseTransition";
import { TabsUseTransition } from "./useTransition/tabUseTransition";
import { GaleriaDiferida } from "./useTransition/galeriaDiferida";

function App() {
  return (
    <div className="App">

      <section>
        <h2>ID único</h2>
        <UseIdHook />
      </section>
      <section>
        <h2>Login Campos</h2>
        <LoginCampos />
      </section>
      <section>
        <h2>Mayor de tres numeros</h2>
        <MayorDeTres />
      </section>
    
      <section>
        <h2>Buscador UseTransition</h2>
        <BuscadorUseTransition />
      </section>
      <section>
        <h2>Tabs UseTransition</h2>
        <TabsUseTransition />
      </section>
      <section>
        <h2>Galeria Diferida</h2>
        <GaleriaDiferida />
      </section>
    </div>
    
  );
}

export default App; 