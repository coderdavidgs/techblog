//css
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
        <h3>Um Blog de Tecnologia para acompanhar o avanço do mundo</h3>
        <h4>TechBlog &copy; David Santos - Dez/2022</h4>
    </footer>
  )
}

export default Footer