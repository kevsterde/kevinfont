import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Middle from './components/Middle';
import PopUp from './components/PopUp';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase-config'
function App() {

  const [showPopUp,setShowPopUp] = useState(false)

  const [fonts,setFonts] = useState([])
  const fontRef = collection(db,"fonts-collection")



  const [selects,setSelects] = useState([])

  
  const handleSelcted = e =>{
    setSelects([... selects,{
      id:e.id,
      Title: e.Title,
      Import: e.Import,
      FontFamily:e.FontFamily
    }])

  }



  const [fValue,setFValue] = useState({
    Title: '',
    Import: '',
    FontFamily:''
  })
  const [password,setPassword] = useState('')
  const hcPass = e =>{
    setPassword(e.target.value)
  }
  const handleChange = e =>{  
    const name = e.target.name
    const value = e.target.value
    setFValue({
      ... fValue,[name] : value
    })
  }

  const handlerAdd = async e =>{
    e.preventDefault()
    if(fValue.Title && fValue.Import && fValue.FontFamily ){
      if(password == "proweaver")
      {
        alert("Added Sucessfully")
        await addDoc(fontRef,fValue)

        setFonts([... fonts,{
          Title: fValue.Title,
          Import: fValue.Import,
          FontFamily:fValue.FontFamily
        }])
        setShowPopUp(!showPopUp)
        setFValue({
          Title: '',
          Import: '',
          FontFamily:''
        })
      }
      else{
        alert("Wrong Password")
      }

    }else{
      alert("Empty Fields")
    }
      
  }

 

  return (
    <div className="App">
   
      <Header setShowPopUp={setShowPopUp}  showPopUp={showPopUp}/>
      <Middle selects={selects} setSelects={setSelects}/>
      <Main handleSelcted={handleSelcted} fontRef={fontRef} fonts={fonts} setFonts={setFonts}/>
      {
        showPopUp && <PopUp password={password} hcPass={hcPass} fonts={fonts} setFonts={setFonts} fValue={fValue} handleChange={handleChange} handlerAdd={handlerAdd} setShowPopUp={setShowPopUp} showPopUp={showPopUp}/>
      }      
      <Footer/>
    </div>
  );
}

export default App;
