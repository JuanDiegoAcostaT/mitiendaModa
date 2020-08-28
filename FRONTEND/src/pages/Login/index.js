import React from "react";
import { Link } from "@reach/router";
import Login from "../../components/Login/index";
import { Helmet } from "react-helmet";

export default function LoginPage({ navigate }) {
  return (
    <>
      <Helmet>
        <title>Mi Tienda | Inicio de Sesión</title>
      </Helmet>

      <section style={{ textAlign: "center" }}>
        <h2 style={{ paddingTop: "10%", paddingBottom: "0", margin: "0" }}>
          Iniciar Sesión
        </h2>
        <Login navigate={navigate} />
        <p>
          Sí no tienes una cuenta todavia, Registrate.{" "}
          <Link to="/register">
            {" "}
            <br /> Registrarse
          </Link>
        </p>
      </section>
    </>
  );
}
