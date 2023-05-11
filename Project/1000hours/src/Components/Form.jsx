import React from "react";

export default function Form({ handleChangeInput, handleClick }) {
  return (
    <form className="form-box">
      <div>
        나는
        <label htmlFor="field" className="a11y-hidden">
          분야
        </label>
        <input
          id="field"
          name="field"
          type="text"
          placeholder="예)프로그래밍"
          //   value=""
          onChange={handleChangeInput}
        />
        전문가가 될 것이다.
      </div>
      <div>
        그래서 앞으로 매일 하루에
        <label htmlFor="time" className="a11y-hidden">
          시간
        </label>
        <input
          id="time"
          name="time"
          type="number"
          placeholder="예)5시간"
          // value=""
          onChange={handleChangeInput}
        />
        시간 씩 훈련할 것이다.
      </div>

      <div className="submit-btn-box">
        <button type="submit" onClick={handleClick}>
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
      </div>
    </form>
  );
}
