"use client";

import { useEffect, useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState<number>(0);

  // 마운트 시, localstorage에 있는 값 불러오기
  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    if (savedCount !== null) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  // count 상태값이 변하면, localstorage에 저장
  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  const decreaseBtnClick = () => {
    setCount(count - 1);
  };

  const increaseBtnClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={decreaseBtnClick}> - </button>
      <div>{count}</div>
      <button onClick={increaseBtnClick}> + </button>
    </div>
  );
};

export default CounterApp;
