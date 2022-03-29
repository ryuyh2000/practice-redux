import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const [text, setText] = React.useState("");

  const dispatch = useDispatch();
  const bringData = useSelector((state) => state);

  const onClick=()=>{
    dispatch({type:'add'})
  }

  return (
    <>
      <div>{bringData}</div>
      <button onClick={onClick}>asdfasdf</button>
    </>
  );
};

export default Home;
