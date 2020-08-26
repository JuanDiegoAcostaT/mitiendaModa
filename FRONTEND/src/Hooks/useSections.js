import { useState, useEffect } from "react";
import getSections from "../services/getSections";

export default function useSections() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSections().then((sections) => {
      setSections(sections);
      setLoading(false);
    });
  }, [setSections]);

  return { loading, sections };
}
