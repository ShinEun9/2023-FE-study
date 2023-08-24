import React from "react";

const Home = () => {
  return (
    <div>
      <h1>this is Eunsu!!</h1>
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        버튼입니다
      </button>
    </div>
  );
};

export default Home;
