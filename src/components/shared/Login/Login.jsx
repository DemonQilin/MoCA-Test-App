import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import LoginBegin from './LoginBegin';
import LoginForm from './LoginForm';
import LoginUsers from './LoginUsers';

const Login = () => {
    const { backPage } = useLocation().state || { backPage: null };
    const user = useSelector(store => store.user);
    const [registerProcess, setRegisterProcess] = useState(false);
    const [loginProcess, setLoginProcess] = useState(false);

    if (user) return <Navigate to={backPage || '/'} />;

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