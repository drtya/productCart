'use client'
import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>LOGO</div>
      <ol className={styles.headerList}>
        <li className={styles.headerListEl}>
          <Link href={"/products"}>Products</Link>
        </li>
        <li className={styles.headerListEl}>
          <Link href={"/cart"}>Cart</Link>
        </li>
      </ol>
    </header>
  );
};

export default Header;
