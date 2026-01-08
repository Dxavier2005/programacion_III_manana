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

/*
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

export default App; */

/*

import BusquedaDiferidaDeferred from "./useDeferredValue/BusquedaDiferidaDeferred";
import TablaDiferida from "./useDeferredValue/TablaDiferida";
import GraficoDiferido from "./useDeferredValue/GraficoDiferido";
import ValidacionEmail from "./useDeferredValue/ValidacionEmail";
import Registro from "./useDeferredValue/Registro";

function App() {
  return (
    <div className="App">

      <section>
        <h2>Busqueda Diferida Deferred</h2>
        <BusquedaDiferidaDeferred />
      </section>

      <section>
        <h2>Tabla Diferida</h2>
        <TablaDiferida />
      </section>

      <section>
        <h2>Grafico Diferido</h2>
        <GraficoDiferido />
      </section>

      <section>
        <h2>Validacion Email</h2>
        <ValidacionEmail />
      </section>

      <section>
        <h2>Registro</h2>
        <Registro />
      </section>




    </div>
    
  );
}

export default App; */

/*
import FormularioBasico from "./formularios/formularioBasico";
import FormularioRHF from "./formularios/FormularioRHF";
import FormularioZod from "./formularios/FormularioZod";

export function App() {
  return (
    <div className="App">



      <section>
        <h2>Formulario Basico</h2>
        <FormularioBasico />
      </section>
      <section>
        <h2>Formulario React Hook Form</h2>
        <FormularioRHF />
      </section>
      <section>
        <h2>Formulario Zod</h2>
        <FormularioZod />
      </section>



    </div>
    
  );
}*/


import ListaPosts from "./fetch/ListaPosts";
import ListaUsuariosPaginado from "./formularios/ListaUsuariosPaginado";

export function App() {
  return (
    <div className="App">



      <section>
        <h2>Lista de Posts</h2>
        <ListaPosts />
      </section>
      <section>
        <h2>Lista de Usuarios Paginado</h2>
        <ListaUsuariosPaginado />
      </section>
      <section>
        <h2>Fetch Usuarios Hook</h2>
      </section>





    </div>
    
  );
}