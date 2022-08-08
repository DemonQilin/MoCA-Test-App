import { useState } from "react";

export const useFormTask = (validationInput, nameInput, actionSubmit, validationSubmit) => {
    const [input, setInput] = useState('');

    const handlerChange = e => {
        const { value } = e.target;

        if (!value) return setInput('');

        for (let i = 0; i < validationInput.length; i++) {
            if (!(new RegExp(validationInput[i], 'ig').test(value[value.length - 1]))) return;
        };

        setInput(value);
    };

    const handlerSubmit = e => {
        e.preventDefault();

        try {
            if (!input) throw new Error('Este campo es requerido');
            if (validationSubmit) {
                for (let i = 0; i < validationSubmit.length; i++) {
                    if (!(new RegExp(validationSubmit[i], 'ig').test(input))) throw {};
                };
            };

            actionSubmit(input, setInput, e.target);
        } catch (error) {
            console.error(error.message);
            e.target[nameInput].focus();
            return
        }
    };

    return {
        input,
        handlerChange,
        handlerSubmit
    }

};