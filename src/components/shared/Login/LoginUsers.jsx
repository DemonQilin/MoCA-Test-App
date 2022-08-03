import React, { useState } from 'react'
import LoginCardUser from './LoginCardUser';

const LoginUsers = ({backPage}) => {
    const [keepLogged, setKeepLogged] = useState(false);
    const users = JSON.parse(localStorage.getItem('users'));

    return (
        <>
            <h1>Iniciar Sesión</h1>
            <p>Selecciona con cuál de los siguientes usuarios te gustaria inicar sesión para realizar el test.</p>
            {users.map(user => <LoginCardUser user={user} users={users} keepLogged={keepLogged} backPage={backPage} key={user.id} />)}
            <input type="checkbox" name="keepLogged" id="keepLogged" onChange={e => setKeepLogged(!keepLogged)}/>
            <label htmlFor="keepLogged">Mantener sesión iniciada</label>
        </>
    )
}

export default LoginUsers