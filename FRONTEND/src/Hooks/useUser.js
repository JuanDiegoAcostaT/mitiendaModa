import { useContext, useCallback, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";
import addCartItem from "../services/addCartItem";
import deleteCartItem from '../services/deleteCartItem'

export default function useUser() {
  const { jwt, setJwt, cartItem , setCartItems } = useContext(Context);
  const [state, setstate] = useState({
    loading: false,
    error: false,
  });

  const login = useCallback(
    ({ username, password }) => {
      setstate({
        loading: true,
        error: false,
      });
      loginService({ username, password })
        .then((jwt) => {
          window.sessionStorage.setItem("jwt", jwt);
          setstate({
            loading: false,
            error: false,
          });
          setJwt(jwt);
        })
        .catch((err) => {
          window.sessionStorage.removeItem("jwt");
          setstate({ loading: false, error: true });
          console.log(err);
        });
    },
    [setJwt]
  );

  const addCart = useCallback(
    ({ id }) => {
      addCartItem({ id, jwt })
        .then((cart) => setCartItems(cart))
        .catch((err) => console.log(err));
    },
    [jwt, setCartItems]
  );
  
  const deleteCart = useCallback(
    ({ id }) => {
      deleteCartItem({ id, jwt })
        .then((cart) => setCartItems(cart))
        .catch((err) => console.log(err));
    },
    [jwt, setCartItems]
  );


  const logout = useCallback(() => {
    window.sessionStorage.removeItem("jwt");
    setJwt(null);
  }, [setJwt]);

  return {
    addCart,
    deleteCart,
    cartItem,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    isError: state.error,
    login,
    logout,
  };
}
