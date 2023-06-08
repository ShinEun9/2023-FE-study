import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import styles from "./Home.module.css";

export default function DiaryForm({ uid }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { addDocument, response } = useFirestore("diary");

  const handleData = (event) => {
    if (event.target.id === "diary-title") {
      setTitle(event.target.value);
    } else if (event.target.id === "diary-content") {
      setText(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDocument({
      uid,
      title,
      text,
    });
  };

  useEffect(() => {
    if (response.success) {
      console.log(response);
      setTitle("");
      setText("");
    }
  }, [response.success]);

  return (
    <form onSubmit={handleSubmit}>
      <label className="a11y-hidden" htmlFor="diary-title">
        제목
      </label>
      <input
        onChange={handleData}
        className="input-style"
        type="text"
        id="diary-title"
        placeholder="제목"
      />
      <label className="a11y-hidden" htmlFor="diary-content">
        일기 내용
      </label>
      <textarea
        onChange={handleData}
        className={styles["diary-textarea"]}
        id="diary-content"
        placeholder="오늘의 비밀은 무엇인가요?"
      ></textarea>

      <button className="black-btn" type="submit">
        작성하기
      </button>
    </form>
  );
}
