import '../App.css';
import Weekday from './notes/weekday.js';
import Weekend from './notes/weekend.js';
import Common from './notes/common.js';
import { useState } from 'react';


Date.prototype.addDays = function(days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    console.log(date.getDate() - 7);

    if (date.getDate() - 7 < 0) {
        date.setMonth(date.getMonth() + 1);
    }
    return date;
}


function NoteDateConteiner() {
    let mondayToday = new Date("2022-12-2");
    let monday = new Date("2022-12-2");
    // let mondayToday = new Date();
    // let monday = new Date();
    monday.setDate(mondayToday.getDate() - (mondayToday.getDay() + 6) % 7);
    // console.log(mondayToday.getDate() - monday.getDate());
    if (mondayToday.getDate() - monday.getDate() < 0) {
        monday.setMonth(monday.getMonth() - 1);
    }
    //const [monday, setMonday] = useState(mondayToday.getDate());

  return (
    <div className="wrapper-conteiner">
        <div className="conteiner">
            <div className="note-date-conteiner">
                <div className="note-date-weekday-conteiner"> {/* Будни */}
                    <Weekday day="Пн" date={monday.addDays(0).getDate() + '' + (monday.addDays(0).getMonth() + 1 <= 9 ? '.0' + (monday.addDays(0).getMonth() + 1) : '.' + (monday.addDays(6).getMonth() + 1))}/>
                    <Weekday day="Вт" date={monday.addDays(1).getDate() + '' + (monday.addDays(1).getMonth() + 1 <= 9 ? '.0' + (monday.addDays(1).getMonth() + 1) : '.' + (monday.addDays(6).getMonth() + 1))}/>
                    <Weekday day="Ср" date={monday.addDays(2).getDate() + '' + (monday.addDays(2).getMonth() + 1 <= 9 ? '.0' + (monday.addDays(2).getMonth() + 1) : '.' + (monday.addDays(6).getMonth() + 1))}/>
                    <Weekday day="Чт" date={monday.addDays(3).getDate() + '' + (monday.addDays(3).getMonth() + 1 <= 9 ? '.0' + (monday.addDays(3).getMonth() + 1) : '.' + (monday.addDays(6).getMonth() + 1))}/>
                    <Weekday day="Пт" date={monday.addDays(4).getDate() + '' + (monday.addDays(4).getMonth() + 1 <= 9 ? '.0' + (monday.addDays(4).getMonth() + 1) : '.' + (monday.addDays(6).getMonth() + 1))}/>
                </div>
                <div className="note-date-weekends-conteiner"> {/* Выходные */}
                    <Weekend day="Сб" date={monday.addDays(5).getDate() + '' + (monday.addDays(5).getMonth() <= 9 ? '.0' + (monday.addDays(5).getMonth() + 1) : '.' + (monday.addDays(6).getMonth() + 1))}/>
                    <Weekend day="Вс" date={monday.addDays(6).getDate() + '' + (monday.addDays(6).getMonth() <= 9 ? '.0' + (monday.addDays(6).getMonth() + 1) : '.' + (monday.addDays(6).getMonth() + 1))}/>
                </div>
            </div>
        </div>
        <div className="note-common-conteiner">
            <Common/>
            <Common/>
            <Common/>
        </div>
    </div>
  );
}

export default NoteDateConteiner;
