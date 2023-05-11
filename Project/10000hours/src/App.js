import { useState } from "react";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
import Footer from "./Components/footer/Footer";
import Modal from "./Components/modal/Modal";

function App() {
  const [modalShow, setModalShow] = useState(false);
  function modalClose() {
    setModalShow(false);
  }

  function modalOpen() {
    setModalShow(true);
  }

  return (
    <div id="app">
      <Header />
      <Main modalOpen={modalOpen} />
      <Footer />
      {modalShow && <Modal modalClose={modalClose} />}
    </div>
  );
}
export default App;
