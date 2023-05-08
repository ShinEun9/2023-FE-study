import React, { Fragment } from "react";
import "./FragmentTest.css";

const items = [
  { id: 1, name: "Apple", desc: "빨간건 사과" },
  { id: 2, name: "Banana", desc: "바나나는 길어" },
  { id: 3, name: "Cherry", desc: "체리는 비싸" },
];
function ItemList() {
  const itemList = items.map(({ id, name, desc }, index) => {
    return (
      <React.Fragment key={id}>
        <div>{index}</div>
        <dt>{name}</dt>
        <dd>{desc}</dd>
      </React.Fragment>
    );
  });

  return <dl>{itemList}</dl>;
}

function App() {
  return (
    <div>
      <div>hello world</div>

      {/* fragment에 속성을 넣을 수 있으나, 스타일이 안먹는다. 
        어차피 화면에 안나타나는 요소이기 때문
        보통 리스트 아이템의 key 값을 설정할 때 많이 사용
        */}
      <React.Fragment className="my-fragment">
        <h1>리엑트프레그먼트</h1>
        <p>테스트입니다!</p>
      </React.Fragment>
      <ItemList />
    </div>
  );
}
export default App;
