import React from "react";
import iconEdit from "../../img/icon-edit.svg";
import iconDelete from "../../img/icon-delete.svg";
import styles from "./Home.module.css";

export default function DiaryList({ diaries }) {
  return (
    <>
      {diaries.map((item) => {
        const dateTime = new Date(item.createdTime.seconds * 1000);
        const year = dateTime.getFullYear();
        const month = String(dateTime.getMonth() + 1).padStart(2, "0");
        const date = String(dateTime.getDate()).padStart(2, "0");
        const day = dateTime.getDay();
        const result = `${year}-${month}-${date}`;
        return (
          <li key={item.id}>
            <article className={styles["diary-article"]}>
              <h3 classNameName={styles["article-title"]}>{item.title}</h3>
              <time className={styles["article-time"]} dateTime={result}>
                {result}
              </time>
              <p className={styles["article-content"]}>{item.text}</p>
              <div className={styles["button-group"]}>
                <button type="button">
                  <img src={iconEdit} alt="수정" />
                </button>
                <span></span>
                <button type="button">
                  <img src={iconDelete} alt="삭제" />
                </button>
              </div>
            </article>
          </li>
        );
      })}
    </>
  );
}
