import '../../App.css';
import { useEffect, useState } from 'react';


function Input(props) {
  const [note, setNote] = useState('');
  useEffect(() => {
    setNote(props.note);
  }, [props.note]);  
  return (
    <input value={note} onChange={((event) => {
        setNote(event.target.value);
    })}/> 
  );
}

export default Input;

