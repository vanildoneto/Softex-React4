import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/FirstComponent'
import FirstProps from './Components/FirstProps'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Primeiro teste react Softex - Vanildo 
        </p>
        <FirstComponent/>
        <FirstProps nome="Vanildo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn React
        </a>
      </header>
    </div>
  );
}

export default App;
