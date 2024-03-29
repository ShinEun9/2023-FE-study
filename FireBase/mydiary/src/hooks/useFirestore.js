import { useReducer } from "react";
import { appFireStore, timeStamp } from "../firebase/config";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

// document : firestore에 document의 생성을 요청하면 우리가 생성한 document를 반환함
// isPending: 통신중인지 아닌지 상태
// success : 요청에 대한 응답의 성공 유무
const initState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "isPending":
      return { isPending: true, document: null, success: false, error: null };
    case "addDoc":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "deleteDoc":
      return { isPending: false, document: null, success: true, error: null };
    case "editDoc":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "error":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// 우리가 데이터를 저장할 컬렉션을 인자로 함
export const useFirestore = (transaction) => {
  // response에는 우리의 요청에 대한 firestore로 부터의 응답을 저장
  // 주로 데이터의 저장 성공 또는 요청한 문서 데이터일 것이며, 때문에 객체데이터를 다루는데 유용한 useReducer를 사용함
  const [response, dispatch] = useReducer(storeReducer, initState);

  // colRef : 우리가 만들 컬랙션의 참조. 우리가 따로 컬렉션을 만들지는 않았지만, 원하는 컬렉션의 참조를 요구하기만 해도 파이어스토어는 자동으로 해당 컬렉션을 생성해줌
  const colRef = collection(appFireStore, transaction);

  // 컬렉션에 문서를 추가
  const addDocument = async (doc) => {
    dispatch({ type: "isPending" });
    try {
      const createdTime = timeStamp.fromDate(new Date());
      const docRef = await addDoc(colRef, { ...doc, createdTime }); // docRef:우리가 만들 문서의 참조
      dispatch({ type: "addDoc", payload: docRef }); // addDoc:컬렉션에 문서를 추가
    } catch (e) {
      dispatch({ type: "error", payload: e.message });
    }
  };

  // 컬렉션에서 문서를 제거합니다.
  const deleteDocument = async (id) => {
    dispatch({ type: "isPending" });
    try {
      const docRef = await deleteDoc(doc(colRef, id));
      dispatch({ type: "deleteDoc", payload: docRef });
    } catch (e) {
      dispatch({ type: "error", payload: e.message });
    }
  };

  // 컬렉션에서 문서를 수정합니다.
  const editDocument = async (id, inputs) => {
    dispatch({ type: "isPending" });
    try {
      // setDoc(doc(db, 컬렉션 이름, 아이디), 데이터)
      const docRef = await updateDoc(doc(colRef, id), {
        title: inputs.title,
        text: inputs.text,
      });
      dispatch({ type: "editDoc", payload: docRef });
    } catch (e) {
      dispatch({ type: "error", payload: e.message });
    }
  };

  return { addDocument, deleteDocument, editDocument, response };
};
