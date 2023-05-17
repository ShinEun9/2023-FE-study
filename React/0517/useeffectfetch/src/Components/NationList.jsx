import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";

const Item = styled.div`
  margin: 60px auto;

  ul {
    padding: 10px;
  }
  li {
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 10px;
    list-style: none;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  }

  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default function NationList() {
  const [nationLists, setNationLists] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/nations");

  // const getDataPromise = () => {
  //   fetch("http://localhost:3000/nations")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("네트워크 응답에 문제가 있다.");
  //       }
  //       return response.json();
  //     })
  //     .then((json) => {
  //       console.log(json);
  //       setNationLists(json);
  //     })
  //     .catch((err) => {
  //       console.error("데이터를 가져오는데 문제가 발생: ", err);
  //     });
  // };

  // const nationLists = useMemo(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error("네트워크 응답에 문제가 있다.");
  //       }
  //       const data = await response.json();
  //       return data;
  //     } catch (err) {
  //       console.log(new Error(err));
  //     }
  //   };

  //   getData();
  // }, [url]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("네트워크 응답에 문제가 있다.");
        }
        const data = await response.json();
        setNationLists(data);
      } catch (err) {
        console.log(new Error(err));
      }
    };

    getData();
  }, [url]);

  return (
    <Item>
      <h2>나라 목록</h2>
      <ul>
        {nationLists.map((nation) => {
          return (
            <li key={nation.id}>
              <h3>나라 이름 : {nation.title}</h3>
              <p>인구 수 : {nation.population}</p>
            </li>
          );
        })}
      </ul>
      <div>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/nations?population=300");
          }}
        >
          유럽 목록
        </button>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/nations");
          }}
        >
          전체 목록
        </button>
      </div>
    </Item>
  );
}
