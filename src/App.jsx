import './App.css'
import { useEffect, useState } from 'react';

// Router
import { Route, Routes } from 'react-router';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './store/reducers/user.slice';
import { setLoader } from './store/reducers/loader.slice';

// Components
import ProtectedRoute from './components/shared/ProtectedRoute';
import Login from './components/shared/Login/Login';
import Loader from './components/shared/Loader/Loader';
import Home from './components/Home/Home';
import Test from './components/Test/Test';

function App() {
  const dispatch = useDispatch();
  const loader = useSelector(store => store.loader);
  const [checkUser, setCheckUser] = useState(false);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'));

    if (users) {
      const userKeepLogged = users.find(user => user.keepLogged);
      if (userKeepLogged) dispatch(setUser(userKeepLogged));
    }

    setCheckUser(true);
    
    setTimeout(() => {
      dispatch(setLoader(false));
    }, 3100);
  }, []);

  return (
    <div className="App">
      {loader && <Loader/>}
      {checkUser && (
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/test' element={<ProtectedRoute><Test/></ProtectedRoute>}>
          </Route>
        </Routes>
      )}
    </div>
  )
}

export default App;
