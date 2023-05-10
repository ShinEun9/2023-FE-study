import React from "react";

export default function ItemGenerator(props) {
  return (
    <ul>
      {props.datas.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.date}</p>
          </li>
        );
      })}
    </ul>
  );
}
