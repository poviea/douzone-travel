import { Link } from "react-router-dom";
import styles from "./sight.module.css";


export const Sight = ({data}) => {
  return (
    <div>
      <div className={styles.sight}>
        <Link to={`/detail/${data.UC_SEQ}`}>
          <div className={styles.sight_image}>
            <img src={data.MAIN_IMG_THUMB} alt="sight" />
            {/*<img src="https://www.visitbusan.net/uploadImgs/files/cntnts/20191222164810529_ttiel" alt="product" />*/}
          </div>
        </Link>
        <div className={styles.gu}>
          <span>{data.GUGUN_NM}</span>
          {/* <span>{items.GUGUN_NM}</span> */}
        </div>

        <div className={styles.sight_name}>
          <span>{data.MAIN_TITLE}</span>
        </div>

        <div className={styles.sight_subtitle}>
          <span className={styles.subtitle}>{data.SUBTITLE}</span>
          {/* <span className={styles.unit}></span> */}
        </div>
      </div>

    </div>
  );

};
