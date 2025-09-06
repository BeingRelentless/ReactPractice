import React, { useEffect, useState } from "react";
import Comments from "./Comments";

function TextForm() {
  const [text, setText] = useState(() =>{
    return localStorage.getItem("text") || "Enter the text to analyze below";
  });

  const [comments, setComments] = useState(() => {
    return localStorage.getItem("comments") || [];
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
    let newComments = [...comments, ...text];
    // setComments(newComments);
    setComments([...comments, text]);
    localStorage.setItem("comments", newComments);
    setText("");
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
          <Comments arr={comments} />
        </div>
      </div>
    </>
  );
}

export default TextForm;
