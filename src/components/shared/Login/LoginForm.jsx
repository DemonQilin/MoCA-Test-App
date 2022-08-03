import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const LoginForm = ({backPage}) => {
    const [formState, setFormState] = useState({ name: '', age: '', education: ''});
    const [errorForm, setErrorForm] = useState({});
    const [orderInput, setOrderInput] = useState(0);
    const navigate = useNavigate();

    // Intermediate Methods
    const nameInput = () => {
        return orderInput === 0 ? 'name' : orderInput === 1 ? 'age' : 'education'
    };

    const validateInput = (name, value) => {
        const errorFormCopy = JSON.parse(JSON.stringify(errorForm));
        const nameRegexp = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü]{4,15}$/;
        let error = null;

        if (!value) {
            error = 'Este campo es obligatorio'
        } else {
            switch (name) {
                case 'name':
                    if (!nameRegexp.test(value)) error = 'Tu nombre debe tener solamente letras y números. Mínimo 4 y máximo 15 carácteres';
                    break;
                case 'age':
                    if (+value < 5) {
                        error = 'Tu edad debe ser mayor a 5 años'
                    } else if (+value > 100) {
                        error = 'Tu edad no debe superar los 100 años'
                    }
                    break;
            };
        };

        if (!error) {
            delete errorFormCopy[name];
        } else {
            errorFormCopy[name] = error;
        }

        return errorFormCopy;
    };

    // Visual Interaction Methods
    const nextInput = plus => {
        if (plus === 1) {
            if (Object.keys(errorForm).length !== 0 || !formState[nameInput()]) return;
        }

        if (orderInput === 2) {
            navigate(backPage);
            return
        };

        setOrderInput(orderInput + plus);
    };

    const visibleInput = () => {
        switch (orderInput) {
            case 0:
                return (
                    <>
                        <label htmlFor="name"></label>
                        <input type="text" name="name" id="name" value={formState.name} placeholder='Escribe tu nombre' onChange={onChangeInput} />
                    </>
                );
            case 1:
                return (
                    <>
                        <label htmlFor="age"></label>
                        <input type="number" name="age" id="age" value={formState.age} placeholder='Escribe tu edad' min='5' max='100' onChange={onChangeInput} />
                    </>
                );
            case 2:
                return (
                    <>
                        <label htmlFor="education"></label>
                        <select name="education" id="education" value={formState.education} onChange={onChangeInput}>
                            <option value="">--Selecionar nivel educativo--</option>
                            <option value="elementary school">Primaria</option>
                            <option value="high school">Secundaria</option>
                            <option value="college degree">Licenciatura</option>
                            <option value="master degree">Mestría/Especialización</option>
                        </select>
                    </>
                )
        }
    };

    const genId = () => {
        const codeArray = [];
        const initialCode = 'a'.charCodeAt();

        for (let i = 1; i <= 4; i++) {
            codeArray.push(initialCode + Math.round(Math.random() * 25));
        }

        return `${String.fromCharCode(...codeArray).toUpperCase()}${1000 + Math.floor(Math.random() * 9000)}`
    };

    // Form Control Method
    const onChangeInput = e => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value
        });

        setErrorForm(validateInput(name, value));
    };

    const submitForm = e => {
        e.preventDefault();

        if (Object.keys(errorForm).length !== 0 || !formState[nameInput()]) return;

        
        const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

        formState.id = genId();
        users.push(formState);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Reset form state
        setFormState({ name: '', age: '', education: '' });

        // Redirecting at page where the user previously accessed
        navigate(backPage);
    };

    return (
        <>
            <h1>Información de registro</h1>
            <form onSubmit={submitForm}>
                {visibleInput()}
                {errorForm[nameInput()] ? <span>{errorForm[nameInput()]}</span> : null}
                {orderInput > 0 && <button type='button' onClick={e => nextInput(-1)}>Anterior</button>}
                {orderInput < 2 && <button type='button' onClick={e => nextInput(1)}>Siguiente</button>}
                {orderInput === 2 && <button type='submit'>Enviar</button>}
            </form>
        </>
    )
}

export default LoginForm