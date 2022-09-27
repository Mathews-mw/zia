import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginLayout } from './layouts/LoginLayout';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { useContext } from 'react';
import { UserContext } from './contexts/UsersContext';

export function Router() {
  
  const { loggedIn } = useContext(UserContext)

  return (
    <Routes>
      <Route path='/login' element={<LoginLayout />} />
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}