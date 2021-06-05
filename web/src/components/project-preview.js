import { Link } from 'gatsby'
import React from 'react'
import { cn, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

import * as styles from './project-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function ProjectPreview(props) {
  const showPinIcon = props.pinned ? (
    <>
      <FontAwesomeIcon icon={faExclamationCircle} /> <span> </span>
    </>
  ) : null

  return (
    <Link className={styles.root} to={`/project/${props.slug.current}`}>
      <motion.div
        whileHover={{
          scale: 1.07,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 1.0 }}
        className={styles.leadMediaThumb}
      >
        {props.mainImage && props.mainImage.asset && (
          <img
            className={styles.previewImg}
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </motion.div>
      <h3 className={cn(responsiveTitle3, styles.title)}>
        {showPinIcon}
        {props.title}
      </h3>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </Link>
  )
}

export default ProjectPreview
