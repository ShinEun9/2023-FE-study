const $titleInput = document.querySelector("#diary-title");
const $contentInput = document.querySelector("#diary-content");
const $form = document.querySelector("form");
const $diaryList = document.querySelector(".diary-list");
const $time = document.querySelector(".main-time");

let diaryArray = [];

$form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = $titleInput.value;
  const content = $contentInput.value;
  let date = new Date();
  date = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  if (!title || !content) {
    alert("내용을 모두 입력해주세요");
    return;
  }

  diaryArray.unshift({ title, content, date });
  draw();
  localStorage.setItem("diary", JSON.stringify(diaryArray));

  $titleInput.value = ""; // input 값 비우기
  $contentInput.value = "";
});

function draw() {
  $diaryList.innerHTML = `<h2 class="a11y-hidden">일기목록</h2>`; // 초기화

  diaryArray.forEach((item, index) => {
    const { title, date, content } = item;
    const ul = document.createElement("ul");
    ul.innerHTML = `<li>
    <article class="diary-article">
      <h3 class="article-title">${title}</h3>
      <time class="article-time" datetime=${date.slice(0, 10)}>
        ${date}
      </time>
      <p class="article-content">
        ${content}
      </p>
      <div class="button-group">
        <button type="button"> <img src="./img/icon-edit.svg" alt="수정"></button>
        <span></span>
        <button onclick="clickButton(event)" value=${index} type="button"> <img src="./img/icon-delete.svg" alt="삭제"></button>
      </div>
    </article>
  </li>`;

    $diaryList.appendChild(ul);
  });
}

function clickButton(event) {
  diaryArray = diaryArray.filter(
    (_, index) => index !== parseInt(event.currentTarget.value)
  );
  draw();
  localStorage.setItem("diary", JSON.stringify(diaryArray));
}

function initialize() {
  let time = new Date();
  time = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
  $time.textContent = time;
  $time.setAttribute("dateTime", time);
  let lsContent = localStorage.getItem("diary");
  diaryArray = lsContent ? JSON.parse(localStorage.getItem("diary")) : [];
  draw();
}

initialize();
