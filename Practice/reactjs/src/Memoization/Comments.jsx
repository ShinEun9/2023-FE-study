import React, { useCallback, useEffect, useState } from "react";
import CommentItem from "./CommentItem";

const commentList = [
  { title: "comment1", content: "message1", likes: 1 },
  { title: "comment2", content: "message2", likes: 1 },
  { title: "comment3", content: "message3", likes: 1 },
];

export default function Comments() {
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

  const handleClick = useCallback(() => {
    console.log("눌림");
  }, []);

  return (
    <div>
      {comments.map((comment) => (
        <CommentItem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
