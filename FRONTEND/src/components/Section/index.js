import React from "react";

import Products from "../Products/index";

export default function index({ image, products = [] }) {
  return (
    <div  className="">
      <img src={`https://api.tissini.app/${image}`} alt="" />
      <Products products={products} />
    </div>
  );
}
