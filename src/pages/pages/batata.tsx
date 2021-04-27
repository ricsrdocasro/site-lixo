import Head from 'next/head';
import styles from './batata.module.scss';


export default function Batata() {
    return (
        <div className={styles.batata}>
            <Head>
                <title>Batata</title>
            </Head>
            <img src="/batataimagemsitelixo.png"/>
        </div>
    )
}

