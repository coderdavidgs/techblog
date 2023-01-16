import styles from './Dashboard.module.css'

import { Link } from 'react-router-dom'

//hooks
import {useAuthValue} from '../../context/AuthContext'
import {useFetchDocuments} from '../../hooks/useFetchDocuments'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'


const Dashboard = () => {
  const {user} = useAuthValue()
  const uid = user.id

  const {documents: posts, loading, error} = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts")

  
  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className={styles.dashboard}>
        <h1 className={styles.title}>Seus Posts</h1>

        {!posts &&  (
          <div>
            <p>Não Foi Encontrado nenhuma Postagem</p>
            <Link to="/posts/create">CRIAR PRIMEIRO POST</Link>
          </div>
        )}

        {posts && posts.map((post) => (
            <div key={post.id} className={styles.post}>
              <span>{post.title}</span>
              <span>
                <Link to={`/posts/${post.id}`} className={styles.link_dashboard}>Ver Postagem</Link>
                <Link to={`/posts/edit/${post.id}`} className={styles.link_dashboard}>Editar</Link>
                <button onClick={() => deleteDocument(post.id)} className={styles.dashboard_exclude}>
                  Excluir
                </button>
              </span>
            </div>
        ))}
    </div>
  )
}

export default Dashboard