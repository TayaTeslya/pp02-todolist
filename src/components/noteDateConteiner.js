import '../App.css';
import Weekday from './notes/weekday.js';
import Weekend from './notes/weekend.js';
import Common from './notes/common.js';
import { useEffect, useState } from 'react';


Date.prototype.addDays = function(days) {

    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
    
}


function NoteDateConteiner(props) {
    function changeReload(bool) {
        setWeekNotes(weekNotes.filter(row => false));
        setWeekNotes([]);
        setFirstColumn(firstColumn.filter(row => false));
        setFirstColumn([]);
        setSecondColumn(firstColumn.filter(row => false));
        setSecondColumn([]);
        setThirdColumn(firstColumn.filter(row => false));
        setThirdColumn([]);
        setReload(bool);    
    }

    useEffect(() => {
        setReload(true);    
    }, [props.weekdays]);

    const [reload, setReload] = useState(false);
    let commonNotes = [];
    let [weekNotes, setWeekNotes] = useState([]);
    const [firstColumn, setFirstColumn] = useState([]);
    const [secondColumn, setSecondColumn] = useState([]);
    const [thirdColumn, setThirdColumn] = useState([]);

    useEffect(() => {

        changeReload(false);

        fetch('http://localhost:3001/commonNotes').then((result) => { //по умолчанию get, поэтому его не указывают; fetch - промис
            return result.json(); //получаем данные из json, стали объектом js
        }).then((result) => { //тут уже используем объект js
            commonNotes = result;
        }).then(() => {
            let first = [];
            let second = [];
            let third = [];
            commonNotes.forEach(row => {
                switch (row['columnCommonNote']) {
                    case 1:
                        // first.push(row['textCommonNote']);
                        first.push(row);
                        break;
    
                    case 2:
                        // second.push(row['textCommonNote']);
                        second.push(row);
                        break;
    
                    case 3:
                        // third.push(row['textCommonNote']);
                        third.push(row);
                        break;
                
                    default:
                        break;
                }
            });
            setFirstColumn(first);
            setSecondColumn(second);
            setThirdColumn(third);
        }); 

        // fetch('http://localhost:3001/weekNotes?firstDateNotes=' + '2022-06-13' + '&lastDateNotes=' + '2022-06-19').then((result) => { //по умолчанию get, поэтому его не указывают; fetch - промис
        fetch('http://localhost:3001/weekNotes?firstDateNotes=' + props.weekdays.toISOString().slice(0, 10) + '&lastDateNotes=' + (props.weekdays.addDays(6).toISOString().slice(0, 10))).then((result) => { //по умолчанию get, поэтому его не указывают; fetch - промис
            return result.json(); //получаем данные из json, стали объектом js
        }).then((result) => { //тут уже используем объект js
            setWeekNotes(result);
        });

    }, [reload]);


  return (
    <div className="wrapper-conteiner">
        <div className="conteiner">
            <div className="note-date-conteiner">
                <div className="note-date-weekday-conteiner"> {/* Будни */}                    
                    <Weekday dateNote={props.weekdays} day="Пн" reload={changeReload} notes={weekNotes.filter((note) => {
                        if (note?.dateWeekNote.slice(8, 10) == props.weekdays.getDate()) {
                            return true;
                        }
                    })} date={props.weekdays.getDate() + '.' + ((props.weekdays.getMonth()+1) <= 9 ? ('0' + (props.weekdays.getMonth()+1)) : (props.weekdays.getMonth()+1))}/>
                    <Weekday dateNote={props.weekdays.addDays(1)} day="Вт" reload={changeReload} notes={weekNotes.filter((note) => {
                        if (note?.dateWeekNote.slice(8, 10) == props.weekdays.addDays(1).getDate()) {
                            return true;
                        }
                    })} date={props.weekdays.addDays(1).getDate() + '.' + ((props.weekdays.addDays(1).getMonth()+1) <= 9 ? ('0' + (props.weekdays.addDays(1).getMonth()+1)) : (props.weekdays.addDays(1).getMonth()+1))}/>
                    <Weekday dateNote={props.weekdays.addDays(2)} day="Ср" reload={changeReload} notes={weekNotes.filter((note) => {
                        if (note?.dateWeekNote.slice(8, 10) == props.weekdays.addDays(2).getDate()) {
                            return true;
                        }
                    })} date={props.weekdays.addDays(2).getDate() + '.' + ((props.weekdays.addDays(2).getMonth()+1) <= 9 ? ('0' + (props.weekdays.addDays(2).getMonth()+1)) : (props.weekdays.addDays(2).getMonth()+1))}/>
                    <Weekday dateNote={props.weekdays.addDays(3)} day="Чт" reload={changeReload} notes={weekNotes.filter((note) => {
                        if (note?.dateWeekNote.slice(8, 10) == props.weekdays.addDays(3).getDate()) {
                            return true;
                        }
                    })} date={props.weekdays.addDays(3).getDate() + '.' + ((props.weekdays.addDays(3).getMonth()+1) <= 9 ? ('0' + (props.weekdays.addDays(3).getMonth()+1)) : (props.weekdays.addDays(3).getMonth()+1))}/>
                    <Weekday dateNote={props.weekdays.addDays(4)} day="Пт" reload={changeReload} notes={weekNotes.filter((note) => {
                        if (note?.dateWeekNote.slice(8, 10) == props.weekdays.addDays(4).getDate()) {
                            return true;
                        }
                    })} date={props.weekdays.addDays(4).getDate() + '.' + ((props.weekdays.addDays(4).getMonth()+1) <= 9 ? ('0' + (props.weekdays.addDays(4).getMonth()+1)) : (props.weekdays.addDays(4).getMonth()+1))}/>
                </div>
                <div className="note-date-weekends-conteiner"> {/* Выходные */}
                    <Weekend dateNote={props.weekdays.addDays(5)} day="Сб" reload={changeReload} notes={weekNotes.filter((note) => {
                        if (note?.dateWeekNote.slice(8, 10) == props.weekdays.addDays(5).getDate()) {
                            return true;
                        }
                    })} date={props.weekdays.addDays(5).getDate() + '.' + ((props.weekdays.addDays(5).getMonth()+1) <= 9 ? ('0' + (props.weekdays.addDays(5).getMonth()+1)) : (props.weekdays.addDays(5).getMonth()+1))}/>
                    <Weekend dateNote={props.weekdays.addDays(6)} day="Вс" reload={changeReload} notes={weekNotes.filter((note) => {
                        if (note?.dateWeekNote.slice(8, 10) == props.weekdays.addDays(6).getDate()) {
                            return true;
                        }
                    })} date={props.weekdays.addDays(6).getDate() + '.' + ((props.weekdays.addDays(6).getMonth()+1) <= 9 ? ('0' + (props.weekdays.addDays(6).getMonth()+1)) : (props.weekdays.addDays(6).getMonth()+1))}/>
                </div>
            </div>
        </div>
        <div className="note-common-conteiner">
            <Common reload={changeReload} notes={firstColumn} column="1"/>
            <Common reload={changeReload} notes={secondColumn} column="2"/>
            <Common reload={changeReload} notes={thirdColumn} column="3"/> 
        </div>
    </div>
  );
}

export default NoteDateConteiner;
