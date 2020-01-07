import { Link } from 'gatsby'
import React from 'react'
import { cn, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import posed from 'react-pose';

import styles from './project-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function ProjectPreview(props) {
  const showPinIcon = props.pinned ? (
    <>
      <FontAwesomeIcon icon={faExclamationCircle} /> <span>  </span>
    </>
  )
    : null

  const ImgBox = posed.div({
    hoverable: true,
    pressable: true,
    init: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
      scale: 1.1,
      boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    },
    press: {
      scale: 1.0,
      boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    }
  });

  return (
    <Link className={styles.root} to={`/project/${props.slug.current}`}>
      <ImgBox className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img className={styles.previewImg}
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </ImgBox>
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
