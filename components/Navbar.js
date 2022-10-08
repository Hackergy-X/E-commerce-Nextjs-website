import Link from 'next/link';
import styles from  '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.container + " container "}>
                <div className={styles.logo}>E-commerce <span className={styles.auth}>(Omar Ghieh)</span></div>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/"><a>Cart</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;