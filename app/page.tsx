import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <h1>성장하는 개발자 윤관입니다.</h1>
      <div className={styles.linkContainer}>
        <div>
          <h2>카운터 앱</h2>
          <Link href="/counterApp" className={styles.link}>
            <div className={styles.linkImage}>
              <Image
                src="/counterApp.png"
                alt="counterApp"
                width={250}
                height={250}
              />
            </div>
          </Link>
        </div>

        <div>
          <h2>TODO 앱</h2>
          <Link href="/todoApp" className={styles.link}>
            <div className={styles.linkImage}>
              <Image
                src="/todoApp.png"
                alt="todoApp"
                width={250}
                height={250}
              />
            </div>
          </Link>
        </div>

        <div>
          <h2>게시판 앱</h2>
          <Link href="/postApp" className={styles.link}>
            <div className={styles.linkImage}>
              <Image
                src="/postApp.png"
                alt="postApp"
                width={250}
                height={250}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
