import '../../App.css';
import { useEffect, useState } from 'react';


function Input(props) {
    function changeNote(event) {
        if (event.target.value == '') { //если пустота, то удаляем запись в бд
            fetch('http://localhost:3001/commonNotes?idCommonNote=' + props.note['idCommonNote'], {method: 'DELETE'}).then((err) => {
                props.reload(true);
            })
        } else { //если что-то лежит в инпуте, изменяем запись в бд

        }
    }
    const [note, setNote] = useState('');
    useEffect(() => {
        if (props.note['textCommonNote']) {
            setNote(props.note['textCommonNote']);
        }
    }, [props.note]);  
    return (
        <input value={(note != '') ? note : ''} onChange={((event) => {
            setNote(event.target.value);
        })} onBlur={((event) => {
            changeNote(event);
        })}/> 
    );
}

export default Input;

