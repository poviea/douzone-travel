import styles from "./Like.module.css";

export default function LikeList({like, onRemove}) {
  
  return (
    <section className={styles.like_list}>
      <input type="checkbox" />
      <div className={styles.like_wrap}>
        <div className={styles.like_image}>
          <img src={like.image} alt="like-img" />
        </div>

        <div className={styles.like_info}>
          <p className={styles.seller_store}>{like.gu}</p>
          <p className={styles.sight_name}>{like.sight_name}</p>
          <p className={styles.tel}>{like.tel}</p>
          <p className={styles.title}>{like.title}</p>
        </div>
      </div>
      <div></div>

      <div className={styles.like_btn_wrap}>
        <button className={styles.btn_submit} onClick={() => onRemove(like.id)}>삭제</button>
      </div>
    </section>
  )
}