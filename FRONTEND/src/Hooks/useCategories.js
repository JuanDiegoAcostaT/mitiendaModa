import { useState, useEffect } from "react";
import getCategories from "../services/getCategories";

export default function useCategories({ i }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryToUse = i || 1

  useEffect(() => {
    setLoading(true);
    getCategories({ i  : categoryToUse}).then((categories) => {
      setCategories(categories);
      setLoading(false);
    });
  }, [setCategories, i]);

  return { loading, categories };
}
