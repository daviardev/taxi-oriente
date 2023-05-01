import styles from '@/styles/Button.module.css'

export default function Button ({ children, onClick, disabled }) {
  return (
    <>
      <button className={styles.button} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </>
  )
}
