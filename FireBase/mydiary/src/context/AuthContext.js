import { createContext, useReducer, useEffect } from "react";
import { appAuth } from "../firebase/config";

const AuthContext = createContext(); // context 객체를 생성

const AuthContextProvider = ({ children }) => {
  const authReducer = (state, action) => {
    switch (action.type) {
      case "login":
        //전개구문을 이용해 객체의 user 값을 업데이트 합니다.
        return { ...state, user: action.payload };
      case "logout":
        return { ...state, user: null };
      case "authIsReady":
        return { ...state, user: action.payload, isAuthReady: true };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthReady: false,
  });
  console.log("context : ", state);

  useEffect(() => {
    // onAuthStateChanged : 유저의 인증정보 변화를 관찰하는 함수
    // onAuthStateChanged 함수는 Unsubscribe 함수(더 이상 유저의 변화를 관찰하지 않도록 하는 함수)를 반환함
    // 우리는 새로고침 후 초기에 딱 한번 실행하면 되기 때문에 이후에는 구독을 중지
    const unsubscribe = appAuth.onAuthStateChanged(function (user) {
      dispatch({ type: "authIsReady", payload: user });
    });

    return () => {
      unsubscribe(); // 클린업 함수로 구독을 취소하도록
    };
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
      {/* children이 state와 dispatch를 사용할 수 있다...? */}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
