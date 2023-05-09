import { useState } from "react";
import Login from "./Login";
import HomePage from "./HomePage";
import Modal from "./Modal";

function App() {
  const [message, setMessage] = useState("여기를 주목하세요");

  const handleOnMouseEnter = () => {
    setMessage("안녕하세요!");
  };

  const handleOnMouseLeave = () => {
    setMessage("안녕히가세요!");
  };

  const user = {
    idUser: "ses2201@weniv.com",
    pwUser: "1234",
  };
  const [logined, setLogined] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <p onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        여기에 마우스를 올려보세요!
      </p>
      <div>{message}</div>

      <br />

      {!logined ? <Login user={user} setLogined={setLogined} /> : <HomePage />}
      <button
        onClick={() => {
          setModalShow(true);
        }}
      >
        모달열기
      </button>
      {modalShow && (
        <Modal setModalShow={setModalShow}>
          <h2>홈페이지에 오신것을 환영합니다!</h2>
          <p>좋은하루 되세요</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
