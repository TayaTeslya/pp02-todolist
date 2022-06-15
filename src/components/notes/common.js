import '../../App.css';
import Input from './input';
import { useEffect, useState } from 'react';


function Common(props) {

    const [notes, setNotes] = useState([]);
    const [change, setChange] = useState(false);
    
    useEffect(() => {
        setNotes([...props.notes]);
        setChange(!Boolean(change));
    }, [props.notes]);

    return (
        <div className="note-common-input-wrapper"> 
            <Input table="commonNote" reload={props.reload} note={notes[0] ? notes[0] : ''} column={props.column} change={change}/>
            <Input table="commonNote" reload={props.reload} note={notes[1] ? notes[1] : ''} column={props.column} change={change}/>
            <Input table="commonNote" reload={props.reload} note={notes[2] ? notes[2] : ''} column={props.column} change={change}/>
            <Input table="commonNote" reload={props.reload} note={notes[3] ? notes[3] : ''} column={props.column} change={change}/>
            <Input table="commonNote" reload={props.reload} note={notes[4] ? notes[4] : ''} column={props.column} change={change}/>
        </div>
    );

}

export default Common;
