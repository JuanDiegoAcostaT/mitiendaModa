import React from "react";
import useSections from "../../Hooks/useSections";

import Categories from "../../components/Categories/index";

export default function index() {
  const { sections } = useSections();

  return (
    <div>
      <Categories sections={sections} />
    </div>
  );
}
