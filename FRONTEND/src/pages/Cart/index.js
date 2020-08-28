import React from "react";
import useUser from "../../hooks/useUser";
import Add from "../../components/Add";
import { Link } from "@reach/router";
import { CartItem, Title, Button } from "./styles";
import { Helmet } from "react-helmet";


export default function index() {
  const { cartItem, isLogged } = useUser();

  const handleClick = () =>{
    alert('!PAGAR¡')
  }

  return (
    <>
    <Helmet>
      <title>Mi Tienda | Shopping Cart</title>
    </Helmet>
      {!isLogged ? (
        <h2 style={{ paddingTop: "100px" }}>
          Por Favor <Link to="/login">Inicia Sesión</Link> para empezar a
          comprar 🛒
        </h2>
      ) : (
        <Title>
          <h2 >Products 🛒</h2>{" "}
          <Button onClick={handleClick} >Pagar Ahora!</Button>
        </Title>
      )}
      {cartItem.map((item) => (
        <CartItem key={item} >
          <p>{item}</p> <Add id={item} />
        </CartItem>
      ))}
    </>
  );
}
