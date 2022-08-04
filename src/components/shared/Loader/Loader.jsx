import React, { useEffect, useRef } from 'react';
import './Loader.css';

const Loader = () => {
    const $wrapper = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            $wrapper.current.classList.add('wrapper-active');
        }, 100);

        setTimeout(() => {
            $wrapper.current.classList.remove('wrapper-active');
        }, 2600);
    }, []);

    return (
        <div className="Loader">
            <div className="wrapper" ref={$wrapper}>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <span>Cargando</span>
            </div>
        </div>
    )
}

export default Loader