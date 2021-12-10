/* Header.tsx component */

// import NextPage generic type
import { NextPage } from "next";

import Link from 'next/link'
import styles from '../../styles/Base.module.css'

// Props interface
// with username set to string
interface Props {
  title: string;
}

// Defining NextPage as
// type for Name component
// and defining type for props
const Header: NextPage<Props> = (props) => {
  // using destructuring to get username
  const { title } = props;

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.headerLogo}>
          JKΛMPHΛUS<span className={styles.e}>Ξ</span>N
        </a>
      </Link>
      <nav className={styles.headerNav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  )
};

// export component
export default Header;
