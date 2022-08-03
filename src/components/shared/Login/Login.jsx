import React, { useState } from 'react'
import { useLocation } from 'react-router';
import LoginBegin from './LoginBegin';
import LoginForm from './LoginForm';

const Login = () => {
    const {backPage} = useLocation().state;
    const [registerProcess, setRegisterProcess] = useState(false);

    return (
        <>
            {
                registerProcess
                    ? <LoginForm backPage={backPage} />
                    : <LoginBegin setRegisterProcess={setRegisterProcess} />
            }
        </>
    )
}

export default Login