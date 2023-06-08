import React, { useMemo } from "react";
import styles from "./Home.module.css";
import DiaryForm from "./DiaryForm";
import DiaryList from "./DiaryList";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

const getDate = () => {
  const today = new Date();
  let year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let date = String(today.getDate()).padStart(2, "0");
  return `${year}.${month}.${date}`;
};

export default function Home() {
  const date = useMemo(() => {
    return getDate();
  }, []);

  const { user } = useAuthContext();
  const { documents, error } = useCollection("diary", ["uid", "==", user.uid]);

  return (
    <div className={styles["container"]}>
      <main className={styles["diary-main"]}>
        <h2 className={styles.heart}>{date}의 비밀일기</h2>
        <DiaryForm uid={user.uid} />
      </main>

      <section>
        <h2 className="a11y-hidden">일기목록</h2>
        <ul>
          {error && <strong>{error}</strong>}
          {documents && <DiaryList diaries={documents} />}
        </ul>
      </section>
    </div>
  );
}
