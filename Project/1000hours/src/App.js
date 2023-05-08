import React, { useEffect, useState } from "react";
import "./reset.css";
import "./App.css";

function App() {
  const [loadingShow, setLoadingShow] = useState(false);
  const [inputs, setInputs] = useState({ field: "", time: "" });
  const [results, setResults] = useState({ show: false, field: "", time: "" });
  const [modalShow, setModalShow] = useState(false);

  function handleChangeInput(e) {
    const { value, name } = e.target;

    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  }

  function handleClick() {
    if (!inputs.field || !inputs.time) {
      alert("값을 모두 입력해주세요");
      return;
    }

    setLoadingShow(true);
    setResults({ ...results, show: false });

    setTimeout(() => {
      setResults({
        show: true,
        field: inputs.field,
        time: parseInt(10000 / parseInt(inputs.time)),
      });
      setLoadingShow(false);
    }, 2000);
  }
  return (
    <div>
      <h1>
        <a href="#">
          <img src="img/title.png" alt="" />
          <span className="a11y-hidden">1만 시간의 법칙</span>
        </a>
      </h1>
      <h2>"연습은 어제의 당신보다 당신을 더 낫게 만든다."</h2>
      <h3>
        <strong>1만 시간의 법칙</strong>은
        <br /> 어떤 분야의 전문가가 되기 위해서는
        <br /> 최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </h3>

      <div className="form-box">
        <div>
          나는
          <input
            type="text"
            placeholder="예)프로그래밍"
            name="field"
            onChange={handleChangeInput}
          />
          전문가가 될 것이다.
        </div>
        <div>
          그래서 앞으로 매일 하루에
          <input
            type="number"
            placeholder="예)5시간"
            name="time"
            onChange={handleChangeInput}
          />
          시간 씩 훈련할 것이다.
        </div>
      </div>

      <div className="submit-box">
        <button type="submit" onClick={handleClick}>
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
      </div>

      <div
        className="loading-box"
        style={loadingShow ? { display: "block" } : { display: "none" }}
      >
        <img className="infinite_rotating_logo" src="/img/loading.png" alt="" />
      </div>

      <div
        className="result-box"
        style={results.show ? { display: "block" } : { display: "none" }}
      >
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

      {modalShow && (
        <>
          <article class="popup">
            <strong>화이팅!!♥♥♥</strong>
            <p>당신의 꿈을 응원합니다!</p>
            <img src="/img/licat.png" alt="" />
            <button>종료하고 진짜 훈련하러 가기 GO!GO!</button>
          </article>
          <div
            class="dim"
            onClick={() => {
              setModalShow(false);
            }}
          ></div>
        </>
      )}
    </div>
  );
}
export default App;
