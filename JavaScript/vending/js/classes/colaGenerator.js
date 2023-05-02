class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector(".section1 .cola-list");
  }

  async setup() {
    const response = await this.loadData();
    this.colaFactory(response);
  }

  // 콜라 정보를 가져옴
  async loadData() {
    try {
      const response = await fetch("./items.json");
      if (response.ok) {
        // 서버에 응답코드가 200~299인 경우
        return response.json();
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // 받은 콜라 정보를 바탕으로 화면에 콜라를 그림
  colaFactory(data) {
    const frag = document.createDocumentFragment();
    data.forEach((el) => {
      const item = document.createElement("li");
      const itemTemplate = `<button class="btn-cola" type="button" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
      <img class="cola-img" src="./img/${el.img}" alt="">
      <span class="cola-name">${el.name}</span>
      <strong class="cola-price">${el.cost}원</strong>
    </button>`;

      item.innerHTML = itemTemplate;
      frag.append(item);
    });
    this.itemList.append(frag);
  }
}

export default ColaGenerator;
