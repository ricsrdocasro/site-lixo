import Image from 'next/image';
import { api } from '../services/api';
import styles from './home.module.scss';
import Link from 'next/link';

export default function Home() {
  return(
      <div className={styles.homepage}>
        <Link href={"/batata"}>
          <button type="button">
            <img src="/batatasitelixo.png"/>
          </button>
        </Link>
          <button type="button">
            <img src="/sobresitelixo.png"/>
          </button>
          <button type="button">
            <img src="/capitaosovieticositelixo.png"/>
          </button>
          <button type="button">
            <img src="/portfoliositelixo.png"/>
          </button>
          <button type="button">
            <img src="/sourcecodesitelixo.png"/>
          </button>
      </div>
    ) 
}