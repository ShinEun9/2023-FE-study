const path = require("path");

module.exports = {
  entry: path.resolve("./src/client.js"),

  output: {
    filename: "bundle.js",
    path: path.resolve("./public"),
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
