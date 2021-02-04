import React, { Fragment, useEffect } from "react";
//Importamos framer motion
import { motion } from "framer-motion";

import SideNav from "../../components/SideNav";
import Navbar from "../../components/Navbar";

const Start = () => {
  //****************************************************************
  //
  useEffect(() => {}, []);
  //===============================================
  //Inicio de funciones
  //===============================================
  const pageVariantsLogin = {
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
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

  return (
    <Fragment>
      {/* ------------------------- ********** ------------------------- */}
      <SideNav />

      {/* ------------------------- ********** ------------------------- */}
      <header>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={pageVariantsLogin}
        >
          <Navbar />
        </motion.div>
      </header>
      {/* ------------------------- ********** ------------------------- */}
      <main>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={pageVariantsLogin}
        >
          main
        </motion.div>
      </main>
      {/* ------------------------- ********** ------------------------- */}
      <footer>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={pageVariantsLogin}
        >
          Footer
        </motion.div>
      </footer>

      {/* ------------------------- ********** ------------------------- */}
    </Fragment>
  );
};

export default Start;
