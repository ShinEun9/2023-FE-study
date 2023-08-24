import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home.js";

ReactDOM.hydrate(<Home />, document.querySelector("#root")); // 수분을 공급하다. 클라이언트에 html을 전달함. 껍데기만 보여주고 있음. react event를 작동시키기 위한 (브라우저가 알아먹을 수 있는?) react 코드를 전달해야함. hydrate라는 메서드가 그 역할을 한다.
