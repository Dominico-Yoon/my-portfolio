import Image from "next/image";
import Link from "next/link";
import styles from "./globals.module.css";

export default function Home() {
  return (
    <div>
      <h1>성장하는 개발자 윤관입니다.</h1>
      <div className={styles.linkContainer}>
        <div>
          <h2>카운터 앱</h2>
          <Link href="/counterApp">
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
          <Link href="/todoApp">
            <div className={styles.linkImage}>
              <Image
                src="/todoApp.png"
                alt="todoApp"
                width={250}
                height={250}
              />
            </div>
          </Link>

          <div>
            <h2>게시판 앱</h2>
            <Link href="/postApp">
              <div className={styles.linkImage}>게시판앱</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
