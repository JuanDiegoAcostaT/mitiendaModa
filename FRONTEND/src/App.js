import React from "react";
import { Router } from "@reach/router";
import { Global, css } from "@emotion/core";

import Header from "./components/Header/index";
import NavBar from "./components/NavBar/index";

import Cart from "./pages/Cart";
import Catalogue from "./pages/Catalogue";
import Categories from "./pages/Categories";

export default function App() {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap");

          :root {
            --main-color: #6722c2;
            --secondary--color: #461782;
            --contrast-color: #230c42;
            --light-color: #9f25cf;

            --white-color: #ffffffff;
            --black-color: #000000;
          }

          body {
            font-family: "Manrope", sans-serif;
            margin: 0;
            padding: 0;
          }

          html {
            margin: 0;
            padding: 0;
          }
          h1 {
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Header />
      <Router>
        <Categories path="/" />
        <Catalogue path="/catalogue" />
        <Cart path="/cart" />
      </Router>
      <NavBar />
    </>
  );
}
