import React from 'react'

const LoginBegin = ({setRegisterProcess}) => {
    return (
        <>
            <div></div>
            <h1 className='Login_title'>!Bienvenido a MoCA Test App¡</h1>
            <p className='Login_paragraph'>Para realizar el test de forma correcta necesitamos un poco de información acerca de ti.</p>
            <p className='Login_paragraph'>Da click en el botón registrar y responde las preguntas</p>
            <button className='Login_btn--register' onClick={e => setRegisterProcess(true)}>Registrar</button>
        </>
    )
}

export default LoginBegin