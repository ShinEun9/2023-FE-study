import React from "react";
import "./DisplayMood.css";

export default function DisplayMood(props) {
  return <div className="container"> 기분이: {props.mood}😊</div>;
}
