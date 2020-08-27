import React from "react";

import ReactSlidy from "react-slidy";

export default function index({ images }) {
  const slidesToRender = images.map(({ url }, index) => (
    <Image key={index} num={index} url={url} />
  ));

  return <ReactSlidy>{slidesToRender}</ReactSlidy>;
}

function Image({ url }) {
  return <img width="100%" src={`https://api.tissini.app/${url}`} alt="" />;
}
