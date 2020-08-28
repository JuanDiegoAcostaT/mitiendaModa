import React, { useState, useCallback } from "react";
import useUser from "../../hooks/useUser";
import Modal from "../Modal/index";
import Login from "../Login/index";
import { Add } from "./styles";

export default function index({ id }) {
  const { isLogged, addCart, cartItem=[], deleteCart } = useUser();
  const [showModal, setShowModal] = useState(false);

  const isAdded = cartItem.some((cartItemId) => cartItemId === id);

  const hanldeClick = () => {
    if (!isLogged) return setShowModal(true);
    isAdded ? deleteCart({ id }) : addCart({ id });
  };

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleLogin = () => {
    setShowModal(false);
  };

  const [label, emoji] = isAdded
    ? ["Remove Gif from favorites", "Quitar Del Carrito ❌"]
    : ["Add Gif to favorites", "Agregar Al Carrito 🛒"];

  return (
    <>
      <Add
        bgColor={isAdded ? "var(--main-color)" : "var(--contrast-color)"}
        bgHoverColor={isAdded ? "var(--contrast-color)" : "var(--main-color)"}
        onClick={hanldeClick}
      >
        <span role="img" aria-label={label}>
          {emoji}
        </span>
      </Add>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login onLogin={handleLogin} />
        </Modal>
      )}
    </>
  );
}
