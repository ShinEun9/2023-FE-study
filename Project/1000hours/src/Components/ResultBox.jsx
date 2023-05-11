import React from "react";

export default function ResultBox({ results, setModalShow }) {
  return (
    <div className="result-box">
      <div>
        당신은
        <strong>{results.field}</strong>전문가가 되기 위해서
      </div>
      <div>
        대략 <strong>{results.time}</strong>일 이상 훈련하셔야 합니다! :)
      </div>

      <div class="btns-box">
        <button
          type="button"
          onClick={() => {
            document.documentElement.style.overflow = "hidden";
            setModalShow(true);
          }}
        >
          훈련하러 가기 GO!GO!
        </button>
        <button
          className="white"
          type="button"
          onClick={() => {
            alert("url이 복사되었습니다");
          }}
        >
          공유하기
        </button>
      </div>
    </div>
  );
}
