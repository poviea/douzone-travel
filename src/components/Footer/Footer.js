import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={styles.footer_wrap}>
      <div className={styles.footer}>
        <a className={styles.footer_a} href="http://facebook.com"><img src="images/facebook.png" height="20px" /></a>
        <a className={styles.footer_a} href="http://instagram.com"><img src="images/instagram.png" height="20px" /></a>
        <a className={styles.footer_a} href="http://twitter.com"><img src="images/twitter.png" height="20px" /></a>
        <span className={styles.made_by}>made by <a className={styles.made_by_a} href="https://github.com/ehdgns07">이동훈</a>, <a className={styles.made_by_a} href="https://github.com/parksangmin1">박상민</a>, <a className={styles.made_by_a} href="https://github.com/4ortress">정주현</a>, <a className={styles.made_by_a} href="https://github.com/poviea">김민욱</a></span>
      </div>
    </div>
  )
}
