import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from '@/styles/Logo.module.css'

export default function Logo () {
  const router = useRouter()

  const handleClick = e => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <>
      <div onClick={handleClick}>
        <center>
          <Image
            src='/logo-taxiapp.png'
            alt='logo'
            width={165}
            height={120}
            style={{ cursor: 'pointer' }}
          />
        </center>
        <h1 className={styles.titleLogo}>
          TAXIS ORIENTE
        </h1>
      </div>
    </>
  )
}
