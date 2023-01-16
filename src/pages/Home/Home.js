//CSS
import styles from './Home.module.css'

import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'


// Components
import PostDetail from '../../components/PostDetail'

const Home = () => {

  const [query, setQuery] = useState("")
  const {documents: posts, loading} = useFetchDocuments("posts")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(query){
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <div>
      <div className={styles.search}>
      <h1>TECH<span className={styles.spanblog}>BLOG</span></h1>
      <p>Seu Blog De Tecnologia</p>
      <form className={styles.form_home} onSubmit={handleSubmit}>
        <input type="text" placeholder='Busque Por Tags' onChange={(e) => setQuery(e.target.value)}/>
        <button className={styles.home_btn}>Pesquisar</button>
      </form>
      </div>

       
      <div className={styles.posts_home}>
      {loading && <p>CARREGANDO...</p>}
        <h1>POSTS PUBLICADOS</h1>
        
        {!posts && posts === 0 && ( 
          <div>
            <p>Não Temos Nenhum Posts</p>
            <Link to="/posts/create" className={styles.link_home}>Criar Primeiro Posts</Link>
          </div>
        )}

        
        {posts && posts.map((post) => (
        <PostDetail key={post.id} post={post}/>
        ))}
        
      </div>
    </div>
  )
}

export default Home