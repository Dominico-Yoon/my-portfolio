import Link from "next/link";
import styles from "./globals.module.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <nav className={styles.linkContainer}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/counterApp" className={styles.link}>
            CounterApp
          </Link>
          <Link href="/todoApp" className={styles.link}>
            TodoApp
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
