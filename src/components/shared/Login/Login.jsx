import React, { useState } from 'react'
import { useLocation } from 'react-router';
import LoginBegin from './LoginBegin';
import LoginForm from './LoginForm';
import LoginUsers from './LoginUsers';

const Login = () => {
    const {backPage} = useLocation().state;
    const [registerProcess, setRegisterProcess] = useState(false);
    const [loginProcess, setLoginProcess] = useState(false);

    return (
        <>
            {
                registerProcess
                    ? <LoginForm backPage={backPage} />
                    : loginProcess
                        ? <LoginUsers backPage={backPage} />
                        : <LoginBegin setRegisterProcess={setRegisterProcess} setLoginProcess={setLoginProcess}/>
            }
        </>
    )
}

export default Login