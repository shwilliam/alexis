import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import IconIn from './icons/linkedin'
import IconTwitter from './icons/twitter'
import IconInstagram from './icons/instagram'
import styles from './socials.module.css'

export default ({small = false}) => {
  const {allContentfulAuthor} = useStaticQuery(graphql`
    query SocialsQuery {
      allContentfulAuthor(
        filter: {contentful_id: {eq: "3n9x5NFplvt5Hb9QVo6pN1"}}
      ) {
        edges {
          node {
            linkedIn
            twitter
            instagram
          }
        }
      }
    }
  `)
  return (
    <ul className={small ? styles.socialsNavSmall : styles.socialsNav}>
      <li className={styles.socialsNavItem}>
        <a
          href={allContentfulAuthor.edges[0].node.linkedIn}
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconIn />
        </a>
      </li>
      <li className={styles.socialsNavItem}>
        <a
          href={allContentfulAuthor.edges[0].node.twitter}
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconTwitter />
        </a>
      </li>
      <li className={styles.socialsNavItem}>
        <a
          href={allContentfulAuthor.edges[0].node.instagram}
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconInstagram />
        </a>
      </li>
    </ul>
  )
}
