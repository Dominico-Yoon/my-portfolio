import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.myInfo}>
        <h1>스펀지 같은 개발자 윤관</h1>
        <li>
          스펀지가 물과 세제를 흡수하여 설거지에 사용하듯, 업무적 지식과 사회
          관계의 좋은점을 흡수하여 실무에 사용하는 개발자 윤관입니다.
        </li>
        <li>
          업무 지식은 퇴근 후 인터넷강의로 흡수하고 사회 관계는 동료들과
          소통하면서 흡수 하겠습니다.
        </li>
        <li>
          보이지 않는 것도 중요하지만, 보이는 것이 더 중요하다 생각하여 프론트
          엔드 개발을 하고 있습니다.
        </li>
        <li>
          JavaScript / TypeScript를 사용하여 React앱을 개발하는 개발자 입니다.
        </li>
        <li>Java, SpringBoot, JPA를 사용하여 API를 개발을 하였습니다.</li>
      </div>
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
