import AreaTrianguloForm from "./AreaTrianguloForm";

export default function ParentAreaTrianguloForm() {
  const handleAreaCalculation = (area: number) => {
    console.log("Área calculada:", area);
  };

  return <AreaTrianguloForm onAreaCalculada={handleAreaCalculation} />;
}