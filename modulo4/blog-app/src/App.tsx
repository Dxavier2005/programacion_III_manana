import { useRoutes } from "react-router-dom";
import { appRoutes } from "./routes";
import type { JSX } from "react";

export default function App(): JSX.Element {
  const routes = useRoutes(appRoutes);
  return <>{routes}</>;
}

/*import BasicButtons from "./lab/BasicsButton";
import BasicTable from "./lab/BasicTable";
import ColorSwitches from "./lab/colorSwitches";
import TestMUI from "./lab/TestMUI";


export default function App(): JSX.Element {
  return <>
  <TestMUI />
  <ColorSwitches />
  <BasicButtons />
  <BasicTable />;
  </>
}*/
