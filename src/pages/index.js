import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { signIn } from 'next-auth/react'

import styles from '@/styles/Login.module.css'

export default function Login () {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Iniciar sesión | Taxi Orientes S.A.S</title>
        <link rel='icon' href='/logo-taxiapp.png' />
      </Head>

      <div className={styles.containerApp}>
        <section className={styles.containerLogin}>
          <center>
            <Image
              src='/logo-taxiapp.png'
              alt='logo'
              width={165}
              height={120}
              className={styles.imageLogo}
            />
          </center>
          <h1 className={styles.titleLogo}>
            TAXIS ORIENTE
          </h1>
          <button
            className={styles.buttonLogin}
            onClick={() => router.push('/usuario-cliente')}
          >
            Registrarse
          </button>

          <button
            className={styles.buttonLogin}
            onClick={async () => {
              await signIn('google')
            }}
          >
            Iniciar Sesión
          </button>
        </section>
      </div>
    </>
  )
}
