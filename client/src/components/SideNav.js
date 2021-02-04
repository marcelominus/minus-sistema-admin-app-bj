import React, { Fragment, useEffect } from "react";
import "../resource/scss/components/sidenav.scss";
import M from "materialize-css";

import WOW from "wowjs";

const SideNav = () => {
  //==================================================
  //
  //==================================================
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
    //
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  //================================================================
  //
  //================================================================
  return (
    <Fragment>
      <ul id="slide-out" class="sidenav sidenav-fixed">
        <li>
          <div class="user-view">
            <div class="background">
              <img src="https://static1.squarespace.com/static/5717c93120c6470ae10b52de/5720e03ae321403c9458c76f/576c2b59ff7c50b7fcb69e30/1482531941026/Psycome1Header.png?format=1500w" />
            </div>
            <a href="#user">
              <img
                class="circle"
                src="https://static.wikia.nocookie.net/psycome/images/8/8b/244153.jpg"
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
          <a href="#!">First Sidebar Link ddfd</a>
        </li>
        <li>
          <a href="#!">Second Sidebar Link</a>
        </li>
      </ul>
      <a
        href="#"
        data-target="slide-out"
        class="sidenav-trigger hide-on-med-and-up"
      >
        <i class="material-icons">menu</i>
      </a>
    </Fragment>
  );
};

export default SideNav;
