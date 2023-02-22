import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  return (
    <div className='container'>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </div>
  );
}

export default App;
