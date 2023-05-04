import "./App.css"; // webpack 때문에 js 파일에서 css를 불러올 수 있다.
import Menu from "./components/menu/Menu";
import NewMenu from "./components/newMenu/NewMenu.jsx";

function App() {
  const date = new Date();
  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];

  return (
    <div>
      <Menu />
      <NewMenu />

      <br />

      <h1>hi</h1>
      {100 + 1}
      {"hello world"}
      {[1, 2, 3].map((x) => x ** 2)}
      {/* {함수()}
      {변수}
      {값 ? "one" : "two"} */}

      <br />

      <div>년: {date.getFullYear()}</div>
      <div>
        월/일: {date.getMonth() + 1}/{date.getDate()}
      </div>
      <div>
        시간: {date.getHours()}시 {date.getMinutes()}분 {date.getSeconds()}초
      </div>

      <br />

      <div className="wrapper">
        <textarea readOnly maxLength={3} style={{ backgroundColor: "pink" }} />
      </div>
      <br />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {list.map((item) => (
          <li
            key={item.no}
            style={
              item.visited
                ? { backgroundColor: "blue", color: "white" }
                : { backgroundColor: "initial" }
            }
          >
            {item.area}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
