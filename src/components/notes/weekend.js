import '../../App.css';

function Weekend() {
  return (
    <div className="note-date-wrapper">
        <div className="note-date-header">
            <h2>27.06</h2>
            <h2 className="note-date-name-day">Пн</h2>
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
