import { graphql } from 'gatsby'
import React from 'react'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/SEO'
import { responsiveTitle1 } from '../components/typography.module.css'
import Layout from '../containers/layout'
import { filterOutDocsWithoutSlugs, mapEdgesToNodes } from '../lib/helpers'

export const query = graphql`
  query ArchivePageQuery {
    projects: allSanityProject(
      limit: 12
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
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
        }
      }
    }
  }
`

const ArchivePage = (props) => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title="Arkiv" />
      <Container>
        <h1 className={responsiveTitle1}>Prosjekter</h1>
        {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} />}
      </Container>
    </Layout>
  )
}

export default ArchivePage
