import React, { useState, useEffect } from "react";
import getCartItem from '../services/getCartItem'

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [cartItem, setCartItems] = useState([]); 
  const [jwt, setJwt] = useState(() => window.sessionStorage.getItem("jwt"));

  useEffect(() => {
    if(!jwt) return setCartItems([])
    getCartItem({ jwt }).then(setCartItems)
  }, [jwt])

  return (
    <Context.Provider value={{ cartItem, setCartItems, jwt, setJwt }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
