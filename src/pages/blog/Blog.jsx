// Consome: GET /postagens e GET /comentarios
// Referência backend: postagemRotas.js, comentarioRotas.js

function Blog() {
  return (
    <section>
      <h1>Blog</h1>
      <p>Aqui serão listadas as postagens da SIF Soft.</p>
      {/* TODO: buscar postagens via GET /postagens */}
      {/* TODO: exibir comentários de cada postagem via GET /comentarios/:postagemId */}
    </section>
  )
}

export default Blog
