import React, { useEffect, useState } from "react";
import Comments from "./Comments";

const commentList = [
  { title: "comment1", content: "message1", likes: 1 },
  { title: "comment2", content: "message2", likes: 1 },
  { title: "comment3", content: "message3", likes: 1 },
];

export default function Memo() {
  const [comments, setComments] = useState(commentList);

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prev) => [
        ...prev,
        {
          title: `comment${prev.length + 1}`,
          content: `message${prev.length + 1}`,
          likes: 1,
        },
      ]);
    }, 1000);
    return () => {
      console.log("hi");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Comments commentList={comments} />
    </div>
  );
}
