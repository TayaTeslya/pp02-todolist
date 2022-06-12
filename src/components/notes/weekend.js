import '../../App.css';

function Weekend(props) {
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
        </div>
    </div>
  );
}

export default Weekend;
