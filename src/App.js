import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
// import dummy from "../../db/mockAttraction.json";
// import dummy from "../src/db/mockAttraction.json";
import { useState, useEffect } from "react";
import { Detail } from "./components/detail/Detail";
import { Like } from "./components/like/Like";
import Footer from "./components/Footer/Footer";
import { createStore } from "redux";
import { LoginReducer } from "./reducer/LoginReducer";
import SignUp from "./components/signup/SignUp";
import { Provider } from "react-redux";
import Login from "./components/login/Login";
import { fetchData } from "./api/getItems";

function App() {

  useEffect(() => {
    fetchData()
      .then(data => { setData(data); setDataForSearching(data); });
  }, [])
  

  // const [data, setData] = useState(dummy);
  // const [dataForSearching, setDataForSearching] = useState(dummy)
  const [data, setData] = useState([]);
  const [dataForSearching, setDataForSearching] = useState([]);
  const [like, setLike] = useState([]);
  const [selectPage, setSelectPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);
  const store = createStore(LoginReducer, JSON.parse(localStorage.getItem('users')));

  const [login, setLogin] = useState(false)
  const [login2, setLogin2] = useState("")



  return (
    <BrowserRouter>
      <TopNavigationBar
        data={data}
        setData={setData}
        like={like}
        setSelectPage={setSelectPage}
        dataForSearching={dataForSearching}
        login={login} setLogin={setLogin}
        login2={login2} setLogin2={setLogin2} />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home
            items={data}
            setData={setData}
            selectPage={selectPage}
            postsPerPage={postsPerPage}
            setSelectPage={setSelectPage}
            dataForSearching={dataForSearching}
          />} />
          <Route path="/detail/:id" element={<Detail items={data} like={like} setLike={setLike} />} />
          <Route path="/Like" element={<Like like={like} setLike={setLike} />} />
          <Route path={"/signIn"} element={<SignUp />} />
          <Route path={"/login"} element={<Login login={login} setLogin={setLogin} login2={login2} setLogin2={setLogin2} />} />
        </Routes>
      </Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
