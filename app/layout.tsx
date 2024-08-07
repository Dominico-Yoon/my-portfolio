import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/counterApp">CounterApp</Link>
          <Link href="/todoApp">TodoApp</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
