import React, { useState } from 'react';
export default function TextForm(props) {
    let handleUpClick = () => {
        console.log("Uppercase was Clicked!" + text);
        let newText= text.toUpperCase();
        setText(newText);
    }
    let handleOnChange = (event) => {
        console.log("on change!");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <div className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</div>
        </div>
    )
}
