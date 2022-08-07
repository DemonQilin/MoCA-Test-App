import React from 'react'
import { useFormTask } from '../../../hooks/useFormTask';
import WordCard from './WordCard';

const MemoryTask = ({ words, setWords, wordsListening, score, taskId, setTaskId }) => {
    const actionSubmit = (input, setInput, $form) => {
        if (words.length === 5) {
            setInput('');
            return
        };

        const word = input.trim().toLowerCase();
        const newWords = JSON.parse(JSON.stringify(words));

        newWords.push(word);

        setInput('');
        setWords(newWords);
    };

    const hanlderSend = e => {
        setTaskId(taskId + 1);
    };

    const { input, handlerChange, handlerSubmit } = useFormTask(['[a-z]'], 'wordsInput', actionSubmit);

    return (
        <>
            <form onSubmit={handlerSubmit} autoComplete='off' className='Memory_form'>
                <input type="text" name="wordsInput" placeholder='Escribe aqui las palabras' value={input} onChange={handlerChange} className='Memory_input' />
            </form>
            {words.length > 0 && <ul className="Memory_list">{words.map((word, i) => <WordCard key={i} word={word} setWords={setWords} index={i} />)}</ul>}
            <button className='Test-btn--next' onClick={hanlderSend}>Enviar respuesta</button>
        </>
    )
}

export default MemoryTask