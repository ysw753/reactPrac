import React from "react";

const Td = ({ item }) => {
  return (
    <tr>
      <th>{item.name}</th>
      <th>{item.price}</th>
      <th>{item.numbersOfCoin}</th>
      <th>{item.numbersOfLike}</th>
      <th>수정</th>
    </tr>
  );
};

export default Td;
