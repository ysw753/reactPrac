import React from "react";
import Td from "./Td";

const Tr = ({ DummyData }) => {
  return (
    <tbody>
      {DummyData.map((item) => {
        return <Td item={item}></Td>;
      })}
    </tbody>
  );
};

export default Tr;
