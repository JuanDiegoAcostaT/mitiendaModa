import React from "react";
import {Link} from "@reach/router";

export default function index({ image, id }) {
  return (
    <div className="">
      <Link to={`product/${id}`}>
        <img src={`https://api.tissini.app/${image}`} />
      </Link>
    </div>
  );
}
