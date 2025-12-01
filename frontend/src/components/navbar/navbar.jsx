import { Link, useLocation } from 'react-router-dom';
import styles from './navbar.module.css';
import { FaRegUser } from "react-icons/fa";
import { Drawer } from '@mui/material';
import { TiThMenu } from "react-icons/ti";
import { useState, useEffect } from 'react';

export default function Navbar () {
    
    const location = useLocation();
    const currentPath = location.pathname;

    const [openMenu , setOpenMenu] = useState(false);
    // 1. Estado para rastrear a última posição de rolagem
    const [lastScrollY, setLastScrollY] = useState(0); 
    // 2. Estado para controlar a visibilidade da Navbar (true = visível, false = oculta)
    const [showNavbar, setShowNavbar] = useState(true); 

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    // Função que verifica a direção da rolagem e atualiza o estado de visibilidade
    const controlNavbar = () => {
        // Se a rolagem atual for maior que a anterior (rolando para baixo) E se a rolagem for maior que 100px:
        // O valor '100' é um buffer para que o menu não desapareça imediatamente ao iniciar a rolagem.
        if (typeof window !== 'undefined' && window.scrollY > lastScrollY && window.scrollY > 100) {
            // Rolar para baixo - Ocultar Navbar
            setShowNavbar(false); 
        } 
        // Se a rolagem atual for menor que a anterior (rolando para cima) OU se a rolagem estiver perto do topo (abaixo de 100px):
        else if (typeof window !== 'undefined' && window.scrollY < lastScrollY || window.scrollY <= 100) {
            // Rolar para cima - Mostrar Navbar
            setShowNavbar(true);
        }
        
        // Atualiza a última posição de rolagem
        setLastScrollY(window.scrollY); 
    };

    // Efeito para adicionar e remover o event listener de rolagem
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // Cleanup function: remove o listener quando o componente é desmontado
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]); // Dependência em lastScrollY para garantir que a comparação seja sempre precisa.
    
    const isNavLinkActive = (path) => {
    
        if (path === '/') {
            return currentPath === path;
        }
        
        return currentPath.startsWith(path);
    };

    const getLinkClassName = (path) => {
        let className = styles.navLink;
        if (isNavLinkActive(path)) {
            className = `${className} ${styles.navLinkSelect}`;
        }
        return className;
    };

    return (
        // 3. Adicionar a classe condicional `navbarHidden` baseada no estado `showNavbar`
        <nav className={`${styles.navbarContainer} ${showNavbar ? '' : styles.navbarHidden}`}>
            <Link to={'/'}><img src="/img/logo/logo.png" alt="logo Serviçosjá"/></Link>

            <div className={styles.navLinkContainer}>
                
                <Link 
                    className={getLinkClassName('/')} 
                    to={'/'}
                >
                    Inicio
                </Link>
                <Link 
                    className={getLinkClassName('/services')} 
                    to={'/services'}
                >
                    Serviços
                </Link>
                <Link 
                    className={getLinkClassName('/about')} 
                    to={'/about'}
                >
                    Sobre nós
                </Link>
                <Link 
                    className={getLinkClassName('/plans')} 
                    to={'/plans'}
                >
                    Planos
                </Link >
                <Link to={'/login'} className={styles.loginButton}> 
                    <FaRegUser className={styles.icon} /> Entrar
                </Link>

                    
            </div> 

            <div className={styles.MobileNavbarLinksContainer}>
                <TiThMenu className={styles.navbarIcons} onClick={handleOpenMenu} />                    
            </div>

            <Drawer
                anchor='right'
                open={openMenu}
                onClose={handleOpenMenu}>
                        
                <div className={styles.drawer}>
                            <Link 
                    className={getLinkClassName('/')} 
                    to={'/'}
                >
                    Inicio
                </Link>
                <Link 
                    className={getLinkClassName('/services')} 
                    to={'/services'}
                >
                    Serviços
                </Link>
                <Link 
                    className={getLinkClassName('/about')} 
                    to={'/about'}
                >
                    Sobre nós
                </Link>
                <Link 
                    className={getLinkClassName('/plans')} 
                    to={'/plans'}
                >
                    Planos
                </Link >
                <Link to={'/login'} className={styles.loginButton}> 
                    <FaRegUser className={styles.icon} /> Entrar
                </Link>
                        </div>
                        
                </Drawer>
        </nav>
    )
}