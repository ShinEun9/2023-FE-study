const arrPic = [
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/weirdseed.png",
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/pulin.png",
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/pulin.png",
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/pulin.png",
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/pulin.png",
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/pulin.png",
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/pulin.png",
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/pulin.png",
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/pulin.png",
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/pulin.png",
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/pulin.png",
];

const center = document.querySelector(".list-item");

arrPic.forEach((item) => {
  const elLi = document.createElement("li");
  elLi.innerHTML = `<img src="${item}" alt="">`;
  center.appendChild(elLi);
});

const items = document.querySelectorAll(".list-item li");

const radius = (items[0].offsetWidth * items.length) / 3.14 / 2;

items.forEach((item, index) => {
  item.style.transform = `rotateY(${
    (360 / items.length) * index
  }deg) translateZ(${radius}px)`;
});

const angle = 360 / items.length;
let currAngle = 0;

// clientX는 브라우저크기의 수평좌표계
// screenX는 사용자가 보고있는 전체 화면의 수평좌표계
document.addEventListener("click", function (event) {
  console.log(window.innerWidth / 2, event.screenX);

  if (window.innerWidth / 2 < event.clientX) {
    // 화면 오른쪽을 눌렀을 경우
    currAngle += angle;
  } else {
    currAngle -= angle;
  }
  center.style.transform = `translate(-50%, -50%) rotateY(${currAngle}deg)`;
});
