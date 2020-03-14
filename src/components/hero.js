import React from 'react'

import styles from './hero.module.css'

export default ({data}) => (
  <div className={styles.hero}>
    <h3 className={styles.heroHeadline}>{data.name}</h3>
    <p>{data.shortBio.shortBio}</p>
  </div>
)
