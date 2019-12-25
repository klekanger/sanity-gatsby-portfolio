import React from 'react'
import styles from './introtext.module.css'

// Using dangerouslySetInnerHTML here for the introtext, to keep it simple
// The introtext can only be edited by someone that has access to Sanity Studio for this site

const IntroText = (props) => {
  return (
    <div className={styles.introtext}>
      <div dangerouslySetInnerHTML={{ __html: props.txt }} />
    </div>
  )
}

export default IntroText
