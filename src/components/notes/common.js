import '../../App.css';
import Input from './input';
import { useEffect, useState } from 'react';


function Common(props) {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    setNotes([...props.notes]);
  }, [props.notes]);
  return (
    <div className="note-common-input-wrapper"> 
      <Input name="commonNotes" note={notes[0] ? notes[0] : {}}/>
      <Input name="commonNotes" note={notes[1] ? notes[1] : {}}/>
      <Input name="commonNotes" note={notes[2] ? notes[2] : {}}/>
      <Input name="commonNotes" note={notes[3] ? notes[3] : {}}/>
      <Input name="commonNotes" note={notes[4] ? notes[4] : {}}/>
    </div>
  );
}

export default Common;
