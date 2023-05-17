import UserInfo from "./context/userInfoContext";
import HelloLicat from "./Components/HelloLicat";

const App = () => {
  return (
    <UserInfo.Provider value={{ name: "Licat", id: "ImLion" }}>
      <HelloLicat />
    </UserInfo.Provider>
  );
};

export default App;
