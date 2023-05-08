import Hello from "./Components/Hello";
import Time from "./Components/Time";
import HelloProps from "./Components/HelloProps";
import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";
function App() {
  return (
    <div>
      <Hello name="개리" />
      <Time />

      <br />
      <HelloProps
        name="jaehyun"
        age={25}
        someFunc={() => "awesome!!!"}
        someJSX={<img src="https://picsum.photos/id/237/200/300" />}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }}
      />

      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />

      <div>
        <ColorText color="red" />
        <ColorText color="green" />
        <ColorText color="blue" />
      </div>
    </div>
  );
}
export default App;
