import React from "react";
import CommentsCard from "./CommentsCard";


function Comments(props) {
  const arr = props.arr;
  return (
    <>
      <div className="container">
        {arr.map((item, index) => {
          return <CommentsCard key={index}
          comment={item}
          />
        })}
      </div>
    </>
  );
}

export default Comments;
