import Head from 'next/head';
import styles from '../styles/Navbar.module.css';

function Header()
{
    return (
        <div className={styles.a}>
            <Head>
                <title>Hotelier</title>
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            </Head>
            <a>Header</a>
        </div>
    )
}

export default Header