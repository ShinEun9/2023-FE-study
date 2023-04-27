class VendingMachineEvents {
  constructor() {
    const vMachine = document.querySelector(".section1");
    this.balance = vMachine.querySelector(".bg-box p");
    this.itemList = vMachine.querySelector(".cola-list");

    this.inputCostEl = vMachine.querySelector("#input-money");
    this.btnReturn = vMachine.querySelector(".bg-box+.btn");
    this.btnPut = vMachine.querySelector("#input-money+.btn");
    this.btnGet = vMachine.querySelector(".btn-get");
    this.stagedList = vMachine.querySelector(".get-list");

    const myInfo = document.querySelector(".section2");
    this.myMoney = myInfo.querySelector(".bg-box strong");

    const getInfo = document.querySelector(".section3");
    this.getList = getInfo.querySelector(".getList");
    this.txtTotal = getInfo.querySelector(".total-price");
  }

  stagedItemGenerator(target) {
    const stagedItem = document.createElement("li");
    stagedItem.innerHTML = `
        <img src="./img/${target.dataset.img}" alt="">
        ${target.dataset.item}
        <strong>2<span class="a11y-hidden">개</span></strong>
    `;
    this.stagedList.appendChild(stagedItem);
  }

  bindEvent() {
    // 1. 입금 버튼 기능
    //     입금 버튼을 누르면
    //     1) 소지금 === 소지금 - 입금액
    //     2) 잔액 === 기존잔액 + 입금액
    //     3) 입금액이 소지금 보다 작으면, 경고창 출력
    //     4) 입금액이 정상적으로 입금되면 입금창은 초기화되어야한다.
    this.btnPut.addEventListener("click", () => {
      const inputCost = parseInt(this.inputCostEl.value); // 입력값
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", "")); // 소지금
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", "")); // 잔액

      this.myMoney.textContent = inputCost - myMoneyVal;

      if (inputCost) {
        // 입금액이 소지금보다 적다면
        if (inputCost <= myMoneyVal && inputCost > 0) {
          this.myMoney.textContent =
            new Intl.NumberFormat().format(myMoneyVal - inputCost) + "원";

          this.balance.textContent =
            new Intl.NumberFormat().format(
              (balanceVal ? balanceVal : 0) + inputCost
            ) + "원";
        }
        // 입금액이 소지금보다 많다면
        else {
          alert("소지금이 부족합니다.");
        }
        this.inputCostEl.value = null;
      }
    });

    // 2. 거스름돈 반환 버튼
    //     1) 반환버튼을 누르면 소지금 === 잔액 + 소지금
    //     2) 반환버튼을 누르면 잔액창이 초기화 된다.
    this.btnReturn.addEventListener("click", () => {
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", "")); // 소지금
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", "")); // 잔액

      if (balanceVal) {
        this.myMoney.textContent =
          new Intl.NumberFormat().format(balanceVal + myMoneyVal) + "원";
        this.balance.textContent = null;
      }
    });

    // 3. 자판기 장바구니 채우기
    //    1) 아이템을 누르면 잔액 === 잔액 - 아이템 가격
    //    2) 아이템 가격이 잔액보다 크다면 경고메세지를 준다.
    //    3) 아이템의 count가 -1이 된다, 아이템의 카운트가 0이되면 품절 표시를 합니다.
    this.btnsCola = document.querySelectorAll(".section1 .btn-cola");
    this.btnsCola.forEach((item) => {
      item.addEventListener("click", (event) => {
        const balanceVal = parseInt(
          this.balance.textContent.replaceAll(",", "")
        ); // 잔액
        const targetElPrice = parseInt(event.currentTarget.dataset.price);

        if (balanceVal >= targetElPrice) {
          this.balance.textContent =
            new Intl.NumberFormat().format(balanceVal - targetElPrice) + "원";
          this.stagedItemGenerator(event.currentTarget);
        } else {
          alert("입금한 금액이 부족합니다");
        }
      });
    });
  }
}

export default VendingMachineEvents;
