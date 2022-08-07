import { useState } from "react";

export const useFormTask = (validationInput, nameInput, actionSubmit, validationSubmit) => {
    const [input, setInput] = useState('');

    const handlerChange = e => {
        const { value } = e.target;

        for (let i = 0; i < validationInput.length; i++) {
            if (!(new RegExp(validationInput[i], 'ig').test(value[value.length - 1]))) return;
        };

        setInput(value);
    };

    const handlerSubmit = e => {
        e.preventDefault();

        try {
            if (!input) throw {};
            if (validationSubmit) {
                for (let i = 0; i < validationSubmit.length; i++) {
                    if (!(new RegExp(validationSubmit[i], 'ig').test(input))) throw {};
                };
            };

            actionSubmit(input, setInput, e.target);
        } catch (error) {
            console.log(error);
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