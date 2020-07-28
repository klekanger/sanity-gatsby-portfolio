import { Link } from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'

import styles from './project-preview-grid.module.css'

function ProjectPreviewGrid(props) {
  // Re-arrange articles, with pinned articles first
  const pinnedNodes = props.nodes.filter((node) => node.pinned)
  const unPinnedNodes = props.nodes.filter((node) => !node.pinned)

  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {pinnedNodes &&
          pinnedNodes.map((node) => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
        {unPinnedNodes &&
          unPinnedNodes.map((node) => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Gå til arkivet »</Link>
        </div>
      )}
    </div>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
}

export default ProjectPreviewGrid
