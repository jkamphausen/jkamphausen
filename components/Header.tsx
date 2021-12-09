import Link from 'next/link'
import React, { FunctionComponent } from 'react'

import styles from '../styles/Base.module.css'

type Props = {
  // posts: readonly RedditPost[]
  // subreddit: string
}

const Header: FunctionComponent<Props> = ({ }) => {
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
}

export default Header
