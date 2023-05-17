import { useState, useRef, useMemo } from "react";

const TryUseMemo2 = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const getNum = (li) => {
    console.log("렌더링");
    return li.length;
  };

  const n = useMemo(() => getNum(userInfo), [userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInfo = [...userInfo, { name, id }];
    setId("");
    setName("");
    e.target[0].focus();

    setUserInfo(newInfo); // onSubmit 이벤트가 발생될 때마다 상태값 변경됨
    console.log("렌더링-3");
  };

  const handleInputName = (e) => {
    setName(e.target.value); // onChange 이벤트가 발생될 때마다 상태값 변경됨
    console.log("렌더링-1");
  };

  const handleInputId = (e) => {
    setId(e.target.value); // onChange 이벤트가 발생될 때마다 상태값 변경됨
    console.log("렌더링-2");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={handleInputName}
        />
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          value={id}
          onChange={handleInputId}
        />

        <button type="submit">버튼</button>
      </form>
      <ul>
        {userInfo.map((value, index) => (
          <li key={index}>
            <h3>{value.name}</h3>
            <strong>@{value.id}</strong>
          </li>
        ))}
      </ul>
      <span>현재회원수: {n}</span>
    </>
  );
};

export default TryUseMemo2;
