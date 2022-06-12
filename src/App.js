import './App.css';
import NoteDateConteiner from './components/noteDateConteiner.js';


function App() {
  return (
    <div className="wrapper">
      <header className="header-wrapper conteiner">
        <h1 className="header-date">Июнь 2022</h1>
        <div className="header-button-wrapper">
            <button className="header-button">
            <span className="material-symbols-outlined header-button-content">
                chevron_left
            </span>
            </button>
            <button className="header-button">
                <span className="material-symbols-outlined header-button-content">
                    chevron_right
                </span>
            </button>
        </div>
      </header>
      <NoteDateConteiner/>
    </div>
  );
}


export default App;
