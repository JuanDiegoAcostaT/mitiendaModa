import React from "react";
import { Router } from "@reach/router";
import { Global, css } from "@emotion/core";
import { UserContextProvider } from "./context/UserContext";

import Header from "./components/Header/index";
import NavBar from "./components/NavBar/index";
import Cart from "./pages/Cart";
import Catalogue from "./pages/Catalogue";
import Categories from "./pages/Categories";
import Products from "./pages/Products/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from './pages/Error/index';

export default function App() {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap");

          :root {
            --main-color: #6722c2;
            --secondary-color: #461782;
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

          .container {
            background: #fefefe;
            height: 100vh;
            margin: 0 auto;
            max-width: 600px;
            overscroll-behavior: none;
            width: 100%;
          }

          html {
            margin: 0;
            padding: 0;
          }
          h1 {
            margin: 0;
            padding: 0;
          }

          .o-header {
            background-color: inherit;
            position: fixed;
            top: 0;
            z-index: 1;
            width: 100%;
          }
        `}
      />
      <UserContextProvider>
        <div className="o-header">
          <Header />
        </div>
        <div className="container">
          <Router>
            <Categories path="/" />
            <Catalogue path="/catalogue/:i" />
            <Products path="/catalogue/:i/product/:id" />
            <Cart path="/cart" />
            <Login path="/login" />
            <Register path="/register" />
            <Error default />
          </Router>
        </div>
        <NavBar />
      </UserContextProvider>
    </>
  );
}
