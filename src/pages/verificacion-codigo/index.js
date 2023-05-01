import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'

import Logo from '@/components/Logo'
import Button from '@/components/Button'
import InputCode from '@/components/InputCode'
import SuccessCheck from '@/components/SuccessCheck'

import { IoIosArrowDroprightCircle } from 'react-icons/io'

import styles from '@/styles/VerificationCode.module.css'

export default function VerificationCode () {
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleClick = e => {
    e.preventDefault()
    router.push('/formulario-conductor-vehiculo')
  }
  return (
    <>
      <Head>
        <title>Código de verificación - Taxis Oriente S.A.S</title>
        <link rel='icon' href='/logo-taxiapp.png' />
      </Head>
      <div className={styles.container}>
        <center>
          <Logo />
        </center>
        <p>Ingresa Código de Verificación</p>

        <InputCode
          length={4}
          loading={loading}
          onComplete={() => {
            setLoading(true)
            setTimeout(() => setLoading(false))
          }}
        />
        <br />
        <div>
          <center>
            <Button onClick={handleClick}>
              Verificar
              <IoIosArrowDroprightCircle className={styles.arrow} />
            </Button>

            <p className={styles.paragraph}>Reenviar código</p>
            <div className={styles.line} />
            <SuccessCheck />
          </center>
        </div>
      </div>
    </>
  )
}
