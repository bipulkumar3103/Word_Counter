import React, { useState } from "react";
import "./TextAreaDiv.css";

export default function TextAreaDiv(props) {
  
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  const handleUpperClick=()=>{
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handleLowerClick=()=>{
    let newText= text.toLowerCase();
    setText(newText);
  }
  
  const handleClearClick=()=>{
    
    setText("");
  }



  const [text, setText] = useState("");


  return (
    <div className="textarea-div">
      <div>
        <h2>Please enter the text below </h2>
      </div>
      <div>
        <textarea onChange={handleOnChange} name="textarea" value={text} id="textarea" cols="30" rows="10"></textarea>
      </div>
      <div className="textarea-button">
  
        <button onClick={handleUpperClick}>Uppercase</button>
        <button onClick={handleLowerClick}>Lowercase</button>
        <button onClick={handleClearClick}>Clear</button>
      </div>
      <div className="word-char-paragraph">
        <p>{text.trim().split(" ").filter(function(word){return word!==""}).length} Words {text.length} Character</p>
      </div>
    </div>
  );
}
