import { Main } from "../components/main/main";

const Home = (props) => {
  const homep = props.items;
  const setData = props.setData;
  const like = props.like;
  const setLike = props.setLike;
  const selectPagep = props.selectPage;
  const postsPerPagep = props.postsPerPage;
  const setSelectPage = props.setSelectPage;
  const dataForSearching = props.dataForSearching;

  return <Main
    homeprops={homep}
    setData={setData}
    dataForSearching={dataForSearching}
    selectPage={selectPagep}
    postsPerPage={postsPerPagep}
    setSelectPage={setSelectPage}
  />;
};

export default Home;
