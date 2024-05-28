import Link from "next/link";
import styles from './index.module.css';

export default function Home() {
  const items = ['about', 'backdrop', 'container', 'drawer', 'accordion', 'paper', 'card', 'appbar']
  return (
    <div className={styles.shitter}>
      Hello World.{" "}
      {
        items.map((it) => {
          return <>
            <Link href={`/${it}`} key={it}>
              {it}
            </Link>
            </>
        })
      }
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <Link href='test' style={{textTransform: 'uppercase'}}>
        My test
      </Link>
      <Link href='proposed' style={{textTransform: 'uppercase'}}>
        My shit
      </Link>
      </div>
    </div>
  );
}
