import React, { Fragment, useEffect } from "react";
import M from "materialize-css";

const Navbar = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".dropdown-trigger");
    var instances = M.Dropdown.init(elems, {});
  }, []);
  return (
    <Fragment>
      <ul id="dropdown1" class="dropdown-content">
        <li>
          <a href="#!">one</a>
        </li>
        <li>
          <a href="#!">two</a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="#!">three</a>
        </li>
      </ul>
      <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">
            <i class="material-icons">cloud</i>Logo
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">
                <i class="material-icons">search</i>
              </a>
            </li>
            <li>
              <a class="dropdown-trigger" href="#!" data-target="dropdown1">
                <i class="material-icons">more_vert</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
