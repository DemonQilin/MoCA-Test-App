import React from 'react'

const LoginBegin = ({ setRegisterProcess, setLoginProcess}) => {
    const users = JSON.parse(localStorage.getItem('users'));

    return (
        <>
            <h1 className='Login_title'>¡Bienvenido a MoCA Test App!</h1>
            <p className='Login_paragraph'>Para realizar el test de forma correcta necesitamos un poco de información acerca de ti.</p>
            <p className='Login_paragraph'>Puedes dar click en el botón Registrar y responder las preguntas. {users ? 'O cargar la información de una de las cuentas asociadas a este dispositivo con el botón Iniciar Sesión.' : undefined}</p>
            <button className='Login_btn--register' onClick={e => setRegisterProcess(true)}>Registrar</button>
            {users && <button className='Login_btn--login' onClick={e => setLoginProcess(true)}>Iniciar Sesión</button>}
        </>
    )
}

export default LoginBegin