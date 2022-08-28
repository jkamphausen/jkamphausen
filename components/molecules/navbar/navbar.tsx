/* list.tsx atom */
import Link from 'next/link';
import * as React from 'react';

import styles from './navbar.module.css'

interface Props {
  navItems: NavItem[]
}

interface NavItem {
  label: string
  title?: string
  url: string
}

export default function Navbar({ navItems }: Props) {
  return (
    <nav className={styles.nav}>
      {navItems.map((item, i) => (
        <Link key={i} href={item.url}><a title={item.title || item.label}>{item.label}</a></Link>
      ))}
    </nav>
  )
}
