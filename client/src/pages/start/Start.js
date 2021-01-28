import React, { Fragment, useEffect } from "react";
import "../../resource/scss/page/start/start.scss";
//Importamos framer motion
import { motion } from "framer-motion";

import M from "materialize-css";

const Start = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
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
      {/* <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariantsLogin}
      > */}
      {/* <nav>mundo</nav> */}
      <header>ssss</header>
      <main>
        <ul id="slide-out" class="sidenav sidenav-fixed">
          <li>
            <div class="user-view">
              <div class="background">
                <img src="https://i.pinimg.com/originals/24/9b/5f/249b5fbc978a8aa6b5c8ee863d42b6fa.png" />
              </div>
              <a href="#user">
                <img
                  class="circle"
                  src="https://i.pinimg.com/originals/24/9b/5f/249b5fbc978a8aa6b5c8ee863d42b6fa.png"
                />
              </a>
              <a href="#name">
                <span class="white-text name">John Doe</span>
              </a>
              <a href="#email">
                <span class="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <li>
            <a href="#!">
              <i class="material-icons">cloud</i>First Link With Icon
            </a>
          </li>
          <li>
            <a href="#!">Second Link</a>
          </li>
          <li>
            <div class="divider"></div>
          </li>
          <li>
            <a class="subheader">Subheader</a>
          </li>
          <li>
            <a class="waves-effect" href="#!">
              Third Link With Waves
            </a>
          </li>
        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
      </main>
      <footer>
        marcelo poma cale lenny laura valencia son la mejor pareja posible
      </footer>

      {/* </motion.div> */}
    </Fragment>
  );
};

export default Start;
