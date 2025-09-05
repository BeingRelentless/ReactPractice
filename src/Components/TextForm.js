import React, { useEffect, useState } from "react";

function TextForm() {
  const [text, setText] = useState(() =>{
    return localStorage.getItem("text") || "Enter the text to analyze below";
  });
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
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
        </div>
      </div>
    </>
  );
}

export default TextForm;
