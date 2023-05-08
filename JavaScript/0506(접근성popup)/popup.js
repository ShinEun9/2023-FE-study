const article = document.querySelector(".popup");
const openBtn = document.querySelector(".btn-open");
const closeBtn = article.querySelector(".btn-close");
const firstEl = article.querySelector("a"); // 첫번째 포커스 요소
const dim = document.querySelector(".dim");

function openPopup() {
  article.classList.add("active");
}
function closePopup() {
  article.classList.remove("active");
}

openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
closeBtn.addEventListener("keydown", function (e) {
  // console.log(e.key)
  if (!e.shiftKey && e.key === "Tab") {
    // tab키만 눌렀을 때
    console.log("tab만 누름");
    e.preventDefault();
    firstEl.focus();
  }
});

firstEl.addEventListener("keydown", function (e) {
  if (e.shiftKey && e.key === "Tab") {
    // shift + tab 키 눌렀을 때
    e.preventDefault();
    closeBtn.focus();
  }
});

dim.addEventListener("click", closePopup);

// esc눌렀을 때
// wai area
// 툴팁
