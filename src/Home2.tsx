import React from "react";
import { useSelector } from "react-redux";

const Home2 = () => {
  const bringData = useSelector((state) => state);

  return <>{bringData}</>;
};

export default Home2;
