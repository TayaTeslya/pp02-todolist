import '../../App.css';
import { useEffect, useState } from 'react';
import { ClickAwayListener } from '@mui/material';


function Input(props) {

    const [isPost, setIsPost] = useState(true);
    const [isChange, setIsChange] = useState(null);

    useEffect(() => {
        if (isChange === '') {
            console.log('удаление');
            deleteCommonNote();
            setIsPost(true);
        } else if (isChange != null) {
            if (isPost && (!props.note['idCommonNote'] || !props.note['idWeekNote'])) {
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
        fetch('http://localhost:3001/' + props.table + 's?id' + props.table + '=' + (props.note['idCommonNote'] || props.note['idWeekNote']), {
            method: 'DELETE'
        }).then((err) => {
            setNote('');
            props.reload(true);
        });
    }

    function addCommonNote() {
        if (props.table == 'commonNote') {
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
            });
        } else {
            fetch('http://localhost:3001/weekNotes', {
                method: 'POST', 
                headers: {'Content-Type' : 'application/json'}, //настройки для серва (формат данных и тп) 
                body: JSON.stringify({
                    textWeekNote: note, 
                    dateWeekNote: props.date,
                }) //заметка - объект в виде json
            }).then((err) => {
                setNote('');
                props.reload(true);
            });
        }
    }

    function changeCommonNote() {
        fetch('http://localhost:3001/' + props.table + 's?id' + props.table + '=' + (props.note['idCommonNote'] || props.note['idWeekNote']), {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                textNote: note,
                colorNote: color,
                statusNote: isComplete
            })
        }).then((err) => {
            setNote('');
            props.reload(true);
        });
    }

    const [note, setNote] = useState('');

    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    const [isChangeVisible, setIsChangeVisible] = useState(false);

    const [color, setColor] = useState('none');

    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        setNote(null); //очищает при удалении (сдвиг)
        setIsChange(null);
        if (props.note != '') {
            setNote(props.note['textCommonNote'] || props.note['textWeekNote']);
            setIsPost(Boolean(false));
            setColor(props.note['colorCommonNote'] || props.note['colorWeekNote']);
            if (props.note['statusCommonNote'] == 'false' || props.note['statusWeekNote'] == 'false') {
                setIsComplete(Boolean(false));
            } else {
                setIsComplete(Boolean(true));
            }
        } else {
            setIsComplete(false);
            setNote('');
            setIsPost(Boolean(true));
            setColor('none');
        }
    }, [props.change]);

    return (
        <div className="input-conteiner" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <input disabled={Boolean(isComplete)} className={color} value={note} onChange={((event) => {
                setNote(event.target.value);
            })} onBlur={((event) => {
                if (props.note['textCommonNote'] != note && props.note['textWeekNote'] != note) { //чтобы лишний раз не обращаться к серверу при изменении неизменении
                    setIsChange(event.target.value);
                }
            })}/>
            {isVisible && note != '' && (
            <button className="input-button" onClick={(() => {
                setIsChangeVisible(true);
            })}>
                <span className="material-symbols-outlined">
                    more_vert
                </span>
            </button>
            )}
            {isChangeVisible && (
                <ClickAwayListener onClickAway={(() => {
                    setIsChangeVisible(false);
                })}> 
                    <div className="change-note">
                        <div className="button-input">
                            <button className="none" onClick={(() => {
                                    setIsComplete(!isComplete);
                                    setIsChange(isComplete);
                                })}>
                                <span className="material-symbols-outlined">
                                    done
                                </span>
                            </button>
                            <button onClick={(() => {
                                if (color != 'none') {
                                    setColor('none');
                                    setIsChange(color);
                                }
                            })}><span>&emsp;</span></button>
                            <button className="none" onClick={(() => {
                                deleteCommonNote();
                                setIsChangeVisible(false);
                            })}>
                                <span class="material-symbols-outlined">
                                    close
                                </span>
                            </button>
                        </div>
                        <div>
                            <button className="yellow" onClick={(() => {
                                if (color != 'yellow') {    
                                    setColor('yellow');
                                    setIsChange(color);
                                }
                            })}>&emsp;</button>
                            <button className="blue" onClick={(() => {
                                if (color != 'blue') {    
                                    setColor('blue');
                                    setIsChange(color);
                                }
                            })}>&emsp;</button>
                            <button className="orange" onClick={(() => {
                                if (color != 'orange') {    
                                    setColor('orange');
                                    setIsChange(color);
                                }
                            })}>&emsp;</button>
                            <button className="green" onClick={(() => {
                                if (color != 'green') {    
                                    setColor('green');
                                    setIsChange(color);
                                }
                            })}>&emsp;</button>
                            <button className="purple" onClick={(() => {
                                if (color != 'purple') {    
                                    setColor('purple');
                                    setIsChange(color);
                                }
                            })}>&emsp;</button>
                        </div>
                    </div>
                </ClickAwayListener>
            )}
        </div> 
    );

}

export default Input;
