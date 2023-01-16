import styles from './Post.module.css'

//hooks
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Post = () => {
    const {id} = useParams()
    const {document: post, loading} = useFetchDocument("posts", id)
  return (
    <div>
        {loading && <p>Carregando...</p>}
        {post && (
            <div className={styles.post}>
                <center>
                <h1 className={styles.hpost}>{post.title}</h1>
                <img src={post.image} alt={post.title} className={styles.image}/>
                </center>
                <p>{post.body}</p>
                <br />
                <h3>TAGS: </h3>
                {post.tags.map((tag) => (
                    <p key={tag} className={styles.tagpost}><span>#</span>{tag}</p>
                ))}
            </div>
        )}
    </div>
  )
}

export default Post