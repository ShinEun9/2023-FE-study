// 명령팔레트에서 minify
class Sausage {
  constructor(item1, item2) {
    this.item1 = item1;
    this.item2 = item2;
  }
  taste() {
    console.log(`${this.item1}맛과 ${this.item2}맛이 난다`);
  }
}

class FireSausage extends Sausage {
  constructor(item1, item2) {
    super(item1, item2);
    this.item3 = "불";
  }

  // 오버로딩(다른언어에서)
  // taste(item1) { }
  // taste(item1, item2) { }
  // taste(item1,item2,item3){}

  // 오버라이딩
  taste() {
    console.log(`${this.item3}맛이 나기 시작한다`);
  }
}

const firesausage = new FireSausage("소고기", "파");
firesausage.taste();
