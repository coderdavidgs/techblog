import { Link } from "react-router-dom";

import styles from "./PostDetail.module.css";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>por: {post.createdBy}</p>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <p key={tag} className={styles.ptag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <br />
      <Link to={`/post/${post.id}`} className="btn">
        VER MAIS
      </Link>
    </div>
  );
};

export default PostDetail;
