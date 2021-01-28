import React, { Fragment, useState, useEffect, useContext } from "react";
import "../../resource/scss/page/login/login.scss";

//Importamos framer motion
import { motion } from "framer-motion";

//Importamos LOADING
import Loading from "../../components/Loading";
import Card from "./Card";

//------------------------------------------------------------------------------
const Login = (props) => {
  //===============================================
  //Inicio de USE-CONTEXT
  //===============================================
  // const { prueba } = useContext(loginContext);

  //===============================================
  //Inicio de USE-STATE variables locales
  //===============================================
  const [loading, setLoading] = useState(false);

  //===============================================
  //Inicio de USE-EFFECT
  //===============================================
  useEffect(() => {
    //===
    setTimeout(() => {
      // Creamos el primer tiempo para arranque de LOADING
      setLoading(true);
    }, 1000);
    //===
  }, []);

  //===============================================
  //Inicio de funciones
  //===============================================
  const pageVariantsLogin = {
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    out: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 2,
      },
    },
  };

  //===============================================
  //Inicio de PROGRAMA
  //===============================================
  return (
    <Fragment>
      {loading ? (
        <motion.div
          className="singin-contenedor"
          initial="out"
          animate="in"
          exit="out"
          variants={pageVariantsLogin}
        >
          <div className="card-login">
            <Card props={props}/>
          </div>
        </motion.div>
      ) : (
        <Loading />
      )}
    </Fragment>
  );
};

export default Login;
