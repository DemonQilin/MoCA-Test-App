import React, { useEffect } from 'react'
import './styles/Help.css'

const Help = ({ id, $windowHelp, $btnInHelp, handlerViewHelp }) => {
  const helps = [
    'Dibuje una linea para unir cada par de puntos, alternando entre cifras y letras, respetando el orden númerico y alfabético.\n Comience en el número 1, siga a la letra A, a continuación al número 2 y así sucesivamente hasta terminar en la letra E.',
    'Copia el cubo que aparece a continuación de la manera más precisa que puedas.',
    'Dibuje un reloj, que incluya todos los números y que marque las 11 y 10.'
  ];

  const handlerBtnHelp = e => {
    setTimeout(() => {
      $btnInHelp.current.classList.add('Help_btn--inactive');
    }, 300);
    handlerViewHelp();
  };

  useEffect(() => {
    setTimeout(() => {
      $windowHelp.current.classList.add('Help-active');
    }, 0)
  }, []);

  useEffect(() => {
    $btnInHelp.current.classList.remove('Help_btn--inactive');
  }, [id]);

  return (
    <div className="Help" ref={$windowHelp}>
      <p className='Help-paragraph'>{helps[id - 1]}</p>
      <button className="Help_btn" onClick={handlerBtnHelp} ref={$btnInHelp}>Entendido</button>
    </div>
  )
}

export default Help