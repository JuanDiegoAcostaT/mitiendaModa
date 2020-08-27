import { useState, useEffect } from "react";
import getCategories from "../services/getCategories";

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategories().then((categories) => {
      setCategories(categories);
      setLoading(false);
    });
  }, [setCategories]);

  return { loading, categories };
}
