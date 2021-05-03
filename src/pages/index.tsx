import Image from 'next/image';
import { api } from '../services/api';
import styles from './home.module.scss';
import Link from 'next/link';
import React from 'react';
import ReactPlayer from "react-player";
import Head from 'next/head';

export default function Home() {
  return(
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <header className={styles.homepage}>
        <Link href={"/pages/batata"}>
          <button type="button">
            <img src="/batatasitelixo.png" alt="Batata"/>
          </button>
        </Link>
        <Link href={"/pages/sobre"}>
          <button type="button">
            <img src="/sobresitelixo.png" alt="Sobre"/>
          </button>
        </Link>
        <Link href={"/pages/capitaosovietico"}>
          <button type="button">
            <img src="/capitaosovieticositelixo.png" alt="Capitão soviético"/>
          </button>
        </Link>
        <Link href={"/pages/portfolio"}>
          <button type="button">
            <img src="/portfoliositelixo.png" alt="Portfólio"/>
          </button>
        </Link>
        <a href={"https://github.com/ricsrdocasro/site-lixo"} rel="noopener noreferrer" target="_blank">
          <button type="button">
            <img src="/sourcecodesitelixo.png" alt="Source code"/>
          </button>
        </a>
      </header>
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          controls={true}
          url="https://www.youtube.com/watch?v=zoOfnXVisTI"
        />
      </div>
    </div>
    ) 
}
