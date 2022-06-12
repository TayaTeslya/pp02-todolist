import '../../App.css';
import Input from './input';
import { useEffect, useState } from 'react';


function Common(props) {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    setNotes([...props.notes]);
    console.log(notes);
  }, [props.notes]);
  return (
    <div className="note-common-input-wrapper"> 
      <Input note={notes[0] ? notes[0] : ''}/>
      <Input note={notes[1] ? notes[1] : ''}/>
      <Input note={notes[2] ? notes[2] : ''}/>
      <Input note={notes[3] ? notes[3] : ''}/>
      <Input note={notes[4] ? notes[4] : ''}/>
    </div>
  );
}

export default Common;
