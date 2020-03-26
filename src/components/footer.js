import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import IconIn from './icons/linkedin'
import styles from './footer.module.css'

export default () => {
  const {allContentfulAuthor} = useStaticQuery(graphql`
    query FooterQuery {
      allContentfulAuthor(
        filter: {contentful_id: {eq: "3n9x5NFplvt5Hb9QVo6pN1"}}
      ) {
        edges {
          node {
            linkedIn
          }
        }
      }
    }
  `)
  return (
    <div className={styles.footer}>
      <ul className={styles.footerNav}>
        <li className={styles.footerNavItem}>
          <a
            href={allContentfulAuthor.edges[0].node.linkedIn}
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconIn />
          </a>
        </li>
      </ul>
    </div>
  )
}
