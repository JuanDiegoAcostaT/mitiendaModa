import React from "react";
import { Link } from "@reach/router";
import Login from "../../components/Login/index";

export default function LoginPage({ navigate }) {
  return (
    <section style={{ textAlign: 'center' }}>
      <h2 style={{ paddingTop : '10%', paddingBottom : '0', margin : '0' }} >Login</h2>
      <Login navigate={navigate} />
      <p>
        If you don't have an account, do create one{" "}
        <Link to="/register">
          {" "}
          <br /> Sign Up
        </Link>
      </p>
    </section>
  );
}
