import Head from 'next/head'
import { useRouter } from 'next/router'

import Logo from '@/components/Logo'
import Button from '@/components/Button'

import { FaUserPlus } from 'react-icons/fa'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

import styles from '@/styles/FormDriver.module.css'

export default function FormDriver () {
  const router = useRouter()

  const handleClick = e => {
    e.preventDefault()
    router.push('/formulario-conductor-vehiculo')
  }
  return (
    <>
      <Head>
        <title>Formulario conductor - Taxis Oriente S.A.S</title>
        <link rel='icon' href='/logo-taxiapp.png' />
      </Head>
      <div className={styles.container}>
        <center>
          <Logo />
          <FaUserPlus
            className={styles.iconUser}
          />
        </center>
        <center>
          <div className={styles.content}>
            <form action='#'>
              <div className={styles.userDetails}>
                <div className={styles.inputBox}>
                  <span className={styles.details}>Nombres</span>
                  <input type='text' required />
                </div>
                <div className={styles.inputBox}>
                  <span className={styles.details}>Apellidos</span>
                  <input type='text' required />
                </div>
                <div className={styles.inputBox}>
                  <span className={styles.details}>Departamento</span>
                  <input type='text' required />
                </div>
                <div className={styles.inputBox}>
                  <span className={styles.details}>Ciudad</span>
                  <input type='text' required />
                </div>
                <div className={styles.inputBox}>
                  <span className={styles.details}>Teléfono</span>
                  <input type='text' equired />
                </div>
                <div className={styles.inputBox}>
                  <span className={styles.details}>Documento</span>
                  <input type='text' required />
                </div>
                <div className={styles.inputBox}>
                  <span className={styles.details}>Fecha de nacimiento</span>
                  <input type='date' required />
                </div>
                <div className={styles.inputBox}>
                  <span className={styles.details}>Correo electrónico</span>
                  <input type='email' required />
                </div>
                <div className={styles.inputBox}>
                  <span className={styles.details}>Contraseña</span>
                  <input type='password' required />
                </div>
                <div className={styles.inputBox}>
                  <span className={styles.details}>Repetir contraseña</span>
                  <input type='password' required />
                </div>
              </div>

              <div className={styles.button}>
                <center>
                  <Button onClick={handleClick}>
                    Siguiente
                    <IoIosArrowDroprightCircle className={styles.arrow} />
                  </Button>
                </center>
              </div>
            </form>
          </div>
        </center>
      </div>
    </>
  )
}
