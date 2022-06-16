import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpperClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert(" Converted to uppercase","success");
    }


    const handleLowerClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert(" Converted to lowercase","success");
        
    }

    const handleCopyClick = () => {
        var copyiedText = document.getElementById("inputBox");
        copyiedText.select();
        navigator.clipboard.writeText(copyiedText.value);
        props.showAlert(" Text copied","success");
    }

    const handleSnakeClick = () => {
        let snakeText = text.replace(/ /g, "_");
        setText(snakeText);
        props.showAlert(" Converted to snakecase","success");
    }

    const handleClearClick = () => {
        let clearText = "";
        setText(clearText);
        props.showAlert(" Text cleared","success");
    }

    
    const handleOnChange = (event) => {
        // console.log("text changed");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container ml-4 mr-4">
            <div className="mb-3 mt-5" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h3>{props.heading}</h3>
  
  <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} placeholder="Enter text here" id="inputBox" rows="8" />
</div>
<button onClick={handleUpperClick} disabled={text.length===0} className="btn btn-primary mx-2 my-1">Convert to upper case</button>
<button onClick={handleLowerClick} disabled={text.length===0} className="btn btn-primary mx-2 my-1">Convert to lower case</button>
<button onClick={handleSnakeClick} disabled={text.length===0} className="btn btn-primary mx-2 my-1">Convert to snake case</button>
<button onClick={handleCopyClick} disabled={text.length===0} className="btn btn-primary mx-2 my-1">Copy Text</button>
<button onClick={handleClearClick} disabled={text.length===0} className="btn btn-primary mx-2 my-1">Clear</button>
        </div>
        <div className="container my-4" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            {/* Avoiding word display 1 on empty string */}
            {/* <p>You have entered {text.length>0?(text.trim()).split(" ").length:0} words and {text.length} characters</p> */}
            <p>You have entered {text.split(" ").filter((element) => { return element.length!== 0 }).length} words and {text.length} characters</p>
            <p>It will take { 0.008 * (text.trim()).split(" ").length } minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something to to preview it here!'}</p>
        </div>
        </>
    )
}
