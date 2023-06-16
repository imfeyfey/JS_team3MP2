import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Contact/>
      <About/>
    </div>
  );
}

export default App;
