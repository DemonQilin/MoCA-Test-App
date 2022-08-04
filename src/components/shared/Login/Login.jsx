import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import LoginBegin from './LoginBegin';
import LoginForm from './LoginForm';
import LoginUsers from './LoginUsers';

const Login = () => {
    const navigate = useNavigate();
    const { backPage } = useLocation().state;
    const user = useSelector(store => store.user);
    const [registerProcess, setRegisterProcess] = useState(false);
    const [loginProcess, setLoginProcess] = useState(false);

    useEffect(() => {
        if (user) navigate(backPage);
    }, [user]);

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