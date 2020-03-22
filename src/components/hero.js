import React from 'react'
import {Link} from 'gatsby'

import styles from './hero.module.css'

export default ({data}) => (
  <div className={styles.hero}>
    <Link to="/">
      <h2 className={styles.heroHeadline}>{data.name}</h2>
    </Link>
  </div>
)
