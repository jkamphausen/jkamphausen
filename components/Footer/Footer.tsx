
/* Footer.tsx component */

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
const Footer: NextPage<Props> = (props) => {
  // using destructuring to get username
  const { title } = props;

  return (
    <footer className={styles.footer}>
      ©2021 Julian Kamphausen
    </footer>
  )
}

// export component
export default Footer
