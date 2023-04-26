import Head from 'next/head'
import { useRouter } from 'next/router'

import { FaUserPlus } from 'react-icons/fa'

import Logo from '@/components/Logo'

import styles from '@/styles/UserClient.module.css'

export default function UserClient () {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Inicia como conductor o usuario | Taxi Orientes S.A.S</title>
        <link rel='icon' href='/logo-taxiapp.png' />
      </Head>

      <div className={styles.contentApp}>
        <section className={styles.contentOptionsLogin}>
          <Logo />
          <br /> <br />
          <section className={styles.iconUser} onClick={() => router.push('/formulario-conductor')}>
            <center>
              <FaUserPlus />
              <p className={styles.text}>¿Cómo Conductor?</p>
            </center>
          </section>

          <section className={styles.iconUser}>
            <center>
              <FaUserPlus />
              <p className={styles.text}>¿Cómo Usuario?</p>
            </center>
          </section>
        </section>
      </div>
    </>
  )
}
