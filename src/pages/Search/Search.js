//hooks
import PostDetail from "../../components/PostDetail";
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"
import { Link } from "react-router-dom";

import styles from './Search.module.css'
const Search = () => {

    const query = useQuery()
    const search = query.get("q");

    const {documents: posts} = useFetchDocuments("posts", search)
  return (
    <div className={styles.search}>
        <h2 className={styles.results}>Resultados da Busca</h2>
        <div>
            {posts && posts.length === 0 && (
              <>
                <p>NãO Localizamos nenhum post com com sua pesquisa</p>
                <Link to="/" className="btn">RETORNAR PARA O INICIO</Link>
              </>
            )}
            {posts && posts.map((post) => (
                <PostDetail key={post.id} post={post}/>
            ))}
            <Link to="/" className="btn">RETORNAR PARA O INICIO</Link>
        </div>
    </div>
  )
}

export default Search