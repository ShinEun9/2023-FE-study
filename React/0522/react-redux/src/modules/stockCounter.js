// 액션 생성함수
export const sale = () => {
  return { type: "SALE" };
};

export const sold = () => {
  return { type: "SOLD_OUT" };
};

// 초기 값
const initialState = {
  message: "판매중",
};

// 리듀서
const stockReducer = (state = initialState, action) => {
  console.log(action);
  console.log(action.type);
  console.log(state);
  switch (action.type) {
    case "SALE":
      return {
        ...state,
        message: "판매중",
      };
    case "SOLD_OUT":
      return {
        ...state,
        message: "완판",
      };
    default:
      return state;
  }
};

export default stockReducer;
