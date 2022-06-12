import '../../App.css';
import Input from './input';


function Weekday(props) {
  return (
    <div className="note-date-wrapper">
        <div className="note-date-header">
            <h2>{props.date}</h2>
            <h2 className="note-date-name-day">{props.day}</h2>
        </div>
        <div className="note-date-input-wrapper">
          <Input name="weekNotes" note=""/>
          <Input name="weekNotes" note=""/>
          <Input name="weekNotes" note=""/>
          <Input name="weekNotes" note=""/>
          <Input name="weekNotes" note=""/>
          <Input name="weekNotes" note=""/>
          <Input name="weekNotes" note=""/>
          <Input name="weekNotes" note=""/>
        </div>
    </div>
  );
}

export default Weekday;
