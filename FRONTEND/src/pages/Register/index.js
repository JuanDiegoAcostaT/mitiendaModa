import React from "react";
import { Link } from "@reach/router";
import Register from "../../components/Register/index";

export default function LoginPage({ navigate }) {
  return (
    <section style={{ textAlign: "center" }}>
      <h2 style={{ paddingTop: "10%", paddingBottom: "0", margin: "0" }}>
        Register
      </h2>
      <Register navigate={navigate} />
      <p>
        If you already have an account, get Login{" "}
        <Link to="/login">
          {" "}
          <br /> Login
        </Link>
      </p>
    </section>
  );
}
