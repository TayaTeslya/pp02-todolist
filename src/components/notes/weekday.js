import '../../App.css';
import Input from './input';
import { useEffect, useState } from 'react';


function Weekday(props) {

  const [notes, setNotes] = useState([]);
  const [change, setChange] = useState(false);
    
  useEffect(() => {
      setNotes([...props.notes]);
      setChange(!Boolean(change));
  }, [props.notes]);

  return (
    <div className="note-date-wrapper">
        <div className="note-date-header">
            <h2>{props.date}</h2>
            <h2 className="note-date-name-day">{props.day}</h2>
        </div>
        <div className="note-date-input-wrapper">
          <Input date={props.dateNote.toISOString().slice(0, 11)} table="weekNote" reload={props.reload} name="weekNotes" note={notes[0] ? notes[0] : ''} change={change}/>
          <Input date={props.dateNote.toISOString().slice(0, 11)} table="weekNote" reload={props.reload} name="weekNotes" note={notes[1] ? notes[1] : ''} change={change}/>
          <Input date={props.dateNote.toISOString().slice(0, 11)} table="weekNote" reload={props.reload} name="weekNotes" note={notes[2] ? notes[2] : ''} change={change}/>
          <Input date={props.dateNote.toISOString().slice(0, 11)} table="weekNote" reload={props.reload} name="weekNotes" note={notes[3] ? notes[3] : ''} change={change}/>
          <Input date={props.dateNote.toISOString().slice(0, 11)} table="weekNote" reload={props.reload} name="weekNotes" note={notes[4] ? notes[4] : ''} change={change}/>
          <Input date={props.dateNote.toISOString().slice(0, 11)} table="weekNote" reload={props.reload} name="weekNotes" note={notes[5] ? notes[5] : ''} change={change}/>
          <Input date={props.dateNote.toISOString().slice(0, 11)} table="weekNote" reload={props.reload} name="weekNotes" note={notes[6] ? notes[6] : ''} change={change}/>
          <Input date={props.dateNote.toISOString().slice(0, 11)} table="weekNote" reload={props.reload} name="weekNotes" note={notes[7] ? notes[7] : ''} change={change}/>
        </div>
    </div>
  );
}

export default Weekday;
