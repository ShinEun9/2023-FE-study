import { useState } from "react";
import "./EventForm.css";

export default function EventForm({ addData }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: Math.floor(Math.random() * 10000),
      title,
      date,
    };

    resetForm();
    addData(formData);
  };
  return (
    <form className="event-form">
      <label>
        <strong>Event Title : </strong>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </label>
      <label>
        <strong>Event date : </strong>
        <input
          value={date}
          type="date"
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
      </label>

      <button onClick={handleSubmit}>제출하기</button>
      <button type="reset" onClick={resetForm}>
        초기화하기
      </button>
    </form>
  );
}
