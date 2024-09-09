import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case", "success")

    }

    const handleClearClick = () => {
        
        setText("")
        props.showAlert("Cleared", "success")

    }

    const handleCopyClick = () => {
        var textToCopy = document.getElementById("myBox")
        textToCopy.select()
        navigator.clipboard.writeText(textToCopy.value)
        props.showAlert("Copied text", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces", "success")
    }
    const handleOnChange = (event) => {
        
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    const [count, setCount] = useState(0)
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            
            <textarea className="form-control" id="myBox" onChange ={handleOnChange} value = {text} rows="8"></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert to UPPER case</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2" onClick = {handleClearClick}>Reset</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2" onClick = {handleCopyClick}>Copy To Clipboard</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
        <label htmlFor="lblcount" value ={count}>{count}</label>
        </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p> {text.split(/\s+/).filter((e) => {return e.length !== 0}).length} Words, {text.length} Characters</p>
        <p> { 0.008 * text.split(" ").filter((e) => {return e.length !== 0}).length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length === 0 ? "Nothng to preview!" : text}</p>
    </div>
    </>
  )
}
