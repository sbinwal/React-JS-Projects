import React,{useState} from 'react'
// import './About.css';



export default function About(props) {
    // const [myStyle,setmyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    
    // })
    
    // const[btntext,setBtnText]= useState("Enable Dark Mode")
    
    // const toggleStyle=()=>{
    
    //     if(myStyle.color == 'white'){
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white'
               
    //         })
    //         setBtnText("Enable Dark Mode");
    //         }
    //         else{
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
        
    // }

    let myStyle={
            color:props.mode === 'dark'?'white':'black',
            backgroundColor:props.mode === 'dark'?'#042743':'white'
    }


  return (
    <div className="container" style={myStyle}>
        <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        
        <strong>Analyze your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Textutil gives you a way to analyze your text quickly and efficiently. Be it word count,character count etc.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Textutil is a free character counter tool that provides instant character count & word count statistics for a given text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software works in any web browser such as chrome,firefox, edge, safari, morzilla.It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
      </div>
    </div>
  </div>
</div>
<div className="container">

</div>

    </div>
  )
}
