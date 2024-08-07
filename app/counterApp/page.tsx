"use client";

import { useEffect, useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState<number | null>(null);

  // 마운트 시, localstorage에 있는 값 불러오기
  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    if (savedCount !== null) {
      setCount(parseInt(savedCount, 10));
    } else {
      setCount(0);
    }
  }, []);

  // count 상태값이 변하면, localstorage에 저장
  useEffect(() => {
    if (count !== null) localStorage.setItem("count", count.toString());
  }, [count]);

  const decreaseBtnClick = () => {
    if (count !== null) setCount(count - 1);
  };

  const increaseBtnClick = () => {
    if (count !== null) setCount(count + 1);
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
