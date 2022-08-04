import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

const Home = () => {
    const user = useSelector(store => store.user);
    const navigate = useNavigate();

    return (
        <>
            <h1>MoCA Test App</h1>
            <p><span>Hola {user.name},</span>{user.score ? 'Bienvenido nuevamente, si deseas comenzar la evaluación conigtiva has click en Comenzar. También puedes ver los resultados de tu última evaluación dando click en Ver Resultados.' : 'Vas a comenzar una evaluación congnitiva general.'}</p>
            {!user.score && <p>Tardarás unos 15 minutos en completarla. Busca un lugar tranquilo y has click en Comenzar.</p>}
            <div>
                <button>Comenzar</button>
                {user.score && <button>Últimos resultados</button>}
            </div>
        </>
    )
}

export default Home