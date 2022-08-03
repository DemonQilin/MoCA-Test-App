import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setUser } from '../../../store/reducers/user.slice';

const LoginCardUser = ({ user, users, keepLogged, backPage}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerClick = () => {
        if (keepLogged) {
            const indexCurrentUser = users.findIndex(u => u.id === user.id);

            users[indexCurrentUser].keepLogged = true;

            localStorage.setItem('users', JSON.stringify(users));
        }

        dispatch(setUser(user));
        navigate(backPage);
    }

    return (
        <article>
            <h2 title={`Iniciar sesión con ${user.name}`} onClick={handlerClick}>{user.name}</h2>
            <p>{user.age} años</p>
        </article>
    )
}

export default LoginCardUser