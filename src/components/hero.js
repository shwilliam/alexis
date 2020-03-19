import React from 'react'
import {Link} from 'gatsby'

import styles from './hero.module.css'

export default ({data}) => (
  <div className={styles.hero}>
    <Link to="/">
      <h3 className={styles.heroHeadline}>{data.name}</h3>
    </Link>
  </div>
)
