import React from 'react'
import {Link} from 'gatsby'

import styles from './footer.module.css'

export default () => (
  <div className={styles.footer}>
    <ul className={styles.footerNav}>
      <li className={styles.footerNavItem}>
        <Link to="/about">About</Link>
      </li>
      <li className={styles.footerNavItem}>
        <Link to="/blog">Blog</Link>
      </li>
      <li className={styles.footerNavItem}>
        <Link to="/contact">Contact</Link>
      </li>
      <li className={styles.footerNavItem}>
        <Link to="/">???</Link>
      </li>
    </ul>
  </div>
)
