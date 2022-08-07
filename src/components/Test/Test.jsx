import React, { useEffect, useRef, useState } from 'react'
import Help from './Help'
import './styles/Test.css'
import Identification from './Identification/Identification';
import AlternatingUnion from './Visuosespatial/AlternatingUnion';
import Memory from './Memory/Memory';
import Attention from './Attention/Attention';

const score = [];

const Test = () => {
    const $windowHelp = useRef();
    const $btnInHelp = useRef();
    const [taskId, setTaskId] = useState(1);
    const titles = ['Componente Visuoespacial-Unión Alternada', 'Componente Visuoespacial-Copiar el Cubo', 'Componente Visuoespacial-Dibujar un reloj', 'Componente de Identificación-Nombrar los animales', 'Componente Memoria-Recordar las palabras', 'Componente Memoria-Recordar las palabras 2ª vez', 'Componente Atención-Secuencia númerica', 'Componente Atención-Concentración y acción']

    const getTask = () => {
        switch (taskId) {
            case 1:
            case 2:
            case 3:
                return <AlternatingUnion score={score} setTaskId={setTaskId} taskId={taskId} />
            case 4:
                return <Identification score={score} setTaskId={setTaskId} taskId={taskId} />
            case 5:
            case 6:
                return <Memory score={score} setTaskId={setTaskId} taskId={taskId} />
            case 7:
            case 8:
            case 9:
                return <Attention score={score} setTaskId={setTaskId} taskId={taskId} />
        }
    };

    const handlerViewHelp = e => {
        $windowHelp.current.classList.toggle('Help-active');
    };

    useEffect(() => {
        handlerViewHelp()
    }, [taskId]);

    return (
        <>  
            <header className='Test-header'>
                <h1 className="Test-title">
                    <span>{titles[taskId - 1].split('-')[0]}</span>
                    <span>-</span>
                    <span>{titles[taskId - 1].split('-')[1]}</span>
                </h1>
                <button className='Test-btn--help' title='Ayuda' onClick={handlerViewHelp}><i className="fa-solid fa-question"></i></button>
            </header>
            <main>
                {getTask()}
            </main>
            <Help id={taskId} $windowHelp={$windowHelp} $btnInHelp={$btnInHelp} handlerViewHelp={handlerViewHelp} />
        </>
    )
}

export default Test