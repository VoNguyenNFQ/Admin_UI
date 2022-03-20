import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import PrivateRoutes from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import DataTable from './pages/DataTable';
import Login from './pages/Login';

function App() {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log(token);
    if (!localStorage.getItem("token")) {
      navigate('/login');
    }
  }, [token])

  return (
    <div className='App flex'>
      <Routes>
        <Route path='/' element={PrivateRoutes(Dashboard)} />
        <Route path='/data' element={PrivateRoutes(DataTable)} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

