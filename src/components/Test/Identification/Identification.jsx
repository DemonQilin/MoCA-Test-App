import React, { useState } from 'react'
import identificationImg from '../../../../public/identification-task.png'
import '../styles/Identification.css'

const Identification = ({ score, taskId, setTaskId }) => {
    const [inputNames, setInputNames] = useState('');

    const handlerChange = e => {
        const { value } = e.target;

        if (!/[a-z, ]/ig.test(value[value.length - 1])) return;
        
        setInputNames(value);
    };

    const handlerSubmit = e => {
        e.preventDefault();

        try {
            if (!inputNames) throw new Error('Campo vacio');
            if (!/,/.test(inputNames)) throw new Error('Debe ingresar coma');

            const animals = inputNames.split(',');
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
    
            setInputNames('');
            setTaskId(taskId + 1);
        } catch (err) {
            e.target.animalsInput.focus();
            return
        }
    };

    return (
        <div className="Identification" onSubmit={handlerSubmit}>
            <div className="Identification_img-container">
                <img src={identificationImg} />
            </div>
            <form className='Identification_form' autoComplete='off'>
                <input type="text" className='Identification_input' name="animalsInput" placeholder='Escribe el nombre de los animales' value={inputNames} onChange={handlerChange} />
                <button type='submit' className='Test-btn--next'>Enviar respuesta</button>
            </form>
        </div>
    )
}

export default Identification