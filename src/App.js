import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Middle from './components/Middle';
import PopUp from './components/PopUp';

function App() {

  const [showPopUp,setShowPopUp] = useState(false)

  return (
    <div className="App">
      <Header setShowPopUp={setShowPopUp} showPopUp={showPopUp}/>
      <Middle/>
      <Main/>
      {
        showPopUp && <PopUp setShowPopUp={setShowPopUp} showPopUp={showPopUp}/>
      }
      


      <Footer/>
    </div>
  );
}

export default App;
