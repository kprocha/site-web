// Rota protegida — requer autenticação (JWT)
// Consome: usuarioRotas.js, postagemRotas.js, editalRotas.js, uploadRotas.js

import { useAuth } from '../../context/AuthContext'

function Admin() {
  const { usuario } = useAuth()

  return (
    <section>
      <h1>Painel Administrativo</h1>
      {usuario && <p>Olá, {usuario.nome || usuario.email}!</p>}
      <p>Gerencie postagens, editais e usuários do site da SIF Soft.</p>
      {/* TODO: CRUD de postagens via postagemRotas.js */}
      {/* TODO: CRUD de editais via editalRotas.js */}
      {/* TODO: Upload de imagens via uploadRotas.js */}
      {/* TODO: Gerenciamento de usuários via usuarioRotas.js */}
    </section>
  )
}

export default Admin
