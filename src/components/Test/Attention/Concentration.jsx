import React, { useState } from 'react'
import { useSpeak } from '../../../hooks/useSpeak';
import '../styles/Concentration.css';

const Concentration = ({ score, setTaskId, taskId }) => {
    const letters = 'FBACMNAAJKBAFAKDEAAAJAMOFAAB'.split('');
    const [startTask, setStartTask] = useState(false);
    const [counter, setCounter] = useState(0);

    const handlerAfterSpeak = () => {
        const countLetter = letters.reduce((total, letter) => letter === 'A' ? total + 1 : total, 0);
        const diff = Math.abs(counter - countLetter);
        let scoreUser;

        if (diff < 2) {
            scoreUser = 1
        } else {
            scoreUser = 0
        }

        score.push({
            taskId,
            score: scoreUser
        });

        setTaskId(taskId + 1);
    };

    const { handlerStartSpeak } = useSpeak(letters, handlerAfterSpeak, () => setStartTask(true));

    return (
        <div className="Concentration">
            {!startTask && <button className='Test-btn--next' onClick={handlerStartSpeak}>Comenzar</button>}
            {startTask && (
                <>
                    <div className='Concentration-btn_container'>
                        <button className='Concentration-btn_btn' onClick={e => setCounter(stateCounter => stateCounter + 1)}></button>
                        <span className="Concentration-btn_label" onClick={e => setCounter(stateCounter => stateCounter + 1)}>Escuche la A</span>
                    </div>
                </>
            )}
        </div>
    )
}

export default Concentration