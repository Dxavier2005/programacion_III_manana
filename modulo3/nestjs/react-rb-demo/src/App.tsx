/*import React from "react";

// Importa SOLO uno a la vez:
import LabRbButtons from "./lab/LabRbButtons";
// import LabRbAlert from "./lab/LabRbAlert";
// import LabRbCard from "./lab/LabRbCard";
// import LabRbForm from "./lab/LabRbForm";
// import LabRbTable from "./lab/LabRbTable";

export default function App() {
  return <LabRbButtons />;
}
*/




/*
import React, { useState } from "react";
import LabRbButtons from "./lab/LabRbButtons";
import LabRbAlert from "./lab/LabRbAlert";
import LabRbCard from "./lab/LabRbCard";
import LabRbForm from "./lab/LabRbForm";
import LabRbTable from "./lab/LabRbTable";

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

      {lab === "buttons" && <LabRbButtons />}
      {lab === "alert" && <LabRbAlert />}
      {lab === "card" && <LabRbCard />}
      {lab === "form" && <LabRbForm />}
      {lab === "table" && <LabRbTable />}
    </div>
  );
}
  */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RBNavbar from "./components/rb/RBNavbar";
import RBFooter from "./components/rb/RBFooter";
import HomeRB from "./pages/HomeRB";
import AboutRB from "./pages/AboutRB";

export default function App() {
  return (
    <BrowserRouter>
      <RBNavbar />

      <Routes>
        <Route path="/" element={<HomeRB />} />
        <Route path="/about" element={<AboutRB />} />
      </Routes>

      <RBFooter />
    </BrowserRouter>
  );
}