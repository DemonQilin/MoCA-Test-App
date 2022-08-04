import './App.css'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { setUser } from './store/reducers/user.slice';
import ProtectedRoute from './components/Security/ProtectedRoute';
import Login from './components/shared/Login/Login';
import Loader from './components/shared/Loader/Loader';
import { setLoader } from './store/reducers/loader.slice';

function App() {
  const dispatch = useDispatch();
  const loader = useSelector(store => store.loader);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'));

    if (users) {
      const userKeepLogged = users.find(user => user.keepLogged);
      if (userKeepLogged) dispatch(setUser(userKeepLogged));
    }
    
    setTimeout(() => {
      dispatch(setLoader(false));
    }, 3100);
  }, []);

  return (
    <div className="App">
      {loader && <Loader/>}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<ProtectedRoute><h1>This is Home</h1></ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App;
