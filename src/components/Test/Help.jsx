import React, { useEffect } from 'react'
import './styles/Help.css'

const Help = ({ id, $windowHelp }) => {
  const helps = [
    'Dibuja una linea alternando entre cifras y letras, respetando el orden númerico y alfabético.\n Comience en el número 1, siga a la letra A, a continuación al número 2 y así sucesivamente hasta terminar en la letra E.'
  ];

  useEffect(() => {
    setTimeout(() => {
      $windowHelp.current.classList.add('Help-active');
    }, 0)
  }, []);

  return (
    <div className="Help" ref={$windowHelp}>
      <p className='Help-paragraph'>{helps[id - 1]}</p>
    </div>
  )
}

export default Help