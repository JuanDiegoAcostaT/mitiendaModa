import React from "react";
import Section from "../Section/index";

export default function index({ sections }) {
  return (
    <div>
      {sections.map(({ name, image }) => (
        <Section name={name} image={image} />
      ))}
    </div>
  );
}
