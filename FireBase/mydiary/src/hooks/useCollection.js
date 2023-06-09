import { appFireStore } from "../firebase/config";
import { useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";

export const useCollection = (transaction, myQuery) => {
  // 문서들의 데이터를 관리
  const [documents, setDocuments] = useState(null);
  // 에러 상태를 관리
  const [error, setError] = useState(null);

  // collection에 변화가 생길때마다 실행. 때문에 항상 최신의 컬랙션 상태를 반환 받을 수 있음
  useEffect(() => {
    let q;
    if (myQuery) {
      // 전개구문을 이용해 where("uid", "==", "user.uid") 을 작성
      q = query(
        collection(appFireStore, transaction),
        where(...myQuery),
        orderBy("createdTime", "desc") // 오름차순은 ASC
      );
    }

    // onSnapshot 함수는 가장 최신의 컬랙션의 내용을 반환하는 함수, 함수는 데이터 수신을 중단하기 위한 unsubscribe 함수를 반환, 더 이상 데이터를 수신 대기할 필요가 없을때 사용
    const unsubscribe = onSnapshot(
      myQuery ? q : collection(appFireStore, transaction),
      // 응답받은 컬랙션이 snapshot에 저장됨
      (snapshot) => {
        let result = [];
        // docs 는 문서를 배열로 저장하고 있음
        snapshot.docs.forEach((doc) => {
          // 전개구문을 이용해 문서의 데이터를 가져오는 data()함수의 반환값을 객체에 나열, 그리고 나중에 사용할 수 있도록 문서 id 값을 추가
          result.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(result);
        setError(null);
      },

      (error) => {
        setError(error.message);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [collection]);

  return { documents, error };
};
