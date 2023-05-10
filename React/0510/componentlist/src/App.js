import Counter from "./Components/Counter";
import MyList from "./Components/MyList";
import NavBar from "./Components/NavBar";
import ProductList from "./Components/ProductList";

function Hello(props) {
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.

  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((i) => (
    <h1 key={i}>
      안녕, {name} {i}호
    </h1>
  ));

  return <div>{numComponentsArray}</div>;
}

function App() {
  return (
    <div>
      <Hello name="eunsu" />
      <MyList />
      <ProductList />
      <Counter />
      <NavBar />
    </div>
  );
}
export default App;
