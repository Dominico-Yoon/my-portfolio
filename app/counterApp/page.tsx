"use client";

import { useEffect, useState } from "react";
import styles from "./counterApp.module.css";

const CounterApp = () => {
  const [count, setCount] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    setIsClient(true);

    if (isClient) {
      const savedCount = localStorage.getItem("count");
      if (savedCount !== null) {
        setCount(parseInt(savedCount, 10));
      }
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("count", count.toString());
    }
  }, [count, isClient]);

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
