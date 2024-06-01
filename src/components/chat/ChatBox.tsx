import React from "react";
import ListComment from "./ListComment";

const ChatBox = () => {
  return (
    <div className="flex items-center justify-center w-full ]">
      <div className="flex flex-col w-[800px] bg-white px-2 py-3 rounded-md border border-[#ccc] shadow-lg">
        <div className="flex flex-row items-center gap-2  border-b border-[#ccc] pb-2">
          <div className="w-10 h-10 rounded-full ">
            <img
              src="https://i.pinimg.com/236x/d9/d3/71/d9d3710a513c8d8b52862eb3f40961c3.jpg"
              alt=""
              className="object-scale-down w-full h-full rounded-full "
            />
          </div>
          <div className="flex items-center w-full ">
            <textarea
              className=" rounded-xl border border-[#ccc] shadow-md w-full pl-2 pt-2 resize-none outline-none"
              placeholder="Write your comment here..."
            ></textarea>
          </div>
        </div>
        <ListComment />
      </div>
    </div>
  );
};

export default ChatBox;
