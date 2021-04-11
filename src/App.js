import logo from "./nerdemoji.png";
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="Nerd Emoji" />
          <h1>
            I'm a React Dictionary. Try me!
          </h1>
        </header>
        <main>
          <Dictionary defaultKeyword="null" />
        </main>
        <footer className="App-footer">
          <small>Coded by GrungeBarb</small>
        </footer>
      </div>
    </div>
  );
}