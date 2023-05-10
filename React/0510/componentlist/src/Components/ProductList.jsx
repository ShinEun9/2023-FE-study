import { useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ]);

  // React는 state 함수호출의 일관성을 유지하기 위해서 내부적으로 동일한 내용의 state함수 호출이 여러번 반복되면 하나의 하나의 업데이트로 취급하여 처리한다.

  const handleDeleteBtnClick = (id) => {
    const newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  };
  return (
    <ul>
      {products.map((item, index) => {
        return (
          <li key={item.id}>
            <p>
              {index + 1} {item.title}
            </p>
            <span>{item.price}원</span>
            <button
              onClick={() => {
                handleDeleteBtnClick(item.id);
              }}
            >
              삭제
            </button>
          </li>
        );
      })}
    </ul>
  );
}
