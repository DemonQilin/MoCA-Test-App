import React, { useState } from 'react'
import { useFormTask } from '../../../hooks/useFormTask';
import { useSpeak } from '../../../hooks/useSpeak';
import Waiting from '../../shared/Waiting';

const NumberSequence = ({ score, setTaskId, taskId }) => {
    const sequences = [['2', '1', '8', '5', '4'], ['7', '4', '2']];
    const [form, setForm] = useState(false);
    const [sequence, setSequence] = useState(1);
    const [scoreOfUser, setScoreOfUser] = useState([]);

    const actionSpeak = () => {
        setForm(true);
    };

    const actionSubmit = (input, setInput, $form) => {
        const numbers = input.split(',');
        numbers.forEach((number, i, arr) => arr[i] = number.trim());

        if (sequence === 2) sequences[sequence - 1].reverse();

        const validation = numbers.reduce((acc, number, i) => (acc && number === sequences[sequence - 1][i]), true);

        setScoreOfUser(stateScore => {
            if (validation) {
                stateScore.push(1)
            } else {
                stateScore.push(0)
            }

            return stateScore
        });

        if (sequence === 1) {
            setSequence(sequence + 1);
            setInput('');
            setForm(false);
        } else {
            score.push({
                taskId,
                score: scoreOfUser
            });
            console.log(score);
            setTaskId(taskId + 1);
        }
    };

    const { listening, handlerStartSpeak } = useSpeak(sequences[sequence - 1], actionSpeak);

    const { input, handlerChange, handlerSubmit } = useFormTask(['[0-9, ]'], 'sequenceInput', actionSubmit);

    return (
        <>
            {!listening && !form && <button className='Test-btn--next' onClick={handlerStartSpeak}>Escuchar {sequence === 1 ? 'primera' : 'segunda'} secuencia</button>}
            {listening && <Waiting message={sequence === 1 ? 'Primera secuencia' : 'Segunda secuencia'} />}
            {form && (
                <>
                    <form onSubmit={handlerSubmit} autoComplete='off'>
                        <input type="text" name="sequenceInput" className='' placeholder='Escribe aqui la secuencia' value={input} onChange={handlerChange}/>
                        <button type='submit' className='Test-btn--next'>Enviar respuesta</button>
                    </form>
                </>
            )}
        </>
    )
}

export default NumberSequence