import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import Comment from "./Comment";
import styled from "styled-components";
export const Detail = ({items, like, setLike}) => {
  const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 0.5em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

  const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
  const {id} = useParams();
  const [ detail, setDetail ] = useState({});

  useEffect(() => {
    setDetail(items.find((data) => data.UC_SEQ === parseInt(id)));
  }, [id]);
 

  const handleLike = () => {
    const likeItem = {
      id: detail.UC_SEQ,
      image: detail.MAIN_IMG_THUMB,
      gu: detail.GUGUN_NM,
      sight_name: detail.MAIN_TITLE,
      tel: detail.CNTCT_TEL,
      title: detail.SUBTITLE,
    };
    setLike([...like, likeItem]);
  };

  return (
    <>
      <main className={styles.main}>
        <section className={styles.detail}>
          <div className={styles.detail_img}>
            <img src={detail.MAIN_IMG_NORMAL} alt="detail" />
          </div>
        </section>
        <section className={styles.detail}>
          <div className={styles.detail_info}>
            <p className={styles.detail_gu}>{detail.GUGUN_NM}</p>
            <p className={styles.detail_name}>{detail.MAIN_TITLE}</p>
            <p className={styles.detail_content}>{detail.TITLE}</p>
            <p className={styles.detail_callnum} style={{fontSize:"17px", marginTop:"30px"}}>연락처 : {detail.CNTCT_TEL}</p>
            
              <a className={styles.detail_link} href={detail.HOMEPAGE_URL} style={{textDecoration:'none', color:'black', fontSize:'17px'}}>{'사이트 바로가기 : ' + detail.HOMEPAGE_URL}</a>
          </div>
          <span>
            <button className={styles.btn} onClick={() => handleLike()}>즐겨찾기</button><br/>
              <p style={{marginTop:"15px", marginBottom:"5px", fontWeight:"bold"}}>&#91; 리뷰 남기기 &#93;</p>
               <div className={styles.comment_wrap}>
                <Comment />
               </div>
              </span>
        </section>
      </main>
    </>
  );
};
