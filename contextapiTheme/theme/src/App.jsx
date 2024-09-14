import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { themeContext } from './themeProvider';


function App() {
  const {theme,toggle}=useContext(themeContext);
  return (
    <div className={`app ${theme}`}>
     <h1> current theme : {theme}</h1>
     <button onClick={toggle}>change theme</button>
    </div>
  );
}

export default App;
