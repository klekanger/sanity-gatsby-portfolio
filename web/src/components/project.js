import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'
import { DiscussionEmbed } from 'disqus-react'

import styles from './project.module.css'

function Project(props) {
  const {
    _rawBody,
    title,
    slug,
    categories,
    mainImage,
    members,
    publishedAt,
    relatedProjects,
  } = props

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      url: `${props.url}/project/${slug.current}`,
      identifier: slug.current,
      title: title,
    },
  }

  return (
    <article className={styles.root}>
      {props.mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <article className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.bodyText}>
              {_rawBody && <BlockContent blocks={_rawBody || []} />}
            </span>
          </article>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'DD.MM.YYYY').toLowerCase()}
              </div>
            )}
            {members && members.length > 0 && <RoleList items={members} title="Forfatter" />}
            {categories && categories.length > 0 && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Emner</h3>
                <ul>
                  {categories.map((category) => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {relatedProjects && relatedProjects.length > 0 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Relaterte artikler</h3>
                <ul>
                  {relatedProjects.map((project) => (
                    <li key={`related_${project._id}`}>
                      {project.slug ? (
                        <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
        <Link className={styles.hplink} to="/">
          Gå til forsiden
        </Link>

        <DiscussionEmbed className={styles.disqus} {...disqusConfig} />
      </Container>
    </article>
  )
}

export default Project
