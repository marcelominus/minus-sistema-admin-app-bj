import React, { Fragment } from "react";
// Importamos las ROUTAS
import Route from "./routes/Routes";
//Importamos las ROUT
import { useLocation } from "react-router-dom";

const App = () => {
  //Invocamos LOCATION para saber en que direccion se encuentra el navegador
  // const location = useLocation();
  // console.log(location);
  return (
    <Fragment>
      <Route />
    </Fragment>
  );
};

export default App;
