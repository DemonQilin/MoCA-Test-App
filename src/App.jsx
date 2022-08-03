import './App.css'

import { Route, Routes } from 'react-router';
import ProtectedRoute from './components/Security/ProtectedRoute';
import Login from './components/shared/Login/Login';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<ProtectedRoute><h1>This is Home</h1></ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App
