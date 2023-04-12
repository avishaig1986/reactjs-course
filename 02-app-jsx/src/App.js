import logo from './logo.svg';
import './App.css';

function App() {
  const names = ["Avish", "Alma", "Johnny"]
  const index = Math.floor(Math.random() * 3)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {names[index]}
        </p>
      </header>
    </div>
  );
}

export default App;
