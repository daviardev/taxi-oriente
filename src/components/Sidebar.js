import { FaUserCircle, FaTaxi } from 'react-icons/fa'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'

import styles from '@/styles/Sidebar.module.css'

export default function Sidebar () {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <FaUserCircle />
          <FaTaxi />
          <HiOutlineClipboardDocumentList />
        </div>
      </div>
    </>
  )
}
