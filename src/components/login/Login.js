import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Login.module.css";

function Login({ login2, setLogin2, setLogin }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userReducer = useSelector(state => state);

  const onChangeId = (e) => {
    setUsername(e.target.value);
  }

  const onChangePwd = (e) => {
    setPassword(e.target.value);
  }

  const TryToLogin = () => {
    const users = userReducer;
    // console.log(users[0].username);

    users.map((user) => {

      // console.log(user.username);
      // console.log(user.password);
      // console.log(username === user.username.username);
      // console.log(password === user.password.password);

      if (username === user.username.username) {
        if (password === user.password.password) {
          alert("로그인 성공!")
          setLogin(true);
          setLogin2(username);
          console.log("success");
        }else {
          alert("아이디나 비밀번호가 틀렸습니다.")
        }
      }
    })

  }


  return (
    <div>
      <h1 className={styles.title}>로그인</h1>
      <div className={styles.login_form}>
        <input className={styles.text_field} placeholder={"아이디(이메일계정)"} onChange={onChangeId} />
        <input className={styles.text_field} type={"password"} placeholder={"비밀번호"} onChange={onChangePwd} />
        <div className={styles.check_wrap}>
          <input className={styles.check} type="checkbox" />
          <span className={styles.id_save}>아이디 저장</span>

        </div>
        <button className={styles.submit_btn} onClick={TryToLogin}>로그인</button>
      </div>
    </div>
  )
}

export default Login;