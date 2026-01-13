/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LabTwButtons from './lab/LabTwButtons'
import LabTwAlert from './lab/LabTwAlert'
import LabTwCard from './lab/LabTwCard'
import TrianguloAreaForm from './lab/AreTrianguloEj'
import LabTwTable from './lab/LabTwTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LabTwButtons />
      <LabTwAlert />
      <LabTwCard />
      <LabTwTable />
      <TrianguloAreaForm />
    </>
  )
}

export default App  */






/*
import React from "react";

// Importa SOLO uno a la vez:
import LabTwButtons from "./lab/LabTwButtons";
// import LabTwAlert from "./lab/LabTwAlert";
// import LabTwCard from "./lab/LabTwCard";
// import LabTwForm from "./lab/LabTwForm";
// import LabTwTable from "./lab/LabTwTable";

export default function App() {
  return <LabTwButtons />;
} */














  /*
  import React, { useState } from "react";
import LabTwButtons from "./lab/LabTwButtons";
import LabTwAlert from "./lab/LabTwAlert";
import LabTwCard from "./lab/LabTwCard";
import LabTwForm from "./lab/LabTwForm";
import LabTwTable from "./lab/LabTwTable";

type LabKey = "buttons" | "alert" | "card" | "form" | "table";

export default function App() {
  const [lab, setLab] = useState<LabKey>("buttons");

  return (
    <div>
      <div style={{ padding: 16 }}>
        <label style={{ display: "block", marginBottom: 6 }}>Selecciona LAB</label>
        <select value={lab} onChange={(e) => setLab(e.target.value as LabKey)}>
          <option value="buttons">Buttons</option>
          <option value="alert">Alert</option>
          <option value="card">Card</option>
          <option value="form">Form</option>
          <option value="table">Table</option>
        </select>
      </div>

      {lab === "buttons" && <LabTwButtons />}
      {lab === "alert" && <LabTwAlert />}
      {lab === "card" && <LabTwCard />}
      {lab === "form" && <LabTwForm />}
      {lab === "table" && <LabTwTable />}
    </div>
  );
}*/





import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TwNavbar from "./components/tw/TwNavbar";
import TwFooter from "./components/tw/TwFooter";
import HomeTW from "./pages/HomeTW";
import AboutTW from "./pages/AboutTW";

export default function App() {
  return (
    <BrowserRouter>
      <TwNavbar />

      <Routes>
        <Route path="/" element={<HomeTW />} />
        <Route path="/about" element={<AboutTW />} />
      </Routes>

      <TwFooter />
    </BrowserRouter>
  );
}