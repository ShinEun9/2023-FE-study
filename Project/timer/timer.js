const inputs = document.querySelectorAll("input");
const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
let timer;
let totalSeconds;

inputs.forEach((item) => {
  item.addEventListener("keydown", () => {
    const startImg = document.querySelector("svg.start > path");
    const resetImg = document.querySelector("svg.reset > path");

    startBtn.style.setProperty("background", "#5180FF");
    startBtn.style.setProperty("color", "white");
    startImg.setAttribute("fill", "white");

    resetBtn.style.setProperty("background", "#FB7099");
    resetBtn.style.setProperty("color", "white");
    resetImg.setAttribute("stroke", "white");
  });
});

function startTimer() {
  var hours = parseInt(document.getElementById("hours").value);
  var minutes = parseInt(document.getElementById("minutes").value);
  var seconds = parseInt(document.getElementById("seconds").value);
  totalSeconds = hours * 3600 + minutes * 60 + seconds;
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (totalSeconds <= 0) {
    clearInterval(timer);
    alert("타이머가 종료되었습니다.");
    return;
  }
  var hours = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  var seconds = totalSeconds - hours * 3600 - minutes * 60;
  inputs[0].value = hours ? (hours > 9 ? hours : "0" + hours) : "00";

  inputs[1].value = minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00";

  inputs[2].value = seconds > 9 ? seconds : "0" + seconds;

  totalSeconds--;
}

function resetTimer() {
  clearInterval(timer);
  inputs[0].value = "00";
  inputs[1].value = "00";
  inputs[2].value = "00";
}

function stopTimer() {
  clearInterval(timer);
}

startBtn.addEventListener("click", () => {
  if (startBtn.classList.contains("active")) {
    stopTimer();
    toStartBtn();
  } else {
    startBtn.innerHTML = `
          <img src="./img/icon-stop.svg" alt="pause" />
          PAUSE
          `;

    startBtn.style.setProperty("background", "#15C2B8");

    startTimer();
    startBtn.classList.add("active");
  }
});

function toStartBtn() {
  startBtn.innerHTML = `<svg class="start" width="11" height="15" viewBox="0 0 11 15" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
              d="M0 13.9635V1.03645C0 0.205761 0.954138 -0.262757 1.61145 0.245165L9.97598 6.70867C10.4941 7.109 10.4941 7.89091 9.97598 8.29124L1.61145 14.7547C0.954137 15.2627 0 14.7941 0 13.9635Z"
              fill="#617199" />
          </svg>
          START
          `;
  const startImg = document.querySelector("svg.start > path");
  startImg.setAttribute("fill", "white");
  startBtn.style.setProperty("background", "#5180FF");

  startBtn.classList.remove("active");
}

resetBtn.addEventListener("click", () => {
  toStartBtn();
  resetTimer();
});
