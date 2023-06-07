import { createContext, useReducer } from "react";

const AuthContext = createContext(); // context 객체를 생성

const AuthContextProvider = ({ children }) => {
  const authReducer = (state, action) => {
    switch (action.type) {
      case "login":
        //전개구문을 이용해 객체의 user 값을 업데이트 합니다.
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(authReducer, { user: null });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
      {/* children이 state와 dispatch를 사용할 수 있다...? */}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
