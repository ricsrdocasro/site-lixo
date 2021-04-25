import styles from "./styles.module.scss";
import Link from 'next/link' 

export function Header() {
    return (
        <header className={styles.HeaderContainer}>
            <Link href="/">
                <button type="button">
                    <img src="/sitelixologo.png" alt="Site Lixo logo"/>
                </button>
            </Link>
        </header>
    ); 
}