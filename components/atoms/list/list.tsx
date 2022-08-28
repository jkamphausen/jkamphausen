/* list.tsx atom */
import * as React from 'react';

import styles from './list.module.css'

interface Props {
  children: React.ReactNode,
  ordered?: boolean,
}

export default function List({ children, ordered }: Props) {
  if (ordered) return (
    <ol className={styles.list}>
      {children}
    </ol>
  )
  else return (
    <ul className={styles.list}>
      {children}
    </ul>
  )
}
