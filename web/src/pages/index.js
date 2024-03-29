import { graphql } from 'gatsby'
import React from 'react'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import IntroText from '../components/introtext'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/SEO'
import Layout from '../containers/layout'
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from '../lib/helpers'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      _rawIntro
    }
    projects: allSanityProject(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
          categories {
            internal {
              content
              description
              ignoreType
              mediaType
            }
            title
          }
          pinned
        }
      }
    }
  }
`

const IndexPage = (props) => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <>
      <Layout>
        <SEO title={site.title} description={site.description} keywords={site.keywords} />
        <Container>
          <IntroText txt={site._rawIntro} />
          {projectNodes && (
            <ProjectPreviewGrid
              title="Siste prosjekter"
              nodes={projectNodes}
              browseMoreHref="/archive/"
            />
          )}
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
