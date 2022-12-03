 
import './App.css';
import TextForm from './Components/TextForm';
import Navbar from './Components/Navbar';
import React,{useState} from 'react'
import Alert from './Components/Alert';
import About from './Components/About'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const[mode, setDarkMode] = useState('light');
  // const[redmode, setRedDarkMode] = useState({backgroundColor:'white',
  //         color:'black'
  
  // });
  const[alert,setAlert]= useState(null);
  

  const showAlert=(message,type)=>{
    
    setAlert({
         msg:message,
         type:type
    })

    setInterval(() => {
      setAlert(null);
    }, 4000);
  } 
  const[btnTextt, setbtnText] = useState('Enable Dark Mode');
  // const[redbtnTextt, setredbtnText] = useState('Enable Red Dark Mode');

  const removeBodyClasses=()=>{

    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')

  }
  const toggleMode=(cls)=>{


    removeBodyClasses();
    document.body.classList.add('bg-'+cls)

    if(mode==='light'){

      setDarkMode('dark')
      setbtnText('Enable Light Mode')
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled","success")
      // document.title='TextUtil Dark  Mode'

    }

    else{

      setDarkMode('light')
      setbtnText('Enable Dark Mode')
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success")
      // document.title='TextUtil Dark  Mode'
    }
  }

  // const toggleRedMode=()=>{

    

  //   if(redmode.backgroundColor==='white'){

  //     setRedDarkMode=({backgroundColor:'red', 
  //           color:'white'  
  //     })
  //     setredbtnText('Enable light Mode')
  //     // document.body.style.backgroundColor ='#042743';
  //     showAlert("Dark mode has been enabled","success")
  //     // document.title='TextUtil Dark  Mode'

  //   }

  //   else{

  //     setRedDarkMode('light')
  //     setredbtnText('Enable RedDark Mode')
  //     // document.body.style.backgroundColor ='white';
  //     showAlert("Light mode has been enabled","success")
  //     // document.title='TextUtil Dark  Mode'
  //   }
  // }

  return (
    <>
    <Router>
     {/* <Navbar textutils="TextUtils" aboutText="About TextUtils" /> */}
     <Navbar mode={mode} toggleMode={toggleMode}  btnTextt={btnTextt} />
     <Alert alert={alert}/>

     <div className="container my-3">
     <Routes>
          <Route path="/about" element={<About  mode={mode}/>}/>
          
          <Route path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert}/>}/>
          
          
        </Routes>
       
     
     
     </div>
     </Router>
    </>
  );
}

export default App;
