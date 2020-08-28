import React from "react";
import { Link } from "@reach/router";
import Register from "../../components/Register/index";
import { Helmet } from "react-helmet";

export default function LoginPage({ navigate }) {
  return (
    <>
      <Helmet>
        <title>Mi tienda | Registro</title>
      </Helmet>

      <section style={{ textAlign: "center" }}>
        <h2 style={{ paddingTop: "10%", paddingBottom: "0", margin: "0" }}>
          Registrarse
        </h2>
        <Register navigate={navigate} />
        <p>
          Sí ya tienes una cuenta, Inicia sesión{" "}
          <Link to="/login">
            {" "}
            <br /> Iniciar Sesión
          </Link>
        </p>
      </section>
    </>
  );
}
