const path = require("path");

module.exports = {
  target: "node", // 웹팩이 빌드할 때 노드환경에서 돌아가도록 빌드해야하는 구나를 알게됨.

  entry: path.resolve("./src/index.js"),

  output: {
    filename: "bundle.js",
    path: path.resolve("./build"),
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0", // 최신 js문법도 사용할 수 있도록 만들어주는 옵션
            ["env", { target: { browsers: ["last 2 versions"] } }], // babel을 어떤 환경에서 구동시킬 것인가. 최신 브라우저에서 2버전 전까지도 지원하겠다. 라는 뜻
          ],
        },
      },
    ],
  },
};
