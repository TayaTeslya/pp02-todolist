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
            <Input reload={props.reload} name="commonNotes" note={notes[0] ? notes[0] : ''} column={props.column}/>
            <Input reload={props.reload} name="commonNotes" note={notes[1] ? notes[1] : ''} column={props.column}/>
            <Input reload={props.reload} name="commonNotes" note={notes[2] ? notes[2] : ''} column={props.column}/>
            <Input reload={props.reload} name="commonNotes" note={notes[3] ? notes[3] : ''} column={props.column}/>
            <Input reload={props.reload} name="commonNotes" note={notes[4] ? notes[4] : ''} column={props.column}/>
        </div>
    );

}

export default Common;
