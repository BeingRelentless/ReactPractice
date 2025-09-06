import React, { useEffect, useState } from "react";
import Comments from "./Comments";

function TextForm() {
  const [text, setText] = useState(() => {
    return localStorage.getItem("text") || "Enter the text to analyze below";
  });

  const [comments, setComments] = useState(() => {
    return JSON.parse(localStorage.getItem("comments")) || [];
  });

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  //   save comments to localStorage
  const handleComments = () => {
    let newComments = [...comments, text];
    setComments(newComments);

    localStorage.setItem("comments", JSON.stringify(newComments));
    setText("");
  };

  const handleDeleteComment = (index) => {
    const updated = comments.filter((_, i) => i !== index);
    setComments(updated);
    localStorage.setItem("comments", JSON.stringify(updated));
  };

  const toLocalStorage = () => {
    localStorage.setItem("text", text);
  };

  useEffect(() => {
    toLocalStorage();
  }, [text]);

  return (
    <>
      <div className="container">
        <div>
          {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="exampleFormControlTextarea1"
            rows="8"
          >
            Enter text here
          </textarea>
          <button className="btn btn-primary mt-3" onClick={handleUpClick}>
            Convert to UPPERCASE
          </button>
          <button className="btn btn-primary mt-3" onClick={handleComments}>
            Save comments
          </button>
          <Comments arr={comments} onDelete={handleDeleteComment} />
        </div>
      </div>
    </>
  );
}

export default TextForm;
