import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import Editais from './pages/editais/Editais'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'
import PrivateRoute from './components/layout/PrivateRoute'

function App() {
  return (
    <Routes>
      {/* Rotas públicas com navbar e footer */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="editais" element={<Editais />} />
        <Route path="login" element={<Login />} />

        {/* Rotas protegidas — apenas usuários autenticados */}
        <Route
          path="admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
