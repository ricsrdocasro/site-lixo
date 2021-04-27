import Head from 'next/head';
import styles from './sobre.module.scss';


export default function Sobre() {
    return (
        <div className={styles.sobre}>
            <Head>
                <title>Sobre</title>
            </Head>
            <p>Esse site horrível foi exclusivamente desenvolvido para treinar desenvolvimento em Front-End, se você for um contratante por favor veja a aba portfólio</p>
        </div>
    )
}