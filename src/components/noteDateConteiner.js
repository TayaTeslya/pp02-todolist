import '../App.css';
import Weekday from './notes/weekday.js';
import Weekend from './notes/weekend.js';
import Common from './notes/common.js';

function NoteDateConteiner() {
  return (
    <div className="wrapper-conteiner">
        <div className="conteiner">
            <div className="note-date-conteiner">
                <div className="note-date-weekday-conteiner"> {/* Будни */}
                    <Weekday/>
                    <Weekday/>
                    <Weekday/>
                    <Weekday/>
                    <Weekday/>
                </div>
                <div className="note-date-weekends-conteiner"> {/* Выходные */}
                    <Weekend/>
                    <Weekend/>
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
