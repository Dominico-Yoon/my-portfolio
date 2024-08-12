"use client";

import { useEffect, useState } from "react";
import styles from "./counterApp.module.css";

const CounterApp = () => {
  const [count, setCount] = useState<number>(() => {
    // localstorage에 있는 값 불러오기
    const savedCount = localStorage.getItem("count");

    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

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

  const countClass = count >= 0 ? styles.positvie : styles.negative;

  return (
    <div className={`${styles.counterApp} ${countClass}`}>
      <h2>카운터</h2>
      <div className={styles.countContainer}>
        <button className={styles.button} onClick={decreaseBtnClick}>
          -
        </button>
        <div className={styles.count}>{count}</div>
        <button className={styles.button} onClick={increaseBtnClick}>
          +
        </button>
      </div>
      <div>{count >= 0 ? <div>양수입니다.</div> : <div>음수입니다.</div>}</div>
    </div>
  );
};

export default CounterApp;
