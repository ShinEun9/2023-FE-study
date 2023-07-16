import React from "react";

export default function FirstChild({ value }) {
  console.log("FirstChild rendering");

  return <div>{value}</div>;
}
