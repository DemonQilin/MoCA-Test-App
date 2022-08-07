import React, { useState } from 'react'
import identificationImg from '../../../../public/identification-task.png'
import { useFormTask } from '../../../hooks/useFormTask';
import '../styles/Identification.css'

const Identification = ({ score, taskId, setTaskId }) => {

    const actionSubmit = input => {
        const animals = input.split(',');
        const points = [];

        animals.forEach((name, i, array) => array[i] = name.trim().toLowerCase());

        for (let i = 0; i < 3; i++) {
            if (i === 0) {
                if (animals[i] === 'leon') points.push(1);
            } else if (i === 1) {
                if (animals[i] === 'rinoceronte') points.push(1)
            } else if (i === 2) {
                if (animals[i] === 'camello') points.push(1);
            }

            if (points[i]) continue;
            points.push(0);
        };

        score.push({
            taskId,
            score: points
        });
        
        console.log(score);
        setTaskId(taskId + 1);
    };

    const { input, handlerChange, handlerSubmit } = useFormTask(['[a-z, ]'], 'animalsInput', actionSubmit);

    return (
        <div className="Identification" onSubmit={handlerSubmit}>
            <div className="Identification_img-container">
                <img src={identificationImg} />
            </div>
            <form className='Identification_form' autoComplete='off'>
                <input type="text" className='Identification_input' name="animalsInput" placeholder='Escribe el nombre de los animales' value={input} onChange={handlerChange} />
                <button type='submit' className='Test-btn--next'>Enviar respuesta</button>
            </form>
        </div>
    )
}

export default Identification