import Head from 'next/head';
import styles from './capitaosovietico.module.scss';

export default function capitaosovietico() {
    return (
        <div className={styles.capitaosovietico}>
            <Head>
                <title>Capitão Soviético</title>
            </Head>
            <div className={styles.imagem}>
                <img src="/capitao-sovietico.png" alt="Capitão soviético com um machado, sem camisa, boné do MST e um escudo com a foice e o martelo"/>
            </div>
            <ul>
                <h1>
                    Capitão soviético
                </h1>
                <p>
                    O grande capitão soviético foi idealizado por mim e meus colegas no segundo ano do ensino médio, ninguém no momento pensou na proporção que tomaria, a versão exposta ao lado é uma reinterpretação feita por João Vitor Dahlke, o original não foi achado porém pode ser descrito: era um homem lutando contra o capitalismo com sua capa vermelha.
                </p>
            </ul>
        </div>
    )
}