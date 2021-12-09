import Link from 'next/link'
import React, { FunctionComponent } from 'react'

import styles from '../styles/Base.module.css'

type Props = {
  // posts: readonly RedditPost[]
  // subreddit: string
}

const Footer: FunctionComponent<Props> = ({ }) => {
  return (
    <footer className={styles.footer}>
      ©2021 Julian Kamphausen
    </footer>
  )
}

export default Footer
