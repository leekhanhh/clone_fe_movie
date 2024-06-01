import React from "react";
import CommentItem from "./CommentItem";

const ListComment = () => {
  const listComment = [
    {
      id: 1,
      userName: "User1",
      time: "10:00",
      content: "Content1",
    },
    {
      id: 2,
      userName: "User2",
      time: "10:00",
      content: "Content2",
    },
    {
      id: 3,
      userName: "User3",
      time: "10:00",
      content: "Content3",
    },
  ];
  return (
    <div className="flex flex-col gap-2 mt-4 max-h-[500px] overflow-y-scroll ">
      {listComment.map((item, index) => {
        return <CommentItem key={index} />;
      })}
    </div>
  );
};

export default ListComment;
