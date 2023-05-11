import React from "react";

export default function Modal({ children, setModalShow }) {
  return (
    <>
      <article class="popup">{children}</article>
      <div
        class="dim"
        onClick={() => {
          setModalShow(false);
          document.documentElement.style.overflow = "initial";
        }}
      ></div>
    </>
  );
}
