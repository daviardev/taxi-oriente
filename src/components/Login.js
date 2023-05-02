import Head from 'next/head'
import { useRouter } from 'next/router'

import { signIn } from 'next-auth/react'

import Logo from '@/components/Logo'

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
          <Logo />
          <br /> <br /> <br /> <br /> <br />
          <button
            className={styles.buttonLogin}
            onClick={() => router.push('/usuario-cliente')}
          >
            Registrarse
          </button>

          <button
            className={styles.buttonLogin}
            onClick={async () => await signIn('google')}
          >
            Iniciar Sesión
          </button>
        </section>
      </div>
    </>
  )
}
