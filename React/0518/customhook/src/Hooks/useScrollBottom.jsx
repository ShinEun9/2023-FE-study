import { useState, useEffect } from "react";

function useScrollBottom() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setIsBottom(
        document.documentElement.scrollTop + window.innerHeight >=
          document.documentElement.offsetHeight
      );
    });
  }, []);

  return isBottom;
}

export default useScrollBottom;

//   console.log(document.documentElement.scrollTop); // 얼마나 scroll 됐는지
//   console.log(document.documentElement.offsetHeight); // 문서전체의 height
//   console.log(window.innerHeight); // 현재 뷰포트의 높이값
