import React, { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import DiaryItem from "./DiaryItem";

export default function DiaryList({ diaries }) {
  return (
    <>
      {diaries.map((item) => {
        return (
          <li key={item.id}>
            <DiaryItem item={item} />
          </li>
        );
      })}
    </>
  );
}
