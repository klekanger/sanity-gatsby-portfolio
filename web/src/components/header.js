import { Link } from 'gatsby'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './header.module.css'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  // Get portrait image
  const data = useStaticQuery(graphql`
    query {
      portraitImage: file(relativePath: { eq: "kurt-lekanger-transparent.webp" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link className={styles.logo} to="/">
            <span className={styles.logoColor1}>{'{'} kurt_</span>
            <span className={styles.logoColor2}>lekanger {'}'}</span>
          </Link>

          <motion.div
            className={styles.portraitContainer}
            initial={{ y: -250, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 20,
            }}
          >
            <Link className={styles.portrait} to="/">
              <Img fluid={data.portraitImage.childImageSharp.fluid} />
            </Link>
            <div className={styles.navMenu}>
              <a href="https://linkedin.com/in/lekanger">LinkedIn</a> –
              <a href="https://github.com/klekanger">Github</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Header
