const path = require("path"); // nodejs 문법, path라는 모듈, 우리가 따로 설치할 필요없음, 경로 문법이 운영체제마다 다른 경우도 있는데 path가 통일 시켜준다.

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve("./src/app.js"),
  },
  output: {
    filename: "[name].js", // entry에 적은 main이라는 key값이 name으로 들어온다
    path: path.resolve("./dist/"),
  },
  module: {
    rules: [
      // 여기서 로더를 추가할 수 있음
      //   {
      //     // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$ 는 .js 로 끝나는 모든 파일을 의미
      //     test: /\.js$/,
      //     use: [
      //       // 위와 일치하는 패턴의 파일이 전달될 로더를 설정
      //       path.resolve("./myLoader.js"),
      //     ],
      //   },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
