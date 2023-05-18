import { useState, useEffect } from "react";
import useScrollBottom from "./Hooks/useScrollBottom";
import Loading from "./Components/Loading";

export default function App() {
  const [imageList, setImageList] = useState([]);
  const [fetchPage, setFetchPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const isBottom = useScrollBottom();
  console.log("로딩중인가? : ", isLoading);

  useEffect(() => {
    if (isBottom) {
      setFetchPage((prev) => prev + 1);
    }
  }, [isBottom]);

  useEffect(() => {
    fetchImages();
  }, [fetchPage]);

  const fetchImages = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${fetchPage}&limit=5`
      );
      if (!response.ok) {
        throw new Error("네트워크에 문제가 있습니다.");
      }
      const data = await response.json();
      setImageList((prevImages) => [...prevImages, ...data]);
      setIsLoading(false);
    } catch (error) {
      console.error("데이터를 가져오는데 문제가 생겼습니다.", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ul>
        {imageList.map((item) => (
          <li key={item.id} style={{ listStyle: "none" }}>
            <img
              src={item.download_url}
              alt=""
              style={{ width: 400, height: 320 }}
            />
          </li>
        ))}
      </ul>
      {isLoading && <Loading />}
    </div>
  );
}
