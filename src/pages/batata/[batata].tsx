import styles from './batata.module.scss';
import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../../services/api';
import { useRouter } from 'next/router'


export default function Batata() {
    return (
        <div className={styles.batata}>
            <img src="/batataimagemsitelixo.png"/>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { data } = await api.get(`/batata`)

    return {
        props: {
            data
        }
    }
}
