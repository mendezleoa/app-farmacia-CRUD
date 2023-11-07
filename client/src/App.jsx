import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProdsPage from './pages/prods.jsx';
import RegisterPage from './pages/register.jsx';
import LoginPage from './pages/login.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { ProdsProvider } from './context/ProdsContext.jsx';
import FormularioAct from './formulario-act.jsx'

function App() {
  return (
    <ProdsProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to={'/login'} />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/prods' element={<ProdsPage />} />
              <Route path='/formact/:id' element={<FormularioAct/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ProdsProvider>
  )
}

export default App
