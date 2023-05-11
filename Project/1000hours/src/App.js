import React, { useEffect, useState } from "react";
import "./reset.css";
import "./App.css";
import Form from "./Components/Form";
import Modal from "./Components/Modal";
import LoadingBox from "./Components/LoadingBox";
import ResultBox from "./Components/ResultBox";

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

  function handleClick(e) {
    e.preventDefault();

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
    }, 1800);
  }

  return (
    <section>
      <h1 class="title">
        <a href="#">
          <img src="img/title.png" alt="" />
          <span className="a11y-hidden">1만 시간의 법칙</span>
        </a>
      </h1>
      <p class="message1">"연습은 어제의 당신보다 당신을 더 낫게 만든다."</p>
      <p class="message2">
        <strong>1만 시간의 법칙</strong>은<br />
        어떤 분야의 전문가가 되기 위해서는 <br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </p>

      <Form handleChangeInput={handleChangeInput} handleClick={handleClick} />
      {loadingShow && <LoadingBox />}

      {results.show && (
        <ResultBox results={results} setModalShow={setModalShow} />
      )}

      {modalShow && (
        <Modal setModalShow={setModalShow}>
          <strong>화이팅!!♥♥♥</strong>
          <p>당신의 꿈을 응원합니다!</p>
          <img src="/img/licat.png" alt="" />
          <button>종료하고 진짜 훈련하러 가기 GO!GO!</button>
        </Modal>
      )}

      <div class="footer">
        <img src="/img/logo.png" alt="" />
        <p>
          ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
          <br />
          수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
        </p>
      </div>
    </section>
  );
}
export default App;
