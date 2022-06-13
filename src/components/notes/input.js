import '../../App.css';
import { useEffect, useState } from 'react';


function Input(props) {
    // const [isPost, setIsPost] = useState((props.note['textCommonNote']) ? true : false);
    const [isPost, setIsPost] = useState(true);

    const [isChange, setIsChange] = useState(null);

    // let is = null;

    useEffect(() => {
        if (props.column == 1) {
            console.log(isPost);
        }
        console.log('-');
    }, [isPost]);

    useEffect(() => {
        // if (event.target.value == '') {
        if (isChange === '') {
            console.log('удаление');
            deleteCommonNote();
            setIsPost(true);
        } else if (isChange != null) {
            if (isPost) {
                console.log('добавление');
                addCommonNote();
                setIsPost(false);
            } else {
                console.log('изменение');
                changeCommonNote();
                setIsPost(false);
            }
        }
    }, [isChange])
    
    function deleteCommonNote() {
        fetch('http://localhost:3001/commonNotes?idCommonNote=' + props.note['idCommonNote'], {
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
        fetch('http://localhost:3001/commonNotes?idCommonNote=' + props.note['idCommonNote'], {
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
        setNote(''); //очищает при удалении (сдвиг)
        //setIsPost(true);
        if (props.note['textCommonNote']) {
            setNote(props.note['textCommonNote']);
        }
        // setIsPost(!Boolean(props.note['textCommonNote']));
        setIsPost(!Boolean(note));
    }, [props.note]);

    // useEffect(() => {
    //     setNote(null); //очищает при удалении (сдвиг)
    //     //setIsPost(true);
    //     if (props.note['textCommonNote']) {
    //         setNote(props.note['textCommonNote']);
    //     } else {
    //         setNote('');
    //     }
    //     // setIsPost(!Boolean(props.note['textCommonNote']));
    //     setIsPost(!Boolean(note));
    // }, [props.note]);

    return (
        <input value={(note != '') ? note : ''} onChange={((event) => {
            setNote(event.target.value);
        })} onBlur={((event) => {
            setIsChange(event.target.value);
            //changeNote(event);
        })}/> 
    );
}

export default Input;

// function changeNote(event) {
//     if (event.target.value == '') { //если пустота, то удаляем запись в бд
//         setIsPost(false);
//         fetch('http://localhost:3001/commonNotes?idCommonNote=' + props.note['idCommonNote'], {
//             method: 'DELETE'
//         }).then((err) => {
//             setNote('');
//             // isPost = false;
//             props.reload(true);
//         });
//     } else { //если что-то лежит в инпуте, изменяем запись в бд ИЛИ добавляем
//         if (isPost != true) { //добавляем в БД
//             setIsPost(true);
//             console.log(isPost);
//              // isPost = true;
//             fetch('http://localhost:3001/commonNotes', {
//                 method: 'POST', 
//                 headers: {'Content-Type' : 'application/json'}, //настройки для серва (формат данных и тп) 
//                 body: JSON.stringify({
//                     textCommonNote: note, 
//                     columnCommonNote: props.column
//                 })//заметка - объект в виде json
//             }).then((err) => {
//                 setNote('');
//                 props.reload(true);
//             }).then(() => {
//                 // debugger;
//             });
//         } else { //изменяем
//             fetch('http://localhost:3001/commonNotes?idCommonNote=' + props.note['idCommonNote'], {
//                 method: 'PUT',
//                 headers: {'Content-Type' : 'application/json'},
//                 body: JSON.stringify({
//                     textCommonNote: note,
//                     colorCommonNote: 'none',
//                     statusCommonNote: 'false'
//                 })
//             }).then((err) => {
//                 setNote('');
//                 props.reload(true);
//             });
//         } 
//     }
// }