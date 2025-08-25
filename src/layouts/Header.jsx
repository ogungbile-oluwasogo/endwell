import { useEffect, useState } from "react";
import styles from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = () => {

    const [isMobileMenuOPen, setIsMobileMenuOPen] = useState(false);

    const toggleMenuNav = () => setIsMobileMenuOPen(!isMobileMenuOPen);

   useEffect(() => {
        if (isMobileMenuOPen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isMobileMenuOPen]);
    

  return (
    <div className={styles.headerWrapper}>
        <div className={styles.container}>
            <div>
                <img src="/images/endwell-logo.jpg" alt="" />
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink to="/" 
                        className={({ isActive }) => isActive ? `${styles.active}` : ''}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us" 
                        className={({ isActive }) => isActive ? `${styles.active}` : ''}>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/investments" 
                        className={({ isActive }) => isActive ? `${styles.active}` : ''}>
                            Investments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us" 
                        className={({ isActive }) => isActive ? `${styles.active}` : ''}>
                            Contact
                        </NavLink>
                    </li>
                    <li><a href="">Latest update</a></li>
                </ul>
            </div>
            <div className={styles.login}>
                <a href="">
                    <span>Login</span>
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7778 0H2.22222C0.988889 0 0 0.988889 0 2.22222V6.66667H2.22222V2.22222H17.7778V17.7778H2.22222V13.3333H0V17.7778C0 18.3671 0.234126 18.9324 0.650874 19.3491C1.06762 19.7659 1.63285 20 2.22222 20H17.7778C18.3671 20 18.9324 19.7659 19.3491 19.3491C19.7659 18.9324 20 18.3671 20 17.7778V2.22222C20 1.63285 19.7659 1.06762 19.3491 0.650874C18.9324 0.234126 18.3671 0 17.7778 0ZM7.86667 13.9778L9.44444 15.5556L15 10L9.44444 4.44444L7.86667 6.01111L10.7444 8.88889H0V11.1111H10.7444L7.86667 13.9778Z" fill="white"/>
                        </svg>
                    </span>
                </a>
            </div>
            <div className={styles.mobileToggleMenu} onClick={toggleMenuNav}>
                <div className={`${styles.icon} ${!isMobileMenuOPen ? styles.show : ''}`}>
                    
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H30H4ZM4 17H30H4ZM4 30H30H4Z" fill="white"/>
                    <path d="M4 4H30M4 17H30M4 30H30" stroke="white" strokeWidth="7.83333" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className={`${styles.icon} ${isMobileMenuOPen ? styles.show : ''}`}>
                    
                    <svg height="50" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="white">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                </div>
            </div>
            <div className={`${styles['mobile-nav-overlay']} ${isMobileMenuOPen ? styles.openn : styles.closee}`} onClick={toggleMenuNav}>
                <div className={`${styles.mobileMenu} ${isMobileMenuOPen ? styles.open : styles.close}`}>
                    <nav className={styles.mobileNavLinks}>
                        <NavLink to="/" 
                        className={({ isActive }) => isActive ? `${styles.active}` : ''}>
                           ➤ HOME
                        </NavLink>
                        <NavLink to="/about-us" 
                        className={({ isActive }) => isActive ? `${styles.active}` : ''}>
                           ➤ ABOUT US
                        </NavLink>
                        <NavLink to="/investments" 
                        className={({ isActive }) => isActive ? `${styles.active}` : ''}>
                           ➤ INVESTMENTS
                        </NavLink>
                        <NavLink to="/contact-us" 
                        className={({ isActive }) => isActive ? `${styles.active}` : ''}>
                           ➤ CONTACT US
                        </NavLink>
                    </nav>
                    <div className={styles.mobileLogin}>
                        <a href="">
                            <span>Login</span>
                            <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.7778 0H2.22222C0.988889 0 0 0.988889 0 2.22222V6.66667H2.22222V2.22222H17.7778V17.7778H2.22222V13.3333H0V17.7778C0 18.3671 0.234126 18.9324 0.650874 19.3491C1.06762 19.7659 1.63285 20 2.22222 20H17.7778C18.3671 20 18.9324 19.7659 19.3491 19.3491C19.7659 18.9324 20 18.3671 20 17.7778V2.22222C20 1.63285 19.7659 1.06762 19.3491 0.650874C18.9324 0.234126 18.3671 0 17.7778 0ZM7.86667 13.9778L9.44444 15.5556L15 10L9.44444 4.44444L7.86667 6.01111L10.7444 8.88889H0V11.1111H10.7444L7.86667 13.9778Z" fill="white"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.subContainer}>
            <marquee>
                End-Well Investment Hub Limited is a diversified investment company founded with a bold vision to create sustainable values across multiple high-impact sectors. 
                With initial operations centered in Nigeria and strategic plans to scale across Africa, our company is committed to empowering communities, 
                accelerating development, and delivering measurable returns through value-aligned investments in RealEstate, 
                Industries (e.g., agribusiness, fashion & shoe, textile, healthy water & natural fruit juice… etc.) Healthcare, Education, and, in the nearest future, mineral resources (i.e., Oil & Gas, natural resources and the likes).
            </marquee>
        </div>
    </div>
  )
}

export default Header
