
/*              lab
import { useState } from 'react'
import LabAntButtons from './lab/LabAntButtons'
import LabAntAlert from './lab/LabAntAlert'
import LabAntCard from './lab/LabAntCard'
import LabAntForm from './lab/LabAntForm'
import LabAntTable from './lab/LabAntTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LabAntButtons />
      <LabAntAlert />
      <LabAntCard />
      <LabAntForm />
      <LabAntTable />
      
    </>
  )
}

export default App */




import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AntLayout from "./components/antd/AntLayout";
import AntFooter from "./components/antd/AntFooter";
import HomeAnt from "./pages/HomeAnt";
import AboutAnt from "./pages/AboutAnt";

export default function App() {
  return (
    <BrowserRouter>
      <AntLayout>
        <Routes>
          <Route path="/" element={<HomeAnt />} />
          <Route path="/about" element={<AboutAnt />} />
        </Routes>
      </AntLayout>

      <AntFooter />
    </BrowserRouter>
  );
}