import '../../App.css';
import { useEffect, useState } from 'react';


function Input(props) {

    const [isPost, setIsPost] = useState(true);
    const [isChange, setIsChange] = useState(null);

    // useEffect(() => {
    //     if (props.column == 1) {
    //         console.log(isPost);
    //     }
    //     console.log('-');
    // }, [isPost]);

    useEffect(() => {
        console.log('упс');
        if (isChange === '') {
            // console.log('удаление');
            deleteCommonNote();
            setIsPost(true);
        } else if (isChange != null) {
            if (isPost && (!props.note['idCommonNote'] || !props.note['idWeekNote'])) {
                // console.log('добавление');
                addCommonNote();
                setIsPost(false);
            } else {
                // console.log('изменение');
                changeCommonNote();
                setIsPost(false);
            }
        }
    }, [isChange])
    
    function deleteCommonNote() {
        fetch('http://localhost:3001/' + props.table + 's?id' + props.table + '=' + (props.note['idCommonNote'] || props.note['idWeekNote']), {
            method: 'DELETE'
        }).then((err) => {
            setNote('');
            props.reload(true);
        });
    }

    function addCommonNote() {
        fetch('http://localhost:3001/commonNotes', {
            method: 'POST', 
            headers: {'Content-Type' : 'application/json'}, //настройки для серва (формат данных и тп) 
            body: JSON.stringify({
                textCommonNote: note, 
                columnCommonNote: props.column
            }) //заметка - объект в виде json
        }).then((err) => {
            setNote('');
            props.reload(true);
        })
    }

    function changeCommonNote() {
        fetch('http://localhost:3001/' + props.table + 's?id' + props.table + '=' + (props.note['idCommonNote'] || props.note['idWeekNote']), {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                textCommonNote: note,
                colorCommonNote: 'none',
                statusCommonNote: 'false'
            })
        }).then((err) => {
            setNote('');
            props.reload(true);
        });
    }

    const [note, setNote] = useState('');

    useEffect(() => {
        setNote(null); //очищает при удалении (сдвиг)
        setIsChange(null);
        if (props.note != '') {
            setNote(props.note['textCommonNote']);
        } else {
            setNote('');
        }
        setIsPost(!Boolean(note));
    }, [props.change]);

    return (
        <input value={note} onChange={((event) => {
            setNote(event.target.value);
        })} onBlur={((event) => {
            if (props.note['textCommonNote'] != note) { //чтобы лишний раз не обращаться к серверу при изменении неизменении
                setIsChange(event.target.value);
            }
        })}/> 
    );

}

export default Input;
