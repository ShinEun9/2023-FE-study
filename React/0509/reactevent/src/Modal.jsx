import React from "react";
import "./Modal.css";

export default function Modal(props) {
  return (
    <div
      onClick={() => {
        props.setModalShow(false);
      }}
      class="modal-backdrop"
    >
      <article class="modal">
        {props.children}
        <button
          onClick={() => {
            props.setModalShow(false);
          }}
        >
          닫기
        </button>
      </article>
    </div>
  );
}
