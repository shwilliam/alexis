import React from 'react'
import {Link} from 'gatsby'

import styles from './article-preview.module.css'

export default ({article}) => (
  <div
    className={styles.preview}
    style={{backgroundColor: article.bg, color: article.color}}
  >
    <Link className={styles.previewLink} to={`/blog/${article.slug}`}>
      <h3 className={styles.previewTitle}>{article.title}</h3>
      <small>{article.publishDate}</small>
    </Link>
  </div>
)
