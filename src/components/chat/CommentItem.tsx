import React from "react";
import HeartIcon from "../../shared/icons/HeartIcon";
import CommentIcon from "../../shared/icons/CommentIcon";
import ReplyIcon from "../../shared/icons/ReplyIcon";

const CommentItem = () => {
  return (
    <div className="flex flex-row gap-2 border-b border-[#ccc] py-2 ">
      <div className="">
        <img
          src="https://i.pinimg.com/236x/d9/d3/71/d9d3710a513c8d8b52862eb3f40961c3.jpg"
          alt=""
          className="object-scale-down w-10 h-10 rounded-full "
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <p>UserName</p>
          <p>Time</p>
        </div>
        <div className="">
          <p>Content</p>
        </div>
        <div className="flex flex-row gap-2">
          <div className="cursor-pointer hover:opacity-50">
            <HeartIcon />
          </div>
          <div className="cursor-pointer hover:opacity-50">
            <CommentIcon />
          </div>
          <div className="cursor-pointer hover:opacity-50 ">
            <ReplyIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
