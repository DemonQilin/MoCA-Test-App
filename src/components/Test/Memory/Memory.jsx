import React, { useState } from 'react'
import '../styles/Memory.css';
import MemoryTask from './MemoryTask';

const Memory = ({ score, taskId, setTaskId }) => {
    const wordsListening = ['Rostro', 'Seda', 'Iglesia', 'Clavel', 'Rojo'];
    const [words, setWords] = useState([]);
    const [listening, setListening] = useState(false);
    const [startTask, setTaskStart] = useState(false); 

    const handlerStartBtn = async e => {
        setListening(true);

        for (let i = 0; i < wordsListening.length; i++){
            const wordToSpeak = new SpeechSynthesisUtterance(wordsListening[i]);
            speechSynthesis.speak(wordToSpeak);
            await new Promise(resolve => {
                setTimeout(resolve, 2000, 'await')
            });
        };

        setTaskStart(true);
        setListening(false);
    }

    return (
        <div className="Memory">
            {!listening && !startTask && <button className="Test-btn--next" onClick={handlerStartBtn}>Escuchar</button>}
            {listening && <div className='Memory_div Memory_div--listening'>Escuche con atención</div>}
            {startTask && <MemoryTask words={words} setWords={setWords} wordsListening={wordsListening} score={score} taskId={taskId} setTaskId={setTaskId} />}
        </div>
    )
}

export default Memory