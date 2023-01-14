import React, { useEffect, useState } from "react";
import "../styles/common.css";
import Tr from "./Tr";

const DATASET = [
  {
    DummyDataId: 1,
    data: [
      {
        id: 1,
        name: "비트코인",
        price: 999999999,
        numbersOfCoin: 100,
        numbersOfLike: 192,
      },
      {
        id: 2,
        name: "이더리움",
        price: 190000000,
        numbersOfCoin: 199,
        numbersOfLike: 1722,
      },
      {
        id: 3,
        name: "웨이브",
        price: 999999999,
        numbersOfCoin: 1928384,
        numbersOfLike: 99181,
      },
    ],
  },
  {
    DummyDataId: 2,
    data: [
      {
        id: 1,
        name: "엑시인피니티",
        price: 12345,
        numbersOfCoin: 1010,
        numbersOfLike: 19222,
      },
      {
        id: 2,
        name: "이오스",
        price: 525124,
        numbersOfCoin: 1235,
        numbersOfLike: 125,
      },
      {
        id: 3,
        name: "에이다",
        price: 7345724,
        numbersOfCoin: 34236,
        numbersOfLike: 2314,
      },
    ],
  },
  {
    DummyDataId: 3,
    data: [
      {
        id: 1,
        name: "리플",
        price: 51523473,
        numbersOfCoin: 3456,
        numbersOfLike: 23416,
      },
      {
        id: 2,
        name: "이더리움클래식",
        price: 43677,
        numbersOfCoin: 437346,
        numbersOfLike: 673664,
      },
      {
        id: 3,
        name: "도지",
        price: 23464756,
        numbersOfCoin: 457425,
        numbersOfLike: 5744,
      },
    ],
  },
];

const Table = ({ windowId }) => {
  const [dummyData, setDummyData] = useState([]);
  useEffect(() => {
    const findData = DATASET.find((el) => el.DummyDataId === windowId);
    setDummyData(findData.data);
  }, [windowId]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>코인</th>
            <th>가격</th>
            <th>수량</th>
            <th>좋아요</th>
            <th>수정</th>
          </tr>
        </thead>
        <Tr DummyData={dummyData}></Tr>
      </table>
    </div>
  );
};

export default Table;
