import React from "react";
import CommentsCard from "./CommentsCard";

function Comments({ arr, onDelete }) {
  return (
    <>
      <div className="container">
        {arr.map((item, index) => {
          return (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center border p-2 mb-2 rounded"
            >
              <CommentsCard comment={item} />
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Comments;
