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
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          <small>This project was coded by <a href="https://www.instagram.com/grungebarb_art/" target="_blank" rel="noreferrer">GrungeBarb</a> <a href="https://www.instagram.com/grungebarb/" target="_blank" rel="noreferrer">(Bárbara Llansó Di Renzo)</a> and is <a href="https://github.com/grungebarb/dictionary-project" target="_blank" rel="noreferrer">open sourced on GitHub</a> and hosted in <a href="https://hungry-lewin-ec5b11.netlify.app/" target="_blank" rel="noreferrer">Netlify</a></small>
        </footer>
      </div>
    </div>
  );
}