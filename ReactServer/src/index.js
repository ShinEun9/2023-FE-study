// const express = require("express");
// const app = express();
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("./components/Home").default;

import express from "express";
const app = express();
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./components/Home.js";

app.use(express.static("public")); // express.static(): 지정해둔 디렉토리에 있는 정적파일을 클라이언트로 제공해라라는 메서드

app.get("/", (req, res) => {
  //   const content = renderToString(<Home />);
  //   res.send(content);

  const html = `
    <html>
        <head></head>
        <body>
            <div id="root"></div>
            <script src="bundle.js"></script>
        </body>
    </html>
  `;
  //   res.send(content);
  res.send(html);
}); // 사용자가 루트 주소로 요청하면 콜백함수를 실행한다.

app.listen(3000, () => {
  console.log("3000번 포트가 열렸습니다!");
}); // 서버가 포트를 연다.

// root container안에 react 컴포넌트들을 실제 dom으로 바꿔서 넣는다.
// 서버사이드 렌더링은 완성된 html을 바로 보낸다. 이 html파일을 만드는 작업을 서버에서 한다. 서버사이드 리액트 같은 경우 완성된 html을 html파일로 보내지 않고 string으로 보낸다.

// ! 클라이언트에서 리액트 작동과정:
// index.js를 웹팩을 통해 build한다. => 그 과정에서 webpack이 jsx를 만나면 babel에게 넘겨주고, build를 한다. => build 폴더 안에 js파일 하나가 만들어진다. 그렇다면 서버에서는 어떻게 할까?

// ! 서버사이드: node.js도 jsx를 모른다.
// 클라이언트사이드와 마찬가지로 서버사이드도 jsx를 해석하는 과정이 필요하다.
// nodejs 환경이 이해하는 문법으로 jsx가 바뀌어야한다. -> webpack과 babel, webpack.server.js 파일 생성해서 webpack 설정함

// package.json 파일에 scripts내부에 "build-server": "webpack --config webpack.server.js" 추가 => webpack을 구동시킬 때 webpack.server.js를 참고해라

// node build/bundle.js
// network 탭을 까보면 document가 넘어오고 있다. -> 문자열: 서버가 클라이언트에게 문자열을 넘김, 브라우저가 문자열을보고 html로 해석해서 화면에 띄워줌

// "build-server": "webpack --config webpack.server.js --watch" -> 수정사항 생길 때마다 자동으로 빌드해라
// "start-server": "nodemon --watch build --exec node build/bundle.js" -> nodemon --watch build : build폴더를 감시해라 & --exec node build/bundle.js: node build/bundle.js 명령어를 실행시켜라
// 안에있는 파일을 수정하면 build가 바뀔거고(build-server 명령어 때문에), build파일이 바뀌면 서버를 다시 시작한다(start-server 명령어 때문에)

// nodejs 에서 12버전부터 클라이언트 사이드 js의 모듈 문법을 지원을 하지만, js 파일 확장자를 mjs로 바꿔야한다.(modulejs)
