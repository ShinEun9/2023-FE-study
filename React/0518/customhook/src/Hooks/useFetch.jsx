import React, { useState, useEffect } from "react";

export default function useFetch(url) {
  const [images, setImages] = useState([]);

  const getImage = async () => {
    const response = await fetch(url);
    const fetchData = await response.json();
    console.log(fetchData);
    setImages(fetchData);
  };

  useEffect(() => {
    getImage();
  }, []);

  return images;
}
