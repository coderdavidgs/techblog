import { NavLink } from "react-router-dom";

import { useAuthentication } from '../hooks/useAuthentication'

import { useAuthValue } from '../context/AuthContext'

//css
import styles from './Navbar.module.css'

const NavBar = () => {
    const {user} = useAuthValue()
    const {logout} = useAuthentication()


  return (
    <nav className={styles.nav_container}>
        <NavLink to="/" className={styles.nav_logo}>
            <img src="../../img/logo.png" alt="" /> Tech<span>Blog</span>
        </NavLink>

        <ul>
            <li>
                <NavLink to="/" className={styles.nav_link}>Home</NavLink>
            </li>

            <li>
                <NavLink to="/about" className={styles.nav_link}>Sobre</NavLink>
            </li>

           {!user && (
            <>
                 <li>
                <NavLink to="/login" className={styles.nav_link}>Entrar</NavLink>
                </li>

                <li>
                <NavLink to="/register" className={styles.nav_link}>Cadastrar</NavLink>
                </li>
            
            </>
           )}
           {user && (
            <>
                <li>
                <NavLink to="/posts/create" className={styles.nav_link}>Criar Post</NavLink>
                </li>

                <li>
                <NavLink to="/dashboard" className={styles.nav_link}>Dashboard</NavLink>
                </li>
       
            </>
           )}
           {user && (
            <li>
                <button onClick={logout} className={styles.btn_nav}>Sair</button>
            </li>
           )}
        </ul>
    </nav>
  )
}

export default NavBar