import styles from "./Like.module.css";
import LikeList from "./LikeList";

export const Like = ({ like, setLike }) => {

  const onRemove = (id) => {
    setLike(like.filter((data) => data.id !== id));
  };

  return (
    <>
      <header className={styles.header}>
        <h1>즐겨찾기</h1>
      </header>
      <div>
        <div className={styles.tab_title}>
          <input type="checkbox" />
          <span>관광지 정보</span>
          <span></span>
          <span>즐겨찾기 삭제</span>

          <p>전체선택</p>
        </div>
      </div>
      {
        like.length === 0 ? (
          <div className={styles.like_list_none}>
            <h2>즐겨찾기에 추가한 관광지가 없습니다.</h2>
          </div>
        ) :
          like.map((like, idx) => <LikeList key={idx} like={like} onRemove={onRemove} />)
          }
    </>
  );
};
