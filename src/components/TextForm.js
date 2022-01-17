import React, { useState } from 'react';

export default function Textform(props) {
    const handleUpClick = ()=> {
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        // setText("You have clicked on handleUpClick")
        setText(newText)
        props.showAlert("Converted to uppercase!", "Success");
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "Success");
    }
    const handleClearClick = ()=> {
        let newText = " ";
        setText(newText)
        props.showAlert("Text Cleared!", "Success");
    }

    const handleOnChange = (event)=> {
        // console.log("OnChange");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText("new text");
    return (
        <>
        <div className="container" style={{color: props.mode=== 'dark'?'white': '#042743'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value= {text} onChange={handleOnChange} 
             style={{backgroundColor: props.mode=== 'dark' ? 'grey' : 'white',
             color: props.mode=== 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear text</button>
        </div>
        <div className="container my-3" style={{color: props.mode=== 'dark' ? 'white' : '#042743'}}>
            <h2>Your text summary.</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } Minutes read.</p>
            <h2>Preview</h2>
            <p>{text.length> 0 ? text:"Enter something into text box above to Preview it."}</p>
        </div>
        </>
    )
}
