import React, { useEffect, useState } from 'react'
import { useSpeak } from '../../../hooks/useSpeak';
import Waiting from '../../shared/Waiting';
import '../styles/Memory.css';
import MemoryTask from './MemoryTask';

const Memory = ({ score, taskId, setTaskId }) => {
    const wordsListening = ['Rostro', 'Seda', 'Iglesia', 'Clavel', 'Rojo'];
    const [words, setWords] = useState([]);
    const [startTask, setTaskStart] = useState(false);

    const handlerAfterSpeak = () => {
        setTaskStart(true);
    };

    const { listening, handlerStartSpeak } = useSpeak(wordsListening, handlerAfterSpeak);

    useEffect(() => {
        setWords([]);
        setTaskStart(false);
    }, [taskId])
    return (
        <div className="Memory">
            {!listening && !startTask && <button className="Test-btn--next" onClick={handlerStartSpeak}>Escuchar</button>}
            {listening && <Waiting message='Escucha con atención'/>}
            {startTask && <MemoryTask words={words} setWords={setWords} wordsListening={wordsListening} score={score} taskId={taskId} setTaskId={setTaskId} />}
        </div>
    )
}

export default Memory