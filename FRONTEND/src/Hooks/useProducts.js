import { useState, useEffect } from "react";
import getProducts from "../services/getProducts";

export default function useProducts({ id }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      setIsLoading(true);
      getProducts({ id })
        .then((productos) => {
            setProducts(productos);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    },
    [getProducts, id]
  );

  return { products, isLoading };
}
