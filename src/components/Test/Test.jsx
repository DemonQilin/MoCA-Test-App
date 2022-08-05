import React, { useRef, useState } from 'react'
import Help from './Help'
import './styles/Test.css'

const Test = () => {
    const $windowHelp = useRef();
    const [taskId, setTaskId] = useState(1);
    const score = [];
    const titles = ['Componente Visuoespacial-Unión Alternada']

    const getTask = () => {
        switch (taskId) {
            case 1:
                return
            case 2:
                return
            case 3:
                return
        }
    };

    const handlerViewHelp = e => {
        $windowHelp.current.classList.toggle('Help-active');
    };

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
            <Help id={taskId} $windowHelp={$windowHelp} />
        </>
    )
}

export default Test