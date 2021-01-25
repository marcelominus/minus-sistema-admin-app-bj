import React, { Fragment, useState, useEffect } from "react";
import "../../resource/scss/page/login/Card.scss";

//Importamos herramientas de materialize
import { Row, Col, TextInput } from "react-materialize";
//
import M from "materialize-css";
//----------------------------------------------------------------------------
const Card = () => {
  //===============================================
  //
  //===============================================
  const [dataform, setDataForm] = useState({
    user: "",
    pass: "",
  });
  const onChangeData = (e) => {
    setDataForm({
      ...dataform,
      [e.target.name]: e.target.value,
    });
  };
  const { user, pass } = dataform;
  //******************************************** */
  const onClickData = (e) => {
    e.preventDefault();
    //Saneamiento de palabras
    setDataForm({
      user: user.toLowerCase(),
      pass: pass.toLowerCase(),
    });
    //
    if (user.trim() === "" || pass.trim() === "") {
      M.toast({ html: "Formulario Vacio, Revise los Datos" });
    } else {
    }
  };
  //===============================================
  //
  //===============================================
  useEffect(() => {}, []);

  return (
    <Fragment>
      <div className="container">
        <Row className="contenedor-login-form">
          <Col s={12} className="center-align">
            <img
              src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
              alt=""
              className="responsive-img "
            />
          </Col>
          <Col className="red lighten-3" s={12}>
            <div className="titulo-login">Login</div>
            <div className="subtitulo-login">Ingrese su Nuevo Usuario</div>
          </Col>
          <Col s={12} className="input-field">
            <div>Usuario</div>
            <input
              placeholder="Ingrese el Usuario"
              type="text"
              name="user"
              onChange={onChangeData}
            />
            <div>Password</div>
            <input
              placeholder="Ingrese el Password"
              type="text"
              name="pass"
              onChange={onChangeData}
            />
          </Col>
          <Col s={12} className="boton-login center-align">
            <button
              className="waves-effect waves-light btn"
              onClick={onClickData}
            >
              Ingresar
            </button>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Card;
