import '../../App.css';

function Weekday(props) {
  return (
    <div className="note-date-wrapper">
        <div className="note-date-header">
            <h2>{props.date}</h2>
            <h2 className="note-date-name-day">{props.day}</h2>
        </div>
        <div className="note-date-input-wrapper">
            <input value="Заметка 1"/>
            <input value="Заметка 2"/>
            <input value="Заметка 3"/>
            <input value="Заметка 4"/>
            <input value="Заметка 5"/>
            <input value="Заметка 6"/>
            <input value="Заметка 7"/>
            <input value="Заметка 8"/>
        </div>
    </div>
  );
}

export default Weekday;
