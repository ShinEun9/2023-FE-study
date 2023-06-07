import { useState } from "react";
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useContext";

// 회원 가입을 진행하는 훅
export const useSignup = () => {
  const [error, setError] = useState(null); // 에러정보 저장
  const [isPending, setIsPending] = useState(false); // 현재 서버와의 통신상태를 저장
  const { dispatch } = useAuthContext();

  const signup = (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        if (!user) {
          // 회원 정보를 정상적으로 받지 못하면 실패
          throw new Error("회원가입에 실패했습니다.");
        }

        // 회원가입이 완료되고 유저 정보에 닉네임을 업데이트함, import 받아야합니다.
        updateProfile(appAuth.currentUser, { displayName })
          .then(() => {
            dispatch({ type: "login", payload: user });
            setError(null);
            setIsPending(false);
          })
          .catch((err) => {
            setError(err.message);
            setIsPending(false);
            console.log(err.message);
          });
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      });
  };
  return { error, isPending, signup };
};
