import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Middle from './components/Middle';

function App() {
  return (
    <div className="App">
      <Header/>
      <Middle/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
