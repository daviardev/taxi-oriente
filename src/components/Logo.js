import Image from 'next/image'

import styles from '@/styles/Logo.module.css'

export default function Logo () {
  return (
    <>
      <center>
        <Image
          src='/logo-taxiapp.png'
          alt='logo'
          width={165}
          height={120}
          classname={styles.imageContent}
        />
      </center>
      <h1 className={styles.titleLogo}>
        TAXIS ORIENTE
      </h1>
    </>
  )
}
