import React from 'react'
import * as styles from './introtext.module.css'
import BlockContent from './block-content'

const IntroText = (props) => {
  return (
    <div className={styles.introtext}>
      <BlockContent blocks={props.txt || []} />
    </div>
  )
}

export default IntroText
