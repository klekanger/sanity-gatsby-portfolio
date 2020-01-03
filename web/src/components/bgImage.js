import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styles from './bgImage.module.css'

const BgImage = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "background3.webp"}) {
        childImageSharp {
          fluid(maxWidth:2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <Image className={styles.hero} fluid={data.file.childImageSharp.fluid} />
      <div className={styles.content}> {children} </div>
    </>
  )
}

export default BgImage
