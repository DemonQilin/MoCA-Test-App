import React, { useEffect } from 'react'
import './styles/Help.css'

const Help = ({ id, $windowHelp, $btnInHelp, handlerViewHelp }) => {
  const helps = [
    ['Dibuje una linea para unir cada par de puntos, alternando entre cifras y letras, respetando el orden númerico y alfabético.\n Comience en el número 1, siga a la letra A, a continuación al número 2 y así sucesivamente hasta terminar en la letra E.'],
    ['Copia el cubo que aparece a continuación de la manera más precisa que puedas.'],
    ['Dibuje un reloj, que incluya todos los números y que marque las 11 y 10.'],
    ['Escriba el nombre de cada uno de lo siguientes animales, de izquierda a derecha. Separe cada nombre con una coma (no caracteres especiales como tildes, guiones, etc).'],
    ['En esta prueba escuchara una lista de palabras que debe memorizar. Escuche con atención y una vez finalice el audio, escriba las palabras que pueda recordar. Escriba la palabra y luego presione ENTER, podra ver como se agrega en la parte inferior.'],
    ['Escuchara nuevamente las mismas palabras de la prueba anterior. Intente recordar todas las palabras que le sean posible'],
    ['En esta prueba escuchara dos secuencias númericas. Para la primera, debe escribir los números en el MISMO ORDEN en que los escucha, y para la segunda, debe escribir los números en el ORDEN INVERSO.', 'Recuerde separar los números por comas.'],
    ['En esta prueba escuchara una serie de letras, y cada vez que escuche la letra "A" debe presionar el botón rojo que hay en la pantalla.']
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
      {helps[id - 1]?.map(help => <p className='Help-paragraph' key={help}>{help}</p>)}
      <button className="Help_btn" onClick={handlerBtnHelp} ref={$btnInHelp}>Entendido</button>
    </div>
  )
}

export default Help