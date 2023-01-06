import Head from 'next/head'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p><Link href='/gamefield'>Gamefield</Link></p>
        <p><Link href='/homepage'>Homepage</Link></p>
        <p><Link href='/homepage2'>Homepage2</Link></p>
        <p><Link href='/socketio'>SocketIO</Link></p>
      </main>
    </>
  )
}