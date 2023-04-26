import Head from 'next/head'

import Logo from '@/components/Logo'

import { FaUserPlus } from 'react-icons/fa'

import styles from '@/styles/FormDriver.module.css'

export default function FormDriver () {
  return (
    <>
      <Head>
        <title>Formulario conductor - Taxis Oriente S.A.S</title>
        <link rel='icon' href='/logo-taxiapp.png' />
      </Head>
      <div className={styles.contentApp}>
        <Logo />
        <FaUserPlus
          className={styles.iconUser}
        />
      </div>
    </>
  )
}
