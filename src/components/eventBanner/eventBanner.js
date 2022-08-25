import styles from "./eventBanner.module.css";

export const EventBanner = () => {
  return (
    <article
      className={styles.banner}
      style={{
        backgroundImage: "url(/images/travel.jpg",
        width: "100%", backgroundSize:"cover"
      }}
    >
      <div className={styles.container}>
        <div className={styles.innercontainer}>
          여행은 정신을<br />&nbsp;&nbsp;&nbsp;&nbsp;다시 젊어지게 하는 샘이다.
        </div>
        <div className={styles.innercontainer2}>
          - 안데르센
        </div>
      </div>
      {/* <div className={styles.right}>
        <img src="images/icon-swiper-2.svg" alt="right" />
      </div> */}
      {/* <div className={styles.left}>
        <img src="images/icon-swiper-1.svg" alt="left" />
      </div> */}
    </article>
  );
};