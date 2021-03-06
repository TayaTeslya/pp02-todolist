import './App.css';
import NoteDateConteiner from './components/noteDateConteiner.js';
import { useState } from 'react';


Date.prototype.addDays = function(days) {

  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
  
}


function App() {

  let mondayToday = new Date(); //изначальное значение при запуске (текущая неделя)
  mondayToday.setDate(mondayToday.getDate() - (mondayToday.getDay() + 6) % 7);
  const [monday, setMonday] = useState(mondayToday);
  let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  function clickLeftButton() {
    setMonday(monday.addDays(-7));
  }

  function clickRightButton() {
    setMonday(monday.addDays(7));
  }
  
    return (
        <div className="wrapper">
            <header className="header-wrapper conteiner">
                <h1 className="header-date">{months[monday.getMonth()] + ' ' + monday.getFullYear()}</h1>
                <div className="header-button-wrapper">
                    <button className="header-button" onClick={clickLeftButton}>
                    <span className="material-symbols-outlined header-button-content">
                        chevron_left
                    </span>
                    </button>
                    <button className="header-button" onClick={clickRightButton}>
                        <span className="material-symbols-outlined header-button-content">
                            chevron_right
                        </span>
                    </button>
                  </div>
            </header>
            <NoteDateConteiner weekdays={monday}/>
        </div>
    );

}


export default App;
