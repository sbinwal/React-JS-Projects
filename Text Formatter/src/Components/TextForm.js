import React,{useState} from 'react'


export default function TextForm(props) {

    const [text,setText] =useState("")
    // text="hello" // Wrong way
    //setText("new text") //Correct Way
    const handleOnClick=()=>{
        // console.log("button clicked",text)
        let newText=text.toUpperCase();

        setText(newText)
        props.showAlert("Converted to upper case","success")
    }

    const handleLowClick=()=>{
        // console.log("button clicked",text)
        let newText=text.toLowerCase();

        setText(newText)
        props.showAlert("Converted to lower case","success")
    }

    const handleOnChange=(event)=>{
        // console.log("onchange")
        setText(event.target.value)  //It will allow us to change the value of the text
        
    }

    const handleClearClick=()=>{
        // console.log("onchange")
        let newText="";
        setText(newText)
        props.showAlert("Text cleared","success")
        
    }

    const handleCapitalizeClick=()=>{
        // console.log("onchange")
        let arr =text.split(" ");
        let result = arr.map((val)=>{
            
            return val.replace(val.charAt(0),val.charAt(0).toUpperCase())
            // return val.charAt(0).toUpperCase();
            
        });

        setText(result.join(' '))
        props.showAlert("Converted to Capitalized Form","success")
        
    }

    const handleCopyClick=()=>{
        document.getElementById("myBox");
        
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied","success")
    }

    const handleExtraSpaceClick=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed","success")
        
    }
  return (
   
    <>
    
<div class="mb-3" style={{color:props.mode==='light'?'black':'white'} }>
    <h2 >{props.heading} </h2>
  
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'rgb(40 73 98)' , color:props.mode==='dark'?'white':'black' }  }></textarea>
  <button className="btn btn-primary my-2" disabled={text.length===0} onClick={handleOnClick} >Convert to Uppercase</button>
  <button className="btn btn-primary my-2 mx-2" disabled={text.length===0}onClick={handleLowClick} >Convert to Lowercase</button>
  <button className="btn btn-primary my-2 mx-2" disabled={text.length===0}onClick={handleClearClick} >Clear Text</button>
  <button className="btn btn-primary my-2 mx-2" disabled={text.length===0}onClick={handleCapitalizeClick} >Capitalized Text</button>
  <button className="btn btn-primary my-2 mx-2" disabled={text.length===0}onClick={handleCopyClick} >Copy Text</button>
  <button className="btn btn-primary my-2 mx-2" disabled={text.length===0}onClick={handleExtraSpaceClick} >Handle Extra Space</button>
</div>
<div className="container my-3" style={{color:props.mode==='light'?'black':'white'} }>
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>It will take {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to Preview"}</p>
</div>
    </>
  )
}
