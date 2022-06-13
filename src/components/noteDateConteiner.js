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
        setFirstColumn(firstColumn.filter(row => false));
        setFirstColumn([]);
        setReload(bool);
    }
    const [reload, setReload] = useState(false);
    let commonNotes = [];
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
    }, [reload]);
  return (
    <div className="wrapper-conteiner">
        <div className="conteiner">
            <div className="note-date-conteiner">
                <div className="note-date-weekday-conteiner"> {/* Будни */}
                    <Weekday day="Пн" reload={reload} date={props.weekdays.getDate() + '.' + ((props.weekdays.getMonth()+1) <= 9 ? ('0' + (props.weekdays.getMonth()+1)) : (props.weekdays.getMonth()+1))}/>
                    <Weekday day="Вт" reload={reload} date={props.weekdays.addDays(1).getDate() + '.' + ((props.weekdays.addDays(1).getMonth()+1) <= 9 ? ('0' + (props.weekdays.addDays(1).getMonth()+1)) : (props.weekdays.addDays(1).getMonth()+1))}/>
                    <Weekday day="Ср" reload={reload} date={props.weekdays.addDays(2).getDate() + '.' + ((props.weekdays.addDays(2).getMonth()+1) <= 9 ? ('0' + (props.weekdays.addDays(2).getMonth()+1)) : (props.weekdays.addDays(2).getMonth()+1))}/>
                    <Weekday day="Чт" reload={reload} date={props.weekdays.addDays(3).getDate() + '.' + ((props.weekdays.addDays(3).getMonth()+1) <= 9 ? ('0' + (props.weekdays.addDays(3).getMonth()+1)) : (props.weekdays.addDays(3).getMonth()+1))}/>
                    <Weekday day="Пт" reload={reload} date={props.weekdays.addDays(4).getDate() + '.' + ((props.weekdays.addDays(4).getMonth()+1) <= 9 ? ('0' + (props.weekdays.addDays(4).getMonth()+1)) : (props.weekdays.addDays(4).getMonth()+1))}/>
                </div>
                <div className="note-date-weekends-conteiner"> {/* Выходные */}
                    <Weekend day="Сб" reload={reload} date={props.weekdays.addDays(5).getDate() + '.' + ((props.weekdays.addDays(5).getMonth()+1) <= 9 ? ('0' + (props.weekdays.addDays(5).getMonth()+1)) : (props.weekdays.addDays(5).getMonth()+1))}/>
                    <Weekend day="Вс" reload={reload} date={props.weekdays.addDays(6).getDate() + '.' + ((props.weekdays.addDays(6).getMonth()+1) <= 9 ? ('0' + (props.weekdays.addDays(6).getMonth()+1)) : (props.weekdays.addDays(6).getMonth()+1))}/>
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
