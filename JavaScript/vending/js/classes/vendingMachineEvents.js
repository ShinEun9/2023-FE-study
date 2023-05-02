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
    this.getList = getInfo.querySelector(".get-list");
    this.txtTotal = getInfo.querySelector(".total-price");
  }

  // 콜라버튼 클릭 시 장바구니에 콜라를 넣는 함수
  stagedItemGenerator(target) {
    const stagedItem = document.createElement("li");
    stagedItem.dataset.item = target.dataset.item;
    stagedItem.dataset.price = target.dataset.price;

    stagedItem.innerHTML = `
        <img src="./img/${target.dataset.img}" alt="">
        ${target.dataset.item}
        <strong>1<span class="a11y-hidden">개</span></strong>
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
        const targetEl = event.currentTarget;
        const targetElPrice = parseInt(targetEl.dataset.price);
        const stagedListitem = this.stagedList.querySelectorAll("li");
        let isStaged = false;

        if (balanceVal >= targetElPrice) {
          this.balance.textContent =
            new Intl.NumberFormat().format(balanceVal - targetElPrice) + "원";

          for (const item of stagedListitem) {
            // 클릭한 콜라의 이름과 장바구니에 있던 콜라의 이름이 같은지 비교!
            if (targetEl.dataset.item === item.dataset.item) {
              // 이미 장바구니에 콜라가 있다면 카운트 + 1
              item.querySelector("strong").firstChild.textContent =
                parseInt(item.querySelector("strong").firstChild.textContent) +
                1;

              isStaged = true;
              break;
            }
          }
          // 처음 선택했을 경우에만 장바구니에 콜라를 생성
          if (!isStaged) {
            this.stagedItemGenerator(event.currentTarget);
          }

          // 자판기 콜라 개수 차감
          targetEl.dataset.count--;

          if (parseInt(targetEl.dataset.count) === 0) {
            // 닫는 태그의 바로 앞
            targetEl.insertAdjacentHTML(
              "beforeEnd",
              `<strong class="soldout">
            <span>품절</span>
           </strong>`
            );

            targetEl.disabled = "disabled";
          }
        } else {
          alert("입금한 금액이 부족합니다");
        }
      });
    });

    // 4. 획득버튼 기능
    //   1) 장바구니에 있는 음료수 목록이 획득한 음료 목록으로 이동
    //   2) 획득한 음료의 모든 금액을 합하여 총 금액을 업데이트 함
    this.btnGet.addEventListener("click", () => {
      const itemStagedList = this.stagedList.querySelectorAll("li");
      const itemGetList = this.getList.querySelectorAll("li");
      // 이미 획득했는가
      let isGet = false;
      let totalPrice = 0;

      for (const itemStaged of itemStagedList) {
        for (const itemGet of itemGetList) {
          // 장바구니의 콜라가 이미 획득한 목록에 있다면
          if (itemStaged.dataset.item === itemGet.dataset.item) {
            itemGet.querySelector("strong").firstChild.textContent =
              parseInt(itemGet.querySelector("strong").firstChild.textContent) +
              parseInt(
                itemStaged.querySelector("strong").firstChild.textContent
              );
            isGet = true;
            break;
          }
        }
        if (!isGet) {
          this.getList.append(itemStaged);
        }
      }
      this.stagedList.innerHTML = null;

      // 획득한 음료 리스트를 순회하면서 총금액을 계산한다.
      this.getList.querySelectorAll("li").forEach((itemGet) => {
        totalPrice +=
          parseInt(itemGet.dataset.price) *
          parseInt(itemGet.querySelector("strong").firstChild.textContent);
      });

      this.txtTotal.textContent = `총 금액: ${new Intl.NumberFormat().format(
        totalPrice
      )}원`;
    });
  }
}

export default VendingMachineEvents;
