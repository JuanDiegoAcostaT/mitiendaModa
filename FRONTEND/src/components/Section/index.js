import React from "react";

export default function index({ image, name }) {
  return (
    <div  className="">
      <h1>{name}</h1>
      <img src={`https://api.tissini.app/${image}`} alt="" />
    </div>
  );
}
