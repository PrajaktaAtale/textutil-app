import React, {useState} from 'react';

export default function TextForm(props) {
    //to convert uppercase
    const handleUpClick=()=>{
         let newText=text.toUpperCase();
         setText(newText)
         props.showAlert("Converted to uppercase", "success");
    }
    //to convert lowercase
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to lowerCase", "success");
    }
    // to clear text
    const handleClearClick=()=>{
        // setText("")
        let newText="";
        setText(newText)
        props.showAlert("Clear Text", "success");
    }
    //to copy text
    const handleCopyClick=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to clipboard!!!", "success");
    }
    //to remove extra saces
    const handleExtraSpacesClick=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove extra spaces", "success");

    }
    //to write text in textbox
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: 
                    props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div> 
        </>
    );
}

