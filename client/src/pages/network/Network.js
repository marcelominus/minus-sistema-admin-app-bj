import React, { Fragment } from "react";
import { motion } from "framer-motion";

const Network = () => {
  const pageVariantsLogin = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "-100%",
    },
  };
  return (
    <Fragment>
      <motion.div
        className="singin-contenedor"
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariantsLogin}
      >
        LENNY LAURA VALENCIA ARUQUIPA DESDE EL NETWORK
      </motion.div>
    </Fragment>
  );
};

export default Network;
