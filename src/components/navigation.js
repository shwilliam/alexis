import React from 'react'
import {Link} from 'gatsby'
import Socials from './socials'
import styles from './navigation.module.css'

export default () => (
  <nav className={styles.navigationWrapper} role="navigation">
    <div className={styles.navigationContainer}>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/about">
            About{' '}
            <span role="img" aria-label="" className={styles.emoji}>
              🌷
            </span>
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/portfolio">
            Portfolio{' '}
            <span role="img" aria-label="" className={styles.emoji}>
              ✨
            </span>
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog">
            Blog{' '}
            <span role="img" aria-label="" className={styles.emoji}>
              🍓
            </span>
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/contact">
            Contact{' '}
            <span role="img" aria-label="" className={styles.emoji}>
              💌
            </span>
          </Link>
        </li>
      </ul>

      <Socials small />
    </div>
  </nav>
)
