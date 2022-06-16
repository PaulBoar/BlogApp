import styles from './404.module.css'

function NotFound() {
  return (
    <div className={styles['not-found']}>
     <div className={styles.info}>Page Not Found</div>
    </div>
  )
}

export default NotFound