import React from "react";

const Td = ({ item }) => {
  const editHandler = (item) => {
    alert(
      `${item.name}의 가격은 ${item.price}원 이며 현재 ${item.numbersOfCoin} 개 보유중 입니다. `
    );
  };
  return (
    <tr>
      <th>{item.name}</th>
      <th>{item.price}</th>
      <th>{item.numbersOfCoin}</th>
      <th>{item.numbersOfLike}</th>
      <th>
        {" "}
        <button onClick={() => editHandler(item)}>정보</button>
      </th>
    </tr>
  );
};

export default Td;
