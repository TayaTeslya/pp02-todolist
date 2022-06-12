import '../../App.css';
import { useEffect, useState } from 'react';


function Input(props) {
  const [note, setNote] = useState('');
  useEffect(() => {
    if (props.note['textCommonNote']) {
      setNote(props.note['textCommonNote']);
    }
  }, [props.note]);  
  return (
    <input value={(note != '') ? note : ''} onChange={((event) => {
        setNote(event.target.value);
    })}/> 
  );
}

export default Input;

