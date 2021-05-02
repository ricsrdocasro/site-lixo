import Image from 'next/image'
import Link from 'next/link'
import styles from './portfolio.module.scss'

const myLoader = ({ src, width, quality }) => {
    return `https://site-lixo.com/${src}?w=${width}&q=${quality || 75}`
  }

export default function portfolio() {
    return (
        <div className={styles.portfolio}>
            <ul>
                <Link href="https://github.com/ricsrdocasro/video-transcription-bot">
                    <button type="button">
                        <Image 
                            loader={myLoader}
                            className={styles.imageContainer}
                            width={300}
                            height={200}
                            objectFit="cover"
                            src="/closedcapbot.png" 
                            alt="Logo do closed captions"
                        />
                    </button>
                </Link>
                <Link href="https://github.com/ricsrdocasro/video-transcription-bot">
                    <h1>Video Transcription bot</h1>
                </Link>
                <body>@closedcapbot no twitter, pega as últimas menções com vídeo ou em um vídeo e transcreve esse vídeo, usando exclusivamente Python e a API do Twitter</body>
            </ul>
            <ul>
                <Link href="https://github.com/ricsrdocasro/video-transcription-bot">
                    <button type="button">
                        <Image 
                            loader={myLoader}
                            className={styles.imageContainer}
                            width={200}
                            height={150}
                            objectFit="cover"
                            src="/lunarteeslogo.jpg" 
                            alt="Logo do Lunar Tees"
                        />
                    </button>
                </Link>
                <Link href="https://github.com/ricsrdocasro/video-transcription-bot">
                    <h1>Lunar Tees</h1>
                </Link>
                <body>Site de venda de camisetas em desenvolvimento com NextJS</body>
            </ul>
        </div>
    )
}