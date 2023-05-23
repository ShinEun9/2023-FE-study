describe("클릭이벤트가 일어나면 데이터를 가져와서 화면에 뿌려주는 클래스", () => {
  it("viewmanager에 textManager 객체가 잘 전달되는지 확인합니다", () => {
    const textManager = null;
    const btnEl = document.createElement("button");
    const viewerEl = document.createElement("strong");
    const inpTxt = document.createElement("input");
    // 인자가 잘 전달되는지 확인하는 함수를 만든다.
    const actual = () =>
      new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
    expect(actual).toThrowError();
  });

  it("viewmanager에 요소들이 잘 전달되는지 확인", () => {
    const textManager = new TextManager();
    const btnEl = null;
    const viewerEl = null;
    const inpTxt = null;
    // 인자가 잘 전달되는지 확인하는 함수를 만든다.
    const actual = () =>
      new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
    expect(actual).toThrowError();
  });

  const textManager = new TextManager();
  const btnEl = document.createElement("button");
  const viewerEl = document.createElement("strong");
  const inpTxt = document.createElement("input");
  const viewManager = new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
  it("click 이벤트가 발생했을 때 changeValue 함수가 실행되는지 확인", () => {
    // 특정 모듈의 함수를 감시한다
    spyOn(viewManager, "changeValue");
    btnEl.click();
    expect(viewManager.changeValue).toHaveBeenCalled();
  });

  it("changeValue 함수가 실행되고나서 updateView 함수가 실행되는지 확인", () => {
    spyOn(viewManager, "updateView");
    viewManager.changeValue();
    expect(viewManager.updateView).toHaveBeenCalled();
  });
});
