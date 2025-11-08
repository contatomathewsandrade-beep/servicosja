import {Link} from 'react-router-dom'
import styles from './navbar.module.css'
import { FaRegUser } from "react-icons/fa";

export default function Navbar () {
    return (
        <nav className={styles.navbarContainer}>
            <img src="/img/logo/logo.png" alt="logo Serviçosjá"/>

            <div className={styles.navLinkContainer}>
                <Link className={`${styles.navLink} ${styles.navLinkSelect}`} to={'/home'}>Inicio</Link>
                <Link className={styles.navLink} to={'/services'}>Serviços</Link>
                <Link className={styles.navLink} to={'/'}>Sobre nós</Link>
                <Link className={styles.navLink} to={'/'}>Planos</Link>
                <button> <FaRegUser className={styles.icon} /> Entrar</button>
            </div> 
        </nav>
    )
}